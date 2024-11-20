import MenuIcon from "@mui/icons-material/Menu";

export function TopBar({ name }: { name: string }) {
  return (
    <div className="p-4 text-xl font-bold flex justify-between">
      <div>{name}</div>
      <MenuIcon/>
    </div>
  );
}
