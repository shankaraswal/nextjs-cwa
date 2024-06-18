"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocialLogin?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocialLogin,
}: CardWrapperProps) => (
  <Card className="rounded-xl bg-card text-card-foreground shadow">
    <CardHeader>
      <Header label={headerLabel} />
    </CardHeader>
    <CardContent>{children}</CardContent>

    {showSocialLogin && (
      <CardFooter className="flex justify-center gap-x-4">
        <Social />
      </CardFooter>
    )}

    <CardFooter>
      <BackButton href={backButtonHref} label={backButtonLabel} />
    </CardFooter>
  </Card>
);
