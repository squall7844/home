import Image from "next/legacy/image";
import Link from "next/link";
import { Links } from "@/components/Links";
import { useState } from "react";

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
        <ul className=" z-10 fixed top-0 left-0  text-lg h-screen w-screen text-white bg-gray-900 md:hidden">
          <li>
            <button onClick={menuFunction} className="absolute right-5 m-5">
              <Image src="/xmark-solid.svg" alt="menu" width={50} height={50} />
            </button>
          </li>
          {Links.map((link) => (
            <li key={link.href} className="p-5 flex justify-center">
              <Link
                href={link.href}
                className="hover:text-blue-500 transform hover:scale-150"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : undefined}

      {/* 通常の表示 */}
      <div className="flex h-16 text-xl font-bold justify-end ">
        <ul className="hidden absolute right-5 flex-initial justify-end  border-b-2 border-black md:flex">
          <li className="mt-16 ">
            {Links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="ml-7 hover:text-blue-500"
              >
                {link.title}
              </Link>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
}
