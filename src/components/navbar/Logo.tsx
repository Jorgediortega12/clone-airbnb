"use client"

import Image from "next/image"; 
import { useRouter } from "next/navigation";

export const Logo = () => {

    const router = useRouter(); 

    return (
        <Image
            onClick={() => router.push("/")}
            className="hidden md:block cursor-pointer"
            src="/img/Airbnb.png"
            alt="logo-image"
            width={100}
            height={100}
        />
    )
}
