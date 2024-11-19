"use client";

import robotImg from "@/assets/images/robot.jpg";
import naveImg from "@/assets/images/futurama-nave.png";
import underlineImage from '@/assets/images/underline.svg?url';
import Loader from '@/assets/images/loader-animated.svg';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { Orbit } from '@/components/Orbit';
import { Planet } from "@/components/Planet";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";

export const Hero = () => {
  return (
    <>
      <section>
        <div className="container">
          <SectionBorder>
            <SectionContent className="relative isolate[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
                <div className="absolute inset-0 -z-10">
                  {[400, 600, 900].map((size) => (
                    <div key={size} className="absolute-center">
                      <Orbit className={`w-[${size}px] h-[${size}px]`} />
                    </div>
                  ))}
                  <div className="absolute-center w-[400px] h-[400px] rounded-full border border-gray-500"></div>
                  <div className="absolute-center w-[600px] h-[600px] rounded-full border border-gray-500"></div>
                  <div className="absolute-center w-[900px] h-[900px] rounded-full border border-gray-500"><Image src={naveImg} alt="Planet Express" className="translate-x-20 translate-y-20 w-12 h-auto" /></div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
                  Prepare-se para o futuro com{' '}
                  <span className="relative">
                    <span>Bender IA</span>
                    <span 
                      className="absolute w-full left-0 top-full -translate-y-1/2 h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                      style={{
                        maskImage: `url(${underlineImage.src})`,
                        maskSize: 'contain',
                        maskPosition: 'center',
                        maskRepeat: 'no-repeat',
                      }}
                    ></span>
                  </span>
                </h1>
                <p className="text-center text-lg md:text-xl mt-8 max-w-3xl mx-auto">
                  O Bender está pronto para transformar o seu dia-a-dia! Junte-se ao robô mais malandro do futuro e automatize seus processos com o toque único de Bender. Nada de chatbots chatos – aqui, o sarcasmo é garantido.
                </p>
                <div className="flex justify-center">
                  <Button variant="secondary" className="mt-10">
                    Comece a conversa com o Bender
                  </Button>
                </div>
                <div className="relative isolate max-w-5xl mx-auto">
                  <div className="absolute left-1/2 top-0">
                    <div className="relative isolate max-w-5xl mx-auto mt-16">
                      <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
                        <Planet size="lg" color="fuchsia" className="-translate-x-30 -translate-y-10 rotate-[135deg]" />
                        <Planet size="md" color="teal" className="translate-x-[180px] -translate-y-[250px] rotate-[135deg]" />
                        <Planet size="lg" color="violet" className="-translate-x-[160px] -translate-y-[200px] rotate-[135deg]" />
                        <Planet size="sm" color="fuchsia" className="-translate-x-[430px] -translate-y-[240px] rotate-[135deg]" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 z-10 top-[70%] lg:top-[40%] md:top-[40%] sm:top-[70%] -translate-x-5 pl-2">
                    <div 
                      className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-1 w- md:w-72 lg:w-72 sm:w-36"
                    >
                      <div className="text-sm lg:text-xl md:text-lg sm:text-md">Automatize sua empresa com o Bender IA! Em segundos, configure o sistema e tenha respostas rápidas e sinceras.</div>
                      <div className="text-right text-gray-400 text-sm font-semibold hidden sm:block">1 minuto atrás</div>
                    </div>
                  </div>
                  <div className="absolute right-0 z-10 top-[50%] -translate-x-10 hidden sm:block">
                    <div 
                      className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72"
                    >
                      <div className="text-sm lg:text-xl md:text-lg sm:text-md">
                        <strong>Bender:{' '}</strong> Deixe o futuro brilhante (e levemente caótico) nas mãos do melhor robô de todos os tempos
                      </div>
                      <div className="text-right text-gray-400 text-sm font-semibold">
                        1 minuto atrás
                      </div>
                    </div>
                  </div>
                  <div className="mt-20 rounded-2xl border-2 overflow-hidden border-gradient relative">
                    <Image src={robotImg} alt="Bender, o robô da IA" />
                    <div className="absolute bottom-2 md:bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 px-4 hidden sm:block">
                      <div className="bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full">
                        <Loader className='text-violet-400' />
                        <div className="font-semibold text-xl text-gray-100">A IA está aprontando<span className="animate-cursor-blink"> |</span></div>
                      </div>
                    </div>
                  </div>
                </div>
            </SectionContent>
          </SectionBorder>
        </div>  
      </section>  
    </>
  );
};

export default Hero;
