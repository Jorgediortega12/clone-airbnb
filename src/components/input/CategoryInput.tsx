import { IconType } from "react-icons";

interface CategoryProps {
    onClick: (value: string) => void;
    icon: IconType;
    selected: boolean;
    label: string;

}

export const CategoryInput = ({ onClick, label, icon: Icon, selected }: CategoryProps) => {
    return (
        <div 
            onClick={() => onClick(label)}
            className={`
                rounded-xl
                border-2
                p-2
                flex 
                flex-col
                gap-1
                hover:border-gray-600
                transition-all
                cursor-pointer
                ${selected ? 'border-black' : 'border-neutral-200'}
            `}    
        >
            <Icon size={15} />
            <div className="font-semibold text-[12px]">
                {label}
            </div>
        </div>
    )
}
