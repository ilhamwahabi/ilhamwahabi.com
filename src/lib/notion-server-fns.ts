import { createServerFn } from '@tanstack/react-start'
import { NotionAPI } from 'notion-client'
import { getBlogs } from '#/models/blog'
import { getProjects } from '#/models/project'
import { getTalks } from '#/models/talk'

const notion = new NotionAPI()

/** Server-only: blog index needs this when the loader runs in the browser (client navigations). */
export const loadBlogListData = createServerFn({ method: 'GET' }).handler(
  async () => ({ blogs: await getBlogs() }),
)

export const loadProjectListData = createServerFn({ method: 'GET' }).handler(
  async () => ({ projects: await getProjects() }),
)

export const loadTalkListData = createServerFn({ method: 'GET' }).handler(
  async () => ({ talks: await getTalks() }),
)

/**
 * Server-only: Notion worker + notion-client must not run in the browser during
 * client-side navigations from /blog (CORS / env differences vs SSR).
 */
export const loadBlogPostData = createServerFn({ method: 'GET' })
  .inputValidator((data: { slug: string }) => data)
  .handler(async ({ data: { slug } }) => {
    const blogs = await getBlogs()
    const blog = blogs.find((b) => b.slug === slug)
    if (!blog) return null

    try {
      const recordMap = await notion.getPage(blog.id)
      return { blog, recordMap }
    } catch (e) {
      console.error('[notion] getPage failed', blog.id, e)
      return null
    }
  })
