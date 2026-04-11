import { createFileRoute } from '@tanstack/react-router'
import dayjs from 'dayjs'
import { getTalks } from '#/models/talk'
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
  loader: async () => ({
    talks: await getTalks(),
  }),
  component: Talks,
})

function Talks() {
  const { talks } = Route.useLoaderData()

  return (
    <main className="flex flex-col items-center justify-center p-6 lg:p-16">
      <h1 className="text-center text-2xl md:text-5xl">Talk</h1>
      <div className="mt-4 flex w-full flex-col items-center space-y-2 text-center text-base lg:mt-8 lg:text-lg">
        <p className="italic">
          “To persuade, you must demonstrate credibility (Ethos), emotion
          (Pathos), and logic (Logos)”
        </p>
        <p>- Aristotle’s Rhetoric</p>
      </div>
      <ul className="mt-8 space-y-8 text-center md:mt-16 md:space-y-16">
        {talks.map((talk) => (
          <li key={talk.title}>
            <a
              target="_blank"
              href={talk.ppt}
              rel="noreferrer"
              className="text-lg underline md:text-2xl"
            >
              {talk.title}
            </a>
            <p className="mt-1 text-base lg:text-lg md:mt-2">
              {dayjs(talk.date).format('D MMMM YYYY')} on{' '}
              <span className="font-semibold text-sky-600">
                {talk.organizer}
              </span>
            </p>
          </li>
        ))}
      </ul>
      {talks.length === 0 && (
        <p className="text-center text-lg md:text-2xl">
          Nothing to display yet 🙏
        </p>
      )}
    </main>
  )
}
