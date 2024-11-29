import { NewsletterComponent } from "../components/NewsletterComponent";
import { TopBar } from "../components/Topbar";

export default function Newsletter() {
  return (
    <div className="space-y-5 md:space-y-8 lg:mx-28">
      <TopBar name="Aasif" />
      <NewsletterComponent />
    </div>
  );
}
