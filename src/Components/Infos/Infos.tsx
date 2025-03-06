import { Github, IdCard, Linkedin, Locate, Mail } from "lucide-react";
import Image from "next/image";
import Foto from "../../../public/Imgs/Foto.png";
import QR from "../../../public/Imgs/QR_code.png";

export function Infos() {
  return (
    <div>
      <main className="bg-black-300 text-neon box-content flex flex-col ml-15  p-2 rounded-lg shadow-xm w-70 border-4 border-green-100">
        <Image
          src={Foto}
          alt="Hugo Zeymer Auad"
          width={200}
          height={200}
          className="rounded-2xl ml-9 mb-2"
        />

        <h1 className="text-normal flex justify-center items-center font-semibold text-2xl mb-5">
          Desevolvedor Web
        </h1>

        <p className="flex flex-row mb-3">
          <IdCard className="mr-1" />
          Nome: <span className="text-normal ml-2">Hugo Zeymer auad</span>
        </p>

        <p className="flex flex-row mb-3 ">
          <Mail className="mr-1" />
          Email: <span className="text-normal ml-1">hugozeymer@gmail.com</span>
        </p>

        <p className="flex flex-row mb-3 ">
          <Locate className="mr-1" />
          Cidade: <span className="text-normal ml-2">Maceió/AL</span>
        </p>

        <p className="flex flex-row mb-3 ">
          <Linkedin className="mr-1" />
          Linkedin:
          <span className="text-normal">
            <a
              className="hover:text-green-100 ml-2"
              target="_blank"
              href="https://www.linkedin.com/in/hugozauad/"
              rel="noreferrer"
            >
              HugoZAuad
            </a>
          </span>
        </p>

        <p className="flex flex-row mb-3">
          <Github className="mr-1" />
          Github:
          <span className="text-normal">
            <a
              className="hover:text-green-100 ml-2"
              target="_blank"
              href="https://github.com/HugoZAuad"
              rel="noreferrer"
            >
              HugoZAuad
            </a>
          </span>
        </p>

        <h3 className="text-normal flex justify-center items-center font-semibold text-2xl">
          Minhas Redes
        </h3>
        <Image
          src={QR}
          alt="QR Code"
          width={200}
          height={200}
          className="size-50 mt-2 ml-10 mb-2"
        />
      </main>
    </div>
  );
}
