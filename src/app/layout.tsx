import type { Metadata } from 'next'
import './globals.css'
import { Infos } from '../Components/Infos/Infos'

export const metadata: Metadata = {
  title: 'Portfolio',
}

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="bg-black-100">
        <Infos />
      </body>
    </html>
  )
}
