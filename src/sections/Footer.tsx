import React from "react";
import {
  faYoutube,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import underlineImage from '@/assets/images/underline.svg?url';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const navItems = [
  {
    name: "Características",
    href: "#features",
  },
  {
    name: "Preço",
    href: "#price",
  },
  {
    name: "Depoimentos",
    href: "#testimonials",
  },
  {
    name: "Login",
    href: "#",
  },
];

export const socialLinks = [
  {
    name: "Youtube",
    icon: faYoutube,
    href: "#youtube",
  },
  {
    name: "X",
    icon: faXTwitter,
    href: "#x",
  },
  {
    name: "Discord",
    icon: faDiscord,
    href: "#discord",
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8">
          <span className="relative font-extrabold text-2xl">
            <span>Bender IA</span>
              <span 
                className="absolute w-full left-0 top-full -translate-y-1/2 h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                style={{
                  maskImage: `url(${underlineImage.src})`,
                  maskSize: 'contain',
                  maskPosition: 'center',
                  maskRepeat: 'no-repeat',
                }}
              >  
              </span>
            </span>
          <nav className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {navItems.map((item) => (
              <a 
                href={item.href} 
                key={item.href}
                className="uppercase text-xs tracking-widest font-bold text-gray-400 hover:text-gray-100"
              >  
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex flex-col md:flex-row-reverse md:justify-between items-center gap-8">
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <div 
                key={link.name}
                className="size-10 rounded-full bg-gray-900 inline-flex items-center justify-center"
              >
                <FontAwesomeIcon 
                  icon={link.icon} 
                  className="size-4" 
                />
              </div>
            ))}
          </div>
          <div className='flex flex-col md:flex-row md:justify-center mt-6 text-white/80 mb-8 tracking-tight'>
            <p className='text-gray-500 text-sm'>Copyright 2024 ©<a href="https://www.linkedin.com/in/gustavo-desenvolvedor/" className='mx-2 hover:text-gray-400'>Gustavo Silva</a>. Todos os direitos reservados.</p>
        </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
