"use client";

import { Header } from "@/components/Layout/Header";
import { Main } from "@/components/Layout/Main";
import { Footer } from "@/components/Layout/Footer";
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
