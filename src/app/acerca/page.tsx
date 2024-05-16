import { title } from "process";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Acerca",
  },
  description: "Estas en la seccion de Acerca",
};

export default function Acerca() {
  return <h1>Acerca</h1>;
}
