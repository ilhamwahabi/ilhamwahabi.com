import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { NotionRenderer } from "react-notion";
import { getBlocks, getBlogs } from "~/models/blog.server";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

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
    { rel: "canonical", href: `https://ilhamwahabi.com/blog/${slug}` },
    { property: "og:url", content: `https://ilhamwahabi.com/blog/${slug}` },
    { name: "twitter:url", content: `https://ilhamwahabi.com/blog/${slug}` },

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

export default function BlogSlug() {
  const { blog, blocks } = useLoaderData<typeof loader>();
  const { title } = blog;

  return (
    <main className="w-full flex flex-col justify-start items-center p-4 bg-[#21292E] !text-white">
      <h1 className="my-2 lg:my-8 border-b-2 text-center text-2xl lg:text-3xl pb-2">
        {title}
      </h1>
      <div className="w-full my-8 lg:my-12">
        <NotionRenderer blockMap={blocks} />
      </div>
    </main>
  );
}
