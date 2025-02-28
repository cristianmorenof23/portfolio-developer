import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects - Cristian Moreno",
  description: "Portfolio Full stack Developer Cristian Moreno",
  icons: "/cristianmorenocontact.jpg",
};

export default function ProyectosPage() {
  return (
    <>
      <div className="container mx-auto p-6 mt-10 text-center">
        <div className="relative inline-block">
          <span className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl text-center tracking-in-expand dark:bg-gradient-to-r dark:from-primary dark:to-error dark:bg-clip-text dark:text-transparent dark:w-fit ">
            Projects
          </span>
        </div>
      </div>

      <section className="flex justify-center items-center min-h-screen fade-in md:mr-7 mr-0 mt-14">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-10">


          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <Link
              href="https://santiagocirio-personaltrainer.vercel.app/home/inicio"
              target="_blank"
            >
              <Image
                width={300}
                height={300}
                className="rounded-t-lg w-full hover:scale-110 transition-all"
                src="/gim1.jpg"
                alt=""
                priority
              />
            </Link>
            <div className="p-5 flex flex-col flex-1">
              <Link
                href="https://santiagocirio-personaltrainer.vercel.app/home/inicio"
                target="_blank"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Santiago Cirio - Personal Trainer
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Project done for a personal trainer with next.js and tailwindcss.
              </p>
              <div className="mt-auto">
                <Link
                  href="https://santiagocirio-personaltrainer.vercel.app/home/inicio"
                  target="_blank"
                  className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Visit
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>


          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <Link
              href="https://contador-calorias-app.netlify.app/"
              target="_blank"
            >
              <Image
                width={300}
                height={300}
                className="rounded-t-lg w-full hover:scale-110 transition-all"
                src="/caloriascontador.png"
                alt=""
                priority
              />
            </Link>
            <div className="p-5 flex flex-col flex-1">
              <Link
                href="https://contador-calorias-app.netlify.app/"
                target="_blank"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Contador de Calorias App
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Project carried out as a practice with Typescript, React,
                Tailwindcss, Toast, useReducer.
              </p>
              <div className="mt-auto">
                <Link
                  href="https://contador-calorias-app.netlify.app/"
                  target="_blank"
                  className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Visit
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <Link
              href="https://calculadorapropinas-cm.netlify.app/"
              target="_blank"
            >
              <Image
                width={300}
                height={300}
                className="rounded-t-lg w-full hover:scale-110 transition-all"
                src="/calculadorapropinas.png"
                alt=""
                priority
              />
            </Link>
            <div className="p-5 flex flex-col flex-1">
              <Link
                href="https://calculadorapropinas-cm.netlify.app/"
                target="_blank"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Tip and Consumption Calculator
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Project made with React, Tailwindcss, Typescript and Toast as a
                practice
              </p>
              <div className="mt-auto">
                <Link
                  href="https://calculadorapropinas-cm.netlify.app/"
                  target="_blank"
                  className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Visit
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <Link
              href="https://melodic-heliotrope-ee9356.netlify.app/"
              target="_blank"
            >
              <Image
                width={300}
                height={300}
                className="rounded-t-lg w-full hover:scale-110 transition-all"
                src="/clima.png"
                alt="clima app"
                priority
              />
            </Link>
            <div className="p-5 flex flex-col flex-1">
              <Link
                href="https://melodic-heliotrope-ee9356.netlify.app/"
                target="_blank"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  App to check the weather
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Project done with weather API, TS, Zod, tailwindcss, axios and
                swal
              </p>
              <div className="mt-auto">
                <Link
                  href="https://melodic-heliotrope-ee9356.netlify.app/"
                  target="_blank"
                  className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Visit
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <Link
              href="https://cotizadorautos-react.netlify.app/"
              target="_blank"
            >
              <Image
                width={300}
                height={300}
                className="rounded-t-lg w-full hover:scale-110 transition-all"
                src="/cotizador.png"
                alt="Cotizador App"
                priority
              />
            </Link>
            <div className="p-5 flex flex-col flex-1">
              <Link
                href="https://cotizadorautos-react.netlify.app/"
                target="_blank"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Project made with react and tailwind{" "}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Application for making car insurance quotes
              </p>
              <div className="mt-auto">
                <Link
                  href="https://cotizadorautos-react.netlify.app/"
                  target="_blank"
                  className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Visit
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <Link
              href="https://bebidas-router-dom.netlify.app/"
              target="_blank"
            >
              <Image
                width={300}
                height={300}
                className="rounded-t-lg w-full hover:scale-110 transition-all"
                src="/bebidas.png"
                alt="Bebidas app"
                priority
              />
            </Link>
            <div className="p-5 flex flex-col flex-1">
              <Link
                href="https://bebidas-router-dom.netlify.app/"
                target="_blank"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Drinks Finder{" "}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Project done with TS, React Router Dom, Tailwindcss, Zustand, z
                and swal.{" "}
              </p>
              <div className="mt-auto">
                <Link
                  href="https://bebidas-router-dom.netlify.app/"
                  target="_blank"
                  className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Visit
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <Link
              href="https://buscadorimagenes-cm.netlify.app//"
              target="_blank"
            >
              <Image
                width={300}
                height={300}
                className="rounded-t-lg w-full hover:scale-110 transition-all"
                src="/imagenes.png"
                alt="Buscador de imagenes app"
                priority
              />
            </Link>
            <div className="p-5 flex flex-col flex-1">
              <Link
                href="https://buscadorimagenes-cm.netlify.app//"
                target="_blank"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Image search application{" "}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Mini project using the pixabay api to search for images
              </p>
              <div className="mt-auto">
                <Link
                  href="https://buscadorimagenes-cm.netlify.app//"
                  target="_blank"
                  className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Visit
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <Link
              href="https://guitarla-cris-react.netlify.app/"
              target="_blank"
            >
              <Image
                width={300}
                height={300}
                className="rounded-t-lg w-full hover:scale-110 transition-all"
                src="/guitarla.png"
                alt="GuitarLA"
                priority
              />
            </Link>
            <div className="p-5 flex flex-col flex-1">
              <Link
                href="https://guitarla-cris-react.netlify.app/"
                target="_blank"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  LA Guitar Store{" "}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Project made with React, Tailwindcss, SweetAlert and
                LocalStorage for the shopping cart.{" "}
              </p>
              <div className="mt-auto">
                <Link
                  href="https://guitarla-cris-react.netlify.app/"
                  target="_blank"
                  className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Visit
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <Link href="https://recetas-bycm.netlify.app/" target="_blank">
              <Image
                width={300}
                height={300}
                className="rounded-t-lg w-full hover:scale-110 transition-all"
                src="/receta.png"
                alt="Recetas app"
                priority
              />
            </Link>
            <div className="p-5 flex flex-col flex-1">
              <Link href="https://recetas-bycm.netlify.app/" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Recipe Finder App{" "}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Mini Recipe Project with Themealdb API
              </p>
              <div className="mt-auto">
                <Link
                  href="https://recetas-bycm.netlify.app/"
                  target="_blank"
                  className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Visit
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <Link
              href="https://pacientes-zustand-ts.netlify.app/"
              target="_blank"
            >
              <Image
                width={300}
                height={300}
                className="rounded-t-lg w-full hover:scale-110 transition-all"
                src="/pacientes.png"
                alt="Pacientes app"
                priority
              />
            </Link>
            <div className="p-5 flex flex-col flex-1">
              <Link
                href="https://pacientes-zustand-ts.netlify.app/"
                target="_blank"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Patients - Veterinary{" "}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Project carried out as a practice with TS, Zustand, Taildwindcss
                and Swal{" "}
              </p>
              <div className="mt-auto">
                <Link
                  href="https://pacientes-zustand-ts.netlify.app/"
                  target="_blank"
                  className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Visit
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <Link
              href="https://cotizador-prestamos-cm.netlify.app/"
              target="_blank"
            >
              <Image
                width={300}
                height={300}
                className="rounded-t-lg w-full hover:scale-110 transition-all"
                src="/gastoscontrol.png"
                alt="Control de gastos"
                priority
              />
            </Link>
            <div className="p-5 flex flex-col flex-1">
              <Link
                href="https://cotizador-prestamos-cm.netlify.app/"
                target="_blank"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Expense Control{" "}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Expense project done with Context Api. reducer and ts, with
                tailwindcss, toast and swal
              </p>
              <div className="mt-auto">
                <Link
                  href="https://cotizador-prestamos-cm.netlify.app/"
                  target="_blank"
                  className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Visit
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <Link
              href="https://blogcafe-cristiann.netlify.app/"
              target="_blank"
            >
              <Image
                width={300}
                height={300}
                className="rounded-t-lg w-full hover:scale-110 transition-all"
                src="/coffeblog.png"
                alt="Cafe blog"
                priority
              />
            </Link>
            <div className="p-5 flex flex-col flex-1">
              <Link
                href="https://blogcafe-cristiann.netlify.app/"
                target="_blank"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Coffee Blog{" "}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Project done with nextjs Prisma TailwindCSS
              </p>
              <div className="mt-auto">
                <Link
                  href="https://blogcafe-cristiann.netlify.app/"
                  target="_blank"
                  className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Visit
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-5">
        <div className="flex justify-end m-5">
          <Link href="#inicio" className="text-black cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 animate-bounce hover:animate-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
