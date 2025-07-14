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
        Hi, <span className="text-[#F6983F]">Ilham Wahabi</span> here 👋
      </h1>
      <p className="mt-8 md:mt-16 text-base md:text-2xl">
        I'm an experienced software engineer currently work as a frontend
        engineer at <span className="text-[#F6983F]">Kargo Technologies</span>.
      </p>
      <p className="mt-8 text-base md:text-2xl">
        You can find out more about me{" "}
        <Link className="border-b border-b-slate-100" to="about">
          here
        </Link>
        .
      </p>
      <p className="mt-8 text-base md:text-2xl">
        I also <span className="text-[#F6983F]">write blog</span> about
        technology, opinion, and life journey ✍️ which you can{" "}
        <Link className="border-b border-b-slate-100" to="blog">
          read here
        </Link>
        .
      </p>
    </div>
  );
}
