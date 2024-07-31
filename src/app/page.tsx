import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Blob from "@/components/layout/Blob/index";
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="flex flex-col gap-10 mt-40 m-16 xl:ml-32">
        <div className="flex flex-col text-textColorLight font-bold leading-tight text-3xl 2xl:text-5xl xl:text-4xl">
          <h1>An innovative journey</h1>
          <h1>with AI</h1>
          <h1>Free. Try now.</h1>
        </div>

        <Button asChild className="w-48 h-12 bg-buttonBg text-textColorDark rounded-xl hover:bg-blue-200">
          <Link href="/chat" passHref>
            Try now
          </Link>
        </Button>

        <div className="w-10/12 text-xl sm:text-2xl text-textColorMid xl:w-4/12 ">
          An AI helper takes care of all your issues.

          It is capable of creating content of any

          intricacy and topic, crafting papers and

          summaries, penning a humorous narrative

          or proposing thoughts for upcoming plans.
        </div>
      </section>
      <div className="fixed right-12 top-2/3 -translate-y-1/2 z-0">
        <div className="hidden xl:block">
          <Blob></Blob>
        </div>
      </div>
    </main >
  );
}