import { ReactNode } from "react";

export default function Container({
  children, 
  className
}: {
  children: ReactNode, 
  className?: string
}) {
  return(
    <div className={`${className} max-w-5xl w-full py-24 px-4 md:px-12 lg:px-2 transition-all`}>
      {children}
    </div>
  );
}