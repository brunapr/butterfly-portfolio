import { useState, useEffect } from "react";
import './styles.css';
import { Github, Linkedin, LucideIcon } from "lucide-react";

function ContactButton({ link, Icon }: { link: string, Icon: LucideIcon }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit flex items-center justify-center z-[3] relative"
    >
      <Icon className="text-slate-200 fill-slate-200" size={24} />
    </a>
  );
}

function DropdownItem({ 
  name, 
  setClick 
}: { 
  name: string, 
  setClick: (click: boolean) => void 
}) {
  function handleClick() {
    setTimeout(() => {
      setClick(false)
    }, 500)
  }

  return (
    <a href={`#${name}`} onClick={handleClick} className="text-slate-200 font-bold py-3 pt-mono-rg text-center w-full hover:bg-fuchsia-600 transition capitalize">
      {name}
    </a>
  );
}

export default function Navbar() {
  const [click, setClick] = useState(false);

  const links = [
    "https://www.linkedin.com/in/prbruna/?locale=en_US",
    "https://github.com/brunapr",
  ]

  const menuLinks = [
    "home",
    "about me",
    "technologies",
    "experiences",
    "projects",
  ]

  useEffect(() => {
    const left = document.getElementById("left-line");
    const right = document.getElementById("right-line");
    // const dropdown = document.getElementById("dropdown");

    if (left && right) {
      if (click) {
        left.classList.add("left-line");
        right.classList.add("right-line");
        // dropdown.classList.add("expand");
      } else {
        // dropdown.classList.remove("expand");
        left.classList.remove("left-line");
        right.classList.remove("right-line");
      }
    }
  }, [click]);

  return (
    <div className="z-10 fixed w-full h-20 flex items-center justify-center backdrop-blur-xl">
      <div className="relative max-w-5xl w-full h-full py-16 px-4 md:px-8 lg:p-2 flex justify-between items-center transition-all">
        <a href="#home" className="h-20 text-white bs-rg flex justify-center items-center">
          <h1 className="text-3xl mb-2 ml-2 md:ml-0">bp</h1>
        </a>
        <div className="relative flex items-center space-x-8">
          <ContactButton link={links[1]} Icon={Github}/>
          <ContactButton link={links[0]} Icon={Linkedin}/>
          <button
            onClick={() => { setClick(!click) }}
            className="menu z-[3] relative"
          >
            <div id="left-line" className="line bg-slate-200" />
            <div id="right-line" className="line bg-slate-200" />
          </button>
          <div className={`${click ? "opacity-100 h-96" : "pointer-events-none"} flex flex-col items-center justify-center z-[2] h-0 opacity-0 right-[-8px] top-4 absolute transition-all w-[calc(100%+24px)] bg-slate-800 pt-16 pb-6 px-4`}>
            {
              menuLinks.map((name: string) => {
                return(
                  <DropdownItem key={"dropdown_"+name} name={name} setClick={setClick}/>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}