import { createFileRoute } from "@tanstack/react-router";
import { getBlogs, type Blog } from "#/models/blog";

const SITE_URL = "https://ilhamwahabi.com";
const SITE_TITLE = "Ilham Wahabi";
const SITE_DESCRIPTION = "Thought as a human - Blog posts by Ilham Wahabi";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateRssItem(blog: Blog): string {
  const itemUrl = `${SITE_URL}/blog/${blog.slug}`;
  const thumbnailUrl = blog.thumbnail?.[0]?.url;

  return `    <item>
      <title>${escapeXml(blog.title)}</title>
      <link>${itemUrl}</link>
      <guid isPermaLink="true">${itemUrl}</guid>
      <description>${escapeXml(blog.description)}</description>${
        blog.keywords.length > 0
          ? `\n      <category>${escapeXml(blog.keywords.join(", "))}</category>`
          : ""
      }${
        thumbnailUrl
          ? `\n      <enclosure url="${escapeXml(thumbnailUrl)}" type="image/jpeg" />`
          : ""
      }
    </item>`;
}

function generateRssFeed(blogs: Blog[]): string {
  const items = blogs.map(generateRssItem).join("\n");
  const buildDate = new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;
}

export const Route = createFileRoute("/feed")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const blogs = await getBlogs();
          const rssFeed = generateRssFeed(blogs);

          return new Response(rssFeed, {
            status: 200,
            headers: {
              "Content-Type": "application/rss+xml; charset=utf-8",
              "Cache-Control": "public, max-age=3600, s-maxage=3600",
            },
          });
        } catch (error) {
          console.error("[rss] Failed to generate RSS feed:", error);
          return new Response("Failed to generate RSS feed", { status: 500 });
        }
      },
    },
  },
});
