import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { getMeta } from "~/utils/seo";

export const meta: V2_MetaFunction = () => {
  return getMeta({
    title: "",
    description: "Personal website for sharing",
    url: "",
    keywords: "",
  });
};

export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center p-6 lg:p-16">
      <h1 className="text-center text-2xl md:text-4xl">
        Welcome to <span className="text-[#F6983F]">ilhamwahabi.com</span>
      </h1>
      <p className="mt-16 text-base md:text-2xl text-center">
        Preparing something interesting here
      </p>
      <p className="mt-4 text-base md:text-2xl text-center">
        Why don't you{" "}
        <Link className="underline" to="project">
          take a look at my other projects
        </Link>
        ?
      </p>
    </div>
  );
}
