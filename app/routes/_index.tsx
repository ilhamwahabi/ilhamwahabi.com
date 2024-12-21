import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { getMeta } from "~/utils/seo";

export const meta: V2_MetaFunction = () => {
  return getMeta({
    title: "",
    description: "Personal website for sharing things",
    url: "",
    keywords: "",
  });
};

export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center p-6 lg:p-16">
      <h1 className="text-center text-2xl md:text-4xl">Hello There!</h1>
      <p className="mt-8 md:mt-16 text-base md:text-2xl text-center">
        This is my personal website for sharing various things.
      </p>
      <p className="mt-8 text-base md:text-2xl text-center">
        I write about{" "}
        <span className="text-[#F6983F]">
          tech, thoughts, and my life journey ✍️
        </span>{" "}
        which you can{" "}
        <Link className="border-b border-b-slate-100" to="blog">
          read here
        </Link>
        .
      </p>
      <p className="mt-8 text-base md:text-2xl text-center">
        Sometimes I <span className="text-[#F6983F]">give a talks 👨</span>{" "}
        which you can{" "}
        <Link className="border-b border-b-slate-100" to="talk">
          find here
        </Link>
        .
      </p>
      <p className="mt-8 text-base md:text-2xl text-center">
        I've also{" "}
        <span className="text-[#F6983F]">created some side projects 👨‍💻</span>{" "}
        that you can{" "}
        <Link className="border-b border-b-slate-100" to="project">
          take a look at here
        </Link>
        .
      </p>
      <p className="mt-8 text-base md:text-2xl text-center">
        If you’d like to learn more about me or{" "}
        <span className="text-[#F6983F]">
          discuss an exciting opportunity 🤝
        </span>{" "}
        feel free to{" "}
        <Link className="border-b border-b-slate-100" to="about">
          reach out here
        </Link>
        .
      </p>
    </div>
  );
}
