import { SignUp } from "@clerk/nextjs";

export default function RegisterPage() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-background pt-20 px-4">
      <SignUp
        forceRedirectUrl="/menu"
        signInUrl="/login"
        appearance={{
          variables: {
            colorBackground: "var(--card)",
            colorText: "var(--foreground)",
          },
          elements: {
            card: "w-full max-w-[600px] border-[color:var(--ttl)] dark:border-none shadow-2xl",
            rootBox: "w-full flex justify-center",
            formFieldInput:
              "!bg-[var(--contact-input-bg)] dark:!bg-[#050505] !border-[0.5px] !border-solid !border-[#d1d1d1] dark:!border-[#262626] focus:!border-[#d1d1d1] dark:focus:!border-[#262626] !shadow-none transition-all duration-300 rounded-[8px] text-foreground",
            formButtonPrimary:
              "!bg-[var(--contact-btn-bg)] !text-[var(--contact-btn-text)] hover:!bg-[var(--contact-btn-hover)] !border-0 !shadow-none !outline-none transition-all duration-300",
            badge: "!text-foreground",
          },
        }}
      />
    </main>
  );
}
