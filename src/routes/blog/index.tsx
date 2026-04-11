import { Link, createFileRoute } from '@tanstack/react-router'
import { loadBlogListData } from '#/lib/notion-server-fns'
import { getSeoHead } from '#/lib/seo'

export const Route = createFileRoute('/blog/')({
  head: () => ({
    ...getSeoHead({
      title: 'Blog',
      description: 'Thought as a human 🧠',
      url: '/blog',
      keywords: 'blog',
    }),
  }),
  loader: () => loadBlogListData(),
  component: Blogs,
})

function Blogs() {
  const { blogs } = Route.useLoaderData()

  return (
    <main className="flex flex-col items-center justify-center p-6 lg:p-16">
      <h1 className="text-center text-2xl md:text-5xl">Blog</h1>
      <div className="mt-4 flex w-full flex-col items-center space-y-4 text-center text-base lg:mt-8 lg:text-lg">
        <p className="italic">
          "If you write the problem down clearly, then the matter is half
          solved”
        </p>
        <p>- Kidlin's Law</p>
      </div>
      <ul className="mt-8 w-full space-y-8 text-center text-lg md:mt-16 md:space-y-16 md:text-2xl">
        {blogs.map((blog) => (
          <li key={blog.slug} className="w-full">
            <Link
              to="/blog/$slug"
              params={{ slug: blog.slug }}
              className="underline"
            >
              {blog.title}
            </Link>
            <p className="mx-auto mt-2 max-w-lg text-base leading-6 md:mt-3 md:text-lg md:leading-8">
              {blog.description}
            </p>
          </li>
        ))}
      </ul>
      {blogs.length === 0 && (
        <p className="text-center text-base md:text-2xl">
          Nothing to display yet 🙏
        </p>
      )}
    </main>
  )
}
