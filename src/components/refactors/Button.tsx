import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: () => void;
  asChild?: boolean;
  disabled?: boolean;
}

const Button = ({
  type = "button",
  children,
  onClick,
  asChild = false,
  disabled = false,
}: ButtonProps) => {
  const Component = asChild ? Slot : "button";

  const buttonStyles = `
    group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm
    font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none
    focus:ring-2 focus:ring-offset-2 focus:ring-primary/80
  `;

  return (
    <Component
      type={type}
      disabled={disabled}
      className={buttonStyles}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default Button;
