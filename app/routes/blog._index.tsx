import { type V2_MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getBlogs } from "~/models/blog.server";
import { getMeta } from "~/utils/seo";

export const loader = async () => {
  return json({
    blogs: await getBlogs(),
  });
};

export const meta: V2_MetaFunction = () => {
  return getMeta({
    title: "Blog",
    description: "Thought as a human 🧠",
    url: "/blog",
    keywords: "blog",
  });
};

export default function Blogs() {
  const { blogs } = useLoaderData<typeof loader>();
  console.log({blogs});

  return (
    <main className="flex flex-col justify-center items-center p-6 lg:p-16">
      <h1 className="text-center text-2xl md:text-5xl">Blog</h1>
      <div className="mt-4 lg:mt-8 space-y-4 text-base lg:text-lg flex flex-col items-center w-full text-center">
        <p className="italic">
          "If you write the problem down clearly, then the matter is half
          solved”
        </p>
        <p>- Kidlin's Law</p>
      </div>
      <ul className="mt-8 md:mt-16 text-lg md:text-2xl space-y-8 md:space-y-16 text-center w-full">
        {blogs.map((blog) => (
          <li key={blog.slug} className="w-full">
            <Link to={blog.slug} className="underline">
              {blog.title}
            </Link>
            <p className="text-base md:text-lg mt-2 md:mt-3 max-w-lg leading-6 md:leading-8 mx-auto">
              {blog.description}
            </p>
          </li>
        ))}
      </ul>
      {blogs.length === 0 && (
        <p className="text-center text-base md:text-2xl">
          Nothing to display yet 🙏
        </p>
      )}
    </main>
  );
}
