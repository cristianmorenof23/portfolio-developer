import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proyectos - Cristian Moreno ",
  description: "Portfolio Full stack Developer Cristian Moreno",
  icons: "/crislogo.svg",
};

export default function ProyectosPage() {
  return (
    <>
      <section className="container mx-auto max-w-screen-xl mb-56">
        <div className="container mx-auto p-6 mt-10">
          <h1 className="flex items-center justify-center text-5xl font-serif text-center text-gray-900">
            Projects
          </h1>
        </div>

        <div className="flex flex-wrap mt-7">
          <div className="w-full flex  items-center justify-center flex-col  md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full md:hover:-translate-y-1 md:hover:scale-105 transition-all transform">
              <Link
                target="_blank"
                href="https://contador-calorias-app.netlify.app/"
              >
                <Image
                  className="rounded-t-lg object-cover w-full h-48 md:h-[190px]"
                  src="/caloriascontador.png"
                  alt="hola"
                  width={300}
                  height={300}
                  priority
                />
              </Link>
              <div className="p-5">
                <Link
                  target="_blank"
                  href="https://contador-calorias-app.netlify.app/"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Calorias Contador App
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24">
                  Application that helps you keep track of the calories you
                  consume and expend through food and exercise
                </p>

                <div className="flex items-center justify-center gap-2 mt-8">
                  <Image
                    src="/ts.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/react.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/tw.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                </div>

                <Link
                  target="_blank"
                  href="https://contador-calorias-app.netlify.app/"
                  className="inline-flex items-center mt-10  bg-cyan-500 px-4 py-2 text-sm font-bold text-center text-white rounded-lg w-full md:w-full shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparen"
                >
                  Visit
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full flex  items-center justify-center flex-col  md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full md:hover:-translate-y-1 md:hover:scale-105 transition-all transform">
              <Link
                target="_blank"
                href="https://calculadorapropinas-cm.netlify.app/"
              >
                <Image
                  className="rounded-t-lg object-cover w-full h-48 md:h-[190px]"
                  src="/calculadorapropinas.png"
                  alt="hola"
                  width={300}
                  height={300}
                  priority
                />
              </Link>
              <div className="p-5">
                <Link
                  target="_blank"
                  href="https://calculadorapropinas-cm.netlify.app/"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Calculadora Propinas App
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24">
                  Restaurant Tip Calculator App
                </p>

                <div className="flex items-center justify-center gap-2 mt-8">
                  <Image
                    src="/ts.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/react.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/tw.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                </div>

                <Link
                  target="_blank"
                  href="https://calculadorapropinas-cm.netlify.app/"
                  className="inline-flex items-center mt-10  bg-cyan-500 px-4 py-2 text-sm font-bold text-center text-white rounded-lg w-full md:w-full shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparen"
                >
                  Visit
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full flex  items-center justify-center flex-col  md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full md:hover:-translate-y-1 md:hover:scale-105 transition-all transform">
              <Link
                target="_blank"
                href="https://melodic-heliotrope-ee9356.netlify.app/"
              >
                <Image
                  className="rounded-t-lg object-cover w-full h-48 md:h-[190px]"
                  src="/clima.png"
                  alt="hola"
                  width={300}
                  height={300}
                  priority
                />
              </Link>
              <div className="p-5">
                <Link
                  target="_blank"
                  href="https://melodic-heliotrope-ee9356.netlify.app/"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Clima App
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24">
                  Application created with react that shows the weather of the
                  city of a country that you request.
                </p>

                <div className="flex items-center justify-center gap-2 mt-8">
                  <Image
                    src="/ts.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/react.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/tw.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                </div>

                <Link
                  target="_blank"
                  href="https://melodic-heliotrope-ee9356.netlify.app/"
                  className="inline-flex items-center mt-10  bg-cyan-500 px-4 py-2 text-sm font-bold text-center text-white rounded-lg w-full md:w-full shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparen"
                >
                  Visit
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2  flex  items-center justify-center flex-col ">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full md:hover:-translate-y-1 md:hover:scale-110 transition">
              <a
                target="_blank"
                href="https://cotizadorautos-react.netlify.app/"
              >
                <Image
                  className="rounded-t-lg object-cover w-full h-48 md:h-[190px]"
                  src="/cotizador.png"
                  alt="hola"
                  width={300}
                  height={300}
                  priority
                />
              </a>
              <div className="p-5">
                <Link
                  target="_blank"
                  href="https://cotizadorautos-react.netlify.app/"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Cotizador App
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24">
                  Application created with React that shows a car quote.
                </p>

                <div className="flex items-center justify-center gap-2 mt-8">
                  <Image
                    src="/ts.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/react.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/tw.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                </div>

                <Link
                  target="_blank"
                  href="https://cotizadorautos-react.netlify.app/"
                  className="inline-flex items-center mt-10  bg-cyan-500 px-4 py-2 text-sm font-bold text-center text-white rounded-lg w-full md:w-full shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparen"
                >
                  Visit
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2  flex  items-center justify-center flex-col ">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full md:hover:-translate-y-1 md:hover:scale-110 transition">
              <a target="_blank" href="https://bebidas-react-cm.netlify.app/">
                <Image
                  className="rounded-t-lg object-cover w-full h-48 md:h-[190px]"
                  src="/bebidas.png"
                  alt="hola"
                  width={300}
                  height={300}
                  priority
                />
              </a>
              <div className="p-5">
                <Link
                  target="_blank"
                  href="https://bebidas-router-dom.netlify.app/"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Bebidas App
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                  Application that shows drink recipes.
                </p>
                <div className="flex items-center justify-center gap-2 mt-8">
                  <Image
                    src="/ts.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/react.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/tw.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                </div>
                <Link
                  target="_blank"
                  href="https://bebidas-router-dom.netlify.app/"
                  className="inline-flex items-center mt-10  bg-cyan-500 px-4 py-2 text-sm font-bold text-center text-white rounded-lg w-full md:w-full shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparen"
                >
                  Visit
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2  flex  items-center justify-center flex-col ">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full md:hover:-translate-y-1 md:hover:scale-110 transition">
              <Link
                target="_blank"
                href="https://buscadorimagenes-cm.netlify.app//"
              >
                <Image
                  className="rounded-t-lg object-cover w-full h-48 md:h-[190px]"
                  src="/imagenes.png"
                  alt="hola"
                  width={300}
                  height={300}
                  priority
                />
              </Link>
              <div className="p-5">
                <Link
                  target="_blank"
                  href="https://buscadorimagenes-cm.netlify.app//"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Buscador de Imagenes
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24">
                  Application to search for images without copyright.
                </p>

                <div className="flex items-center justify-center gap-2 mt-8">
                  <Image
                    src="/ts.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/react.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/tw.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                </div>

                <Link
                  target="_blank"
                  href="https://buscadorimagenes-cm.netlify.app//"
                  className="inline-flex items-center mt-10  bg-cyan-500 px-4 py-2 text-sm font-bold text-center text-white rounded-lg w-full md:w-full shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparen"
                >
                  Visit
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2  flex  items-center justify-center flex-col ">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full md:hover:-translate-y-1 md:hover:scale-110 transition">
              <Link
                target="_blank"
                href="https://guitarla-cris-react.netlify.app/"
              >
                <Image
                  className="rounded-t-lg object-cover w-full h-48 md:h-[190px]"
                  src="/guitarla.png"
                  alt="hola"
                  width={300}
                  height={300}
                  priority
                />
              </Link>
              <div className="p-5">
                <Link
                  target="_blank"
                  href="https://guitarla-cris-react.netlify.app/"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    GuitarLA Store
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24">
                  Guitar shop page with its shopping cart.
                </p>

                <div className="flex items-center justify-center gap-2 mt-8">
                  <Image
                    src="/ts.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/react.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/tw.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                </div>

                <Link
                  target="_blank"
                  href="https://guitarla-cris-react.netlify.app/"
                  className="inline-flex items-center mt-10  bg-cyan-500 px-4 py-2 text-sm font-bold text-center text-white rounded-lg w-full md:w-full shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparen"
                >
                  Visit
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2  flex  items-center justify-center flex-col ">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full md:hover:-translate-y-1 md:hover:scale-110 transition">
              <Link target="_blank" href="https://recetas-bycm.netlify.app/">
                <Image
                  className="rounded-t-lg object-cover w-full h-48 md:h-[190px]"
                  src="/receta.png"
                  alt="hola"
                  width={300}
                  height={300}
                  priority
                />
              </Link>
              <div className="p-5">
                <Link target="_blank" href="https://recetas-bycm.netlify.app/">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Recetas Online
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24">
                  Application where you can search for recipes for different
                  foods and it will tell you the ingredients you need to make
                  them.
                </p>

                <div className="flex items-center justify-center gap-2 mt-8">
                  <Image
                    src="/ts.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/react.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/tw.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                </div>

                <Link
                  target="_blank"
                  href="https://recetas-bycm.netlify.app/"
                  className="inline-flex items-center mt-10  bg-cyan-500 px-4 py-2 text-sm font-bold text-center text-white rounded-lg w-full md:w-full shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparen"
                >
                  Visit
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2  flex  items-center justify-center flex-col ">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full md:hover:-translate-y-1 md:hover:scale-110 transition">
              <Link
                target="_blank"
                href="https://pacientes-zustand-ts.netlify.app/"
              >
                <Image
                  className="rounded-t-lg object-cover w-full h-48 md:h-[190px]"
                  src="/pacientes.png"
                  alt="hola"
                  width={300}
                  height={300}
                  priority
                />
              </Link>
              <div className="p-5">
                <Link
                  target="_blank"
                  href="https://pacientes-zustand-ts.netlify.app/"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Pacientes Control
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24">
                  Project carried out as a practice with TS, Zustand,
                  Taildwindcss and Swal
                </p>

                <div className="flex items-center justify-center gap-2 mt-8">
                  <Image
                    src="/ts.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/react.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/tw.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                </div>

                <Link
                  target="_blank"
                  href="https://pacientes-zustand-ts.netlify.app/"
                  className="inline-flex items-center mt-10  bg-cyan-500 px-4 py-2 text-sm font-bold text-center text-white rounded-lg w-full md:w-full shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparen"
                >
                  Visit
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>






          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2  flex  items-center justify-center flex-col ">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full md:hover:-translate-y-1 md:hover:scale-110 transition">
              <Link
                target="_blank"
                href="https://cotizador-prestamos-cm.netlify.app/"
              >
                <Image
                  className="rounded-t-lg object-cover w-full h-48 md:h-[190px]"
                  src="/gastoscontrol.png"
                  alt="hola"
                  width={300}
                  height={300}
                  priority
                />
              </Link>
              <div className="p-5">
                <Link
                  target="_blank"
                  href="https://cotizador-prestamos-cm.netlify.app/"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Gastos Control
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24">
                  Project carried out as a practice with TS, Zustand,
                  Taildwindcss and Swal
                </p>

                <div className="flex items-center justify-center gap-2 mt-8">
                  <Image
                    src="/ts.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/react.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/tw.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                </div>

                <Link
                  target="_blank"
                  href="https://cotizador-prestamos-cm.netlify.app/"
                  className="inline-flex items-center mt-10  bg-cyan-500 px-4 py-2 text-sm font-bold text-center text-white rounded-lg w-full md:w-full shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparen"
                >
                  Visit
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>





          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2  flex  items-center justify-center flex-col ">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full md:hover:-translate-y-1 md:hover:scale-110 transition">
              <Link
                target="_blank"
                href="https://blogcafe-cristiann.netlify.app/"
              >
                <Image
                  className="rounded-t-lg object-cover w-full h-48 md:h-[190px]"
                  src="/coffeblog.png"
                  alt="hola"
                  width={300}
                  height={300}
                  priority
                />
              </Link>
              <div className="p-5">
                <Link
                  target="_blank"
                  href="https://blogcafe-cristiann.netlify.app/"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Coffee Blog
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24">
                  One of my first projects as a programmer, a coffee blog
                </p>

                <div className="flex items-center justify-center gap-2 mt-8">
                  <Image
                    src="/ts.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/react.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                  <Image
                    src="/tw.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                </div>

                <Link
                  target="_blank"
                  href="https://blogcafe-cristiann.netlify.app/"
                  className="inline-flex items-center mt-10  bg-cyan-500 px-4 py-2 text-sm font-bold text-center text-white rounded-lg w-full md:w-full shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparen"
                >
                  Visit
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
