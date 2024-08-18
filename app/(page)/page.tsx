"use client";

import Navbar from "@/components/Navbar";
import { UntilYouDieForm } from "./until-you-die-form";
import { Separator } from "@/components/ui/separator";

function page() {
  return (
    <div className="relative flex h-screen w-full flex-col">
      <Navbar />
      <Separator />

      <div className="h-full bg-background">
        <div className="border-b bg-card">
          <div className="container flex flex-wrap items-center justify-between gap-6 py-8">
            <UntilYouDieForm />
            <p className=""></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
