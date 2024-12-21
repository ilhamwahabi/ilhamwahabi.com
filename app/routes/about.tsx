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
      <div className="mt-8 lg:mt-12 text-left space-y-6 md:space-y-8 text-base md:text-xl flex flex-col items-start w-full">
        <p>I'm a UI engineer based in Jakarta, Indonesia.</p>
        <p>
          Currently I'm working as a{" "}
          <span className="text-[#F6983F]">
            Frontend Engineer on Kargo Technologies
          </span>
          , a multinational Series A logistics company providing a range of
          products to streamline the shipping process.
        </p>
        <p>
          I'm graduated from{" "}
          <span className="text-[#F6983F]">Institut Teknologi Bandung</span>{" "}
          with a major in Informatics (Computer Science).
        </p>
        <p>
          I have over{" "}
          <span className="text-[#F6983F]">5 years of experience</span> as a
          Software Engineer especially on frontend side, and have worked across
          various industries with companies based in Indonesia and Singapore.
        </p>
        <p>
          I’m fluent in English, know how to craft clean and intuitive UIs, and
          possess experience in frontend performance optimization.
        </p>
        <p>Besides coding, I enjoy reading books and playing Badminton.</p>
        <p>
          I’m open to new opportunities! If you need assistance in creating
          outstanding UIs, feel free to reach out to me at{" "}
          <span className="text-[#F6983F]">
            ilhamwahabi.sikumbang@gmail.com
          </span>{" "}
          or contact me on{" "}
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
      </div>
    </div>
  );
}
