import { type V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getProjects } from "~/models/project.server";
import { FaGithub } from "react-icons/fa6";

export const loader = async () => {
  return json({
    projects: await getProjects(),
  });
};

export const meta: V2_MetaFunction = () => {
  return [
    // Title
    { title: "Project | Ilham Wahabi" },
    { property: "og:title", content: "Project | Ilham Wahabi" },
    { name: "twitter:title", content: "Project | Ilham Wahabi" },
    { name: "application-name", content: "Project | Ilham Wahabi" },
    { name: "apple-mobile-web-app-title", content: "Project | Ilham Wahabi" },

    // Description
    { name: "description", content: "Hasil karya kerja keras 🤩" },
    { property: "og:description", content: "Hasil karya kerja keras 🤩" },
    { name: "twitter:description", content: "Hasil karya kerja keras 🤩" },

    // URL
    { rel: "canonical", href: `https://ilhamwahabi.com/project` },
    { property: "og:url", content: `https://ilhamwahabi.com/project` },
    { name: "twitter:url", content: `https://ilhamwahabi.com/project` },

    // Keywords
    { name: "keywords", content: "ilhamwahabi,proyek,portofolio" },

    // Image
    {
      property: "og:image",
      content: "https://i.ibb.co/6mzTs13/Google-Play-Header.png",
    },
    {
      name: "twitter:image",
      content: "https://i.ibb.co/6mzTs13/Google-Play-Header.png",
    },

    // Others
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@ilhamwahabigx" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "ilhamwahabi" },
  ];
};

export default function Projects() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <main className="flex flex-col justify-center items-center p-6 lg:py-16 lg:px-0">
      <h1 className="text-center text-2xl md:text-5xl">Project</h1>
      <div className="mt-4 lg:mt-8 space-y-4 text-base lg:text-lg flex flex-col items-center w-full text-center">
        <p>Hasil karya kerja keras 🤩</p>
      </div>
      <ul className="mt-8 md:mt-16 space-y-8 md:space-y-16 text-center">
        {projects.map((project) => (
          <div key={project.name}>
            <div className="flex items-center justify-center">
              <h2
                className={`text-lg md:text-3xl ${
                  project.link && "md:pb-1 border-b border-b-white"
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
            <p className="text-[0.6rem] md:text-base mt-4 md:mt-8 max-w-lg leading-4 md:leading-8 mx-auto">
              {project.desc}
            </p>
            <img className="mt-8" src={project.preview} alt="" />
          </div>
        ))}
      </ul>
      {projects.length === 0 ? (
        <p className="text-center text-lg md:text-2xl">
          Belum ada yang bisa ditampilkan 🙏
        </p>
      ) : (
        <p className="mt-16 lg:mt-24 text-xs leading-6 md:text-lg text-center">
          Dan project lainnya yang tidak saya masukkan kesini 🫡
        </p>
      )}
    </main>
  );
}
