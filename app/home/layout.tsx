"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import LogoTipo from "../../components/ui/LogoTipo";
import NavFixed from "@/components/NavFixed";
import ThemeToggle from "@/components/ThemeToggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>


      <div className=" relative z-10 flex min-h-screen flex-col bg-transparent text-gray-900 dark:bg-gray-900 dark:text-white ">
        <header className="absolute inset-x-0 top-0 z-50 py-6 shadow-lg bg-transparent dark:bg-gray-800">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
            <nav className="w-full flex justify-between items-center gap-6 relative">
              {/* Logo */}
              <div className="inline-flex items-center">
                <Link href="/" className="flex items-center gap-3">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <LogoTipo />
                  </div>
                  <span className="text-lg font-semibold text-gray-900  dark:bg-gradient-to-r dark:from-primary dark:to-error dark:bg-clip-text dark:text-transparent dark:w-fit">
                    Cristian Moreno
                  </span>
                </Link>
              </div>
              <ThemeToggle />

              {/* Toggle button */}
              <button
                onClick={toggleNav}
                className="lg:hidden flex flex-col gap-1.5 w-8 h-8 relative z-50"
              >
                <span
                  className={`block w-full h-0.5 bg-gray-700 transition-transform duration-300 ${isNavOpen ? "translate-y-2 rotate-45" : ""
                    }`}
                ></span>
                <span
                  className={`block w-full h-0.5 bg-gray-700 transition-opacity duration-300 ${isNavOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                  className={`block w-full h-0.5 bg-gray-700 transition-transform duration-300 ${isNavOpen ? "-translate-y-2 -rotate-45" : ""
                    }`}
                ></span>
              </button>

              {/* Navbar (Modal) */}
              <div
                className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden ${isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                onClick={closeNav}
              >
                <div
                  className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg transition-transform duration-300 ${isNavOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                  onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer clic dentro del modal
                >
                  <ul className="flex flex-col items-start gap-6 p-6 mt-24">
                    <li>
                      <Link
                        href="/home/aboutme"
                        className={`${pathname === "/home/aboutme"
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-600 dark:text-gray-300"
                          } hover:text-blue-600 dark:hover:text-blue-400 text-lg font-semibold`}
                      >
                        About Me
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/home/proyectos"
                        onClick={closeNav}
                        className={`${pathname === "/home/proyectos"
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-600 dark:text-gray-300"
                          } hover:text-blue-600 dark:hover:text-blue-400 text-lg font-semibold`}
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/home/contact"
                        onClick={closeNav}
                        className={`${pathname === "/home/contact"
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-600 dark:text-gray-300"
                          } hover:text-blue-600 dark:hover:text-blue-400 text-lg font-semibold`}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Navbar (Visible for Large Screens) */}
              <ul className="hidden lg:flex gap-8">
                <li>
                  <Link
                    href="/home/aboutme"
                    className={`${pathname === "/home/aboutme"
                      ? "text-blue-600 "
                      : "text-gray-600 dark:text-white"
                      } text-blue-500   font-bold relative before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-[-2px] before:h-[2px] before:bg-blue-500 dark:before:bg-blue-600 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100`}
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/proyectos"
                    className={`${pathname === "/home/proyectos"
                      ? "text-blue-600"
                      : "text-gray-600 dark:text-white"
                      } text-blue-500  font-bold relative before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-[-2px] before:h-[2px] before:bg-blue-500 dark:before:bg-blue-600 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100`}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home/contact"
                    className={`${pathname === "/home/contact"
                      ? "text-blue-600"
                      : "text-gray-600 dark:text-white"
                      } text-blue-500  font-bold relative before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-[-2px] before:h-[2px] before:bg-blue-500  dark:before:bg-blue-600 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* CTA */}
              {/* <div className="hidden lg:flex">
                <Link
                  href="#"
                  className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700"
                >
                  Get Started
                </Link>
                </div> */}
            </nav>
          </div>
        </header>

        <NavFixed />
        <main className="flex-grow">{children}</main>

        <footer className="flex justify-center bg-gray-900 px-4 py-12 text-white dark:bg-gray-600">
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
                    className="h-10 w-10 text-2xl transition hover:-translate-y-1 hover:scale-110 text-white invert"
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
