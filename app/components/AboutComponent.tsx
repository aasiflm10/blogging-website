export function AboutComponent({
  heading,
  para,
}: {
  heading: string;
  para: string;
}) {
   return <div className="space-y-3">
    <h1 className="font-semibold text-2xl">{heading}</h1>
    <p className="text-lg">{para}</p>
  </div>;
}
