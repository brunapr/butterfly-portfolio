function SkillIcon({ active }: {active: boolean}) {
  return(
    <img 
      src="/icons/butterfly/btf-icon.svg" 
      alt="Ícone de habilidade" 
      className={`w-4 ${active ? '' : 'opacity-40'}`}
      aria-hidden="true"
    />
  );
}

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
      <div className="hidden md:flex gap-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <SkillIcon 
            key={`skill_${index}`}
            active={rate > index}
          />
        ))}
      </div>

      <div className="flex md:hidden gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <SkillIcon 
            key={`skill_mobile_${index}`}
            active={rate/2 > index}
          />
        ))}
      </div>
    </div>
  );
}