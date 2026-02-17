import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { getMeta } from "~/utils/seo";

export const meta: V2_MetaFunction = () => {
  return getMeta({
    title: "",
    description: "UI Engineer based in Jakarta, Indonesia",
    url: "",
    keywords: "",
  });
};

export default function Index() {
  return (
    <div className="flex flex-col justify-center items-start p-6 lg:p-16">
      <h1 className="text-center text-2xl md:text-4xl self-center">
        Hi, <span className="text-sky-600">Ilham</span> here 👋
      </h1>
      <p className="mt-8 md:mt-16 text-base md:text-2xl">
        I'm a software engineer currently work at{" "}
        <Link to="https://www.traveloka.com" target="_blank">
          <span className="text-sky-600">Traveloka</span>
          <img
            src="/traveloka-logo.png"
            alt="Traveloka"
            className="inline-block h-8 w-8 -mt-2"
          />
        </Link>
      </p>
      <p className="mt-8 text-base md:text-2xl">
        I bring{" "}
        <span className="text-sky-600">
          {new Date().getFullYear() - 2020 - 1} years of experience
        </span>{" "}
        on building products that generate billions in
        revenue, being used by large enterprises, and have expanded to multiple
        countries.
      </p>
      <p className="mt-8 text-base md:text-2xl">
        You can find out more about me{" "}
        <Link className="underline underline-offset-4" to="about">
          here
        </Link>
        .
      </p>
      <p className="mt-8 text-base md:text-2xl">
        I also <span className="text-sky-600">write blog</span> on technology,
        opinions, and my life journey ✍️ which you can{" "}
        <Link className="underline underline-offset-4" to="blog">
          read here
        </Link>
        .
      </p>
    </div>
  );
}
