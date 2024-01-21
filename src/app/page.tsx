"use client";

import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { Response } from "@/components/Response";
import Pictures from "@/components/Pictures";
import TopButton from "@/components/TopButton";

export default function Home() {
  return (
    <div>
      <Header />
      <Response />
      <TopButton />
      <Pictures />
      <Main />
      <Footer />
    </div>
  );
}
