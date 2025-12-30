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
          Singapore, remote and on-site.
        </p>
        <p>
          I've experience working in early stage startups, so I know how to
          build products from the scratch. I'm also familiar with working in a
          fast-paced environment.
        </p>
        <p>
          I've experience working in established companies too, that means I
          know how to maintain existing products and improve them. I'm also
          comfortable working in a large team.
        </p>
        <p>
          Although I have more experience in frontend web development, I’m also
          capable of mobile app development and have some familiarity with
          backend development as well.
        </p>
        <p>
          Furthermore,{" "}
          <span className="text-sky-600">I’m fluent in English</span>, know how
          to craft clean and intuitive UIs, have experiences in mentoring junior
          developers, familiar with frontend performance optimization, and have
          been utilizing AI in my development process.
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
          However, I'm not interested working in products that related to:
          gambling, adult content, credit / paylater, and conventional banking.
        </p>
        <p>
          If you’re interested and would like to connect, feel free to reach me
          out on{" "}
          <a
            href="https://www.linkedin.com/in/ilhamwahabi"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            href="https://twitter.com/ilhamwahabigx"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            Twitter
          </a>
          .
        </p>
        <p>
          You can also{" "}
          <a
            href="https://cal.com/ilham-wahabi"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            book a meeting
          </a>{" "}
          with me to discuss anything (it's free, but please be responsible).
        </p>
        <p>See you!</p>
      </div>
    </div>
  );
}
