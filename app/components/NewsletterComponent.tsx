import EmailAndSubs from "./EmailAndSubs";
import { Footer } from "./Footer";

export function NewsletterComponent() {
  return (
    <div className="space-y-10 px-8">
      <div className="flex flex-col justify-center space-y-6">
        <div className="flex justify-center space-y-3">
          <div>
            <div className="flex justify-center">
              {" "}
              <h1 className="text-base font-semibold">Newsletters</h1>
            </div>
            <h1 className="text-3xl font-semibold md:text-5xl">
              Stories and interviews
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="mt-3 text-xl">
            Subscribe to learn about new product features, the latest in
            technology solutions and updates.
          </p>
        </div>
      </div>
      <EmailAndSubs />
      <Footer/>
    </div>
  );
}
