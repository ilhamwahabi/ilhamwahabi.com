import { useEffect, useMemo, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { usePostHog } from "@posthog/react";
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
  const posthog = usePostHog();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(
    null,
  );
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [listAnimEnabled, setListAnimEnabled] = useState(false);

  const languageKeywords = useMemo(() => {
    const keywords = new Set<string>();
    for (const blog of blogs) {
      for (const keyword of blog.keywords) {
        keywords.add(keyword);
      }
    }
    const language: string[] = [];
    if (keywords.has("en")) language.push("en");
    if (keywords.has("id")) language.push("id");
    return language;
  }, [blogs]);

  const topicKeywords = useMemo(() => {
    const scope =
      selectedLanguage != null
        ? blogs.filter((b) =>
            b.keywords.some((k) => k === selectedLanguage),
          )
        : blogs;
    const keywords = new Set<string>();
    for (const blog of scope) {
      for (const keyword of blog.keywords) {
        if (keyword === "en" || keyword === "id") continue;
        keywords.add(keyword);
      }
    }
    return Array.from(keywords).sort((a, z) =>
      a.localeCompare(z, undefined, { sensitivity: "base" }),
    );
  }, [blogs, selectedLanguage]);

  useEffect(() => {
    setSelectedTopic((prev) => {
      if (prev == null) return null;
      if (!topicKeywords.includes(prev)) return null;
      return prev;
    });
  }, [topicKeywords]);

  const hasFilterKeywords =
    languageKeywords.length > 0 || topicKeywords.length > 0;

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      if (
        selectedLanguage != null &&
        !blog.keywords.some((k) => k === selectedLanguage)
      ) {
        return false;
      }
      if (
        selectedTopic != null &&
        !blog.keywords.some((k) => k === selectedTopic)
      ) {
        return false;
      }
      return true;
    });
  }, [blogs, selectedLanguage, selectedTopic]);

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
      {hasFilterKeywords && (
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-6 md:mt-12">
          {languageKeywords.length > 0 && (
            <section
              className="flex w-full flex-col items-center gap-2"
              aria-labelledby="blog-filter-language-heading"
            >
              <h2
                id="blog-filter-language-heading"
                className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-600"
              >
                Language
              </h2>
              <div
                role="group"
                aria-label="Filter posts by language"
                className="flex flex-wrap justify-center gap-2"
              >
                {languageKeywords.map((keyword) => {
                  const selected =
                    selectedLanguage !== null && selectedLanguage === keyword;
                  return (
                    <button
                      key={keyword}
                      type="button"
                      aria-pressed={selected}
                      aria-label={
                        keyword === "en"
                          ? "Filter by language: English"
                          : "Filter by language: Indonesia"
                      }
                      onClick={() => {
                        setListAnimEnabled(true);
                        const next = selectedLanguage === keyword ? null : keyword;
                        setSelectedLanguage(next);
                        posthog.capture("blog_language_filter_applied", {
                          language: next ?? "none",
                        });
                      }}
                      className={
                        selected
                          ? "cursor-pointer rounded-full border border-violet-600 bg-violet-600 px-3 py-1 text-sm font-semibold text-white"
                          : "cursor-pointer rounded-full border border-dashed border-violet-300 bg-violet-50/90 px-3 py-1 text-sm font-semibold text-violet-900 shadow-sm shadow-violet-200/50 transition hover:border-violet-400 hover:bg-violet-100/90 hover:text-violet-950"
                      }
                    >
                      {keyword === "en" ? "English" : "Indonesia"}
                    </button>
                  );
                })}
              </div>
            </section>
          )}
          {topicKeywords.length > 0 && (
            <section
              className="flex w-full flex-col items-center gap-2"
              aria-labelledby="blog-filter-topics-heading"
            >
              <h2
                id="blog-filter-topics-heading"
                className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500"
              >
                Topics
              </h2>
              <div
                role="group"
                aria-label="Filter posts by topic"
                className="flex flex-wrap justify-center gap-2"
              >
                {topicKeywords.map((keyword) => {
                  const selected =
                    selectedTopic !== null && selectedTopic === keyword;
                  return (
                    <button
                      key={keyword}
                      type="button"
                      aria-pressed={selected}
                      aria-label={`Filter by topic: ${keyword}`}
                      onClick={() => {
                        setListAnimEnabled(true);
                        const next = selectedTopic === keyword ? null : keyword;
                        setSelectedTopic(next);
                        posthog.capture("blog_topic_filter_applied", {
                          topic: next ?? "none",
                        });
                      }}
                      className={
                        selected
                          ? "cursor-pointer rounded-full border border-sky-600 bg-sky-600 px-3 py-1 text-sm font-medium text-white"
                          : "cursor-pointer rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/60 transition hover:border-sky-300 hover:text-sky-800"
                      }
                    >
                      {keyword}
                    </button>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      )}
      <ul
        className={
          hasFilterKeywords
            ? "mx-auto mt-4 grid max-w-3xl gap-4 md:mt-6"
            : "mx-auto mt-8 grid max-w-3xl gap-4 md:mt-12"
        }
      >
        {filteredBlogs.map((blog, index) => (
          <li
            key={`${blog.slug}-${selectedLanguage ?? "all"}-${selectedTopic ?? "all"}`}
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
              onClick={() =>
                posthog.capture("blog_post_clicked", {
                  slug: blog.slug,
                  title: blog.title,
                })
              }
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
