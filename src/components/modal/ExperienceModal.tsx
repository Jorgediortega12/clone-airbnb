"use client"

import { Modal } from ".";
import { useState } from "react";
import { ButtonSocial, Heading } from "..";
import { useExperience } from "@/hook";
import { FaFacebookF, FaFacebookMessenger, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const styles = {
  container: "flex items-center justify-center gap-4 border-[1px] border-neutral-200 rounded-lg p-2 cursor-pointer hover:border-rose-500 transition-all duration-300",
}

export const ExperienceModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const experienceModal = useExperience();

  const handleCopyLink = async () => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert('Enlace copiado!');
  }

  const bodyContent = (
    <div className="flex flex-col gap-1">
      <Heading title="Comparte esta experiencia" />
      <div className="flex items-center justify-center">
        <p className="font-light text-neutral-500">Quedaté en la casa de Purple Rain</p>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className={styles.container}>
          <ButtonSocial
            title="Copiar enlace"
            icon={<FaFacebookF />}
            onClick={handleCopyLink}
            disabled={isLoading}
          />
        </div>

        <div className={styles.container}>
          <ButtonSocial
            title="Correo electrónico"
            icon={<MdOutlineMail />}
          />
        </div>

        <div className={styles.container}>
          <ButtonSocial
            title="Mensaje"
            icon={<FaMessage />}
          />
        </div>

        <div className={styles.container}>
          <ButtonSocial
            title="WhatsApp"
            icon={<FaWhatsapp />}
          />
        </div>

        <div className={styles.container}>
          <ButtonSocial
            title="Instagram"
            icon={<FaInstagram />}
          />
        </div>

        <div className={styles.container}>
          <ButtonSocial
            title="Messenger"
            icon={<FaFacebookMessenger />}
          />
        </div>

        <div className={styles.container}>
          <ButtonSocial
            title="Facebook"
            icon={<FaFacebookF />}
          />
        </div>

        <div className={styles.container}>
          <ButtonSocial
            title="Twitter"
            icon={<FaTwitter />}
          />
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      isOpen={experienceModal.isOpen}
      disabled={isLoading}
      actionLabel="Comparte tu experiencia"
      onClose={experienceModal.onClose}
      body={bodyContent}
    />
  )
}