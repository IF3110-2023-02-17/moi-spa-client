import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

const Button = ({
  type,
  children,
  onClick,
  asChild,
  disabled,
}: {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: () => void;
  asChild?: boolean;
  disabled?: boolean;
}) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      type={type}
      disabled={disabled}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/80"
      onClick={onClick}
    >
      {children}
    </Comp>
  );
};

export default Button;
