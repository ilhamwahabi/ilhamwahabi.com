import type { V2_MetaFunction } from "@remix-run/node";
import { getMeta } from "~/utils/seo";

export const meta: V2_MetaFunction = () => {
  return getMeta({
    title: "Contact",
    description: "Get in touch with me 👋",
    url: "/contact",
    keywords: "contact,hubungi",
  });
};

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center p-6 lg:p-16">
      <h1 className="text-center text-xl md:text-4xl">Get in touch with me</h1>
      <div className="mt-8 lg:mt-12 text-left space-y-6 md:space-y-8 text-base md:text-xl flex flex-col items-start w-full">
        <p>
          I’m open for new opportunities! If you need someone who can assist you
          related to UI development, feel free to reach out to me at{" "}
          <span className="text-[#F6983F]">
            ilhamwahabi.sikumbang@gmail.com
          </span>
          .
        </p>
        <p>
          Or you can also contact me on{" "}
          <a
            href="https://www.linkedin.com/in/ilhamwahabi"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-b-slate-50"
          >
            LinkedIn
          </a>
          .
        </p>
        <p>I'll be waiting for your message! Let's have a chat and discuss.</p>
      </div>
    </div>
  );
}
