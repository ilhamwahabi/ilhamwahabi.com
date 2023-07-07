import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { NotionRenderer } from "react-notion";
import { getBlocks, getPosts } from "~/models/post.server";
import reactNotionStyle from "react-notion/src/styles.css";
import primsjsTheme from "prismjs/themes/prism-tomorrow.css";

export const loader = async ({ params }: LoaderArgs) => {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }

  return json({ slug: params.slug, blocks: await getBlocks(post.id) });
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: reactNotionStyle },
  { rel: "stylesheet", href: primsjsTheme },
];

export default function PostSlug() {
  const { slug, blocks } = useLoaderData<typeof loader>();

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl pb-4">{slug}</h1>
      <NotionRenderer blockMap={blocks} />
    </main>
  );
}
