"use client";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
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
              <Image src={Logo} alt="LOGO EP" />
            </Link>
          </figure>

          <nav className="hidden md:flex items-center gap-14 lg:gap-24 text-white h-full">
            <ul className="flex gap-10">
              <li>
                <Link href="" className="text-sm font-normal">
                  Homologação
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm font-normal">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="" className="text-sm font-normal">
                  Serviços
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

          <nav className="flex md:hidden">
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
              </DropdownMenu>
            </Dropdown>
          </nav>
        </div>
      </header>
    </>
  );
}
