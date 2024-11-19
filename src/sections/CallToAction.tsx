import { Button } from "@/components/Button";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import underlineImage from '@/assets/images/underline.svg?url';
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";
import naveImg from "../assets/images/futurama-nave.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section>
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="relative isolate">
          <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]">
            <div className="absolute inset-0"></div>
              <Orbit className="size-[200px] absolute-center" />
              <Orbit className="size-[350px] absolute-center" />
              <Orbit className="size-[500px] absolute-center" />
              <Orbit className="size-[650px] absolute-center" />
              <Orbit className="size-[800px] absolute-center" />
              <Orbit className="size-[1000px] absolute-center" />
            </div>
            <div className="absolute-center -z-10">
              <Planet 
                size="lg" 
                color="teal" 
                className="translate-y-[200px] -translate-x-[200px] rotate-45" />
            </div>
            <div className="absolute-center -z-10">
              <Planet 
                size="lg" 
                color="violet" 
                className="translate-x-[200px] -translate-y-[200px] -rotate-135" />
            </div>
            <div className="absolute-center -z-10">
              <Planet 
                size="lg" 
                color="fuchsia" 
                className="translate-x-[300px] -translate-y-[300px] -rotate-135" />
            </div>
            <div className="absolute-center -z-10">
              <Planet 
                size="sm" 
                color="fuchsia" 
                className="translate-x-[30px] -translate-y-[180px] -rotate-135" />
            </div>
            <div className="absolute-center -z-10">
              <Planet 
                size="sm" 
                color="teal" 
                className="translate-x-[90px] translate-y-[80px] -rotate-135" />
            </div>
            <div className="absolute-center -z-10">
              <Planet 
                size="md" 
                color="violet" 
                className="-translate-x-[400px] -translate-y-[190px] rotate-45" />
                <Image src={naveImg} alt="Planet Express" className="-translate-x-[400px] -translate-y-[170px] w-12 h-auto" />
            </div>
            <h2 className="text-gray-200 font-semibold text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto text-center leading-tight">Junte-se à revolução da IA ​​com {' '}
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
            </h2>
            <p className="text-center text-xl mt-8 max-w-2xl mx-auto">
              Ei, humano! Se você não está usando a IA do Bender, está perdendo tempo. Eu sou a solução definitiva para todas as suas tarefas chatas e repetitivas. Automação, inteligência e uma boa dose de sarcasmo. O que você está esperando? Vamos botar esse trabalho no modo "sem esforço".
            </p>
            <div className="flex justify-center mt-10">
              <Button variant="secondary">
                Começar
              </Button>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  )
};

export default CallToAction;
