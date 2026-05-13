import { createFileRoute } from "@tanstack/react-router";
import { YEARS_OF_EXPERIENCE } from "#/const";
import { getSeoHead } from "#/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...getSeoHead({
      title: "About",
      description: "Know more about me 👋",
      url: "/about",
      keywords: "about,tentang",
    }),
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-3xl py-10 lg:py-16">
      <section className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
          About
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
          A little about me
        </h1>
      </section>
      <div className="mt-8 flex w-full flex-col items-start space-y-6 rounded-[2rem] border border-slate-200/90 bg-white/95 p-6 text-left text-base leading-8 text-slate-900 shadow-md shadow-slate-300/40 md:p-8 md:text-lg lg:mt-12">
        <p>
          My name is Ilham Wahabi,{" "}
          <span className="font-semibold text-sky-700">
            you can call me Ilham
          </span>
          . I'm a software engineer based in Indonesia 🇮🇩 .
        </p>
        <p>
          Currently I'm working as a{" "}
          <span className="font-semibold text-sky-700">
            Frontend Engineer at Traveloka
          </span>
          <img
            src="/traveloka-logo.png"
            alt="Traveloka"
            className="-mt-2 inline-block h-8 w-8"
          />
          , one of the biggest online travel platform in Southeast Asia.
        </p>
        <p>
          I'm graduated from{" "}
          <span className="font-semibold text-sky-700">
            Institut Teknologi Bandung
          </span>{" "}
          with bachelor degree in Informatics (Computer Science).
        </p>
        <p>
          I have{" "}
          <span className="font-semibold text-sky-700">
            {YEARS_OF_EXPERIENCE} years of experience
          </span>{" "}
          as a software engineer especially on frontend web development. I have
          worked across various industries with companies based in Indonesia and
          Singapore, remote and on-site.
        </p>
        <p>
          I have experience working in early stage startups, so I{" "}
          <span className="font-semibold text-sky-700">
            know how to build products from the scratch
          </span>{" "}
          and work in a fast-paced environment.
        </p>
        <p>
          I've been working in established companies too, so I know how to
          improve existing product and{" "}
          <span className="font-semibold text-sky-700">
            collaborate effectively within large teams
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
          <span className="font-semibold text-sky-700">
            possess experiences in frontend performance optimization
          </span>
          , and have been utilizing AI to enhance my development workflow.
        </p>
        <p>
          Aside from coding, I enjoy{" "}
          <span className="font-semibold text-sky-700">
            reading books 📖 and playing badminton 🏸
          </span>{" "}
          which helps keep my mind and body in excellent shape to produce
          high-quality work.
        </p>
        <p>
          I'm{" "}
          <span className="font-semibold text-sky-700">
            open to new opportunities
          </span>
          . However, I'm NOT interested working in products that related to:
          gambling, adult content, credit, paylater, and conventional banking.
        </p>
        <p>
          If you’re interested and would like to connect, feel free to reach me
          out on{" "}
          <a
            href="https://www.linkedin.com/in/ilhamwahabi"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-sky-700 underline underline-offset-4"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            href="https://twitter.com/ilhamwahabigx"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-sky-700 underline underline-offset-4"
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
            className="font-semibold text-sky-700 underline underline-offset-4"
          >
            book a meeting
          </a>{" "}
          with me if you have something to discuss (it's free, so please be
          responsible).
        </p>
        <p>Thanks for visiting!</p>
      </div>
    </div>
  );
}
