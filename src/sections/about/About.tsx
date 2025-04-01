import Container from "../../components/container/Container";
import { useInView } from "react-intersection-observer";
import Title from "../../components/title/Title";


export default function About() {
  const [refTitle, inViewTitle] = useInView({ triggerOnce: true });
  const [refText, inViewText] = useInView({ triggerOnce: true });
  const [refImage, inViewImage] = useInView({ triggerOnce: true });

  return (
    <section className="z-[0] w-screen h-fit pb-10 md:pb-24 pt-0 flex flex-col items-center justify-center relative text-slate-200 pt-mono-rg">
      <Container className="flex flex-col pt-0 md:pt-24 space-y-6 md:space-y-12 w-full justify-between items-center">
        <Title ref={refTitle} inView={inViewTitle} title="about me"/>
        <div className="lg:w-[65%] text-justify flex flex-col space-y-10 items-center">
          <div 
            ref={refText} 
            className={`${inViewText ? "surge-1" : ""} 
            space-y-10 flex flex-col justify-between h-full opacity-0`}
          >
            <div className="space-y-4">
              <p>I'm a <b className="bg-fuchsia-600">front-end developer</b> who discovered my passion for the field when I joined <b>UFRJ</b> and participated in <b>EJCM</b>, a Junior Enterprise.</p>
              <p>My goal is to create interfaces that not only work but tell stories and solve <b>real problems</b>. To me, seeing everything come together in code is like <b className="text-fuchsia-600">magic</b>!</p>
            </div>
          </div>
          
          <div 
            ref={refImage} 
            className={`${inViewImage ? "surge-1" : ""} 
            flex flex-col space-y-4 w-32 md:w-40 lg:w-72 border-slate-200 opacity-0`}
          >
            <img src="/images/btf-silhouette.svg" alt="Bruna Pimenta" />
          </div>
        </div>
      </Container>
    </section>
  );
}