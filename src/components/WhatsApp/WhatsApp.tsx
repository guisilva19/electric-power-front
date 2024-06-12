import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  return (
    <>
      <Link
        href={"https://wa.me/77999577372"}
        target="_blank"
        className="bg-green-500 w-16 h-16 rounded-full fixed right-5 bottom-5 flex items-center justify-center"
      >
        <FaWhatsapp size={32} color="white" />
      </Link>
    </>
  );
}
