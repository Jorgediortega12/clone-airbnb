"use client";

import { saveImageUrlToDatabase } from "@/action";
import Image from "next/image";
import { useState } from "react";

export const ImageUpload = () => {
    const [isUploading, setIsUploading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setIsUploading(true);

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "clone-airbnb");

            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();
            await saveImageUrlToDatabase(data.secure_url);
            setImageUrl(data.secure_url);
            setIsUploading(false);
        }
    };

    return (
        <div className="relative hover:opacity-70 transition-all border-dashed border-2 p-20 flex flex-col items-center justify-center border-neutral-300 gap-4 text-neutral-600">
            <input type="file" onChange={handleUpload} />
            {isUploading && <p>Uploading...</p>}
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="Uploaded"
                    className="mt-4 w-full h-auto rounded"
                    width={50}
                    height={50}
                />
            )}
        </div>
    );
};