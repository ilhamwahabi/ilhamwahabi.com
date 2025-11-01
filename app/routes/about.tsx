import type { V2_MetaFunction } from "@remix-run/node";
import { getMeta } from "~/utils/seo";

export const meta: V2_MetaFunction = () => {
  return getMeta({
    title: "About",
    description: "Know more about me 👋",
    url: "/about",
    keywords: "about,tentang",
  });
};

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center p-6 lg:p-16">
      <h1 className="text-center text-xl md:text-4xl">A little about me… </h1>
      <div className="mt-8 lg:mt-12 text-left space-y-6 md:space-y-8 text-base md:text-xl flex flex-col items-start w-full">
        <p>I'm a software engineer based in Tangerang, Indonesia.</p>
        <p>
          Currently I'm working as a{" "}
          <span className="text-sky-600">Frontend Engineer on Traveloka</span>,
          a leading Southeast Asian technology company providing online travel
          and lifestyle booking services.
        </p>
        <p>
          I'm graduated from{" "}
          <span className="text-sky-600">Institut Teknologi Bandung</span> with
          a major in Informatics (Computer Science).
        </p>
        <p>
          I have about{" "}
          <span className="text-sky-600">
            {new Date().getFullYear() - 2020} years of experience
          </span>{" "}
          as a Software Engineer especially on frontend web development. I have
          worked across various industries with companies based in Indonesia and
          Singapore, remote and onsite.
        </p>
        <p>
          I’m fluent in English, know how to craft clean and intuitive UIs, have
          experience in recruit & led teams, and possess experience in frontend
          performance optimization.
        </p>
        <p>
          Although I have more experience with frontend web development, I’m
          also able to do mobile app development, since I believe that the main
          principles of UI development remain the same.
        </p>
        <p>
          I also utilize AI in my development process, ensuring{" "}
          <span className="text-sky-600">
            faster and efficient work results
          </span>
          .
        </p>
        <p>
          Aside from coding, I enjoy reading books and staying active through
          sports like gym workouts, swimming, and badminton, which help keep{" "}
          <span className="text-sky-600">
            my mind and body in excellent shape
          </span>{" "}
          for professional work.
        </p>
        <p>
          If you’re interested and would like to have a chat, feel free to reach
          me out on{" "}
          <span className="underline underline-offset-4">
            ilhamwahabi.sikumbang@gmail.com
          </span>{" "}
          or you can also contact me on{" "}
          <a
            href="https://www.linkedin.com/in/ilhamwahabi"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
}
