import { getTableData } from '#/lib/notion-client'

export type Blog = {
  id: string
  slug: string
  title: string
  keywords: string[]
  description: string
  thumbnail?: Array<{ url?: string }>
}

const NOTION_PAGE_ID = '16f0a3444a684362a829f42b33db4ff0'

export async function getBlogs(): Promise<Array<Blog>> {
  return getTableData<Blog>(NOTION_PAGE_ID)
}
