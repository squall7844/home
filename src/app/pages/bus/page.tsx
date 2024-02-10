"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/components/Auth/lib/FirebaseConfig";
import { Header } from "@/components/Layout/Header";
import { Response } from "@/components/Response";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import BusTime from "@/components/Bus/BusTime";
import MiniPlyer from "@/components/Bus/MiniPlayer";
import TopButton from "@/components/TopButton";

export default function Bus() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    // ログインしていない場合にリダイレクト
    if (!user) {
      router.push("auth/login");
    }
  }, [user, router]);

  return (
    <div className="bg-gradient-to-b from-blue-950 to-gray-800 text-white">
      <Header />
      <Response />
      <TopButton />
      <MiniPlyer />
      <div className="pt-20">
        <BusTime />
      </div>
    </div>
  );
}
