import { Experience } from "../Experiences";

export default function ButterflyExperience({ experience }: { experience: Experience }) {
  const { title, subtitle, time, list } = experience

  return (
    <div className="flex space-x-4 lg:space-x-10 pt-mono-rg w-full">
      <div className="flex flex-col space-y-8 w-12 md:w-10 lg:w-8 items-center justify-start mt-0.5">
        <img src="/icons/butterfly/btf-icon.svg" alt="butterfly experience dot" />
        <div className="w-[2px] h-full bg-slate-600 rounded-full" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl text-fuchsia-600 pt-1 font-bold">{title}</h1>
        <div className="flex flex-col md:flex-row space-x-4 md:items-center">
          <h2 className="italic text-slate-400">{subtitle}</h2>
          <span className="text-slate-600">| {time}</span>
        </div>
        <div className="mt-4 text-slate-300 space-y-4">
          {
            list.map((item: string, index) => {
              return (
                <div key={"experience_" + index} className="flex space-x-4">
                  <span>•</span>
                  <span>{item}</span>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}