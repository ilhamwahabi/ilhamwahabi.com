import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
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
      <h1 className="text-center text-xl md:text-4xl">A little about me… </h1>
      <div className="mt-8 lg:mt-12 text-left space-y-6 md:space-y-8 text-base md:text-xl flex flex-col items-start w-full">
        <p>I'm a UI engineer based in Jakarta, Indonesia.</p>
        <p>
          Currently I'm working as a{" "}
          <span className="text-[#F6983F]">
            Frontend Engineer on Kargo Technologies
          </span>
          , a multinational Series A-funded logistics company based in
          Indonesia.
        </p>
        <p>
          I'm graduated from{" "}
          <span className="text-[#F6983F]">Institut Teknologi Bandung</span>{" "}
          with a major in Informatics (Computer Science). One of the best places
          to study computer science in Indonesia.
        </p>
        <p>
          I have over{" "}
          <span className="text-[#F6983F]">5 years of experience</span> as a
          Software Engineer especially on frontend web development, and have
          worked across various industries with companies based in Indonesia and
          Singapore, remote and onsite.
        </p>
        <p>
          I’m fluent in English, know how to craft clean and intuitive UIs, have
          experience in recruit & led teams, and possess experience in frontend
          performance optimization.
        </p>
        <p>
          Although I have more{" "}
          <span className="text-[#F6983F]">
            extensive experience with React.js
          </span>
          , I’m able to working with other technologies, including mobile
          development, since I believe that the main principles of UI
          development remain the same.
        </p>
        <p>
          I also utilize AI in my development process, ensuring{" "}
          <span className="text-[#F6983F]">
            faster and efficient work results
          </span>
          .
        </p>
        <p>
          Aside from coding, I enjoy reading books and staying active through
          sports like gym workouts, swimming, and badminton, which help keep{" "}
          <span className="text-[#F6983F]">
            my mind and body in excellent shape
          </span>{" "}
          for professional work.
        </p>
        <p>
          If you’re interested about me and would like to have a chat, feel free
          to{" "}
          <Link className="border-b border-b-slate-100" to="/contact">
            reach out to me here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
