"use client"

import { Modal } from ".";
import { useState } from "react";
import { Heading } from "..";
import { modalLanguaje } from "@/hook";

const languagescountries = [
  { country: "Colombia", language: "Español" },
  { country: "EE.UU.", language: "Inglés" },
  { country: "Francia", language: "Francés" },
  { country: "Alemania", language: "Alemán" },
  { country: "Japón", language: "Japonés" },
  { country: "China", language: "Mandarín" },
  { country: "Brasil", language: "Portugués" },
  { country: "Italia", language: "Italiano" },
  { country: "Rusia", language: "Ruso" },
  { country: "India", language: "Hindi" },
  { country: "México", language: "Español" },
  { country: "Canadá", language: "Inglés y Francés" },
  { country: "Australia", language: "Inglés" },
  { country: "Egipto", language: "Árabe" },
  { country: "Sudáfrica", language: "Inglés y Zulú" },
  { country: "Corea del Sur", language: "Coreano" },
  { country: "Argentina", language: "Español" },
  { country: "España", language: "Español" },
  { country: "Suecia", language: "Sueco" },
  { country: "Turquía", language: "Turco" }
];

const styles ="flex flex-col hover:bg-neutral-100 p-2 rounded-md cursor-pointer transition-all duration-150";
const selectedStyles ="bg-neutral-200 border border-neutral-400";

export const LanguageModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const loginModal = modalLanguaje();

  
  const handleSelectLanguage = (idioma: string) => {
    setIsLoading(true); 
    setTimeout(() => {
      setSelectedLanguage(idioma);
      setIsLoading(false); 
    }, 1000); 
  };
  
  const handleContinue = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      loginModal.onClose(); 
    }, 1500); 
  };

  const bodyContent = (
    <div className="flex flex-col gap-1">
      <Heading title="Idiomas y regiones sugeridos" />

      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className={`${styles}`}>
          <p>Español</p>
          <p>Latinoamérica</p>
        </div>

        <div className={`${styles}`}>
          <p>Español</p>
          <p>México</p>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-[24px] font-light">Elige un idioma o región</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-4 gap-3 mt-2">
          {languagescountries.map((item) => (
            <div
              key={item.country}
              className={`${styles} ${selectedLanguage === item.language ? selectedStyles : ''}`}
              onClick={() => handleSelectLanguage(item.language)}
            >
              <p>{item.language}</p>
              <p>{item.country}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      actionLabel={isLoading ? "Cargando..." : "Continuar"}
      isOpen={loginModal.isOpen}
      disabled={isLoading} 
      onClose={loginModal.onClose}
      onAction={handleContinue} 
      body={bodyContent}
    />
  );
};