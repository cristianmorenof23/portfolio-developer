import Diff from "@/components/ui/Diff";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home - Cristian Moreno",
  description: "Portfolio Full stack Developer Cristian Moreno",
  icons: "/cristianmorenocontact.jpg",
};

export default function AboutmePage() {
  return  (
    <div className="relative flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      {/* Fondo de ondas */}

      <div className="max-w-4xl text-center relative z-10">
        {/* Contenido de tu página */}
        <div className="container mx-auto p-6 mt-10 text-center">
          <div className="relative inline-block">
            <span className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white text-center tracking-in-expand dark:bg-gradient-to-r dark:from-primary dark:to-error dark:bg-clip-text dark:text-transparent dark:w-fit">
              Full Stack Developer
            </span>
          </div>
        </div>
        <p className="text-lg text-gray-500 mt-2 dark:text-white">
          Systems Analyst
        </p>

        {/* Descripción */}
        <div className="mt-8 space-y-4 text-lg text-gray-700 leading-relaxed dark:text-white">
          <p>
            I have knowledge in{" "}
            <span className="font-semibold text-blue-600">TypeScript</span>,{" "}
            <span className="font-semibold text-blue-600">React</span>,{" "}
            <span className="font-semibold text-blue-600">Next.js</span>,{" "}
            <span className="font-semibold text-blue-600">Tailwind CSS</span>,
            and <span className="font-semibold text-blue-600">Node.js</span>.
          </p>
          <p>
            With my knowledge, passion for programming, and great capacity to
            adapt and learn I will be able to achieve the best results.
          </p>
        </div>

        {/* Enlace a proyectos */}
        <p className="mt-8 text-gray-600 text-lg">
          <Link
            href={"/home/proyectos"}
            className="text-blue-600 font-semibold relative before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-[-2px] before:h-[2px] before:bg-blue-600 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
          >
            Come see my projects ⟶
          </Link>
        </p>
      </div>

      <hr className="my-12 w-full border-t-2 border-gray-300 relative z-10" />

      <div className="flex flex-col items-center justify-center px-6 py-12 relative z-10">
        <div className="max-w-4xl text-center">
          <div className="container mx-auto p-6 mt-2 text-center">
            <div className="relative inline-block">
              <span className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl text-center tracking-in-expand dark:bg-gradient-to-r dark:from-primary dark:to-error dark:bg-clip-text dark:text-transparent dark:w-fit">
                Current Projects
              </span>
            </div>
          </div>
          <p className="text-xl text-gray-500 mt-2">
            <span className="text-yellow-400">Crash</span>
            <span className="text-violet-900">Tracker</span>
          </p>

          <div className="mt-8 space-y-4 text-lg text-gray-700 leading-relaxed mb-6">
            <div>
              <p className="dark:text-white">
                I am working on a Crash Tracker project, full stack with{" "}
              </p>
              <span className="font-semibold text-blue-600"> TypeScript </span>,{" "}
              <span className="font-semibold text-blue-600">Node.js</span>,{" "}
              <span className="font-semibold text-blue-600">Express</span>,{" "}
              <span className="font-semibold text-blue-600">Tailwind CSS</span>,
              <span className="font-semibold text-blue-600">Next.js</span> ,{" "}
              <span className="font-semibold text-blue-600">Zod</span>{" "}
              <span className="dark:text-white">and </span>
              <span className="font-semibold text-blue-600">PostgreSql</span>.
            </div>
            <div>
              <p className="dark:text-white">
                Where you can create an account, with its proper validation and
              </p>
              <p className="dark:text-white">
                then start to be able to create different budgets.
              </p>
            </div>
          </div>

          {/* Carrusel */}
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
            <Diff/>
          </div>
        </div>
      </div>
    </div>
  );
}
