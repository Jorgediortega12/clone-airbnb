"use client";

import { Card, ClientOnly, Container, HeartButton } from "@/components";
import { useExperience } from "@/hook";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IconType } from "react-icons";
import { CiMusicNote1, CiShare1 } from "react-icons/ci";
import { GiUnderwearShorts } from "react-icons/gi";
import { MdOutlineBedroomParent } from "react-icons/md";
import { TbLock } from "react-icons/tb";

const styles = "flex items-center gap-2 p-2 rounded-md hover:bg-[#f7f7f7] font-semibold underline text-sm cursor-pointer";

const images = [
  "/img/habitacion.jpg",
  "/img/sofa.jpg",
  "/img/tina.jpg",
  "/img/vestido.jpg",
  "/img/espejo.jpg",
];

const InfoBlock = ({ icon: Icon, title, description }: { icon: IconType; title: string; description: string }) => (
  <div className="text-sm flex items-center mt-5">
    <Icon size={27} />
    <div className="flex flex-col ml-3">
      <p className="font-bold">{title}</p>
      <span className="text-gray-500">{description}</span>
    </div>
  </div>
);

export const Reservation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const experienceModal = useExperience();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <ClientOnly>
      <Container>
        <div className="flex items-center justify-between">
          <p className="text-[27px] font-bold">Quédate en la casa de Purple Rain de Prince</p>

          <div className="flex items-center gap-4">
            <div className={styles}>
              <CiShare1 className="p-2 bg-neutral-200 rounded-full" size={35} />
              <button onClick={experienceModal.onOpen}>Compartir</button>
            </div>
            <div className={styles}>
              <HeartButton title="Guardar" />
            </div>
          </div>
        </div>

        {/* Imágenes */}
        <div className="grid grid-cols-3 grid-rows-2 gap-2 mt-6">
          <div className="col-span-1 row-span-2 relative">
            {isLoading ? (
              <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg"></div>
            ) : (
              <Image
                src={images[0]}
                alt="Imagen principal"
                className="object-cover rounded-lg cursor-pointer hover:scale-95 transition-all duration-300"
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>

          {images.slice(1).map((image, index) => (
            <div key={index} className="w-full h-64 relative">
              {isLoading ? (
                <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg"></div>
              ) : (
                <Image
                  src={image}
                  alt={`Imagen ${index + 1}`}
                  className="object-cover rounded-lg cursor-pointer hover:scale-95 transition-all duration-300"
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
          ))}
        </div>

        {/* Información sobre el lugar */}
        <div className="mt-5 grid grid-cols-2">
          <div className="flex flex-col">
            <p className="font-bold text-xl">Mineápolis, Minnesota, Estados Unidos</p>
            <p>4 Huéspedes · 2 Habitaciones · 2 Camas · 2 Baños</p>

            <hr className="mt-5" />

            {/* Bloque con la foto del anfitrión */}
            <div className="text-sm flex items-center mt-5">
              <Image
                className="rounded-full"
                src="/img/perfil.jpg"
                alt="Photo"
                width={40}
                height={30}
              />
              <div className="flex flex-col ml-3">
                <p>Anfitrión: Wendy And Lisa</p>
                <span className="text-gray-500">Miembros de The Revolution.</span>
              </div>
            </div>

            <hr className="mt-5" />

            {/* Bloques reutilizables de información */}
            <InfoBlock
              icon={MdOutlineBedroomParent}
              title="Visita la verdadera casa de Purple Rain"
              description="Duerme en la habitación de EL Niño, donde tus sueños se hacen realidad."
            />

            <InfoBlock
              icon={GiUnderwearShorts}
              title="Descubre el vestidor de Prince"
              description="¿Recuerdas el icónico traje del tour de Purple Rain? Pues está aquí."
            />

            <InfoBlock
              icon={CiMusicNote1}
              title="Saca la superestrella que llevas dentro"
              description="Aprende a cantar la canción de Purple Rain o a tocarla con la batería."
            />

            <InfoBlock
              icon={TbLock}
              title="Pon a prueba tus conocimientos sobre Prince"
              description="¿Eres 'fam' de Prince? Descubre la habitación secreta y resuelve el acertijo."
            />

            <hr className="mt-5" />
          </div>

          <div className="ml-16 mr-16">
            <Card
              title="$28.017 COP por húesped"
              subtitle="Cierra el 7 de octubre, 1,59"
            />
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
};