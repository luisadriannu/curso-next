import Link from "next/link";
import "./global.css";
import { Metadata } from "next";

// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

export const metadata: Metadata = {
  title: {
    default: "Aprendiendo Next.js",
    absolute: "",
    template: "%s - Aprendiendo Next.js",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h2>Cabecera de la app</h2>
          <nav className="flex bg-black gap-4">
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/login">Login</Link>
            </div>
            <div>
              <Link href="/registro">Registro</Link>
            </div>
            <div>
              <Link href="/password">Recuperar Contraseña</Link>
            </div>
            <div>
              <Link href="/acerca">Acerca</Link>
            </div>
            <div>
              <Link href="/contacto">Contacto</Link>
            </div>
            <div>
              <Link href="/productos">Productos</Link>
            </div>
            <div>
              <Link href="/dashboard">Dashboard</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>Pie de la app</footer>
      </body>
    </html>
  );
}
