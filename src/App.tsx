import { useState } from "react";
import Divider from "./components/divider/Divider";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/about/About";
import Experiences from "./sections/experiences/Experiences";
import Home from "./sections/home/Home";
import Projects from "./sections/projects/Projects";
import Technologies from "./sections/technologies/Technologies";

function App() {
  const [scroll, setScroll] = useState(0)

  const sections = [
    { id: "home", component: <Home scroll={scroll}/> },
    { id: "about", component: <About /> },
    { id: "technologies", component: <Technologies /> },
    { id: "experiences", component: <Experiences /> },
    { id: "projects", component: <Projects /> },
  ]

  function handleScroll(div: HTMLDivElement) {
    if(div.scrollTop < 2000)
    setScroll(div.scrollTop)
  }

  return (
    <div onScroll={(e) => {handleScroll(e.target as HTMLDivElement)}} className="bg-slate-900 h-screen overflow-x-hidden overflow-y-scroll">
      <Navbar />
      {
        sections.map(({ id, component }, index) => (
          <div key={"section_"+id}>
            {component}
            {index !== 0 && <Divider />}
          </div>
        ))}
      <Footer />
    </div>
  )
}

export default App
