import Image from "next/image";

export default function LogoTipo() {
  return (
    <>
        <Image
          src="/crislogo.svg"
          width={200}
          height={200}
          alt="Logo Cristian Moreno"
          priority
        />
    </>
  );
}
