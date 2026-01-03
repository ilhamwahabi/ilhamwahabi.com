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
          one of the biggest online travel platform in Southeast Asia.
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
          I have experience working in early stage startups, so I{" "}
          <span className="text-sky-600">
            know how to build products from the scratch
          </span>
          . I'm also familiar with working in a fast-paced environment.
        </p>
        <p>
          And I've been working in established companies too, that means I know
          how to maintain existing products and improve them. I also have{" "}
          <span className="text-sky-600">
            proven experience working in a large team
          </span>
          .
        </p>
        <p>
          Although I have more experience in frontend web development, I’m also
          capable of mobile app development and have some familiarity with
          backend development as well.
        </p>
        <p>
          Furthermore, I’m fluent in English, skilled at crafting clean and
          intuitive UIs, have experience in mentoring junior developers,{" "}
          <span className="text-sky-600">
            possess experiences in frontend performance optimization
          </span>
          , and have been utilizing AI to enhance my development workflow.
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
          However, I'm NOT interested working in products that related to:
          gambling, adult content, credit, paylater, and conventional banking.
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
          with me if you have something to discuss (it's free, so please be
          responsible).
        </p>
        <p>See you!</p>
      </div>
    </div>
  );
}
