import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Ilham Wahabi" },
    {
      name: "description",
      content: "Welcome to Ilham Wahabi personal website",
    },
  ];
};

export default function Index() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif" }}
      className="flex flex-col justify-center items-center min-h-screen p-16 bg-[#21292E] text-white leading-[1.8]"
    >
      <h1 className="text-center text-3xl md:text-6xl">
        Welcome to <span className="text-[#F6983F]">ilhamwahabi.com</span>
      </h1>
      <ul className="mt-10 md:mt-16 text-lg md:text-2xl space-y-2 md:space-y-4 text-center">
        <li>
          <Link to="posts">Posts</Link>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/ilhamwahabi"
            rel="noreferrer"
          >
            Github →
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://twitter.com/ilhamwahabigx"
            rel="noreferrer"
          >
            Twitter →
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ilham-wahabi"
            rel="noreferrer"
          >
            LinkedIn →
          </a>
        </li>
      </ul>
    </div>
  );
}
