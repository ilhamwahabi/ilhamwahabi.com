import { createFileRoute } from '@tanstack/react-router'
import dayjs from 'dayjs'
import { usePostHog } from '@posthog/react'
import { loadTalkListData } from '#/lib/notion-server-fns'
import { getSeoHead } from '#/lib/seo'

export const Route = createFileRoute('/talk/')({
  head: () => ({
    ...getSeoHead({
      title: 'Talk',
      description: 'When I become speaker 👨',
      url: '/talk',
      keywords: 'talk,speaker,pembicara',
    }),
  }),
  loader: () => loadTalkListData(),
  component: Talks,
})

function Talks() {
  const { talks } = Route.useLoaderData()
  const posthog = usePostHog()

  return (
    <main className="py-10 lg:py-16">
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
          Speaking
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
          Talk
        </h1>
        <blockquote className="mx-auto mt-6 inline-block max-w-2xl border-l-4 border-sky-400 px-5 text-left text-base leading-7 text-slate-600 lg:text-lg">
          <p className="italic">
            "If you can't explain it simply, you don't understand it well
            enough."
          </p>
          <p className="mt-3 text-sm font-medium text-slate-500">
            - Albert Einstein
          </p>
        </blockquote>
      </section>
      <ul className="mx-auto mt-8 grid max-w-3xl gap-4 md:mt-12">
        {talks.map((talk) => (
          <li key={talk.title}>
            <a
              target="_blank"
              href={talk.ppt}
              rel="noreferrer"
              className="group block rounded-[2rem] border border-white/80 bg-white/70 p-6 text-left shadow-sm shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/70 md:p-7"
              onClick={() =>
                posthog.capture('talk_slides_opened', {
                  title: talk.title,
                  organizer: talk.organizer,
                })
              }
            >
              <h2 className="text-xl font-semibold tracking-tight text-slate-950 transition group-hover:text-sky-700 md:text-2xl">
                {talk.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {dayjs(talk.date).format('D MMMM YYYY')} on{' '}
                <span className="font-semibold text-sky-700">
                  {talk.organizer}
                </span>
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
                Open slides
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  -&gt;
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      {talks.length === 0 && (
        <p className="mt-10 text-center text-lg md:text-2xl">
          Sorry, something went wrong 🙏
        </p>
      )}
    </main>
  )
}
