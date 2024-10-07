"use client"

import { useEffect, useState } from "react";

interface ClientProps {
    children: React.ReactNode;
}

export const ClientOnly = ({ children }: ClientProps) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, [])

    if (!hasMounted) {
        return null;
    }

    return (
        <div>
            {children}
        </div>
    )
}
