import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

export const ErrorCard = () => {
  return (
    <Card className="w-[400px] flex flex-col h-[300px] justify-center shadow-lg">
      <CardHeader>
        <Header label="Oops ! Something went wrong" />
      </CardHeader>
      <CardFooter className="text-center">
        <BackButton label="Go back" href="/auth/user-login" />
      </CardFooter>
    </Card>
  );
};
