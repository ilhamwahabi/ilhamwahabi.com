import { NotionAPI } from 'notion-client'
import type { ExtendedRecordMap } from 'notion-types'

export const notion = new NotionAPI({
  apiBaseUrl: 'https://app.notion.com/api/v3',
  ofetchOptions: {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    },
  },
})

type PropertyValue = Array<Array<string | [string, unknown]>>

function getTextValue(prop: PropertyValue | undefined): string {
  if (!prop) return ''
  return prop.map((segment) => (typeof segment[0] === 'string' ? segment[0] : '')).join('')
}

function getMultiSelectValues(prop: PropertyValue | undefined): string[] {
  const text = getTextValue(prop)
  if (!text) return []
  return text.split(',').map((s) => s.trim())
}

function getFileValue(
  prop: PropertyValue | undefined,
): Array<{ url?: string }> | undefined {
  if (!prop || !prop[0]) return undefined
  const files: Array<{ url?: string }> = []
  for (const segment of prop) {
    if (Array.isArray(segment) && segment[1]) {
      for (const format of segment[1] as Array<[string, string]>) {
        if (format[0] === 'a' && format[1]) {
          files.push({ url: format[1] })
        }
      }
    }
  }
  return files.length > 0 ? files : undefined
}

function getDateValue(prop: PropertyValue | undefined): string {
  if (!prop || !prop[0]) return ''
  for (const segment of prop) {
    if (Array.isArray(segment) && segment[1]) {
      for (const format of segment[1] as Array<
        [string, { type?: string; start_date?: string }]
      >) {
        if (format[0] === 'd' && format[1]?.start_date) {
          return format[1].start_date
        }
      }
    }
  }
  return ''
}

interface SchemaProperty {
  name: string
  type: string
}

interface CollectionWrapper {
  value?: CollectionValue | { value?: CollectionValue }
}

interface CollectionValue {
  schema?: Record<string, SchemaProperty>
}

interface BlockWrapper {
  value?: BlockValue | { value?: BlockValue }
}

interface BlockValue {
  id: string
  type: string
  properties?: Record<string, PropertyValue>
}

interface CollectionQueryResult {
  collection_group_results?: { blockIds?: string[] }
}

function extractTableData<T>(recordMap: ExtendedRecordMap): T[] {
  const collectionId = Object.keys(recordMap.collection || {})[0]
  if (!collectionId) return []

  const collection = recordMap.collection[collectionId] as unknown as CollectionWrapper

  const collectionValue =
    (collection?.value as { value?: CollectionValue })?.value ??
    (collection?.value as CollectionValue)

  const schema = collectionValue?.schema
  if (!schema) return []

  const queryKey = Object.keys(recordMap.collection_query || {})[0]
  if (!queryKey) return []

  const query = recordMap.collection_query![queryKey]
  const viewKey = Object.keys(query || {})[0]
  if (!viewKey) return []

  const blockIds =
    (query[viewKey] as CollectionQueryResult)?.collection_group_results?.blockIds || []

  const results: T[] = []

  for (const blockId of blockIds) {
    const blockWrapper = recordMap.block[blockId] as unknown as BlockWrapper
    if (!blockWrapper) continue

    const blockValue =
      (blockWrapper.value as { value?: BlockValue })?.value ??
      (blockWrapper.value as BlockValue)

    if (!blockValue || blockValue.type !== 'page') continue

    const properties = blockValue.properties
    if (!properties) continue

    const row: Record<string, unknown> = {
      id: blockValue.id,
    }

    for (const [propKey, propDef] of Object.entries(schema)) {
      const propValue = properties[propKey]
      const propName = propDef.name

      switch (propDef.type) {
        case 'title':
          row[propName] = getTextValue(propValue)
          break
        case 'text':
        case 'url':
        case 'email':
        case 'phone_number':
          row[propName] = getTextValue(propValue)
          break
        case 'number': {
          const numText = getTextValue(propValue)
          row[propName] = numText ? parseFloat(numText) : null
          break
        }
        case 'select':
          row[propName] = getTextValue(propValue)
          break
        case 'multi_select':
          row[propName] = getMultiSelectValues(propValue)
          break
        case 'date':
          row[propName] = getDateValue(propValue)
          break
        case 'file':
          row[propName] = getFileValue(propValue)
          break
        case 'checkbox':
          row[propName] = getTextValue(propValue) === 'Yes'
          break
        default:
          row[propName] = getTextValue(propValue)
      }
    }

    if (properties['title']) {
      row['title'] = getTextValue(properties['title'])
    }

    results.push(row as T)
  }

  return results
}

export async function getTableData<T>(pageId: string): Promise<T[]> {
  try {
    const recordMap = await notion.getPage(pageId)
    return extractTableData<T>(recordMap)
  } catch (e) {
    console.error('[notion] getTableData failed', pageId, e)
    return []
  }
}
