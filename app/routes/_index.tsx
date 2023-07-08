import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Ilham Wahabi" },
    {
      name: "description",
      content: "Welcome to Ilham Wahabi personal website",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center p-16 bg-[#21292E] text-white leading-[1.8]">
      <h1 className="text-center text-3xl md:text-4xl">
        Welcome to <span className="text-[#F6983F]">ilhamwahabi.com</span>
      </h1>
    </div>
  );
}
