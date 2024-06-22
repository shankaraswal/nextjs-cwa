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
    <Button
      size="sm"
      className="outline-slate-300 outline-1 text-sm underline hover:text-red-700 text-teal-700 font-semibold italic w-full"
      variant="link"
      asChild
    >
      <a href={href}>{label}</a>
    </Button>
  );
};
