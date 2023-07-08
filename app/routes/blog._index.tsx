import { type V2_MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getBlogs } from "~/models/blog.server";

export const loader = async () => {
  return json({
    blogs: await getBlogs(),
  });
};

export const meta: V2_MetaFunction = () => {
  return [
    // Title
    { title: "Blog | Ilham Wahabi" },
    { property: "og:title", content: "Blog | Ilham Wahabi" },
    { name: "twitter:title", content: "Blog | Ilham Wahabi" },
    { name: "application-name", content: "Blog | Ilham Wahabi" },
    { name: "apple-mobile-web-app-title", content: "Blog | Ilham Wahabi" },

    // Description
    { name: "description", content: "Buah pikir sebagai seorang manusia 🤯" },
    {
      property: "og:description",
      content: "Buah pikir sebagai seorang manusia 🤯",
    },
    {
      name: "twitter:description",
      content: "Buah pikir sebagai seorang manusia 🤯",
    },

    // URL
    { rel: "canonical", href: `https://ilhamwahabi.com/blog` },
    { property: "og:url", content: `https://ilhamwahabi.com/blog` },
    { name: "twitter:url", content: `https://ilhamwahabi.com/blog` },

    // Keywords
    { name: "keywords", content: "ilhamwahabi" },

    // Image
    {
      property: "og:image",
      content: "https://i.ibb.co/6mzTs13/Google-Play-Header.png",
    },
    {
      name: "twitter:image",
      content: "https://i.ibb.co/6mzTs13/Google-Play-Header.png",
    },

    // Others
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@ilhamwahabigx" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "ilhamwahabi" },
  ];
};

export default function Blogs() {
  const { blogs } = useLoaderData<typeof loader>();

  return (
    <main className="flex flex-col justify-center items-center p-6 lg:p-16">
      <h1 className="text-center text-2xl md:text-5xl">Blog</h1>
      <div className="mt-8 space-y-4 text-base lg:text-lg flex flex-col items-center w-full text-center">
        <p>Buah pikir sebagai seorang manusia 🤯</p>
      </div>
      <ul className="mt-8 md:mt-12 text-lg md:text-2xl space-y-2 md:space-y-4 text-center">
        {blogs.map((blog: { title: string; slug: string }) => (
          <li key={blog.slug}>
            <Link to={blog.slug} className="underline">
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
