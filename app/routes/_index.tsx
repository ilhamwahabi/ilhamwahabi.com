import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to ilhamwahabi.com</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://github.com/ilhamwahabi"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://twitter.com/ilhamwahabigx"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ilham-wahabi"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
