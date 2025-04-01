import { Project } from "../Projects";

export default function ButterflyProject({ project }: { project: Project }) {
  const { title, code, tags, link } = project



  return (
    <div className="group relative">
      <div className="flex space-x-10 pt-mono-rg w-full aspect-square">
        <img src={`/images/projects/${code}.png`} alt={"Projeto " + title} className="w-full h-auto object-cover" />
      </div>
      <div className="absolute bg-slate-800 pt-mono-rg w-full opacity-0 h-0 group-hover:h-full group-hover:opacity-100 transition-all top-0 flex flex-col items-center justify-center space-y-2">
        <span className="text-fuchsia-600 md:text-xl font-bold text-center">{title}</span>
        <span className="text-xs md:text-sm text-slate-400 italic uppercase text-center">{tags}</span>
        {
          link &&
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 mt-4 font-normal border-b hover:text-white transition">
            see more
          </a>
        }
      </div>
    </div>
  );
}