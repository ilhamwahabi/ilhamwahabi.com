/**
 * Fetches JSON array from the Notion API worker. Returns [] when the worker
 * errors, returns non-JSON, or the payload is not an array — so routes still
 * render instead of crashing SSR.
 */
export async function fetchNotionTable<T>(url: string): Promise<T[]> {
  try {
    const res = await fetch(url)
    const text = await res.text()

    if (!res.ok) {
      console.error(
        `[notion worker] ${res.status} ${res.statusText}`,
        text.slice(0, 300),
      )
      return []
    }

    const data = JSON.parse(text) as unknown
    if (!Array.isArray(data)) {
      console.error('[notion worker] expected JSON array, got', typeof data)
      return []
    }

    return data as T[]
  } catch (e) {
    console.error('[notion worker] fetch failed', e)
    return []
  }
}
