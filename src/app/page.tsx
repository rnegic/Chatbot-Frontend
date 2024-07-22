import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Blob from "@/components/layout/Blob/index";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="flex flex-col gap-10 mt-40 ml-32">
        <div className="flex flex-col text-textColorLight text-5xl font-bold leading-tight">
          <h1>An innovative journey</h1>
          <h1>with AI</h1>
          <h1>Free. Try now.</h1>
        </div>
        <Button className="w-48 h-12 bg-buttonBg text-textColorDark rounded-xl">
          Try now
        </Button>
        <div className="w-4/12 text-2xl text-textColorMid">
          An AI helper takes care of all your issues.

          It is capable of creating content of any

          intricacy and topic, crafting papers and

          summaries, penning a humorous narrative

          or proposing thoughts for upcoming plans.
        </div>
      </section>
      <div className="fixed right-12 top-2/3 -translate-y-1/2 z-0">
        <Blob></Blob>
      </div>
    </main>
  );
}