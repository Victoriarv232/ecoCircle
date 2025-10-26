// src/app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Navbar from "../components/layout/Navbar";

export const metadata = {
  title: "ecoCircle",
  description: "Tecnologia a favor do reuso sustentável 🌱",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

