"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Farnsworth from "@/assets/images/futurama-farnsworth.png";
import Wernstrom from "@/assets/images/futurama-dr-ogden-wernstrom.png";
import Leela from "@/assets/images/futurama-leela.png";
import Fry from "@/assets/images/futurama-fry.jpg";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";

export const testimonials = [
  {
    quote:
      "Ótimas notícias, pessoal! O Bender revolucionou nossas colaborações de maneira que até minha antiga calculadora científica invejaria! Este chatbot de IA automatiza tarefas e fornece recomendações tão brilhantes que até um cientista maluco como eu fica impressionado. Economiza horas preciosas todas as semanas e, ouso dizer, tornou-se tão indispensável quanto meu dissecador de neutrinos!",
    name: "Hubert J. Farnsworth",
    title: "Professor e cientista",
    image: Farnsworth,
  },
  {
    quote:
      "Hmpf! Tenho que admitir, mesmo com minha brilhante mente superior, o Bender impressiona. Ele se integra sem esforço às nossas ferramentas, como se tivesse sido projetado por um gênio... talvez até por mim! O chatbot de IA responde com uma precisão notável e está constantemente aprendendo, quase como um aluno aplicado tentando alcançar a minha genialidade. É irritantemente eficiente!",
    name: "Dr. Ogden Wernstrom",
    title: "Professor e cientista",
    image: Wernstrom,
  },
  {
    quote:
      "Como capitã, sempre busco formas de tornar nosso trabalho mais eficiente, e o Bender conseguiu fazer isso! Ele simplificou nossas operações e agilizou as entregas de um jeito que eu nunca pensei ser possível. Com respostas rápidas e recomendações certeiras, o trabalho da equipe ficou muito mais fácil. É quase como se ele realmente quisesse ajudar... mas conhecendo o Bender, sei que ele só está se divertindo no processo!",
    name: "Turanga Leela",
    title: "Capitã",
    image: Leela,
  },
  {
    quote:
      "Uau, nunca pensei que diria isso, mas o Bender é incrível! Ele faz o trabalho tão fácil que agora eu nem preciso mais fazer nada... sério, é como se ele estivesse me dando férias eternas. É super rápido, inteligente, e termina projetos em tempo recorde. Se continuar assim, eu só vou precisar me preocupar em decidir onde pedir a próxima pizza. Valeu, Bender, você é o melhor... mas não deixa isso subir à sua cabeça de lata, hein?",
    name: "Philip J. Fry",
    title: "Entregador",
    image: Fry,
  },
];

export const Testimonials = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // 5 segundos
    return () => clearInterval(interval);
  }, []);

  const handleSelectTestimonial = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <section>
      <div id="testimonials" className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <div className="border-gradient rounded-3xl px-6 md:px-10 lg:px-16 py-16 lg:py-24 relative flex flex-col md:flex-row items-center gap-12 md:mx-10 lg:mx-20">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="absolute size-20 text-violet-400 top-0 left-6 md:left-10 lg:left-16 -translate-y-1/2"
              />
              <blockquote className="flex flex-col lg:flex-row gap-12">
                <p className="text-xl md:text-2xl font-medium">
                  {testimonials[selectedIndex].quote}
                </p>
                <cite className="not-italic lg:text-left">
                  <Image
                    src={testimonials[selectedIndex].image}
                    alt={testimonials[selectedIndex].name}
                    className="rounded-xl size-28 max-w-none"
                  />
                  <div className="font-bold mt-4">{testimonials[selectedIndex].name}</div>
                  <div className="text-xs text-gray-400 mt-2">
                    {testimonials[selectedIndex].title}
                  </div>
                </cite>
              </blockquote>
              <div className="flex md:flex-col gap-2 justify-center">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`size-6 relative inline-flex items-center justify-center cursor-pointer ${
                      selectedIndex === index ? "bg-violet-400" : "bg-gray-200"
                    }`}
                    onClick={() => handleSelectTestimonial(index)}
                  >
                    <div
                      className={`size-1.5 rounded-full ${
                        selectedIndex === index ? "bg-violet-400" : "bg-gray-200"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Testimonials;
