import { ChevronDown } from "lucide-react";
import Butterfly from "./components/Butterfly";
import { defaultButterflies } from "./configs/defaultButterflies";
import useButterflyEffect from "./hooks/useButterflyEffect";
import { useEffect, useState } from "react";

export default function Home({scroll}: {scroll: number}) {
	const { butterflies } = useButterflyEffect(defaultButterflies);
	const [inView, setInView] = useState(true)
	const [dimensions, setDimensions] = useState({
		width: 0,
		height: 0
	})

	useEffect(() => {
		const title = document.getElementById("home-title")
		const extraWidth = window.innerWidth >= 1024 ? 80 : 160
		if (title) {
			setDimensions({
				width: title.clientWidth + extraWidth,
				height: title.clientHeight
			})
		}
	}, [document.getElementById("home-title"), window.innerWidth])

	useEffect(() => {
		if(scroll < 2000)
		setInView(scroll < 200)
	}, [scroll])

	return (
		<section id="home" className="z-[0] w-screen h-screen flex flex-col items-center justify-center relative">
			<div
				style={{
					width: dimensions.width,
					height: dimensions.height
				}}
				className="w-full max-w-5xl h-screen absolute overflow-visible mb-32 lg:mb-20 transition-all surge-1">
				{butterflies.map((butterfly) => (
					<Butterfly
						key={"butterfly_"+butterfly.id}
						butterfly={butterfly}
					/>
				))}
			</div>

			<div id="home-title" className="flex flex-col relative top-[-5%] surge-0">
				<h1 className="text-3xl lg:text-5xl text-slate-200 bs-rg transition-all">hello, i am</h1>
				<h1 className="text-3xl lg:text-5xl text-fuchsia-600 pt-mono-rg transition-all">Bruna Pimenta</h1>
			</div>

			<a 
				href="#about me" 
				className={`${inView ? "" : "opacity-0"} transition-opacity absolute cursor-pointer bottom-10 group p-2 rounded-full hover:bg-slate-200`}
			>
				<ChevronDown className="text-slate-200 group-hover:text-slate-900 animate-bounce" />
			</a>
		</section>
	);
}