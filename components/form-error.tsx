import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) {
    return null;
  } else {
    return (
      <div className="bg-disctructive/15 flex flex-row items-center justify-center text-destructive text-sm gap-x-2">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <p>{message}</p>
      </div>
    );
  }
};
