import Carrousel from "@/components/Carrousel";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home - Cristian Moreno",
  description: "Portfolio Full stack Developer Cristian Moreno",
  icons: "/cristianmorenocontact.jpg",
};

export default function AboutmePage() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 ">
      <div className="max-w-4xl text-center ">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl tracking-in-expand">
          Full Stack Developer{" "}
        </h2>
        <p className="text-lg text-gray-500 mt-2">Systems Analyst</p>

        {/* Description */}
        <div className="mt-8 space-y-4 text-lg text-gray-700 leading-relaxed">
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

        {/* Call to Action */}
        <p className="mt-8 text-gray-600 text-lg">
          <Link
            href={"/home/proyectos"}
            className="text-blue-600 font-semibold hover:underline transition-all"
          >
            Come see my projects ⟶
          </Link>
        </p>
      </div>

      <hr className="my-12 w-full border-t-2 border-gray-300" />

      <div className="flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl tracking-in-expand">
            Current Project
          </h2>
          <p className="text-xl text-gray-500 mt-2">
            <span className="text-yellow-400">Crash</span>
            <span className="text-violet-900">Tracker</span>
          </p>

          <div className="mt-8 space-y-4 text-lg text-gray-700 leading-relaxed mb-6">
            <div>
              <p>I am working on a Crash Tracker project, full stack with </p>
              <span className="font-semibold text-blue-600">
                {" "}
                TypeScript{" "}
              </span>,{" "}
              <span className="font-semibold text-blue-600">Node.js</span>,{" "}
              <span className="font-semibold text-blue-600">Express</span>,{" "}
              <span className="font-semibold text-blue-600">Tailwind CSS</span>,
              <span className="font-semibold text-blue-600">Next.js</span> ,{" "}
              <span className="font-semibold text-blue-600">Zod</span> and{" "}
              <span className="font-semibold text-blue-600">PostgreSql</span>.
            </div>
            <div>
              <p>
                Where you can create an account, with its proper validation and
              </p>
              then start to be able to create different budgets.
            </div>
          </div>

          {/* Make the carousel responsive */}
          <div className="w-full lg:w-3/4">
            <Carrousel />
          </div>
        </div>
      </div>
    </div>
  );
}
