import Panel from "@/components/Panel/Panel";
import Questions from "@/components/Questions/Questions";
import Steps from "@/components/Steps/Steps";

export default function Home() {
  return (
    <>
      <main className="">
        <Steps />
        <Questions />
        <Panel />
      </main>
    </>
  );
}
