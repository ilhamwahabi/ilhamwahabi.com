import { createFileRoute, notFound } from '@tanstack/react-router'
import type { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'
import { Code } from 'react-notion-x/build/third-party/code'
import { loadBlogPostData } from '#/lib/notion-server-fns'
import { getSeoHead } from '#/lib/seo'

import 'prismjs/themes/prism-tomorrow.css'
import 'react-notion-x/src/styles.css'

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const result = await loadBlogPostData({ data: { slug: params.slug } })
    if (!result) throw notFound()
    return result
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {}
    }
    const { blog } = loaderData
    const keywords =
      typeof blog.keywords === 'string'
        ? blog.keywords
        : Array.isArray(blog.keywords)
          ? blog.keywords.join(',')
          : ''

    return {
      ...getSeoHead({
        title: blog.title,
        description: blog.description,
        url: `/blog/${blog.slug}`,
        keywords,
        image: blog.thumbnail?.[0]?.url,
      }),
    }
  },
  component: BlogPost,
})

function BlogPost() {
  const { recordMap, blog } = Route.useLoaderData()
  const { title } = blog

  return (
    <main className="mx-auto max-w-3xl py-10 lg:py-16">
      <div className="rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-sm shadow-slate-200/70 md:p-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
          Post
        </p>
        <h1 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-semibold leading-tight tracking-tight text-slate-950 lg:text-5xl">
          {title}
        </h1>
      </div>
      <div className="my-8 w-full overflow-x-auto rounded-[2rem] border border-white/80 bg-white/75 p-4 shadow-sm shadow-slate-200/70 md:p-8 lg:mb-12">
        <NotionRenderer
          recordMap={recordMap as ExtendedRecordMap}
          fullPage={false}
          darkMode={false}
          components={{
            Code,
          }}
        />
      </div>
    </main>
  )
}
