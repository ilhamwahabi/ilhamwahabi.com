import { Link, createFileRoute } from "@tanstack/react-router";
import { usePostHog } from "@posthog/react";
import { getSeoHead } from "#/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...getSeoHead({
      title: "",
      description: "UI Engineer based in Jakarta, Indonesia",
      url: "",
      keywords: "",
    }),
  }),
  component: Index,
});

function Index() {
  const posthog = usePostHog();

  return (
    <div className="py-10 lg:py-20">
      <section className="grid items-center gap-10 rounded-[2.5rem] border border-white/80 bg-white/75 p-6 shadow-xl shadow-slate-200/60 backdrop-blur md:grid-cols-[1.15fr_0.85fr] md:p-10 lg:p-14">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
            Frontend-focused Product Engineer
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
            Hi, <span className="text-sky-600">Ilham</span> here.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
            I love building products with great user experiences that are being
            used by many people
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800"
              to="/about"
              onClick={() =>
                posthog.capture("home_cta_clicked", { cta: "about_me" })
              }
            >
              About me
            </Link>
            <Link
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700 hover:shadow-sm"
              to="/blog"
              onClick={() =>
                posthog.capture("home_cta_clicked", { cta: "read_blog" })
              }
            >
              Read Blog
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-slate-950 to-slate-800 p-6 text-white shadow-2xl shadow-slate-300/70">
          <p className="text-sm uppercase tracking-[0.28em] text-sky-200">
            Currently
          </p>
          <p className="mt-4 text-2xl font-semibold leading-snug">
            Software Engineer at{" "}
            <a
              href="https://www.traveloka.com"
              target="_blank"
              rel="noreferrer"
              className="text-sky-300"
            >
              Traveloka
            </a>
            <img
              src="/traveloka-logo.png"
              alt="Traveloka"
              className="-mt-2 ml-1 inline-block h-8 w-8"
            />
          </p>
          <p className="mt-6 text-sm leading-7 text-slate-300">
            Part of the Bus & Train team. I drive business growth by developing
            new features and improving existing customer-facing and internal
            apps.
          </p>
        </div>
      </section>

      <section className="mt-6 flex flex-col gap-6 rounded-[2rem] border border-sky-200/80 bg-gradient-to-br from-sky-50 to-white p-6 shadow-lg shadow-sky-100/80 md:flex-row md:items-center md:justify-between md:p-8 lg:mt-8">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-sky-600">
            Available for
          </p>
          <p className="mt-3 text-2xl font-semibold text-slate-950">
            Paid 1:1 sessions
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Discuss career, interviews, tech, or anything else you'd like to
            talk through.
          </p>
        </div>
        <a
          className="inline-flex shrink-0 self-start rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md md:self-center"
          href="https://cal.com/ilham-wahabi/1-1"
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            posthog.capture("home_cta_clicked", { cta: "book_paid_1_1" })
          }
        >
          Book a session
        </a>
      </section>
    </div>
  );
}
