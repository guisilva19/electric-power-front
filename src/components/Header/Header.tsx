"use client";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import Link from "next/link";
import { CgMenuLeft } from "react-icons/cg";
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
} from "@nextui-org/react";

export default function Header() {
  return (
    <>
      <header className="w-screen h-16 bg-green-water">
        <div className="w-full h-full px-10 flex items-center justify-between lg:px-20 xl:px-0 xl:w-[1240px] xl:mx-auto">
          <figure className="">
            <Link href="/">
              <Image src={Logo} alt="LOGO EP" width={90} />
            </Link>
          </figure>

          <nav className="hidden lg:flex items-center gap-14 lg:gap-24 text-white h-full">
            <ul className="flex gap-10">
              <li>
                <Link href="/homologação" className="text-sm font-normal">
                  Homologação
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="text-sm font-normal">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/serviços" className="text-sm font-normal">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm font-normal">
                  Contato
                </Link>
              </li>
            </ul>
            <Link
              href="#"
              className="text-sm px-5 py-2 bg-gray flex items-center text-center rounded-full font-semibold"
            >
              Solicitar orçamento
            </Link>
          </nav>

          <nav className="flex lg:hidden">
            <Dropdown backdrop="opaque">
              <DropdownTrigger>
                <button className="outline-none">
                  <CgMenuLeft size={40} color="white" />
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Link Actions">
                <DropdownItem key="homologação" href="/homologação">
                  Homologação
                </DropdownItem>
                <DropdownItem key="projetos" href="/projetos">
                  Projetos
                </DropdownItem>
                <DropdownItem key="servicos" href="/serviços">
                  Serviços
                </DropdownItem>
                <DropdownItem key="servicos" href="/contato">
                  Contato
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </nav>
        </div>
      </header>
    </>
  );
}
