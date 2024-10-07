"use client"

import { Modal } from ".";
import { useCallback, useState } from "react";
import { Button, Heading } from "..";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { NewUser } from "@/app/auth";
import { userLoginModal, useRegisterModal } from "@/hook";
import { signIn } from "next-auth/react";

export const RegisterModal = () => {

  const [isLoading, setIsLoading] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = userLoginModal();

  const bodyContent = (
    <div className="flex flex-col gap-2">
      <Heading title="¡Te damos la bienvenida a Airbnb!" />
      <NewUser />
    </div>
  )

  const toggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen()
  }, [loginModal, registerModal])

  const handleGoogleSignIn = async () => {
    setIsLoading(true); 
    await signIn('google');
    setIsLoading(false); 
  };

  const handleGithubSignIn = async () => {
    setIsLoading(true); 
    await signIn('github');
    setIsLoading(false); 
  };

  const footerContent = (
    <div className="flex flex-col gap-3">
      <hr />

      <Button
        outline
        label="Continuar con Google"
        icon={FaGoogle}
        onClick={handleGoogleSignIn}
        disabled={isLoading}
      />

      <Button
        outline
        label="Continuar con Github"
        icon={FaGithub}
        onClick={handleGithubSignIn}
        disabled={isLoading}
      />

      <div className="text-neutral-500 text-sm flex items-center justify-center gap-2 font-light">
        <div className="flex flex-row items-center justify-center gap-2">
          ¿Ya tienes cuenta?
        </div>
        <div onClick={toggle} className="text-neutral-700 hover:underline cursor-pointer">
          ¡Accede a ella aquí!
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      isOpen={registerModal.isOpen}
      disabled={isLoading}
      title="Iniciar sesion o registrarse"
      actionLabel="Continuar"
      onClose={registerModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  )
}
