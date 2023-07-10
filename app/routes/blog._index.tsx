import { type V2_MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getBlogs } from "~/models/blog.server";
import { getMeta } from "../utils/seo";

export const loader = async () => {
  return json({
    blogs: await getBlogs(),
  });
};

export const meta: V2_MetaFunction = () => {
  return getMeta({
    title: "Blog",
    description: "Buah pikir sebagai manusia 🤯",
    url: "/blog",
    keywords: "blog",
  });
};

export default function Blogs() {
  const { blogs } = useLoaderData<typeof loader>();

  return (
    <main className="flex flex-col justify-center items-center p-6 lg:p-16">
      <h1 className="text-center text-2xl md:text-5xl">Blog</h1>
      <div className="mt-8 space-y-4 text-base lg:text-lg flex flex-col items-center w-full text-center">
        <p>Buah pikir sebagai manusia 🤯</p>
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
