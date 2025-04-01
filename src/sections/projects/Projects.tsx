import { useInView } from "react-intersection-observer";
import Container from "../../components/container/Container";
import ButterflyProject from "./components/ButterflyProject";
import Title from "../../components/title/Title";

export interface Project {
  code: string
  title: string
  tags: string
  link?: string
}

export default function Projects() {
  const [refTitle, inViewTitle] = useInView({ triggerOnce: true });
  const [refList, inViewList] = useInView({ triggerOnce: true });
  
  const projects: Project[] = [
    { code: "doae", title: "Doaê", tags: "App | Web | UI/UX" },
    { code: "caronae", title: "Caronaê", tags: "App", link: "https://caronae.org" },
    { code: "noticeme", title: "Notice.me", tags: "App", link: "https://github.com/brunapr/Notice.me" },
    { code: "nutrime", title: "Nutri.me", tags: "UI/UX", link: "https://www.behance.net/gallery/140113727/nutrime" },
    { code: "cleanmarine", title: "Clean Marine", tags: "UI/UX" },
    { code: "happy", title: "Happy", tags: "Web", link: "https://github.com/brunapr/Happy" },
    { code: "lavanda", title: "Lavanda", tags: "UI/UX" },
    { code: "hommy", title: "Hommy", tags: "Web", link: "https://github.com/brunapr/hommy-landing" },
    { code: "pokefile", title: "Pokéfile", tags: "Web", link: "https://github.com/andradenathan/pokefile" },
  ]

  return (
    <section className="z-[0] w-screen h-fit pt-0 pb-10 md:pb-24 md:pt-6 flex flex-col items-center justify-center relative bg-slate-900">
      <Container className="flex flex-col items-center pt-8 md:pt-24 space-y-12 md:space-y-16 lg:space-y-24">
        <Title ref={refTitle} inView={inViewTitle} title="projects"/>
        <div ref={refList} className={`${inViewList ? "surge-1" : ""} w-full max-w-2xl grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 opacity-0`}>
          {
            projects.map((project: Project) => {
              return (
                <ButterflyProject key={"project_" + project.code} project={project} />
              );
            })
          }
        </div>
      </Container>
    </section>
  );
}