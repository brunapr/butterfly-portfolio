import { useInView } from "react-intersection-observer";
import Container from "../../components/container/Container";
import Title from "../../components/title/Title";
import ButterflyExperience from "./components/ButterflyExperience";

export interface Experience {
  year: string
  title: string
  subtitle: string
  time: string
  list: string[]
}

export default function Experiences() {
  const [refTitle, inViewTitle] = useInView({ triggerOnce: true });
  const [refList, inViewList] = useInView({ triggerOnce: true });

  const experiences: Experience[] = [
    {
      year: "2025",
      title: "Blocks",
      subtitle: "Professional Experience",
      time: "2023 - 2025",
      list: [
        "Development of a BIM objects plugin for Revit using Svelte",
        "Dark Mode implementation for the Revit plugin",
        "Development of the plugin's Year-in-Review feature for users",
        "Company CMS development with ReactJs",
        "Company website development with NextJs",
        "White-label Catalog solution development in NextJs",
      ]
    },
    {
      year: "2023",
      title: "Caronaê",
      subtitle: "University Extension Project",
      time: "2022 - 2023",
      list: [
        "Caronaê app development using React Native and Expo",
        "Front-end team organization, sprint planning and task refinement",
        "Participation in app prototyping with Figma",
      ]
    },
    {
      year: "2022",
      title: "PSR",
      subtitle: "Internship",
      time: "2021 - 2022",
      list: [
        "Maintenance of main platform using HTML, CSS, jQuery and JavaScript",
        "Platform redesign and prototyping with Figma",
        "Internal CMS development with ReactJs",
      ]
    },
    {
      year: "2021",
      title: "EJCM",
      subtitle: "Junior Enterprise",
      time: "2020 - 2021",
      list: [
        "Initiative to adopt React in the company",
        "App development with React Native and Ionic",
        "Project prototyping with Figma",
        "Trainee training in CSS and front-end/back-end integration",
        "Code reviews and sprint organization"
      ]
    },
  ]

  return (
    <section className="z-[0] w-screen h-fit pb-10 md:pb-24 pt-0 md:pt-6 flex flex-col items-center justify-center relative bg-slate-900">
      <Container className="flex flex-col items-center pt-8 md:pt-24 space-y-12 md:space-y-16 lg:space-y-24">
        <Title ref={refTitle} inView={inViewTitle} title="experiences"/>
        <div 
          ref={refList} 
          className={`${inViewList ? "surge-1" : ""} 
          lg:w-[80%] space-y-8 flex flex-col items-center opacity-0`}
        >
          {
            experiences.map((experience: Experience) => {
              return (
                <ButterflyExperience key={"experience_" + experience.title} experience={experience} />
              );
            })
          }
        </div>
      </Container>
    </section>
  );
}