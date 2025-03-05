import type { Metadata } from "next";
import "./globals.css";

import { Infos } from "../Components/Infos/Infos";
import { NavBar } from "@/Components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="bg-black-100">
        <NavBar />
        <Infos />
      </body>
    </html>
  );
}
