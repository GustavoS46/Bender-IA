import { Button } from "@/components/Button";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import { twMerge } from "tailwind-merge";
import { ButtonProps } from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const pricingTiers = [
  {
    title: "Básica",
    description: "AI chatbot, recomendações personalizadas",
    price: "Grátis",
    buttonText: "Começar",
    buttonVariant: "secondary",
    features: [
      "Acesso ao AI Chatbot para conversas com idiomas naturais",
      "Automação básica de tarefas para fluxos de trabalho simples",
      "Armazenamento de histórico de mensagens limitado",
    ],
    color: "amber",
    className: "lg:py-12 lg:my-6",
  },
  {
    title: "Premium",
    description: "Recursos avançados de IA para produtividade aprimorada",
    price: 99.98,
    buttonText: "Atualizar para Premium",
    buttonVariant: "secondary",
    features: [
      "Todos os recursos básicos incluídos",
      "Acesso prioritário a novos recursos e atualizações da IA",
      "Ferramentas avançadas de automação para gerenciamento de tarefas sem esforço",
      "Modelos de bate-papo personalizáveis ​​para fluxos de trabalho específicos",
    ],
    color: "violet",
    className: "lg:py-18 lg:my-0",
  },
  {
    title: "Empresa",
    description: "IA Chatbot personalizada, análise avançada, conta dedicada",
    price: null,
    buttonText: "Contate-nos",
    buttonVariant: "primary",
    features: [
      "Todos os recursos Premium incluídos",
      "Gerente de contas dedicado e suporte prioritário ao cliente",
      "Recursos aprimorados de segurança e conformidade para grandes equipes",
      "Modelos de IA personalizados adaptados às necessidades da sua organização",
      "Acesso à API para integração perfeita com sistemas corporativos",
    ],
    color: "teal",
    className: "lg:py-12 lg:my-6",
  },
] satisfies {
  title: string;
  description: string;
  price: string | number | null;
  buttonText: string;
  buttonVariant?: ButtonProps["variant"];
  features: string[];
  color: string;
  className: string;
}[];

export const Pricing = () => {
  return (
    <section>
      <div id="price" className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-center text-gray-200">
              Planos para todas as necessidades
            </h2>
            <div className="mt-12 flex flex-col lg:flex-row lg:items-start gap-8">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.title}
                  className={twMerge(
                    "border border-[var(--color-border)] rounded-3xl px-6 py-12 max-w-sm mx-auto flex-1",
                    tier.className
                  )}
                >
                  <h3
                    className={twMerge(
                      "font-semibold text-4xl",
                      tier.color === "violet" && "text-violet-400",
                      tier.color === "amber" && "text-amber-400",
                      tier.color === "teal" && "text-teal-400"
                    )}
                  >
                    {tier.title}
                  </h3>
                  <p className="mt-4 text-gray-400">{tier.description}</p>
                  <div className="mt-8">
                    {typeof tier.price === "number" && (
                      <span className="text-2xl font-semibold text-gray-200 align-top">
                        R$
                      </span>
                    )}
                    <span className="text-7xl font-semibold text-gray-200">
                      {tier.price ? tier.price : <>&nbsp;</>}
                    </span>
                  </div>
                  <Button
                    className="mt-8"
                    variant={tier.buttonVariant}
                    block
                  >
                    {tier.buttonText}
                  </Button>
                  <ul className="flex flex-col gap-4 mt-8">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="border-t border-[var(--color-border)] pt-4 flex gap-4"
                      >
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="size-4 text-violet-400 flex-shrink-0"
                        />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Pricing;
