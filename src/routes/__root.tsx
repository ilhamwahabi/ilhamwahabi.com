/// <reference types="vite/client" />
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import NProgress from "nprogress";
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { PostHogProvider, usePostHog } from "@posthog/react";
import {
  FaBars,
  FaGithub,
  FaGoodreads,
  FaLinkedin,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import appCss from "../styles.css?url";
import nProgressStyles from "nprogress/nprogress.css?url";

function NotFound() {
  return (
    <div className="p-16 text-center">
      <h1 className="text-2xl font-medium">Not found</h1>
      <p className="mt-4 text-gray-600">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}

const AnimatedNavLink = ({
  to,
  children,
  isSelected,
  onPointerEnter,
  setLinkRef,
}: {
  to: string;
  children: React.ReactNode;
  isSelected: boolean;
  onPointerEnter: () => void;
  setLinkRef: (node: HTMLAnchorElement | null) => void;
}) => {
  return (
    <Link
      ref={setLinkRef}
      className={`relative z-10 block rounded-full px-3 py-2 text-sm font-semibold transition duration-300 md:px-4 ${
        isSelected ? "text-white" : "text-slate-600 hover:text-slate-950"
      }`}
      onPointerEnter={onPointerEnter}
      to={to}
    >
      {children}
    </Link>
  );
};

const navLinks = [
  { to: "/blog", label: "Blog" },
  { to: "/talk", label: "Talk" },
  { to: "/project", label: "Project" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const getActiveNavPath = (pathname: string) =>
  navLinks.find(({ to }) => pathname === to || pathname.startsWith(`${to}/`))
    ?.to;

function Navigation({ pathname }: { pathname: string }) {
  const activePath = getActiveNavPath(pathname);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [selectedPath, setSelectedPath] = useState(activePath);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pill, setPill] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });

  const movePillTo = (path?: string) => {
    const container = containerRef.current;
    const link = path ? linkRefs.current[path] : null;

    if (!container || !link) {
      setPill((current) => ({ ...current, opacity: 0 }));
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    setPill({
      left: linkRect.left - containerRect.left,
      top: linkRect.top - containerRect.top,
      width: linkRect.width,
      height: linkRect.height,
      opacity: 1,
    });
  };

  useEffect(() => {
    setSelectedPath(activePath);
    setIsMobileMenuOpen(false);
    movePillTo(activePath);
  }, [activePath]);

  useEffect(() => {
    const handleResize = () => movePillTo(selectedPath);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [selectedPath]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        mobileMenuRef.current?.contains(event.target)
      ) {
        return;
      }

      setIsMobileMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isMobileMenuOpen]);

  return (
    <div ref={mobileMenuRef} className="relative">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/5 text-slate-700 transition hover:bg-slate-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-950/20 sm:hidden"
        aria-controls="mobile-navigation"
        aria-expanded={isMobileMenuOpen}
        aria-label={
          isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
      >
        {isMobileMenuOpen ? <FaXmark aria-hidden /> : <FaBars aria-hidden />}
      </button>

      {isMobileMenuOpen ? (
        <nav
          id="mobile-navigation"
          className="absolute right-0 top-full z-20 mt-3 w-48 rounded-2xl border border-white/80 bg-white p-2 text-sm font-semibold shadow-xl shadow-slate-200/70 backdrop-blur-xl sm:hidden"
        >
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              aria-current={activePath === to ? "page" : undefined}
              className={`block rounded-xl px-4 py-3 transition ${
                activePath === to
                  ? "bg-slate-950 text-white"
                  : "text-slate-700 hover:bg-slate-950/5 hover:text-slate-950"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      ) : null}

      <nav
        ref={containerRef}
        className="relative hidden items-center justify-center gap-1 rounded-full bg-slate-950/5 p-1 text-sm sm:flex"
        onPointerLeave={(e) => {
          // On real devices, touch often ends with a container pointerleave while
          // the route has not updated yet, which snapped the pill back to the old
          // tab and caused a visible wiggle. Mouse hover still resets when leaving.
          if (e.pointerType === "touch") return;
          setSelectedPath(activePath);
          movePillTo(activePath);
        }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 rounded-full bg-slate-950 shadow-sm transition-[height,opacity,transform,width] duration-300 ease-out"
          style={{
            height: pill.height,
            opacity: pill.opacity,
            transform: `translate(${pill.left}px, ${pill.top}px)`,
            width: pill.width,
          }}
        />
        {navLinks.map(({ to, label }) => (
          <AnimatedNavLink
            key={to}
            to={to}
            isSelected={selectedPath === to}
            onPointerEnter={() => {
              setSelectedPath(to);
              movePillTo(to);
            }}
            setLinkRef={(node) => {
              linkRefs.current[to] = node;
            }}
          >
            {label}
          </AnimatedNavLink>
        ))}
      </nav>
    </div>
  );
}

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
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
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const status = useRouterState({ select: (s) => s.status });
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    if (status === "pending") NProgress.start();
    if (status === "idle") {
      NProgress.done();
      scrollToTop();
    }
  }, [status]);

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#f7f4ef] font-roboto text-slate-800 antialiased">
        <PostHogProvider
          apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN!}
          options={{
            api_host: "/ingest",
            ui_host: "https://us.posthog.com",
            defaults: "2025-05-24",
            capture_exceptions: true,
            debug: import.meta.env.DEV,
          }}
        >
          <div
            ref={scrollRef}
            className="relative flex min-h-svh w-full flex-col overflow-y-auto"
          >
            <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_12%,rgba(14,165,233,0.18),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(251,191,36,0.18),transparent_24%),linear-gradient(180deg,#fffaf3_0%,#f7f4ef_46%,#eef5f9_100%)]" />
            <header className="relative z-30 flex justify-center px-5 py-5 lg:py-8">
              <div className="flex w-full max-w-3xl items-center justify-between gap-3 rounded-full border border-white/80 bg-white/75 px-4 py-3 shadow-lg shadow-slate-200/50 backdrop-blur-xl md:px-5">
                <h1 className="text-center text-base font-semibold tracking-tight text-slate-950 lg:text-lg">
                  <Link
                    className="inline-flex items-center gap-2 rounded-full px-2 py-1 transition hover:text-sky-700"
                    to="/"
                  >
                    <img
                      src="/favicon.svg"
                      alt=""
                      className="h-6 w-6 rounded-md"
                    />
                    Ilham Wahabi
                  </Link>
                </h1>
                <Navigation pathname={pathname} />
              </div>
            </header>
            <Analytics />
            <SpeedInsights />
            <main className="relative z-10 flex-1">
              <div className="mx-auto w-full max-w-5xl px-5">{children}</div>
            </main>
            <footer className="relative z-10 mx-auto mt-10 flex w-full max-w-5xl flex-wrap items-center justify-center gap-3 border-t border-slate-200/80 px-5 py-10 text-lg text-slate-600 md:text-xl lg:mt-16">
              <FooterSocialLinks />
            </footer>
          </div>
        </PostHogProvider>
        <Scripts />
      </body>
    </html>
  );
}

function FooterSocialLinks() {
  const posthog = usePostHog();

  const handleSocialClick = (platform: string) => {
    posthog.capture("social_link_clicked", { platform });
  };

  return (
    <>
      <a
        target="_blank"
        href="https://github.com/ilhamwahabi"
        rel="noreferrer"
        className="rounded-full bg-white/70 p-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950 hover:shadow-sm"
        onClick={() => handleSocialClick("github")}
      >
        <FaGithub />
      </a>
      <a
        target="_blank"
        href="https://leetcode.com/u/ilhamwahabi"
        rel="noreferrer"
        className="rounded-full bg-white/70 p-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950 hover:shadow-sm"
        onClick={() => handleSocialClick("leetcode")}
      >
        <SiLeetcode />
      </a>
      <a
        target="_blank"
        href="https://twitter.com/ilhamwahabigx"
        rel="noreferrer"
        className="rounded-full bg-white/70 p-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950 hover:shadow-sm"
        onClick={() => handleSocialClick("twitter")}
      >
        <FaTwitter />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/ilhamwahabi"
        rel="noreferrer"
        className="rounded-full bg-white/70 p-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950 hover:shadow-sm"
        onClick={() => handleSocialClick("linkedin")}
      >
        <FaLinkedin />
      </a>
      <a
        target="_blank"
        href="https://www.goodreads.com/ilhamwahabi"
        rel="noreferrer"
        className="rounded-full bg-white/70 p-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950 hover:shadow-sm"
        onClick={() => handleSocialClick("goodreads")}
      >
        <FaGoodreads />
      </a>
    </>
  );
}
