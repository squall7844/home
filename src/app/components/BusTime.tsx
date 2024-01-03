"use client";

import { useState } from "react";
import Link from "next/link";

export default function BusTime() {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const renderTime = () => {
    if (selectedOption === "行き") {
      return (
        <ul>
          <Link
            className="hover:text-red-700"
            href="https://kuruken.jp/Approach?sid=d7cc23ed-2fab-401a-8ddb-e8620f337625&noribaChange=1"
          >
            くるけん 石内北小学校前
          </Link>
        </ul>
      );
    } else if (selectedOption === "帰り") {
      return (
        <ul>
          <Link
            className="hover:text-red-700"
            href="https://kuruken.jp/Approach?sid=36468d12-cf5d-400e-812d-af2d671c342e&noribaChange=1"
          >
            くるけん 広島バスセンター
          </Link>
        </ul>
      );
    } else {
      return null; // 選択されていない場合は何も表示しない
    }
  };

  return (
    <main className="h-screen w-screen text-center font-bold text-5xl">
      <div>バス時刻一覧</div>
      <select
        className="m-10 p-3 bg-transparent focus:bg-gray-600 appearance-none text-center"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option className="bg-green-600">select</option>
        <option value="行き">行き</option>
        <option value="帰り">帰り</option>
      </select>
      {renderTime()}
    </main>
  );
}
