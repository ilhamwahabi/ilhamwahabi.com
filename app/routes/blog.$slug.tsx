import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { NotionRenderer } from "react-notion";
import { getBlocks, getBlogs } from "~/models/blog.server";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { getMeta } from "~/utils/seo";

export const loader = async ({ params }: LoaderArgs) => {
  const blogs = await getBlogs();
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  return json({ blog, blocks: await getBlocks(blog.id) });
};

export const meta: V2_MetaFunction = ({ data }) => {
  const { title, slug, description, keywords, thumbnail } = data.blog;

  return getMeta({
    title: `${title}`,
    description: description,
    url: `/${slug}`,
    keywords: keywords.join(","),
    image: thumbnail[0].url,
  });
};

export default function BlogSlug() {
  const { blog, blocks } = useLoaderData<typeof loader>();
  const { title } = blog;

  return (
    <main className="w-full flex flex-col justify-start items-center p-4">
      <h1 className="my-2 lg:my-8 border-b-2 text-center text-2xl lg:text-3xl pb-2">
        {title}
      </h1>
      <div className="w-full my-8 lg:my-12">
        <NotionRenderer blockMap={blocks} />
      </div>
    </main>
  );
}
