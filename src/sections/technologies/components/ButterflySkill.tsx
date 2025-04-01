export default function ButterflySkill({ name, rate }: { name: string, rate: number }) {
  return (
    <div
      key={"tech_" + name}
      className="relative flex justify-center items-center pt-mono-rg space-x-4 my-8 w-full lg:w-fit" 
    >
      <img
        src={`/icons/technologies/${name}.svg`}
        alt={`${name} skill`}
        className={`${name === "figma" ? "scale-85" : ""} object-fit h-full size-4 slate`}
      />
      <span className="capitalize text-slate-200 font-bold w-28">{name}</span>
      <div className="flex space-x-2 w-[100%-112px]">
        {
          Array.from({ length: 10 }).map((_, index) => {
            return (
              <img key={"skill_" + index} src="/icons/butterfly/btf-icon.svg" alt="butterfly skill" className={`${rate <= index ? "opacity-40" : ""} w-2 md:w-4`} />
            );
          })
        }
      </div>
    </div>
  );
}