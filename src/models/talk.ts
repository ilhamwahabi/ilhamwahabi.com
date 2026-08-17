import { getTableData } from '#/lib/notion-client'

export type Talk = {
  id: string
  title: string
  date: string
  ppt: string
  tags: string
  organizer: string
}

const NOTION_PAGE_ID = '067828ac23fd428f866844c0b0109ab2'

export async function getTalks(): Promise<Array<Talk>> {
  return getTableData<Talk>(NOTION_PAGE_ID)
}
