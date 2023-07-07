import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { NotionRenderer } from "react-notion";
import { getBlocks, getPosts } from "~/models/post.server";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

export const loader = async ({ params }: LoaderArgs) => {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  return json({ post, blocks: await getBlocks(post.id) });
};

export const meta: V2_MetaFunction = ({ data }) => {
  const { title, description, keywords } = data.post;

  return [
    { title: `${title} | Ilham Wahabi` },
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content: keywords.join(","),
    },
  ];
};

export default function PostSlug() {
  const { post, blocks } = useLoaderData<typeof loader>();
  const { title } = post;

  return (
    <main className="w-full flex flex-col justify-start items-center min-h-screen p-4 bg-[#21292E] !text-white">
      <h1 className="mt-24 mb-8 border-b-2 text-center text-3xl pb-2">
        {title}
      </h1>
      <div className="w-4/5 md:w-2/5 my-16">
        <NotionRenderer blockMap={blocks} />
      </div>
    </main>
  );
}
