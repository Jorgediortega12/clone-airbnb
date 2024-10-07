"use client"

interface UploadButtonProps {
    onClick?: () => void;
}

import { IoCloudDownloadOutline } from "react-icons/io5";

export const UploadButton = ({ onClick }: UploadButtonProps) => {
    const toggleUpload = () => { };

    return (
        <div
            onClick={toggleUpload}
            className="relavite transition-all cursor-pointer"
        >
            <IoCloudDownloadOutline
                onClick={onClick}
                size={28}
                className="hover:bg-white bg-gray-300 hover:scale-110 transition-all rounded-full p-1 absolute -top-[2px] -right-[2px]"
            />
        </div>
    )
}
