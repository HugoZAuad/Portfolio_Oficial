import { User, IdCard, Mail, Locate, Linkedin, Github } from 'lucide-react'

export function Infos() {
  return (
    <div>
      <main className="bg-black-300 text-neon box-content flex flex-col mt-30 ml-15 p-2 rounded-lg shadow-xm w-60 border-4 border-green-100">
        <h1 className="flex flex-row justify-center items-center mb-2 font-semibold text-2xl">
          <User className="size-10 mr-1" />
          SOBRE
        </h1>
        <p className="flex flex-row mb-3">
          <IdCard className="mr-1" />
          Nome: <span className="text-normal">Hugo Zeymer auad</span>
        </p>
        <p className="flex flex-row mb-3 ">
          <Mail className="mr-1" />
          Email: <span className="text-normal">hugozeymer@gmail.com</span>
        </p>
        <p className="flex flex-row mb-3 ">
          <Locate className="mr-1" />
          Cidade: <span className="text-normal">Maceió/AL</span>
        </p>
        <p className="flex flex-row mb-3 ">
          <Linkedin className="mr-1" />
          Linkedin:{' '}
          <span className="text-normal">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/hugozauad/"
              rel="noreferrer"
            >
              HugoZAuad
            </a>
          </span>
        </p>
        <p className="flex flex-row mb-3 ">
          <Github />
          Github:{' '}
          <span className="text-normal">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/hugozauad/"
              rel="noreferrer"
            >
              HugoZAuad
            </a>
          </span>
        </p>
      </main>
    </div>
  )
}
