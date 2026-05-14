import { createFileRoute, Link } from "@tanstack/react-router";
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
          <span className="font-semibold text-sky-700" tabIndex={0}>
            Frontend Engineer
          </span>{" "}
          at{" "}
          <span
            className="group/tvk relative inline cursor-help font-semibold text-sky-700 underline decoration-sky-700 decoration-dotted decoration-2 underline-offset-[5px] outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
            tabIndex={0}
          >
            Traveloka
            <span
              role="tooltip"
              className="pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-1/2 z-50 w-max max-w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 rounded-xl border border-slate-200/90 bg-white p-2.5 opacity-0 shadow-lg shadow-slate-300/50 transition-opacity duration-200 group-hover/tvk:opacity-100 group-focus-within/tvk:opacity-100"
            >
              <img
                src="/traveloka-logo.png"
                alt="Traveloka logo"
                className="mx-auto block h-auto max-h-20 w-auto max-w-full"
                width={220}
                height={79}
                loading="lazy"
                decoding="async"
              />
            </span>
          </span>
          , one of the biggest online travel platform in Southeast Asia.
        </p>
        <p>
          I'm graduated from{" "}
          <span
            className="group/itb relative inline cursor-help font-semibold text-sky-700 underline decoration-sky-700 decoration-dotted decoration-2 underline-offset-[5px] outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
            tabIndex={0}
          >
            Institut Teknologi Bandung
            <span
              role="tooltip"
              className="pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-1/2 z-50 w-max max-w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 rounded-xl border border-slate-200/90 bg-white p-2.5 opacity-0 shadow-lg shadow-slate-300/50 transition-opacity duration-200 group-hover/itb:opacity-100 group-focus-within/itb:opacity-100"
            >
              <img
                src="/itb-logo.png"
                alt="Institut Teknologi Bandung logo"
                className="mx-auto block h-auto max-h-20 w-auto max-w-full"
                width={220}
                height={88}
                loading="lazy"
                decoding="async"
              />
            </span>
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
          If you interested to know more, you can{" "}
          <Link
            className="font-semibold text-sky-700 underline underline-offset-4"
            to="/contact"
          >
            contact me
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
