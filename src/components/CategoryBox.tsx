"use client";

import { useParams, useRouter } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryProps {
    label: string;
    icon: IconType;
    selected?: boolean;
}

export const CategoryBox = ({ label, selected, icon: Icon }: CategoryProps) => {
    const router = useRouter();
    const params = useParams();

    const handleClick = useCallback(() => {
        let currentQuery: Record<string, string | number | boolean> = {};

        if (params) {
            // Se parsea la cadena de consulta y se convierten los valores
            currentQuery = Object.fromEntries(
                Object.entries(qs.parse(params.toString())).map(([key, value]) => {
                    // Filtrar valores nulos y convertir arrays a cadenas
                    if (Array.isArray(value)) {
                        return [key, value[0]]; // Usar el primer elemento del array
                    } else if (value !== null) {
                        return [key, value]; // Mantener el valor como está si no es nulo
                    }
                    return [key, undefined]; // Retornar undefined si el valor es nulo
                })
            ) as Record<string, string | number | boolean>; // Type assertion para asegurar el tipo

            // Filtrar valores undefined
            currentQuery = Object.fromEntries(
                Object.entries(currentQuery).filter(([, value]) => value !== undefined)
            );
        }

        const updatedQuery: Record<string, string | number | boolean> = {
            ...currentQuery,
            category: label
        };

        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true });

        router.push(url);
    }, [label, params, router]);

    return (
        <div
            onClick={handleClick}
            className={`
            flex 
            flex-col 
            items-center 
            justify-start 
            gap-2 
            p-3 
            border-b-2
             hover:text-neutral-800 
            transition-all 
            cursor-pointer
            ${selected ? 'border-b-neutral-800' : 'border-transparent'}
            ${selected ? 'text-neutral-800' : 'text-neutral-500'}
            `}>
            <Icon size={20} />
            <div className="font-medium text-[12px] flex items-center justify-center">
                {label}
            </div>
        </div>
    );
};