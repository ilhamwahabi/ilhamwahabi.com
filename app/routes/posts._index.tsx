import { type V2_MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({
    posts: await getPosts(),
  });
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: `All Post | Ilham Wahabi` },
    {
      name: "description",
      content: "My writing",
    },
  ];
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <main className="flex flex-col justify-center items-center p-16 bg-[#21292E] text-white">
      <h1 className="text-center text-2xl md:text-5xl">Posts</h1>
      <ul className="mt-8 md:mt-12 text-lg md:text-2xl space-y-2 md:space-y-4 text-center">
        {posts.map((post: { title: string; slug: string }) => (
          <li key={post.slug}>
            <Link to={post.slug} className="underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
