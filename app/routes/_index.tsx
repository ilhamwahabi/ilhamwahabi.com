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
      <h1 className="text-center text-2xl md:text-4xl">Hello there!</h1>
      <p className="mt-8 md:mt-16 text-base md:text-2xl text-center">
        This is my personal website for sharing many things.
      </p>
      <p className="mt-12 text-base md:text-2xl text-center">
        I wrote about{" "}
        <span className="text-[#F6983F]">
          tech, thought, and life journey ✍️
        </span>{" "}
        that you can{" "}
        <Link className="border-b border-b-white" to="blog">
          read here
        </Link>
        .
      </p>
      <p className="mt-8 text-base md:text-2xl text-center">
        Sometimes I <span className="text-[#F6983F]">give a talk 👨</span> which
        you can{" "}
        <Link className="border-b border-b-white" to="talk">
          see here
        </Link>
        .
      </p>
      <p className="mt-8 text-base md:text-2xl text-center">
        I'm also{" "}
        <span className="text-[#F6983F]">made some side projects 👨‍💻</span> that
        you can{" "}
        <Link className="border-b border-b-white" to="project">
          take a look here
        </Link>
        .
      </p>
    </div>
  );
}
