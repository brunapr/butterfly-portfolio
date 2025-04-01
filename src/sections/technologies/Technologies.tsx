import { useInView } from "react-intersection-observer";
import Container from "../../components/container/Container";
import ButterflySkill from "./components/ButterflySkill";
import Title from "../../components/title/Title";

export default function Technologies() {
  const [refTitle, inViewTitle] = useInView({ triggerOnce: true });
  const [refList, inViewList] = useInView({ triggerOnce: true });
  
  const techs = [
    { name: "html", rate: 10 },
    { name: "react", rate: 8 },
    { name: "css", rate: 10 },
    { name: "nextJs", rate: 7 },
    { name: "typescript", rate: 7 },
    { name: "svelte", rate: 6 },
    { name: "figma", rate: 6 },
    { name: "flutter", rate: 3 }
  ]

  return (
    <section className="z-[0] w-screen h-fit pb-10 md:pb-20 pt-0 md:pt-6 flex flex-col items-center justify-center relative bg-slate-900">
      <Container className="flex flex-col space-y-6 pt-8 md:pt-24 md:space-y-12 lg:space-y-24 items-center ">
        <Title ref={refTitle} inView={inViewTitle} title="technologies"/>
        <div 
          ref={refList} 
          className={`${inViewList ? "surge-1" : ""} 
          w-full justify-center items-center lg:w-fit flex flex-col lg:flex-row flex-wrap lg:justify-between opacity-0`}
        >
          {
            techs.map(({ name, rate }) => {
              return (
                <ButterflySkill key={"skill_" + name} name={name} rate={rate} />
              );
            })
          }
        </div>
      </Container>
    </section>
  );
}