export function Categories({ CategoryName }: { CategoryName: string }) {
  return (
    <div className="h-6 place-content-center rounded-lg text-sm bg-lime-200 px-2 py-[2px] text-black">
      {CategoryName}
    </div>
  );
}
