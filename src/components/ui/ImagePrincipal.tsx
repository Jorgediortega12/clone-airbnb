"use client";

import { ClientOnly, Container, UploadButton } from "@/components";
import { useExperience } from "@/hook";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export const ImagePrincipal = () => {
    const experienceModal = useExperience();
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter(); 

    const handleRedirect = () => {
        router.push("/rooms/reservation")
    };

    const images = [
        "/img/room.jpg",
        "/img/boda.jpg",
        "/img/future.jpg",
        "/img/sofia.jpg",
        "/img/tour.jpg",
        "/img/kevin.jpg",
        "/img/sofa.jpg",
        "/img/tina.jpg",
        "/img/vestido.jpg",
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <ClientOnly>
                <Container>
                    <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                        {isLoading
                            ? Array(9).fill(0).map((_, index) => (
                                <div key={index} className="aspect-square w-full relative overflow-hidden rounded-xl bg-gray-200 animate-pulse" />
                            ))
                            : images.map((src, index) => (
                                <div key={index} className="aspect-square w-full relative overflow-hidden rounded-xl group">
                                    <div className="relative w-full h-full">
                                        <Image
                                            onClick={handleRedirect}
                                            fill
                                            alt={`Listing ${index + 1}`}
                                            src={src}
                                            className="object-cover h-full w-full group-hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                                        />
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        <UploadButton onClick={experienceModal.onOpen} />
                                    </div>
                                </div>
                            ))}
                    </div>
                </Container>
            </ClientOnly>
        </div>
    )
}