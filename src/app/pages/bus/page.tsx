"use client";
import { auth } from "@/components/Auth/lib/FirebaseConfig";
import { Header } from "@/components/Layout/Header";
import { Response } from "@/components/Response";
import { useAuthState } from "react-firebase-hooks/auth";
import BusTime from "@/components/Bus/BusTime";

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
