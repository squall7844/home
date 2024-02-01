"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/components/Auth/lib/FirebaseConfig";
import { Header } from "@/components/Layout/Header";
import { Response } from "@/components/Response";
import BusTime from "@/components/Bus/BusTime";
import Link from "next/link";

export default function Bus() {
  const [user] = useAuthState(auth);
  return (
    <div className="bg-gradient-to-b from-blue-950 to-gray-800 text-white">
      {user ? (
        <div>
          <Header />
          <Response />
          <div className="pt-20">
            <BusTime />
          </div>
        </div>
      ) : (
        <div className="h-screen">
          <Header />
          <Response />
          <div className="pt-20 text-center text-2xl">
            <div className="pb-32">ログインして下さい。</div>
            <Link href={"auth/login"}>LOGIN</Link>
          </div>
        </div>
      )}
    </div>
  );
}
