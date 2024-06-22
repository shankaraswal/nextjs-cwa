"use client";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
export default function Home() {
  return (
    <main
      className="flex h-full flex-col items-center justify-center 
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-200 to-red-500"
    >
      <div className="space-y-6 text-center border-2 bg-slate-100/20 shadow-xl rounded-xl p-10">
        <h1 className="text-6xl font-semibold text-white drop-shadow-lg">
          ❖ Login Form
        </h1>
        <p className="text-white text-lg text-center">
          Please login with user name and password !
        </p>
        <div>
          <Button variant="shan" size="lg" asChild className="no-underline">
            <a
              href="auth/user-login"
              className="no-underline hover:no-underline"
            >
              Login
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
