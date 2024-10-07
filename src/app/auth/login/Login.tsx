"use client";

import { authenticate } from "@/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export const Login = () => {
    const [state, dispatch] = useFormState(authenticate, undefined);
    const router = useRouter(); 

    useEffect(() => {
        if (state === "CredentialsSignin") {
            if (typeof window !== "undefined") {
                router.push("/");
            }
        }
    }, [state, router]);

    return (
        <form action={dispatch} className="w-full">
            <div className="relative">
                <input
                    placeholder=""
                    className="
                        peer
                        w-full 
                        p-3 
                        pt-5 
                        font-light
                        bg-white 
                        border 
                        rounded-md 
                        outline-none 
                        transition 
                        disabled:opacity-70 
                        disabled:cursor-not-allowed
                        pl-9
                        border-black/50
                        focus:border-neutral-300
                    "
                    type="email"
                    name="email"
                />
                <label
                    className={`
                        absolute
                        text-sm 
                        duration-150
                        transform
                        -translate-y-3
                        top-5
                        z-10
                        origin-[0]
                        left-5
                        peer-placeholder-shown:scale-100
                        peer-placeholder-shown:translate-y-0
                        peer-focus:scale-75
                        peer-focus:-translate-y-4
                        text-zinc-400
                    `}>
                    Correo electronico
                </label>
            </div>

            <div className="relative">
                <input
                    placeholder=""
                    className="
                        peer
                        w-full 
                        p-3 
                        pt-5 
                        font-light
                        bg-white 
                        border 
                        rounded-md 
                        outline-none 
                        transition 
                        disabled:opacity-70 
                        disabled:cursor-not-allowed
                        pl-9
                        border-black/60
                        focus:border-neutral-300
                    "
                    type="password"
                    name="password"
                />
                <label
                    className={`
                        absolute
                        text-sm 
                        duration-150
                        transform
                        -translate-y-3
                        top-5
                        z-10
                        origin-[0]
                        left-5
                        peer-placeholder-shown:scale-100
                        peer-placeholder-shown:translate-y-0
                        peer-focus:scale-75
                        peer-focus:-translate-y-4
                        text-zinc-400
                    `}>
                    Contraseña
                </label>
            </div>

            <div className="text-[12px] mt-2 font-light">
                <p>Te vamos a confirmar el número por teléfono o mensaje de texto. Sujeto a las tarifas estándar para mensajes y datos.
                    <span className="underline cursor-pointer font-bold"> Política de privacidad</span></p>
            </div>
        </form>
    );
}