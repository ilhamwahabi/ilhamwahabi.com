import { createFileRoute } from '@tanstack/react-router'
import { FaGithub } from 'react-icons/fa6'
import { loadProjectListData } from '#/lib/notion-server-fns'
import { getSeoHead } from '#/lib/seo'

export const Route = createFileRoute('/project/')({
  head: () => ({
    ...getSeoHead({
      title: 'Project',
      description: 'Result of hard work 👨‍💻',
      url: '/project',
      keywords: 'proyek,project,portofolio',
    }),
  }),
  loader: () => loadProjectListData(),
  component: Projects,
})

function Projects() {
  const { projects } = Route.useLoaderData()

  return (
    <main className="py-10 lg:py-16">
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
          Portfolio
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
          Project
        </h1>
        <blockquote className="mx-auto mt-6 inline-block max-w-2xl border-l-4 border-sky-400 px-5 text-left text-base leading-7 text-slate-600 lg:text-lg">
          <p className="italic">
            "The way to get started is to quit talking and begin doing."
          </p>
          <p className="mt-3 text-sm font-medium text-slate-500">
            - Walt Disney
          </p>
        </blockquote>
      </section>
      <ul className="mx-auto mt-8 grid max-w-3xl gap-8 md:mt-12">
        {projects.map((project) => (
          <li
            key={project.name}
            className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-5 shadow-sm shadow-slate-200/70 md:p-7"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                {project.name}
              </h2>
              {project.repo && (
                <a
                  target="_blank"
                  href={project.repo}
                  rel="noreferrer"
                  className="rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-slate-950 hover:text-white"
                >
                  <FaGithub className="text-base md:text-xl" />
                </a>
              )}
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-slate-600 md:mt-6 md:text-lg md:leading-8">
              {project.desc}
            </p>
            {project.link && (
              <div className="mt-5 flex justify-center">
                <a
                  target="_blank"
                  href={project.link}
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-sky-700"
                >
                  Open project
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    -&gt;
                  </span>
                </a>
              </div>
            )}
            <img
              className="mt-6 rounded-2xl"
              src={project.preview}
              alt=""
            />
          </li>
        ))}
      </ul>
      {projects.length === 0 ? (
        <p className="mt-10 text-center text-lg md:text-2xl">
          Sorry, something went wrong 🙏
        </p>
      ) : (
        <p className="mt-12 text-center text-base leading-6 text-slate-600 md:text-lg lg:mt-16">
          ...and other projects that not included here 🫡
        </p>
      )}
    </main>
  )
}
