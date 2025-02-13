"use client";

import emailjs from "emailjs-com";
import Image from "next/image";
import { useRef } from "react";
import { Toaster, toast } from "sonner";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (_) => {
          toast.success("Mensaje enviado exitosamente");
          if (form.current) form.current.reset();
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (_) => {
          toast.error("Error al enviar el mensaje");
        }
      );
  };

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] min-h-screen">
        {/* Sección izquierda */}
        <div className="flex flex-col items-center justify-center p-8 md:p-16">
          <Image
            src="/cristianmorenocontact.jpg"
            alt="imagen cristian moreno"
            width={400}
            height={400}
            className="rounded-full object-cover shadow-lg lg:h-[400px] lg:w-[400px] fade-in"
            priority
          />
          <h1 className="text-3xl text-gray-700 font-bold mt-6">Contact</h1>
          <p className="font-medium text-xl text-gray-600 mt-2">
            Argentina, Córdoba
          </p>
          <p className="font-medium text-lg text-gray-600">+54 3513336631</p>
          <p className="font-medium text-lg text-gray-600 mb-6">
            cristian.morenof@hotmail.com
          </p>
        </div>

        {/* Línea divisoria */}
        <div className="hidden md:block w-px bg-gray-400"></div>

        {/* Sección derecha */}
        <div className="flex items-center justify-center bg-white p-8 md:p-16">
          <Toaster />
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-lg bg-gray-50 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Send me a message{" "}
            </h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-1"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name:"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-1"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-600 font-medium mb-1"
              >
                Subject Line:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject Line"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-600 font-medium mb-1"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows={5}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md font-bold hover:bg-blue-600 transition active:motion-preset-confetti motion-duration-700"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
