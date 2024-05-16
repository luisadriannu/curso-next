import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>Cabecera del blog</header>
      <main>
        <section>{children}</section>
        <aside>
          <form action="">
            <input type="search" placeholder="Voy a tener suerte" />
            <input type="submit" value="Buscar" />
          </form>
        </aside>
      </main>
      <footer>Pie del blog</footer>
    </>
  );
}
