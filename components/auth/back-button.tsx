"use client";

import { Button } from "@/components/ui/button";

export const BackButton = ({
  href,
  label,
}: {
  href: string;
  label: string;
}) => {
  return (
    <Button size="sm" className="font-normal w-full" variant="link" asChild>
      <a href={href}>{label}</a>
    </Button>
  );
};
