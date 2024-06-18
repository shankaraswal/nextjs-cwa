import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) {
    return null;
  } else {
    return (
      <div className="bg-red-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-red-600 text-center">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <p>{message}</p>
      </div>
    );
  }
};
