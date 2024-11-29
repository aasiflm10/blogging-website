export function TheHeroComponent({name} : {name : string}) {
  return (
    <div>
      <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex w-full font-extrabold text-7xl md:text-[160px] justify-center lg:text-[227px]">
        {name}
      </div>
      <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}
