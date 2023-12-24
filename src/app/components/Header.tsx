"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderItem {
  href: string;
  title: string;
}

const ITEMS: HeaderItem[] = [
  {
    href: "/",
    title: "Index",
  },
  {
    href: "/",
    title: "施工例",
  },
  {
    href: "/",
    title: "会社概要",
  },
  {
    href: "/",
    title: "お問い合わせ",
  },
];

export function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav>
      {/* ハンバーガーメニュー */}
      <button
        onClick={menuFunction}
        className="absolute right-5 top-5 md:hidden"
      >
        <Image src="/bars.svg" alt="menu" width={50} height={50} />
      </button>

      {/* ハンバーガーメニューの一覧 */}
      {openMenu ? (
        <ul className="absolute z-10 text-lg h-screen w-screen bg-white  md:hidden">
          <li>
            <button onClick={menuFunction} className="absolute right-5 m-5">
              <Image src="/xmark-solid.svg" alt="menu" width={50} height={50} />
            </button>
          </li>
          {ITEMS.map((item) => {
            return (
              <li onClick={menuFunction} className="p-5 flex justify-center">
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-blue-500 transform hover:scale-150"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : undefined}

      {/* 通常の表示 */}
      <div className=" flex h-32 text-xl font-bold justify-end ">
        <ul className="hidden absolute right-5 flex-initial jusify-end  border-b-2 border-black md:flex">
          <li className="mt-16 ">
            {ITEMS.map((item) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="m-10 hover:text-blue-500"
                >
                  {item.title}
                </Link>
              );
            })}
          </li>
        </ul>
      </div>
    </nav>
  );
}
