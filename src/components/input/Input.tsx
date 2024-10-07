import { FaDollarSign } from "react-icons/fa";

interface InputProps {
    id: string;
    disabled: boolean;
    label?: string;
    type?: string;
}

export const Input = ({ label, disabled, id, type }: InputProps) => {
    return (
        <div className="w-full">
            <div className="relative">
                <input
                    disabled={disabled}
                    id={id}
                    placeholder=""
                    className="
                        peer
                        w-full 
                        p-3 
                        pt-5 
                        font-light
                        bg-white 
                        border 
                        rounded-md 
                        outline-none 
                        transition 
                        disabled:opacity-70 
                        disabled:cursor-not-allowed
                        pl-9
                        border-black/50
                        focus:border-neutral-300
                    "
                    type={type}
                />
                <label
                    className={`
                        absolute
                        text-sm 
                        duration-150
                        transform
                        -translate-y-3
                        top-5
                        z-10
                        origin-[0]
                        left-5
                        peer-placeholder-shown:scale-100
                        peer-placeholder-shown:translate-y-0
                        peer-focus:scale-75
                        peer-focus:-translate-y-4
                        text-zinc-400
                        flex
                        items-center
                    `}>
                    {type === "number" && (
                        <FaDollarSign size={20} className="mr-1 peer-placeholder-shown:scale-100 peer-focus:scale-100" />
                    )}
                    <span
                        className="
                            peer-placeholder-shown:scale-100
                            peer-placeholder-shown:translate-y-0
                            peer-focus:scale-75
                            peer-focus:-translate-y-4
                            transition
                        "
                    >
                        {label}
                    </span>
                </label>
            </div>
        </div>
    );
};