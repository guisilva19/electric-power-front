import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import arrow from "@/assets/arrow.svg";

export default function Steps({ step }: { step: number }) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <ul className="flex items-center gap-2 lg:gap-4 lg:w-[755px]">
        <li
          className={`w-10 h-10 md:w-12 md:h-12 ${
            step === 1 ? "bg-green-water" : "bg-transparent"
          } rounded-full flex items-center justify-center border-2 border-green-water`}
        >
          <p
            className={`justify-center font-semibold text-lg ${
              step !== 1 ? "text-green-water" : "text-white"
            }`}
          >
            1
          </p>
        </li>
        <FaArrowRightLong color="#38ADB6" className="flex lg:hidden" />
        <Image src={arrow} alt="seta" className="hidden lg:flex lg:w-24" />
        <li
          className={`w-10 h-10 md:w-12 md:h-12 ${
            step === 2 ? "bg-green-water" : "bg-transparent"
          } rounded-full flex items-center justify-center border-2 border-green-water`}
        >
          <p
            className={`justify-center font-semibold text-lg ${
              step !== 2 ? "text-green-water" : "text-white"
            }`}
          >
            2
          </p>
        </li>
        <FaArrowRightLong color="#38ADB6" className="flex lg:hidden" />
        <Image src={arrow} alt="seta" className="hidden lg:flex lg:w-24" />
        <li
          className={`w-10 h-10 md:w-12 md:h-12 ${
            step === 3 ? "bg-green-water" : "bg-transparent"
          } rounded-full flex items-center justify-center border-2 border-green-water`}
        >
          <p
            className={`justify-center font-semibold text-lg ${
              step !== 3 ? "text-green-water" : "text-white"
            }`}
          >
            3
          </p>
        </li>
        <FaArrowRightLong color="#38ADB6" className="flex lg:hidden" />
        <Image src={arrow} alt="seta" className="hidden lg:flex lg:w-24" />
        <li
          className={`w-10 h-10 md:w-12 md:h-12 ${
            step === 4 ? "bg-green-water" : "bg-transparent"
          } rounded-full flex items-center justify-center border-2 border-green-water`}
        >
          <p
            className={`justify-center font-semibold text-lg ${
              step !== 4 ? "text-green-water" : "text-white"
            }`}
          >
            4
          </p>
        </li>
        <FaArrowRightLong color="#38ADB6" className="flex lg:hidden" />
        <Image src={arrow} alt="seta" className="hidden lg:flex lg:w-24" />
        <li
          className={`w-10 h-10 md:w-12 md:h-12 ${
            step === 5 ? "bg-green-water" : "bg-transparent"
          } rounded-full flex items-center justify-center border-2 border-green-water`}
        >
          <p
            className={`justify-center font-semibold text-lg ${
              step !== 5 ? "text-green-water" : "text-white"
            }`}
          >
            5
          </p>
        </li>
      </ul>
      {/* <ul className="hidden lg:flex justify-between w-full lg:w-[840px]">
        <li className="flex items-center gap-2">
          <p className="font-medium">Insira seus dados</p>
        </li>
        <li className="flex items-center gap-2">
          <p className="font-medium">Insira seus dados</p>
        </li>
        <li className="flex items-center gap-2">
          <p className="font-medium">Insira seus dados</p>
        </li>
        <li className="flex items-center gap-2">
          <p className="font-medium">Valide dados</p>
        </li>
      </ul> */}
    </div>
  );
}
