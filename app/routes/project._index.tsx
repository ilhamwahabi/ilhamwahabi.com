import { type V2_MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({
    projects: [],
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
    <main className="flex flex-col justify-center items-center p-6 lg:p-16">
      <h1 className="text-center text-2xl md:text-5xl">Project</h1>
      <div className="mt-8 space-y-4 text-base lg:text-lg flex flex-col items-center w-full text-center">
        <p>Hasil karya kerja keras 🤩</p>
      </div>
      <ul className="mt-8 md:mt-12 text-lg md:text-2xl space-y-2 md:space-y-4 text-center">
        {projects.map((project: { title: string; slug: string }) => (
          <li key={project.slug}>
            <Link to={project.slug} className="underline">
              {project.title}
            </Link>
          </li>
        ))}
        {projects.length === 0 && "Belum ada yang bisa ditampilkan 🙏"}
      </ul>
    </main>
  );
}
