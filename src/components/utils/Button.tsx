const Button = ({
  type,
  label,
}: {
  type: "button" | "submit" | "reset";
  label: string;
}) => {
  return (
    <button
      type={type}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/80"
    >
      {label}
    </button>
  );
};

export default Button;
