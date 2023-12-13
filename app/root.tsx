import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import { FaGithub, FaGoodreads, FaLinkedin, FaTwitter } from "react-icons/fa6";
import NProgress from "nprogress";
import nProgressStyles from "nprogress/nprogress.css";
import { SpeedInsights } from "@vercel/speed-insights/remix";
import { useEffect } from "react";

import tailwind from "./tailwind.css";
import styles from "./app.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: nProgressStyles },
];

export default function App() {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "loading") NProgress.start();
    if (navigation.state === "idle") NProgress.done();
  }, [navigation.state]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#21292E] text-white min-h-screen flex flex-col">
        <header className="py-8 lg:py-16 flex justify-center">
          <div className="flex flex-col lg:flex-row justify-start items-center w-4/5 md:w-2/5 ">
            <h1 className="text-xl lg:text-2xl">
              <Link className="sm:p-2 md:p-4" to="">
                Ilham Wahabi
              </Link>
            </h1>
            <div className="lg:ml-16 mt-4 lg:mt-0 space-x-4 text-base lg:text-lg flex items-end">
              <Link className="sm:p-2 md:p-4" to="blog">
                Blog
              </Link>
              <Link className="sm:p-2 md:p-4" to="talk">
                Talk
              </Link>
              <Link className="sm:p-2 md:p-4" to="project">
                Project
              </Link>
              <Link className="sm:p-2 md:p-4" to="about">
                About
              </Link>
            </div>
          </div>
        </header>
        <Analytics />
        <SpeedInsights />
        <main className="flex-1">
          <div className="w-4/5 md:w-2/5 mx-auto">
            <Outlet />
          </div>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <footer className="flex justify-center items-center space-x-6 md:space-x-2 p-12 border-t-gray-600 border-t text-lg md:text-2xl mt-8 lg:mt-12">
          <a
            target="_blank"
            href="https://github.com/ilhamwahabi"
            rel="noreferrer"
            className="sm:p-2 md:p-4"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/ilhamwahabigx"
            rel="noreferrer"
            className="sm:p-2 md:p-4"
          >
            <FaTwitter />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ilhamwahabi"
            rel="noreferrer"
            className="sm:p-2 md:p-4"
          >
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            href="https://www.goodreads.com/ilhamwahabi"
            rel="noreferrer"
            className="sm:p-2 md:p-4"
          >
            <FaGoodreads />
          </a>
        </footer>
      </body>
    </html>
  );
}
