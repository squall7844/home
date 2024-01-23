"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/Auth/context/auth";
import { login, logout } from "@/components/Auth/AuthConfig";
import { Header } from "@/components/Layout/Header";

export default function Home() {
  const user = useAuth();
  const [waiting, setWaiting] = useState<boolean>(false);

  const signIn = () => {
    setWaiting(true);

    login()
      .catch((error) => {
        console.error(error?.code);
      })
      .finally(() => {
        setWaiting(false);
        
      });
  };
  return (
    <div>
      <Header />
      <div className="text-center m-10 ">
        <div>
          {user === null && !waiting && (
            <button className="bg-slate-600 text-white" onClick={signIn}>
              ログイン
            </button>
          )}
          {user && <button onClick={logout}>ログアウト</button>}
        </div>
        <Link href={"register"}>メールアドレスで新規登録</Link>
      </div>
    </div>
  );
}
