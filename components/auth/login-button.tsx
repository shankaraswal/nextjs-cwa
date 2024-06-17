"use-client";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "model" | "redirect";
  aschild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  aschild,
}: LoginButtonProps) => {
  const onClick = () => {
    console.log("LOGIN BUTTON CLICKED");
  };
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};
