import { NavBar } from '@/Components/Navbar/Navbar'
import { Sobre } from '../Pages/Sobre/Sobre'
import { Infos } from '@/Components/Infos/Infos'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Infos />
      <Sobre />
    </div>
  )
}
