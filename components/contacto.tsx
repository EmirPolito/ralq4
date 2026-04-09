"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Enviando");

  const { resolvedTheme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    let dotCount = 0;
    const interval = setInterval(() => {
      dotCount = (dotCount + 1) % 4;
      setLoadingText("Enviando" + ".".repeat(dotCount));
    }, 400);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.ok) {
        alert("Mensaje enviado correctamente");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Hubo un error al enviar el mensaje.");
      }
    } catch (error) {
      console.log(error);
      alert("No se pudo conectar con el servidor.");
    }

    setIsLoading(false);
    clearInterval(interval);
    setLoadingText("Enviando");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    }),
  };

  // 🔥 CLASES CORREGIDAS
  const inputClasses = `
  rounded-[8px]
  border border-contact-card-border
  bg-contact-input-bg
  text-contact-input-desc
  placeholder:text-contact-input-desc
  text-sm                 
  leading-5               
  px-2.5 
  py-2.5 
  w-full
  transition-all duration-300
  hover:border-gray-400
  focus:outline-none
  focus:ring-0
  focus:border-gray-400
  focus-visible:outline-none
  focus-visible:ring-0
  focus-visible:ring-offset-0
`;

  return (
    <motion.section
      className="relative min-h-screen font-inter px-6 pt-30 pb-32"
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center mb-30" variants={fadeInUp} custom={0}>
        <h1 className="text-contact-ttl text-5xl md:text-6xl font-semibold mb-2 text-balance">
          Contáctanos
        </h1>

        <p className="text-contact-desc text-lg text-balance max-w-1xl mx-auto">
          Si necesitas soporte, deseas colaborar o tienes preguntas sobre la
          plataforma, estámos disponible para ayudarte.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-6xl mx-auto transform -translate-y-11">
        <motion.div
          className="
            rounded-[15px]
            bg-contact-card-bg
            border
            border-contact-card-border
            p-7.5
            w-full
            shadow-sm
          "
          variants={fadeInUp}
          custom={0.1}
        >
          <h1 className="text-contact-ttl text-2xl font-semibold mb-0">
            Envíanos un mensaje.
          </h1>

          <p className="text-contact-desc mb-7">
            Rellena el formulario y te responderemos lo antes posible.
          </p>

          <form onSubmit={handleSubmit} className=" space-y-6">
            <motion.div variants={fadeInUp} custom={0.2}>
              <Label
                htmlFor="name"
                className="text-contact-input-text text-sm font-semibold "
              >
                Nombre completo
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                placeholder="Introduce tu nombre"
                onChange={(e) => setName(e.target.value)}
                required
                className={inputClasses}
              />
            </motion.div>

            <motion.div variants={fadeInUp} custom={0.3}>
              <Label
                htmlFor="email"
                className="text-contact-input-text text-sm font-semibold"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                placeholder="Usuario@ejemplo.com"
                onChange={(e) => setEmail(e.target.value)}
                required
                className={inputClasses}
              />
            </motion.div>

            <motion.div variants={fadeInUp} custom={0.4}>
              <Label
                htmlFor="message"
                className="text-contact-input-text text-sm font-semibold"
              >
                Mensaje
              </Label>
              <textarea
                id="message"
                value={message}
                placeholder="Introduce tu mensaje"
                onChange={(e) => setMessage(e.target.value)}
                required
                className={inputClasses}
                style={{ minHeight: "180px", resize: "vertical" }}
              />
            </motion.div>

            <motion.div variants={fadeInUp} custom={0.5}>
              <Button
                type="submit"
                disabled={isLoading}
                className="
                  cursor-pointer
                  bg-contact-btn-bg
                  text-contact-btn-text
                  hover:bg-contact-btn-hover  
                  py-4.5
                  rounded-[8px] 
                  mt-1 
                  border
                  text-sm
                  w-full
                  transition-none
                  flex items-center justify-center"
              >
                {isLoading ? loadingText : "Enviar mensaje"}
              </Button>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          className="pl-0 md:pl-23 lg:pl-40"
          variants={fadeInUp}
          custom={0.6}
        >
          <h3 className="text-contact-team-ttl text-2xl font-semibold mb-9">
            Miembros del equipo
          </h3>

          <ul className="space-y-8 text-gray-300">
            {[
              { name: "Emir Polito Guevara", email: "emirpolitog@mail.com" },
              {
                name: "Irving Esteban Molina Méndez",
                email: "cristiandaniel@gmail.com",
              },
              {
                name: "Cristian Daniel Barraza Hernández",
                email: "irvingesteban@gmail.com",
              },
            ].map((member, i) => (
              <motion.li key={i} variants={fadeInUp} custom={0.7 + i * 0.1}>
                <p className="text-base font-medium text-contact-team-name">
                  {member.name}
                </p>
                <p className="text-sm text-contact-team-email">
                  {member.email}
                </p>
              </motion.li>
            ))}
          </ul>

          <div className="flex gap-7 mt-8">
            <a
              className="text-contact-social hover:text-contact-social-hvr transition-colors"
              href="https://www.facebook.com/profile.php?id=61563746413453"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.69v-3.622h3.13V8.414c0-3.1 1.893-4.788 4.659-4.788c1.325 0 2.464.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 0 22.675 0z" />
              </svg>
            </a>

            <a
              className="text-contact-social hover:text-contact-social-hvr transition-colors"
              href="https://www.instagram.com/ralq.utsv?igsh=Z256dmRoOXY3ZDg2"
            >
              <svg
                className="w-6.5 h-6.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1a9.09 9.09 0 01-2.88 1.1 4.52 4.52 0 00-7.72 4.13A12.84 12.84 0 013 2.15A4.52 4.52 0 004.6 9.72a4.51 4.51 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43a4.52 4.52 0 01-2.04.08a4.52 4.52 0 004.22 3.14A9.06 9.06 0 012 19.54a12.79 12.79 0 006.92 2.03c8.3 0 12.85-6.87 12.85-12.85c0-.2-.01-.42-.02-.63A9.2 9.2 0 0023 3z" />
              </svg>
            </a>

            <a
              className="text-contact-social hover:text-contact-social-hvr transition-colors"
              href="https://chat.whatsapp.com/HGGxXfwclFBEQBHr2clRLm"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16.003 2.667c-7.363 0-13.333 5.97-13.333 13.333c0 2.353.613 4.647 1.773 6.667L2.667 29.333l7.01-1.733c1.943 1.06 4.14 1.633 6.327 1.633h.001c7.363 0 13.333-5.97 13.333-13.333c0-3.556-1.387-6.897-3.907-9.417c-2.52-2.52-5.86-3.916-9.428-3.916zm7.727 19.733c-.327.92-1.88 1.773-2.607 1.88c-.667.1-1.527.14-2.467-.153c-.567-.18-1.293-.42-2.233-.82c-3.927-1.707-6.48-5.693-6.68-5.953c-.2-.267-1.587-2.113-1.587-4.027c0-1.913 1-2.853 1.353-3.247c.353-.393.78-.493 1.04-.493c.26 0 .52.003.747.013c.24.13.56-.087.873.667c.327.787 1.113 2.72 1.213 2.92c.1.2.167.447.033.713c-.127.273-.193.447-.380.687c-.193.233-.407.52-.580.700c-.193.193-.393.407-.167.800c.227.393 1.007 1.653 2.160 2.673c1.487 1.287 2.720 1.693 3.113 1.867c.393.173.620.147.853-.087c.233-.233.980-1.140 1.240-1.527c.260-.387.520-.327.873-.193c.353.133 2.227 1.053 2.613 1.247c.387.193.647.287.747.447c.100.160.100.927-.227 1.847z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
