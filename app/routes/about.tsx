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
        <p>
          My name is Ilham Wahabi,{" "}
          <span className="text-sky-600">you can call me Ilham</span>. I'm a
          software engineer based in Tangerang, Indonesia.
        </p>
        <p>
          Currently I'm working as a{" "}
          <span className="text-sky-600">Frontend Engineer at Traveloka</span>,
          a leading technology company providing online travel and lifestyle
          booking services.
        </p>
        <p>
          I'm graduated from{" "}
          <span className="text-sky-600">Institut Teknologi Bandung</span> with
          bachelor degree in Informatics (Computer Science).
        </p>
        <p>
          I have about{" "}
          <span className="text-sky-600">
            {new Date().getFullYear() - 2020 - 1} years of experience
          </span>{" "}
          as a software engineer especially on frontend web development. I have
          worked across various industries with companies based in Indonesia and
          Singapore, from early stage startups to established companies, remote
          and on-site.
        </p>
        <p>
          I have been{" "}
          <span className="text-sky-600">
            involved in building products that generate billions of revenue
          </span>
          , receive billions of investments, being used by large enterprises,
          and expanded to another country, which I'm proud of.
        </p>
        <p>
          <span className="text-sky-600">I’m fluent in English</span>, know how
          to craft clean and intuitive UIs, have experience in building a
          startup, have experiences in recruiting & leading team, able to build
          the project from ground up, and have experience in frontend
          performance optimization.
        </p>
        <p>
          Although I have more experience in frontend web development, I’m also
          capable of mobile app development and have some familiarity with
          backend development as well.
        </p>
        <p>
          I'm also{" "}
          <span className="text-sky-600">utilize AI in development</span>{" "}
          process, ensuring faster and efficient work.
        </p>
        <p>
          Aside from coding, I enjoy{" "}
          <span className="text-sky-600">
            reading books and playing badminton
          </span>{" "}
          which helps keep my mind and body in excellent shape for work.
        </p>
        <p>
          I'm always{" "}
          <span className="text-sky-600">open to new opportunities</span>.
          However, I'm not interested working in industries related to:
          gambling, adult content, credit / paylater, and conventional banking.
        </p>
        <p>
          If you’re interested and would like to connect, feel free to reach me
          out on{" "}
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
        <p>
          Or you can also{" "}
          <a
            href="https://calendar.app.google/tcTBDxVB8PoA1fZF6"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            book a meeting
          </a>{" "}
          to have a casual chat with me (it's free, but please be responsible).
        </p>
        <p>See you!</p>
      </div>
    </div>
  );
}
