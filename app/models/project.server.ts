import { NOTION_WORKER } from "~/const";

export type Project = {
  id: string;
  name: string;
  preview: string;
  desc: string;
  tech: string;
  repo: string;
  link: string;
};

const NOTION_PAGE_ID = "da578f06d0074d1b8178abc9642abdc9";

export async function getProjects(): Promise<Array<Project>> {
  return await fetch(`${NOTION_WORKER}/table/${NOTION_PAGE_ID}`).then((res) =>
    res.json()
  );
}
