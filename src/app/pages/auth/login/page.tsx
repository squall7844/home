"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/components/Auth/context/auth";
import { login, logout } from "@/components/Auth/lib/AuthConfig";
import { Header } from "@/components/Layout/Header";
import { motion } from "framer-motion";
import Image from "next/image";

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

  // ボタンのアニメーション設定
  const buttonVariants = {
    rest: {
      scale: 1,
      boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 20px 0px rgba(255,255,255,0.5)",
    },
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black h-screen text-white">
      <Header />
      <div className="flex flex-col justify-center items-center pt-20">
        {user === null && !waiting && (
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white p-3 rounded-md transition"
            onClick={signIn}
          >
            ログイン
          </motion.button>
        )}
        {user && (
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white p-3 rounded-md transition"
            onClick={logout}
          >
            ログアウト
          </motion.button>
        )}

        <Link
          className="m-12 text-blue-400 hover:text-pink-400"
          href={"register"}
        >
          メールアドレスで新規登録
        </Link>
        <Image src="/カエル.svg" width={200} height={200} alt="squall"></Image>
      </div>
    </div>
  );
}
