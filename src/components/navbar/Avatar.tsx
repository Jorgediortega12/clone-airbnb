import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
}

export const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      src={src || "/img/placeholder.jpg"}
      alt="user"
      width={30}
      height={30}
    />
  );
};