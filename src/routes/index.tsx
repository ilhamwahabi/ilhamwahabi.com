import { Link, createFileRoute } from '@tanstack/react-router'
import { YEARS_OF_EXPERIENCE } from '#/const'
import { getSeoHead } from '#/lib/seo'

export const Route = createFileRoute('/')({
  head: () => ({
    ...getSeoHead({
      title: '',
      description: 'UI Engineer based in Jakarta, Indonesia',
      url: '',
      keywords: '',
    }),
  }),
  component: Index,
})

function Index() {
  return (
    <div className="flex flex-col items-start justify-center p-6 lg:p-16">
      <h1 className="self-center text-center text-2xl md:text-4xl">
        Hi, <span className="text-sky-600">Ilham</span> here 👋
      </h1>
      <p className="mt-8 text-base md:mt-16 md:text-2xl">
        I'm a software engineer currently working at{' '}
        <a href="https://www.traveloka.com" target="_blank" rel="noreferrer">
          <span className="text-sky-600">Traveloka</span>
          <img
            src="/traveloka-logo.png"
            alt="Traveloka"
            className="-mt-2 inline-block h-8 w-8"
          />
        </a>
      </p>
      <p className="mt-8 text-base md:text-2xl">
        I bring{' '}
        <span className="text-sky-600">
          {YEARS_OF_EXPERIENCE} years of experience
        </span>{' '}
        on building products that generate billions in revenue, being used by
        large enterprises, and have expanded to multiple countries.
      </p>
      <p className="mt-8 text-base md:text-2xl">
        You can find out more about me{' '}
        <Link className="underline underline-offset-4" to="/about">
          here
        </Link>
        .
      </p>
      <p className="mt-8 text-base md:text-2xl">
        I also <span className="text-sky-600">write blog</span> on technology,
        opinions, and my life journey ✍️ which you can{' '}
        <Link className="underline underline-offset-4" to="/blog">
          read here
        </Link>
        .
      </p>
    </div>
  )
}
