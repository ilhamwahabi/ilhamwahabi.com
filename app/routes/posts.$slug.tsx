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
  const { title, slug, description, keywords, thumbnail } = data.post;

  return [
    // Title
    { title: `${title} | Ilham Wahabi` },
    { property: "og:title", content: `${title} | Ilham Wahabi` },
    { name: "twitter:title", content: `${title} | Ilham Wahabi` },
    { name: "application-name", content: `${title} | Ilham Wahabi` },
    { name: "apple-mobile-web-app-title", content: `${title} | Ilham Wahabi` },

    // Description
    { name: "description", content: description },
    { property: "og:description", content: description },
    { name: "twitter:description", content: description },

    // URL
    { rel: "canonical", href: `https://ilhamwahabi.com/posts/${slug}` },
    { property: "og:url", content: `https://ilhamwahabi.com/posts/${slug}` },
    { name: "twitter:url", content: `https://ilhamwahabi.com/posts/${slug}` },

    // Keywords
    { name: "keywords", content: keywords.join(",") },

    // Image
    { property: "og:image", content: thumbnail[0].url },
    { name: "twitter:image", content: thumbnail[0].url },

    // Others
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@ilhamwahabigx" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "ilhamwahabi" },
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
