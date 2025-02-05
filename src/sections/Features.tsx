import slackLogo from "../assets/images/slack-logo.png";
import dockerLogo from "../assets/images/docker-logo.png";
import figmaLogo from "../assets/images/figma-logo.png";
import githubLogo from "../assets/images/github-logo.png";
import vsCodeLogo from "../assets/images/vs-code-logo.png";
import notionLogo from "../assets/images/notion-logo.png";
import jiraLogo from "../assets/images/jira-logo.png";
import gcpLogo from "../assets/images/gcp-logo.png";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import { Button } from "@/components/Button";
import { Orbit } from "@/components/Orbit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "./Logo";
import Image from "next/image";

export const features = [
  "Integração sem esforço",
  "Automação inteligente",
  "Segurança robusta",
];

export const logos = [
  {
    src: slackLogo,
    alt: "slack logo",
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: "github logo",
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: notionLogo,
    alt: "notion logo",
    rotate: 225,
  },
  {
    src: jiraLogo,
    alt: "jira logo",
    rotate: 270,
  },
  {
    src: gcpLogo,
    alt: "gcp logo",
    rotate: 315,
  },
];

export const Features = () => {
  return (
    <section>
      <div 
        id="features"
        className="container">
        <SectionBorder borderTop>
          <SectionContent className="md:px-20 lg:px-40">
            <div className="grid grig-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-200 leading-tight">Seu aliado no dia dia com IA inteligente</h2>
                <ul className="mt-12 flex flex-col gap-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-4"
                    >
                      <FontAwesomeIcon icon={faCircleCheck} className="size-4 text-violet-400" />
                      <span className="text-xl font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-16">Experimente agora</Button>
              </div>
              <div className="flex justify-center">
                <div className="size-[270px] md:size-[450px] relative flex flex-shrink-0">
                  <div className="absolute inset-0">
                    <Orbit className="size-full" />
                  </div>
                  <div className="absolute-center">
                    <Orbit className="size-[180px] md:size-[300px]" />
                  </div>
                  <div className="absolute-center">
                    <Logo className="size-24" />
                  </div>
                  {logos.map(({ src, alt, rotate }) => (
                    <div
                      key={alt}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        transform: `rotate(${rotate}deg)`,
                      }}
                    >
                      <div
                        className="size:10 md:size-14 flex items-center justify-center border border-gray-700 rounded-lg bg-gray-950"
                        style={{
                          transform: `translate(-50%, -50%) rotate(-${rotate}deg)`,
                          position: 'absolute',
                          top: '50%',
                          left: '0',
                        }}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          className="size-6 md:size-9"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Features;
