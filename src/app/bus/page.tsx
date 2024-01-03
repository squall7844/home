"use client";

import { useState } from "react";
import { Header } from "../components/Header";

export default function bus() {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const renderTime = () => {
    if (selectedOption === "行き") {
      return (
        <ul>
          <li>7:30</li>
          <li>7:30</li>
          <li>7:30</li>
          <li>7:30</li>
          <li>7:30</li>
          <li>7:30</li>
          <li>7:30</li>
          <li>7:30</li>
        </ul>
      );
    } else if (selectedOption === "帰り") {
      return (
        <ul>
          <li>7:30</li>
          <li>7:30</li>
          <li>7:30</li>
          <li>7:30</li>
          <li>7:30</li>
          <li>7:30</li>
          <li>7:30</li>
          <li>7:30</li>
        </ul>
      );
    } else {
      return null; // 選択されていない場合は何も表示しない
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-950 to-gray-800 text-white h-screen w-screen">
      {/* Header のコンポーネントを適切にインポートしてください */}
      <Header />
      <main className="text-center font-bold text-5xl">
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
    </div>
  );
}
