import Image from "next/image";

export default function LogoTipo() {
  return (
    <>
        <Image
          src="/cmf.png"
          width={170}
          height={170}
          alt="Logo Cristian Moreno"
          priority
          className="hover:scale-110 transition-all"
        />
    </>
  );
}
