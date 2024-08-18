"use client";
import { Combobox } from "@/components/Combobox";
import { DatePicker } from "@/components/DatePicker";
import Timer from "@/components/Timer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import { UntilYouDieForm } from "../until-you-die-form";

function page() {
  return (
    <div className="h-full bg-background">
      <div className="border-b bg-card">
        <div className="container flex flex-wrap items-center justify-between gap-6 py-8">
          <UntilYouDieForm />
          <p className=""></p>
        </div>
      </div>
    </div>
  );
}

export default page;
