"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState } from "react";
import { Avatar, MenuItems } from "..";
import { useRentModal, userLoginModal, useRegisterModal } from "@/hook";
import { signOut, useSession } from "next-auth/react";

export const UserMenu = () => {
    const { data: session } = useSession();
    const isAuthenticated = Boolean(session?.user);
    const [isOpen, setIsOpen] = useState(false);

    const loginModal = userLoginModal();
    const registerModal = useRegisterModal();
    const rentModal = useRentModal();

    // Toggle open state with useCallback to prevent unnecessary re-renders
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    // Memoize the signOut callback
    const handleSignOut = useCallback(() => signOut(), []);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar src={session?.user?.image} />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute rounded-xl w-[17vw] shadow-xl bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        {!isAuthenticated ? (
                            <>
                                <MenuItems
                                    onClick={registerModal.onOpen}
                                    label="Registrarse"
                                />
                                <MenuItems
                                    onClick={loginModal.onOpen}
                                    label="Iniciar Sesion"
                                />
                                <hr />
                                <MenuItems label="Pon tu espacio en Airbnb" />
                                <MenuItems label="Centro de ayuda" />
                            </>
                        ) : (
                            <>
                                <MenuItems label="Bienvenido a Airbnb" />
                                <MenuItems label="Tus compras" />
                                <MenuItems label="Pon tu espacio en Airbnb" onClick={rentModal.onOpen} />
                                <MenuItems label="Tus reservaciones" />
                                <MenuItems label="Centro de ayuda" />
                                <MenuItems
                                    onClick={handleSignOut}
                                    label="Cerrar sesion"
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};