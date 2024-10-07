"use client"

import { useRouter } from "next/navigation";

interface CardProps {
  title: string;
  subtitle: string;
}

export const Card = ({ title, subtitle }: CardProps) => {

  const router = useRouter(); 

  const handleClickRefresh = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg mb-2 border-[1px]">
      <h3 className="text-lg font-bold text-gray-800 mb-0">{title}</h3>
      <p className="text-gray-600 mb-0">{subtitle}</p>
      <button
        onClick={handleClickRefresh}
        className="w-full h-full rounded-lg bg-rose-500 text-white p-2 font-medium hover:bg-rose-600 transition-colors duration-300 mt-2"
      >
        Solicitar
      </button>
    </div>
  );
};