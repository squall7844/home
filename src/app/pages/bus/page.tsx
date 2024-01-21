"use client";
import BusTime from "@/components/BusTime";
import { Header } from "@/components/Header";
import { Response } from "@/components/Response";
import { auth } from "@/lib/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

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
        <div>
          <p>一時的に表示できるようになってます。</p>
          <Header />
          <Response />
          <div className="pt-20">
            <BusTime />
          </div>
        </div>
      )}
    </div>
  );
}
