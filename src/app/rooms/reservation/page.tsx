import type { Metadata } from "next";
import { Reservation } from "./ui/Reservation";

export const metadata: Metadata = {
    title: "Reservas - Clone de Airbnb",
    description: "Gestiona tus reservas.",
};

export default function Home() {
    return (
        <div>
            <Reservation />
        </div>
    );
}
