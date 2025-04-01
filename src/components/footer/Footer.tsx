import { ChevronUp } from "lucide-react";

export default function Footer() {
  return(
    <div className="z-[2] w-screen h-14 bg-fuchsia-600 pt-mono-rg text-slate-200 flex justify-center items-center relative">
			<a href="#home" className="bg-fuchsia-600 absolute cursor-pointer bottom-10 group p-2 rounded-full hover:bg-slate-200 transition">
				<ChevronUp className="text-slate-200 group-hover:text-slate-900"/>
			</a>
      Copyright @ Bruna Pimenta 2025
    </div>
  );
}