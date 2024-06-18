import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome to login page"
      backButtonLabel="Don't have an account"
      backButtonHref="/auth/login"
      showSocialLogin={true}
    >
      <div className="flex items-center gap-y-4 h-40 border-2 border-red-200 p-4">
        <h1 className="text-center">This is a LoginForm !</h1>
      </div>
    </CardWrapper>
  );
};
