import Image from "next/image";

export default function LogoTipo() {
  return (
    <>
        <Image
          src="/cristianmorenocontact.jpg"
          width={270}
          height={270}
          alt="Logo Cristian Moreno"
          priority
          className="hover:scale-110 transition-all rounded-full"
        />
    </>
  );
}
