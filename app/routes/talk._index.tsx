import { type V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import dayjs from "dayjs";
import { getTalks } from "~/models/talk.server";
import { getMeta } from "../utils/seo";

export const loader = async () => {
  return json({
    talks: await getTalks(),
  });
};

export const meta: V2_MetaFunction = () => {
  return getMeta({
    title: "Talk",
    description: "Ketika pernah ngomong depan orang banyak 👨",
    url: "/talk",
    keywords: "pembicara",
  });
};

export default function Talks() {
  const { talks } = useLoaderData<typeof loader>();

  return (
    <main className="flex flex-col justify-center items-center p-6 lg:p-16">
      <h1 className="text-center text-2xl md:text-5xl">Talk</h1>
      <div className="mt-4 lg:mt-8 space-y-4 text-base lg:text-lg flex flex-col items-center w-full text-center">
        <p>Ketika pernah ngomong depan orang banyak 👨</p>
      </div>
      <ul className="mt-8 md:mt-16 space-y-8 md:space-y-16 text-center">
        {talks.map((talk) => (
          <li key={talk.title}>
            <a
              target="_blank"
              href={talk.ppt}
              rel="noreferrer"
              className="underline text-base md:text-2xl "
            >
              {talk.title}
            </a>
            <p className="text-xs lg:text-lg mt-1 md:mt-2">
              {dayjs(talk.date).format("D MMMM YYYY")} on{" "}
              <span className="text-[#F6983F] font-semibold">
                {talk.organizer}
              </span>
            </p>
          </li>
        ))}
      </ul>
      {talks.length === 0 && (
        <p className="text-center text-lg md:text-2xl">
          Belum ada yang bisa ditampilkan 🙏
        </p>
      )}
    </main>
  );
}
