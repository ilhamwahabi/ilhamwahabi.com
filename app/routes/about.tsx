import type { V2_MetaFunction } from "@remix-run/node";
import { getMeta } from "~/utils/seo";

export const meta: V2_MetaFunction = () => {
  return getMeta({
    title: "About",
    description: "Know more about me 👋",
    url: "/about",
    keywords: "about,tentang",
  });
};

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center p-6 lg:p-16">
      <h1 className="text-center text-xl md:text-4xl">
        Hi, <span className="text-[#F6983F]">Ilham Wahabi</span> here 👋
      </h1>
      <div className="mt-8 lg:mt-12 text-left space-y-8 text-base md:text-xl flex flex-col items-start w-full">
        <p>I'm a frontend developer based in Bandung, Indonesia.</p>
        <p>
          Graduated from Institut Teknologi Bandung with a major in Informatics
          Engineering (Computer Science).
        </p>
        <p>Interested in SEO, accessibility, and performance optimization.</p>
        <p>Besides coding, I enjoy reading books and playing badminton.</p>
        <p>If you have an interesting opportunity, please let me know 👇</p>
      </div>
    </div>
  );
}
