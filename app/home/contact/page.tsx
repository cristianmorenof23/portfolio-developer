import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact - Cristian Moreno",
  description: "Portfolio Full stack Developer Cristian Moreno",
  icons: "/crislogo.svg",
};

export default function ContactPage() {
  return (
    <>
      <div className="flex items-center justify-center mt-7 flex-col">
        <Image
          src="/cristianmorenocontact.jpg"
          alt="imagen cristian moreno"
          width={400}
          height={400}
          className="rounded-full object-cover kenburns-top"
        />

        <h1 className="text-3xl text-gray-700 font-bold mt-24">Contact</h1>
        <p className="font-bold text-xl">Argentina, Cordoba</p>
        <p className="font-bold text-xl">+54 3513336631</p>
        <p className="font-bold text-xl mb-7">cristian.morenof@hotmail.com</p>
      </div>
    </>
  );
}
