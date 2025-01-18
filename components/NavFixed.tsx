import Link from "next/link";
import Image from "next/image";

export default function NavFixed() {
  return (
    <>
      <div className="mt-24">
        <div className="hidden right-5 sm:flex w-full flex-col items-end fixed mt-10 gap-8">
          <Link
            href="https://github.com/cristianmorenof23"
            target="_blank"
            className="text-black cursor-pointer"
          >
            <Image
              width={25}
              height={25}
              src="/github-logo_icon-icons.com_73546.png"
              alt="github logo"
              className=" text-2xl transition hover:-translate-y-1 hover:scale-110 text-white"
            />
          </Link>
          <Link
            href="https://www.instagram.com/cristianmorenof23/"
            target="_blank"
            className="text-black cursor-pointer"
          >
            <Image
              width={25}
              height={25}
              src="/instagram_socialnetwork_20033.png"
              alt="instagram logo"
              className=" text-2xl transition hover:-translate-y-1 hover:scale-110"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/cristian-morenof23/"
            target="_blank"
            className="text-black cursor-pointer"
          >
            <Image
              width={25}
              height={25}
              src="/linkedin_icon-icons.com_65929.png"
              alt="linkedin logo"
              className=" text-2xl transition hover:-translate-y-1 hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
