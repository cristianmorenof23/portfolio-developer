import LogoTipo from "@/components/ui/LogoTipo";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="flex items-center justify-around p-2 shadow-lg md:flex-row flex-col">
          {/* Logo */}
          <Link
            href={"/home/aboutme"}
            className="hover:scale-125 transition-all slide-in-top"
          >
            <LogoTipo />
          </Link>

          {/* Navigation */}
          <nav className="flex gap-6 md:flex-row flex-col mt-4 w-full text-center md:w-auto">
            <Link
              href={"/home/aboutme"}
              className="rounded px-3 py-2 font-serif text-lg transition-all hover:scale-125 hover:bg-purple-600 hover:shadow-lg"
            >
              About Me
            </Link>
            <Link
              href={"/home/proyectos"}
              className="rounded px-3 py-2 font-serif text-lg transition-all hover:scale-125 hover:bg-purple-600 hover:shadow-lg"
            >
              Projects
            </Link>

            <Link
              href={"/home/contact"}
              className="rounded px-3 py-2 font-serif text-lg transition-all hover:scale-125 hover:bg-purple-600 hover:shadow-lg"
            >
              Contact
            </Link>
          </nav>
        </header>

        <main className="flex-grow">
          <section className="grid grid-cols-2">
            <div></div>
            <div></div>
          </section>
        </main>
        {children}

        <footer className="flex justify-center bg-gray-900 px-4 py-12 font-sans tracking-wide text-white">
          <div className="text-center">
            <h6 className="text-lg text-gray-300">Stay connected with me:</h6>
            <ul className="mb-8 mt-4 flex flex-wrap justify-center gap-4 gap-x-8">
              <div className="w-full flex justify-center gap-10">
                <Link
                  href="https://github.com/cristianmorenof23"
                  target="_blank"
                  className="text-black cursor-pointer"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/github-logo_icon-icons.com_73546.png"
                    alt="github logo"
                    className="h-10 w-10 text-2xl transition hover:-translate-y-1 hover:scale-110"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/cristianmorenof23/"
                  target="_blank"
                  className="text-black cursor-pointer"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/instagram_socialnetwork_20033.png"
                    alt="instagram logo"
                    className="h-10 w-10 text-2xl transition hover:-translate-y-1 hover:scale-110"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/cristian-morenof23/"
                  target="_blank"
                  className="text-black cursor-pointer"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/linkedin_icon-icons.com_65929.png"
                    alt="linkedin logo"
                    className="h-10 w-10 text-2xl transition hover:-translate-y-1 hover:scale-110"
                  />
                </Link>
              </div>
            </ul>
            <p className="text-base text-gray-300">
              © {new Date().getFullYear()} Cristian Moreno - All Rights
              Reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
