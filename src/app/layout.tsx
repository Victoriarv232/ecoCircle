"use client";

import "bootstrap/dist/css/bootstrap.min.css"; // CSS do Bootstrap
import "../styles/globals.css"; // seu CSS global
import Navbar from "../components/layout/Navbar";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Importa o JS do Bootstrap apenas no navegador
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main className="container mt-4">{children}</main>
      </body>
    </html>
  );
}
