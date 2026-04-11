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
    <main className="flex flex-col items-center justify-center p-6 lg:px-0 lg:py-16">
      <h1 className="text-center text-2xl md:text-5xl">Project</h1>
      <div className="mt-4 flex w-full flex-col items-center space-y-2 text-center text-base lg:mt-8 lg:text-lg">
        <p className="italic">
          "The best way to achieve a task is to find the best way to do it"
        </p>
        <p>- Gilbert's Law</p>
      </div>
      <ul className="mt-8 space-y-8 text-center md:mt-16 md:space-y-16">
        {projects.map((project) => (
          <div key={project.name}>
            <div className="flex items-center justify-center">
              <h2
                className={`text-lg md:text-3xl ${
                  project.link && 'border-b border-b-gray-800 md:pb-1'
                }`}
              >
                {project.link ? (
                  <a target="_blank" href={project.link} rel="noreferrer">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h2>
              {project.repo && (
                <a
                  target="_blank"
                  href={project.repo}
                  rel="noreferrer"
                  className="ml-2 lg:ml-4"
                >
                  <FaGithub className="text-base md:text-2xl" />
                </a>
              )}
            </div>
            <p className="mx-auto mt-4 max-w-lg text-base leading-6 md:mt-8 md:text-lg md:leading-8">
              {project.desc}
            </p>
            <img className="mt-8" src={project.preview} alt="" />
          </div>
        ))}
      </ul>
      {projects.length === 0 ? (
        <p className="text-center text-lg md:text-2xl">
          Sorry, something went wrong 🙏
        </p>
      ) : (
        <p className="mt-16 text-center text-base leading-6 md:text-lg lg:mt-24">
          ...and other projects that not included here 🫡
        </p>
      )}
    </main>
  )
}
