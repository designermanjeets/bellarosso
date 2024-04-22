"use client";
import { ThemeProvider } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import { ComplexNavbar } from "./navbar/navbar";
import { SidebarWithSearch } from "./sidebaroptions/sidebaroptions";
import { ShoeBookingCard } from "./shoecustom/showcustom";
export default function Home() {

  return (
    <div>
    <ThemeProvider>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <ComplexNavbar></ComplexNavbar>
          <div className="flex w-full">
            <div className="basis-3/12">
              <SidebarWithSearch></SidebarWithSearch>
            </div>
            <div className="basis-9/12">
              <ShoeBookingCard></ShoeBookingCard>
            </div>
          </div>
        </main>
      </ThemeProvider>
    </div>
  );
}
