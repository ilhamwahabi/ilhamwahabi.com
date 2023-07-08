import { type V2_MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({
    talks: [],
  });
};

export const meta: V2_MetaFunction = () => {
  return [
    // Title
    { title: "Talk | Ilham Wahabi" },
    { property: "og:title", content: "Talk | Ilham Wahabi" },
    { name: "twitter:title", content: "Talk | Ilham Wahabi" },
    { name: "application-name", content: "Talk | Ilham Wahabi" },
    { name: "apple-mobile-web-app-title", content: "Talk | Ilham Wahabi" },

    // Description
    {
      name: "description",
      content: "Ketika pernah ngomong depan orang banyak 👨",
    },
    {
      property: "og:description",
      content: "Ketika pernah ngomong depan orang banyak 👨",
    },
    {
      name: "twitter:description",
      content: "Ketika pernah ngomong depan orang banyak 👨",
    },

    // URL
    { rel: "canonical", href: `https://ilhamwahabi.com` },
    { property: "og:url", content: `https://ilhamwahabi.com` },
    { name: "twitter:url", content: `https://ilhamwahabi.com` },

    // Keywords
    { name: "keywords", content: "ilhamwahabi,pembicara" },

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

export default function Talks() {
  const { talks } = useLoaderData<typeof loader>();

  return (
    <main className="flex flex-col justify-center items-center p-6 lg:p-16">
      <h1 className="text-center text-2xl md:text-5xl">Talk</h1>
      <div className="mt-8 space-y-4 text-base lg:text-lg flex flex-col items-center w-full text-center">
        <p>Ketika pernah ngomong depan orang banyak 👨</p>
      </div>
      <ul className="mt-8 md:mt-12 text-lg md:text-2xl space-y-2 md:space-y-4 text-center">
        {talks.map((talk: { title: string; slug: string }) => (
          <li key={talk.slug}>
            <Link to={talk.slug} className="underline">
              {talk.title}
            </Link>
          </li>
        ))}
        {talks.length === 0 && "Belum ada yang bisa ditampilkan 🙏"}
      </ul>
    </main>
  );
}
