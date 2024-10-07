import { FaSearch } from "react-icons/fa";

const baseStyles = "flex flex-col text-[13px] text-[#b0b0b0] cursor-pointer hover:bg-[#f7f7f7] p-2 transition-colors duration-200 ease-in-out rounded-full";

const SelectorItem = ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
        <div className={baseStyles}>
            <span className="text-black">{title}</span>
            <span>{subtitle}</span>
        </div>
    );
};

export const Selector = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-5 md:gap-10 border-[1px] shadow-lg max-w-2xl mx-auto rounded-full">
            <SelectorItem title="Dónde" subtitle="Explora destinos" />
            <SelectorItem title="Llegada" subtitle="Agregar fec..." />
            <SelectorItem title="Salida" subtitle="Agregar fec..." />

            <div className="flex items-center gap-5 md:gap-10 mt-4 md:mt-0 hover:bg-[#f7f7f7] transition-colors duration-200 rounded-full cursor-pointer">
                <SelectorItem title="Quién" subtitle="¿Cuánto?" />
                <div className="w-10 h-10 bg-[#ff385c] rounded-full text-white flex items-center justify-center cursor-pointer hover:bg-[#dc2a4a] transition-colors duration-200 ease-in-out">
                    <button>
                        <FaSearch />
                    </button>
                </div>
            </div>
        </div>
    );
};