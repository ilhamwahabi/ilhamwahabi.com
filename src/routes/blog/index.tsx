import { useMemo, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { loadBlogListData } from "#/lib/notion-server-fns";
import { getSeoHead } from "#/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    ...getSeoHead({
      title: "Blog",
      description: "Thought as a human 🧠",
      url: "/blog",
      keywords: "blog",
    }),
  }),
  loader: () => loadBlogListData(),
  component: Blogs,
});

function Blogs() {
  const { blogs } = Route.useLoaderData();
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);
  const [listAnimEnabled, setListAnimEnabled] = useState(false);

  const allKeywords = useMemo(() => {
    const keywords = new Set<string>();
    for (const blog of blogs) {
      for (const keyword of blog.keywords) {
        keywords.add(keyword);
      }
    }
    return Array.from(keywords).sort();
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    if (!selectedKeyword) return blogs;
    return blogs.filter((blog) =>
      blog.keywords.some((k) => k === selectedKeyword),
    );
  }, [blogs, selectedKeyword]);

  return (
    <main className="py-10 lg:py-16">
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
          Writing
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
          Blog
        </h1>
        <blockquote className="mx-auto mt-6 inline-block max-w-2xl border-l-4 border-sky-400 px-5 text-left text-base leading-7 text-slate-600 lg:text-lg">
          <p className="italic">
            "If you write the problem down clearly, then the matter is half
            solved"
          </p>
          <p className="mt-3 text-sm font-medium text-slate-500">
            - Kidlin's Law
          </p>
        </blockquote>
      </section>
      {allKeywords.length > 0 && (
        <div
          className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2 md:mt-12"
          role="group"
          aria-label="Filter posts by keyword"
        >
          {allKeywords.map((keyword) => {
            const selected =
              selectedKeyword !== null && selectedKeyword === keyword;
            return (
              <button
                key={keyword}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setListAnimEnabled(true);
                  setSelectedKeyword((prev) =>
                    prev !== null && prev === keyword ? null : keyword,
                  );
                }}
                className={
                  selected
                    ? "rounded-full border cursor-pointer border-sky-600 bg-sky-600 px-3 py-1 text-sm font-medium text-white"
                    : "rounded-full border cursor-pointer border-slate-200 bg-white/80 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/60 transition hover:border-sky-300 hover:text-sky-800"
                }
              >
                {keyword}
              </button>
            );
          })}
        </div>
      )}
      <ul
        className={
          allKeywords.length > 0
            ? "mx-auto mt-4 grid max-w-3xl gap-4 md:mt-6"
            : "mx-auto mt-8 grid max-w-3xl gap-4 md:mt-12"
        }
      >
        {filteredBlogs.map((blog, index) => (
          <li
            key={`${blog.slug}-${selectedKeyword ?? "all"}`}
            className={
              listAnimEnabled
                ? "w-full motion-safe:animate-blog-list-in"
                : "w-full"
            }
            style={
              listAnimEnabled
                ? { animationDelay: `${index * 45}ms` }
                : undefined
            }
          >
            <Link
              to="/blog/$slug"
              params={{ slug: blog.slug }}
              className="group block rounded-[2rem] border border-white/80 bg-white/70 p-6 text-left shadow-sm shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70 md:p-7"
            >
              <h2 className="text-xl font-semibold tracking-tight text-slate-950 transition group-hover:text-sky-700 md:text-2xl">
                {blog.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {blog.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
                Read post
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  -&gt;
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {blogs.length === 0 && (
        <p className="mt-10 text-center text-base md:text-2xl">
          Sorry, something went wrong 🙏
        </p>
      )}
    </main>
  );
}
