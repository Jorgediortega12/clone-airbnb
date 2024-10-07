"use client";

import { Modal } from ".";
import { useCallback, useState } from "react";
import { Button, Heading } from "..";
import { Login } from "@/app/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { userLoginModal, useRegisterModal } from "@/hook";
import { signIn } from "next-auth/react";

export const LoginModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const loginModal = userLoginModal();
  const registerModal = useRegisterModal();

  const bodyContent = (
    <div className="flex flex-col gap-1">
      <Heading title="¡Te damos la bienvenida a Airbnb!" />
      <Login />
    </div>
  );

  const toggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

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
        label={isLoading ? "Cargando..." : "Continuar con Google"}
        icon={FaGoogle}
        onClick={handleGoogleSignIn}
        disabled={isLoading} 
      />

      <Button
        outline
        label={isLoading ? "Cargando..." : "Continuar con Github"}
        icon={FaGithub}
        onClick={handleGithubSignIn}
        disabled={isLoading} 
      />

      <div className="text-neutral-500 text-sm flex items-center justify-center gap-2 font-light">
        <div className="flex flex-row items-center justify-center gap-2">
          ¿No tienes cuenta aún?
        </div>
        <div onClick={toggle} className="text-neutral-700 hover:underline cursor-pointer">
          ¡Créala aquí!
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      disabled={isLoading}
      title="Iniciar sesión o registrarse"
      actionLabel="Continuar"
      onClose={loginModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  );
};