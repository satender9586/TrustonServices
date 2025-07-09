import { ButtonProps } from "@/types/button"

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  disabled
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-1 rounded-full font-serif bg-[#4CAF4F] text-white disabled:cursor-not-allowed"
    >
      {children}
    </button>
  )
}

export default Button
