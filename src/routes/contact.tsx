import { createFileRoute } from "@tanstack/react-router";
import { getSeoHead } from "#/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...getSeoHead({
      title: "Contact",
      description: "Contact me 👋",
      url: "/contact",
      keywords: "contact,hubungi",
    }),
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-3xl py-10 lg:py-16">
      <section className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
          Let's connect
        </h1>
      </section>
      <div className="mt-8 flex w-full flex-col items-start space-y-6 rounded-[2rem] border border-slate-200/90 bg-white/95 p-6 text-left text-base leading-8 text-slate-900 shadow-md shadow-slate-300/40 md:p-8 md:text-lg lg:mt-12">
        <p className="sm:hidden">
          Feel free to send me an email{" "}
          <a
            href="mailto:ilhamwahabi.sikumbang@gmail.com"
            className="font-semibold text-sky-700 underline underline-offset-4 sm:hidden"
          >
            here
          </a>
          .
        </p>
        <p className="hidden sm:block">
          Feel free to email me at{" "}
          <span className="font-semibold text-sky-700">
            ilhamwahabi.sikumbang@gmail.com
          </span>
          .
        </p>
        <p>
          I'm also available on{" "}
          <a
            href="https://www.linkedin.com/in/ilhamwahabi"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-sky-700 underline underline-offset-4"
          >
            LinkedIn
          </a>{" "}
          and{" "}
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
          You can{" "}
          <a
            href="https://cal.com/ilham-wahabi"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-sky-700 underline underline-offset-4"
          >
            book a meeting
          </a>{" "}
          with me too if you have something to discuss (it's free, so please be
          responsible).
        </p>
        <p>
          I'm{" "}
          <span className="font-semibold text-sky-700">
            open to new opportunities
          </span>
          . However, I'm NOT interested working in products that related to:
          gambling, adult content, credit, paylater, and conventional banking.
        </p>
        <p>Thanks for visiting!</p>
      </div>
    </div>
  );
}
