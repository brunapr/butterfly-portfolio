import { Ref } from "react";

export default function Title({
  ref, 
  inView, 
  title
}: {
  ref: Ref<HTMLHeadingElement> | undefined, 
  inView: boolean, 
  title: string
}) {
  return(
    <h1 
      id={title}
      ref={ref} 
      className={`${inView ? "surge-0" : ""} 
      bs-rg text-3xl lg:text-5xl text-slate-200 leading-16 w-full text-center opacity-0 pt-[124px] transition-all`}>
      {title}
    </h1>
  );
}