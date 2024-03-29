"use client";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/components/Auth/lib/FirebaseConfig";
import { Header } from "@/components/Layout/Header";
import { Response } from "@/components/Response";
import { useRouter } from "next/navigation";
import BusTime from "@/components/Bus/BusTime";
import MiniPlyer from "@/components/Bus/MiniPlayer";
import TopButton from "@/components/TopButton";

export default function Bus() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    } else {
      router.push("auth/login");
    }
  }, [user, router]);
  return (
    <div className="bg-gradient-to-b from-gray-800 to-blue-950 text-white">
      <Header />
      <Response />
      <TopButton />
      <MiniPlyer />
      <BusTime />
    </div>
  );
}
