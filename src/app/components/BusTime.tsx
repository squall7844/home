"use client";

import { useState } from "react";

export default function BusTime() {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const renderTime = () => {
    if (selectedOption === "石内北") {
      return (
        <iframe
          src="https://kuruken.jp/Approach?sid=d7cc23ed-2fab-401a-8ddb-e8620f337625&noribaChange=1"
          className="h-screen w-screen border-8 border-black"
        ></iframe>
      );
    } else if (selectedOption === "紙屋町") {
      return (
        <iframe
          src="https://kuruken.jp/Approach?sid=c633f7c4-b318-4756-8bba-edd655d0a0a2&noribaChange=1"
          className="h-screen w-screen border-8 border-black"
          frameBorder="0"
        ></iframe>
      );
    } else if (selectedOption === "バスセンター") {
      return (
        <iframe
          src="https://kuruken.jp/Approach?sid=36468d12-cf5d-400e-812d-af2d671c342e&noribaChange=1"
          className="h-screen w-screen border-8 border-black"
        ></iframe>
      );
    } else {
      return null; // 選択されていない場合は何も表示しない
    }
  };

  return (
    <main className="h-screen w-screen text-center font-bold text-3xl">
      <div>バス時刻一覧</div>
      <select
        className="m-10 p-3 bg-transparent focus:bg-gray-600 appearance-none text-center"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option className="bg-green-600">select</option>
        <option value="石内北">石内北→職場</option>
        <option value="紙屋町">紙屋町→職場</option>
        <option value="バスセンター">バスセンター→家</option>
      </select>
      {renderTime()}
    </main>
  );
}
