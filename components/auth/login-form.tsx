import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="welcome to login page"
      backButtonLabel="Don't have an account"
      backButtonHref="/auth/login"
      showSocialLogin={true}
    >
      <h1>This is a LoginForm !</h1>
    </CardWrapper>
  );
};
