import { type V2_MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({
    talks: [],
  });
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: `Talk | Ilham Wahabi` },
    {
      name: "description",
      content: "My writing",
    },
  ];
};

export default function Talks() {
  const { talks } = useLoaderData<typeof loader>();

  return (
    <main className="flex flex-col justify-center items-center p-16">
      <h1 className="text-center text-2xl md:text-5xl">Talk</h1>
      <div className="mt-8 space-y-4 text-lg flex flex-col items-center w-full">
        <p>Materi sewaktu aku menjadi pembicara 👨</p>
      </div>
      <ul className="mt-8 md:mt-12 text-lg md:text-2xl space-y-2 md:space-y-4 text-center">
        {talks.map((talk: { title: string; slug: string }) => (
          <li key={talk.slug}>
            <Link to={talk.slug} className="underline">
              {talk.title}
            </Link>
          </li>
        ))}
        {talks.length === 0 && "Belum ada item yang bisa ditampilkan 🙏"}
      </ul>
    </main>
  );
}
