import { NOTION_WORKER } from "~/const";

type Blog = {
  id: string;
  slug: string;
  title: string;
  keywords: string;
  description: string;
};

const NOTION_PAGE_ID = "16f0a3444a684362a829f42b33db4ff0";

export async function getBlogs(): Promise<Array<Blog>> {
  return await fetch(`${NOTION_WORKER}/table/${NOTION_PAGE_ID}`).then((res) =>
    res.json()
  );
}
