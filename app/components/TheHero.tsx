export function TheHeroComponent({ name }: { name: string }) {
  return (
    <div>
      <hr className="h-px border-0 bg-gray-200 dark:bg-gray-700" />
      <div className="flex w-full justify-center text-7xl font-extrabold md:text-[140px] lg:text-[227px]">
        {name}
      </div>
      <hr className="h-px border-0 bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}
