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
        Hello There!
      </h1>
      <p className="mt-8 md:mt-16 text-base md:text-2xl">
        This is my personal website for sharing what I think, what I did, and
        what I do.
      </p>
      <p className="mt-8 text-base md:text-2xl">
        I write about{" "}
        <span className="text-[#F6983F]">
          technology, opinion, and life journey ✍️
        </span>{" "}
        which you can{" "}
        <Link className="border-b border-b-slate-100" to="blog">
          read here
        </Link>
        .
      </p>
      <p className="mt-8 text-base md:text-2xl">
        If you’d like to learn more about me, you can{" "}
        <Link className="border-b border-b-slate-100" to="about">
          find out here
        </Link>
        .
      </p>
      <p className="mt-8 text-base md:text-2xl">
        Or if you want to{" "}
        <span className="text-[#F6983F]">
          discuss an exciting opportunity 🤝
        </span>{" "}
        feel free to{" "}
        <Link className="border-b border-b-slate-100" to="contact">
          reach out here
        </Link>
        .
      </p>
    </div>
  );
}
