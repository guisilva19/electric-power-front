import Image from "next/image";

export default function CardProject({ item }: { item: any }) {
  return (
    <>
      <li className="w-11/12 h-max sm:w-[450px] x:w-[500px] xl:w-[550px] flex flex-col lg:gap-2">
        <Image src={item.src} alt="" className="w-full"/>
        <div className="mt-2">
          <h3 className="font-bold text-base leading-5">{item.title}</h3>
          <p className="leading-5 text-slate-500 text-sm">{item.description}</p>
        </div>
      </li>
    </>
  );
}
