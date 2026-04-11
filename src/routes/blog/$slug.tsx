import { createFileRoute, notFound } from '@tanstack/react-router'
import { NotionAPI } from 'notion-client'
import type { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'
import { Code } from 'react-notion-x/build/third-party/code'
import { getBlogs } from '#/models/blog'
import { getSeoHead } from '#/lib/seo'

import 'prismjs/themes/prism-tomorrow.css'
import 'react-notion-x/src/styles.css'

const notion = new NotionAPI()

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const blogs = await getBlogs()
    const blog = blogs.find((b) => b.slug === params.slug)

    if (!blog) throw notFound()

    let recordMap
    try {
      recordMap = await notion.getPage(blog.id)
    } catch (e) {
      console.error('[notion] getPage failed', blog.id, e)
      throw notFound()
    }

    return {
      blog,
      recordMap,
    }
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
    <main className="flex w-full flex-col items-center justify-start p-4">
      <h1 className="text-center text-2xl font-medium lg:text-3xl">{title}</h1>
      <div className="my-8 w-full overflow-x-auto lg:mb-12">
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
