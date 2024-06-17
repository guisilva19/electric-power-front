import Cycle from "@/components/Cycle/Cycle";
import Panel from "@/components/Panel/Panel";
import Questions from "@/components/Questions/Questions";
import Steps from "@/components/Steps/Steps";

export default function Home() {
  return (
    <>
      <main className="">
        <Cycle />
        <Steps />
        <Questions />
        <Panel />
      </main>
    </>
  );
}
