import { fetchNotionTable } from "#/lib/fetch-notion-table";
import { NOTION_WORKER } from "#/const";

export type Blog = {
  id: string;
  slug: string;
  title: string;
  keywords: string[];
  description: string;
  thumbnail?: Array<{ url?: string }>;
};

const NOTION_PAGE_ID = "16f0a3444a684362a829f42b33db4ff0";

export async function getBlogs(): Promise<Array<Blog>> {
  return fetchNotionTable<Blog>(`${NOTION_WORKER}/table/${NOTION_PAGE_ID}`);
}
