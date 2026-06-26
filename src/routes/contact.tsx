import { createFileRoute } from "@tanstack/react-router";
import { usePostHog } from "@posthog/react";
import { textHighlightClass } from "#/lib/highlight";
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
  const posthog = usePostHog();

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
        <p>Hi, thanks for your interest to know more about me.</p>
        <p>
          Feel free to send me an email{" "}
          <span className="sm:hidden">
            <a
              href="mailto:ilhamwahabi.sikumbang@gmail.com"
              className="font-semibold underline underline-offset-4"
              onClick={() => posthog.capture("contact_email_clicked")}
            >
              here
            </a>
          </span>
          <span className="hidden sm:inline">
            at{" "}
            <span className="font-semibold">
              ilhamwahabi.sikumbang@gmail.com
            </span>
          </span>
          . I'm also available on{" "}
          <a
            href="https://www.linkedin.com/in/ilhamwahabi"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline underline-offset-4"
            onClick={() => posthog.capture("contact_linkedin_clicked")}
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            href="https://twitter.com/ilhamwahabigx"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline underline-offset-4"
            onClick={() => posthog.capture("contact_twitter_clicked")}
          >
            Twitter
          </a>
          .
        </p>
        <p>
          You can{" "}
          <a
            href="https://cal.com/ilham-wahabi/1-1"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline underline-offset-4"
            onClick={() => posthog.capture("contact_meeting_booked")}
          >
            book a paid 1:1
          </a>{" "}
          with me if you'd like to discuss about career, interview, tech, or
          anything else. I'll try my best to help you.
        </p>
        <p>
          I'm{" "}
          <span className={textHighlightClass}>open to new opportunities</span>.
          However, I'm NOT interested working in products that related to:
          gambling, adult content, credit, paylater, and conventional banking.
        </p>
        <p>Thanks for visiting!</p>
      </div>
    </div>
  );
}
