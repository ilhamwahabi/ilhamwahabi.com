import type { V2_MetaFunction } from "@remix-run/node";
import { getMeta } from "../utils/seo";

export const meta: V2_MetaFunction = () => {
  return getMeta({
    title: "",
    description: "Website pribadi tempat berbagi",
    url: "",
    keywords: "",
  });
};

export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center p-6 lg:p-16">
      <h1 className="text-center text-2xl md:text-4xl">
        Selamat datang di{" "}
        <span className="text-[#F6983F]">ilhamwahabi.com</span>
      </h1>
      <p className="mt-16 text-base md:text-2xl text-center">
        Lagi nyiapin hal yang menarik disini
      </p>
      <p className="mt-4 text-base md:text-2xl text-center">
        Silakan liat-liat yang lain dulu aja ya
      </p>
    </div>
  );
}
