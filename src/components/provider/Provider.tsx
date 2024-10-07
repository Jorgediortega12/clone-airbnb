"use client"

interface ProviderProps {
    children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
    return (
        <div>
            {children}
        </div>
    )
}
