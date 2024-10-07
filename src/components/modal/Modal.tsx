"use client"

import { useCallback, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "..";

interface ModalsProps {
    isOpen?: boolean;
    onClose: () => void;
    secondaryAction?: () => void;
    onSubmit?: () => void;
    onAction?: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    disabled?: boolean;
    actionLabel: string;
    secondaryActionLabel?: string;
}

export const Modal = ({ isOpen, onClose, title, body, footer, disabled, actionLabel, secondaryAction, secondaryActionLabel, onSubmit, onAction }: ModalsProps) => {

    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [disabled, onClose]);

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }
        secondaryAction();
    }, [disabled, secondaryAction]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }
        if (onAction) {
            onAction();
        } else if (onSubmit) {
            onSubmit();
        }
    }, [disabled, onAction, onSubmit]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-50 focus:outline-none bg-neutral-800/70">
                <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
                    {/* Contenido */}
                    <div className={`translate duration-300 h-full ${showModal ? 'translate-y-0' : 'translate-y-full'} ${showModal ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="translate h-full lg:h-auto md:h-auto border-0 bg-white rounded-xl shadow-lg relative flex flex-col outline-none focus:outline-none">
                            {/* Header */}
                            <div className="flex items-center justify-center p-6 rounded-t relative border-b-[1px]">
                                <button onClick={handleClose} className="p-1 border-0 hover:opacity-70 transition-all absolute left-4 hover:bg-[#f7f7f7] rounded-full">
                                    <IoClose size={18} />
                                </button>
                                <div className="text-lg font-light">
                                    {title}
                                </div>
                            </div>
                            {/* Body */}
                            <div className="relative p-4 flex-auto">
                                {body}
                            </div>
                            {/* Footer */}
                            <div className="flex flex-col gap-2 p-4">
                                <div className="flex flex-row items-center gap-4 w-full">
                                    {secondaryAction && secondaryActionLabel && (
                                        <Button
                                            outline
                                            disabled={disabled}
                                            label={secondaryActionLabel}
                                            onClick={handleSecondaryAction}
                                        />
                                    )}
                                    <Button
                                        disabled={disabled}
                                        label={actionLabel}
                                        onClick={handleSubmit}
                                    />
                                </div>
                                {footer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}