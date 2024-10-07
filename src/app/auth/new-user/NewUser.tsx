"use client";

import { login, registerUser } from "@/action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type formInputs = {
    name: string;
    email: string;
    password: string;
};

export const NewUser = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit } = useForm<formInputs>();
    const router = useRouter(); 

    const onSubmit: SubmitHandler<formInputs> = async (data) => {
        const { email, password, name } = data;

        //server action
        const resp = await registerUser(name, email, password);
        if (!resp.ok) {
            setErrorMessage(resp.message);
            return;
        }

        await login(email.toLowerCase(), password);
        router.push("/");
    };

    const handleInputChange = () => {
        setErrorMessage('');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
                    type="text"
                    {...register("name", { required: true })}
                    onChange={handleInputChange}
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
                    Nombre
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
                        border-black/50
                        focus:border-neutral-300
                    "
                    type="email"
                    {...register("email", { required: true })}
                    onChange={handleInputChange}
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
                    {...register("password", { required: true })}
                    onChange={handleInputChange}
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
                <p>
                    Te vamos a confirmar el número por teléfono o mensaje de texto. Sujeto a las tarifas estándar para mensajes y datos.
                    <span className="underline cursor-pointer font-bold"> Política de privacidad</span>
                </p>
            </div>

            {errorMessage && (
                <div className="flex items-center justify-center text-xl text-red-500 mt-2">
                    {errorMessage}
                </div>
            )}
        </form>
    );
}