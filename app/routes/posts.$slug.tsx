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
  const { title, description } = data.post;

  return [
    { title: `${title} | Ilham Wahabi` },
    {
      name: "description",
      content: description,
    },
  ];
};

export default function PostSlug() {
  const { post, blocks } = useLoaderData<typeof loader>();
  const { title } = post;

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl pb-4">{title}</h1>
      <NotionRenderer blockMap={blocks} />
    </main>
  );
}
