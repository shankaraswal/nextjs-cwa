"use client";

import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/index";
import {
  Form,
  FormControl,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { loginActions } from "@/actions/login";

export const LoginForm = () => {
  const [errorMsg, setErrorMsg] = useState<string | undefined>("");
  const [successMsg, setSuccessMsg] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const loginSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setErrorMsg("");
    setSuccessMsg("");

    startTransition(() => {
      loginActions(data).then((response) => {
        setErrorMsg(response.error);
        setSuccessMsg(response.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Welcome to login page"
      backButtonLabel="Don't have an account"
      backButtonHref="/auth/login"
      showSocialLogin={true}
    >
      <div className="flex items-center p-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(loginSubmit)}
            className="space-y-6 w-full"
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black-600">Email</FormLabel>
                    <FormControl className="flex text-left border border-gray-400 rounded-none">
                      <Input
                        {...field}
                        disabled={isPending}
                        type="email"
                        placeholder="shan@example.com"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.email?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black-600">Password</FormLabel>
                    <FormControl className="flex text-left border border-gray-400 rounded-none">
                      <Input
                        {...field}
                        disabled={isPending}
                        type="password"
                        placeholder="********"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.password?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <FormError message={errorMsg} />
            <FormSuccess message={successMsg} />
            <Button variant="shan" type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </CardWrapper>
  );
};
