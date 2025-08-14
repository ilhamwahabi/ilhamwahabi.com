import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useNavigation,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import { FaGithub, FaGoodreads, FaLinkedin, FaTwitter } from "react-icons/fa6";
import NProgress from "nprogress";
import nProgressStyles from "nprogress/nprogress.css";
import { SpeedInsights } from "@vercel/speed-insights/remix";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

import tailwind from "./tailwind.css";
import styles from "./app.css";
import Scrollbars from "react-custom-scrollbars-2";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: nProgressStyles },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
  },
];

// Animated Navigation Link Component
const AnimatedNavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div className="relative" whileHover="hover" initial="initial">
      <Link className="sm:px-2 md:px-4 block" to={to}>
        <span className="relative">
          {children}
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-800"
            variants={{
              initial: { scaleX: 0 },
              hover: { scaleX: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
        </span>
      </Link>
    </motion.div>
  );
};

export default function App() {
  const navigation = useNavigation();
  const scrollbarsRef = useRef<Scrollbars>(null);

  const handleResetClick = () => {
    scrollbarsRef.current?.scrollToTop();
  };

  useEffect(() => {
    if (navigation.state === "loading") NProgress.start();
    if (navigation.state === "idle") {
      NProgress.done();
      handleResetClick();
    }
  }, [navigation.state]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-50 text-gray-800 font-roboto">
        <Scrollbars
          ref={scrollbarsRef}
          autoHide
          universal
          className="w-full min-h-[100svh] [&>*]:flex [&>*]:flex-col"
        >
          <header className="py-8 lg:py-16 flex justify-center">
            <div className="flex flex-col lg:flex-row justify-center items-center w-4/5 md:w-2/5 ">
              <h1 className="text-xl lg:text-2xl text-center">
                <Link className="" to="">
                  Ilham Wahabi
                </Link>
              </h1>
              <div className="lg:ml-16 mt-4 lg:mt-0 space-x-4 sm:space-x-6 md:space-x-4 text-base lg:text-lg flex items-end">
                <AnimatedNavLink to="blog">Blog</AnimatedNavLink>
                <AnimatedNavLink to="talk">Talk</AnimatedNavLink>
                <AnimatedNavLink to="project">Project</AnimatedNavLink>
                <AnimatedNavLink to="about">About</AnimatedNavLink>
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
          <footer className="flex justify-center items-center space-x-8 md:space-x-2 p-12 border-t-gray-300 border-t text-lg md:text-2xl mt-8 lg:mt-12">
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
        </Scrollbars>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
