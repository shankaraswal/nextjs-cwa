import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "@/components/auth/card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops ! Something went wrong"
      backButtonLabel="Go back to Login"
      backButtonHref="/auth/user-login"
    >
      <div className="w-full flex flex-col justify-center items-center ">
        <ExclamationTriangleIcon className=" size-12 text-red-600 text-[100px]" />
      </div>
    </CardWrapper>
  );
};
