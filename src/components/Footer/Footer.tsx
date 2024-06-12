import { Divider } from "@nextui-org/divider";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

import Image from "next/image";
import LogoWhite from "../../assets/logo-white.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray w-screen h-52 flex justify-center py-10">
        <div className="w-11/12 h-full flex flex-col justify-between xl:w-[1240px]">
          <section className="flex justify-between w-full items-center sm:px-5">
            <figure>
              <Image src={LogoWhite} alt="LOGO EP WHITE" />
            </figure>
            <div className="flex gap-5">
              <FaInstagram color="white" size={26} />
              <FaFacebook color="white" size={26} />
              <FaLinkedin color="white" size={26} />
            </div>
            <Link
              href=""
              className="text-sm px-5 py-3 rounded-full border-white border-1 font-bold text-white hidden sm:flex"
            >
              Solicitar orçamento
            </Link>
          </section>

          <Divider
            orientation="horizontal"
            className="h-0.5 bg-white opacity-10 w-full"
          />

          <section
            className="flex flex-col items-center justify-between text-white h-2/6 lg:flex-row w-full
          "
          >
            <p className="text-[10px] sm:text-xs font-light">
              Rua Dr. José Humberto Nunes, Nº 381, Paraiso, Guanambi - BA
            </p>
            <p className="text-[10px] sm:text-xs font-light">
              Electric Power – Todos os direitos reservados 2024
            </p>
          </section>
        </div>
      </footer>
    </>
  );
}
