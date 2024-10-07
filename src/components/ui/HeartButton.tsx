"use client";

import { useState } from "react";
import { CiHeart } from "react-icons/ci";

interface HeartProps {
  title: string;
}

export const HeartButton = ({ title }: HeartProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      onClick={toggleFavorite}
      className="flex items-center gap-2 cursor-pointer"
    >
  
      <div
        className={`p-2 rounded-full transition-colors duration-300 ${
          isFavorite ? 'bg-rose-500 text-white' : 'bg-neutral-200 text-neutral-500'
        }`}
      >
        <CiHeart size={18} />
      </div>
     
      {title}
    </div>
  );
};