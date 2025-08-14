import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getBlogs } from "~/models/blog.server";
import "prismjs/themes/prism-tomorrow.css";
import { getMeta } from "~/utils/seo";
import * as NotionClient from "notion-client";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";

const notion = new NotionClient.NotionAPI();

export const loader = async ({ params }: LoaderArgs) => {
  const blogs = await getBlogs();
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  return json({
    blog,
    recordMap: await notion.getPage(blog?.id),
  });
};

export const meta: V2_MetaFunction = ({ data }) => {
  const { title, slug, description, keywords, thumbnail } = data.blog;

  return getMeta({
    title: `${title}`,
    description: description,
    url: `/blog/${slug}`,
    keywords: keywords.join(","),
    image: thumbnail[0].url,
  });
};

export default function Blog() {
  const { recordMap, blog } = useLoaderData<typeof loader>();
  const { title } = blog;

  return (
    <main className="w-full flex flex-col justify-start items-center p-4">
      <h1 className="text-center font-medium text-2xl lg:text-3xl">{title}</h1>
      <div className="w-full my-8 lg:mb-12">
        <NotionRenderer
          recordMap={recordMap as any}
          fullPage={false}
          darkMode={false}
        />
      </div>
    </main>
  );
}
