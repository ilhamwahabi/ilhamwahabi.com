type Post = {
  slug: string;
  title: string;
};

const NOTION_PAGE_ID = "16f0a3444a684362a829f42b33db4ff0";

export async function getPosts(): Promise<Array<Post>> {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_PAGE_ID}`
  ).then((res) => res.json());
}
