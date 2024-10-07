interface ButtonSocialProps {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const ButtonSocial = ({ title, icon, onClick, disabled = false }: ButtonSocialProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex 
        items-center 
        justify-center 
        gap-2 
        p-2 
        rounded-lg 
        transition-all 
        duration-300 
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:border-rose-500"}
      `}
    >
      {icon}
      <p>{title}</p>
    </button>
  );
};