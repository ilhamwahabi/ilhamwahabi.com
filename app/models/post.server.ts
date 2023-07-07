type Post = {
  id: string;
  slug: string;
  title: string;
  keywords: string;
  description: string;
};

const NOTION_WORKER = "https://notion-api.splitbee.io/v1";
const NOTION_PAGE_ID = "16f0a3444a684362a829f42b33db4ff0";

export async function getPosts(): Promise<Array<Post>> {
  return await fetch(`${NOTION_WORKER}/table/${NOTION_PAGE_ID}`).then((res) =>
    res.json()
  );
}

export async function getBlocks(id: string) {
  return await fetch(`${NOTION_WORKER}/page/${id}`).then((res) => res.json());
}
