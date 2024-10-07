"use client"

import { FaSwimmingPool, FaUmbrellaBeach, FaWater } from 'react-icons/fa'
import { CategoryBox, Container } from '..'
import { FaTicket } from 'react-icons/fa6'
import { MdOutlineBedroomChild, MdOutlineCabin, MdOutlineViewComfy } from 'react-icons/md'
import { usePathname, useSearchParams } from 'next/navigation'
import { GoContainer } from 'react-icons/go'
import { GiCampCookingPot, GiCampingTent, GiCartwheel, GiFarmer, GiForestCamp, GiIsland, GiMountainClimbing } from 'react-icons/gi'
import { CgHomeAlt } from 'react-icons/cg'
import { LiaUmbrellaBeachSolid } from 'react-icons/lia'
import { IoHome, IoHomeOutline } from 'react-icons/io5'
import { PiCastleTurretFill, PiStarThin } from 'react-icons/pi'
import { useEffect, useState } from 'react'

export const categories = [
    {
        label: 'Icónicos',
        icon: FaTicket,
    },
    {
        label: 'Písicinas',
        icon: FaSwimmingPool,
    },
    {
        label: 'Casas rurales',
        icon: GiForestCamp,
    },
    {
        label: 'Cabañas',
        icon: MdOutlineCabin,
    },
    {
        label: 'Playa',
        icon: FaUmbrellaBeach,
    },
    {
        label: 'Contenedor',
        icon: GoContainer,
    },
    {
        label: 'Domos',
        icon: CgHomeAlt,
    },
    {
        label: 'Vistas',
        icon: MdOutlineViewComfy,
    },
    {
        label: 'Minicasas',
        icon: IoHome,
    },
    {
        label: 'Playa',
        icon: LiaUmbrellaBeachSolid,
    },
    {
        label: 'Mansiones',
        icon: IoHomeOutline,
    },
    {
        label: 'Automovil',
        icon: GiCartwheel,
    },
    {
        label: 'Islas',
        icon: GiIsland,
    },
    {
        label: 'Lagos',
        icon: FaWater,
    },
    {
        label: 'Habitaciones',
        icon: MdOutlineBedroomChild,
    },
    {
        label: 'Luxe',
        icon: GiCampCookingPot,
    },
    {
        label: 'Granjas',
        icon: GiFarmer,
    },
    {
        label: 'Alpinas',
        icon: GiMountainClimbing,
    },
    {
        label: 'Castillos',
        icon: PiCastleTurretFill,
    },
    {
        label: 'Campamentos',
        icon: GiCampingTent,
    },
    {
        label: 'Populares',
        icon: PiStarThin,
    },
]

export const Categories = () => {
    const [isLoading, setIsLoading] = useState(true);
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === "/";

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    
    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div className='flex flex-row pt-4 items-center justify-between overflow-auto'>
                {isLoading ? (
                    Array(10).fill(0).map((_, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2">
                            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    ))
                ) : (
                    
                    categories.map((items, index) => (
                        <CategoryBox
                            key={index}
                            label={items.label}
                            selected={category === items.label}
                            icon={items.icon}
                        />
                    ))
                )}
            </div>
        </Container>
    );
};