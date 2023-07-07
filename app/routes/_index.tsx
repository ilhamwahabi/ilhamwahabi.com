import type { V2_MetaFunction } from "@remix-run/node";

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
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
      className="flex flex-col justify-center items-center min-h-screen p-16 bg-blue-950 text-white"
    >
      <h1 className="text-center text-3xl md:text-6xl">
        Welcome to <span className="text-orange-500">ilhamwahabi.com</span>
      </h1>
      <ul className="mt-10 md:mt-16 text-lg md:text-2xl space-y-2 md:space-y-4 text-center">
        <li>
          <a
            target="_blank"
            href="https://github.com/ilhamwahabi"
            rel="noreferrer"
          >
            Github ⤴
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://twitter.com/ilhamwahabigx"
            rel="noreferrer"
          >
            Twitter ⤴
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ilham-wahabi"
            rel="noreferrer"
          >
            LinkedIn ⤴
          </a>
        </li>
      </ul>
    </div>
  );
}
