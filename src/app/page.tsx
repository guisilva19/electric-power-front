import Cycle from "@/components/Cycle/Cycle";
import Hero from "@/components/Hero/Hero";
import Panel from "@/components/Panel/Panel";
import Questions from "@/components/Questions/Questions";
import Steps from "@/components/Steps/Steps";

export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        <Cycle />
        <Steps />
        <Questions />
        <Panel />
      </main>
    </>
  );
}
