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
        Hi, <span className="text-sky-600">Ilham Wahabi</span> here 👋
      </h1>
      <p className="mt-8 md:mt-16 text-base md:text-2xl">
        I'm a software engineer currently work at{" "}
        <Link to="https://www.traveloka.com" target="_blank">
          <span className="text-sky-600">Traveloka</span>.
        </Link>
      </p>
      <p className="mt-8 text-base md:text-2xl">
        You can find out more about me{" "}
        <Link className="underline underline-offset-4" to="about">
          here
        </Link>
        .
      </p>
      <p className="mt-8 text-base md:text-2xl">
        I also <span className="text-sky-600">write blog</span> about
        technology, opinion, and life journey ✍️ which you can{" "}
        <Link className="underline underline-offset-4" to="blog">
          read here
        </Link>
        .
      </p>
    </div>
  );
}
