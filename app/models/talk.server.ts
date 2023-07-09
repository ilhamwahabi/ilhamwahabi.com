export type Talk = {
  id: string;
  title: string;
  date: string;
  ppt: string;
  tags: string;
  organizer: string;
};

const NOTION_WORKER = "https://notion-api.splitbee.io/v1";
const NOTION_PAGE_ID = "067828ac23fd428f866844c0b0109ab2";

export async function getTalks(): Promise<Array<Talk>> {
  return await fetch(`${NOTION_WORKER}/table/${NOTION_PAGE_ID}`).then((res) =>
    res.json()
  );
}
