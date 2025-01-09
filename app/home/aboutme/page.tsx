import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me - Cristian Moreno",
  description: "Portfolio Full stack Developer Cristian Moreno",
  icons: "/crislogo.svg",
};

export default function AboutmePage() {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 px-6 py-12">
      <div className="max-w-4xl text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl text-shadow-pop-top">
          Cristian Moreno
        </h2>
        <p className="text-lg text-gray-500 mt-2">Full Stack Developer</p>

        {/* Description */}
        <div className="mt-8 space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            I have knowledge in <span className="font-semibold text-blue-600">TypeScript</span>,{" "}
            <span className="font-semibold text-blue-600">React</span>,{" "}
            <span className="font-semibold text-blue-600">Next.js</span>,{" "}
            <span className="font-semibold text-blue-600">Tailwind CSS</span>, and{" "}
            <span className="font-semibold text-blue-600">Node.js</span>.
          </p>
          <p>
            I have a great capacity for learning and this, together with my
            knowledge, my passion for programming, and my desire, will make me
            achieve the best results.
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
    </div>
  );
}
