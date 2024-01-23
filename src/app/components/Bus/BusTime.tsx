import { useState } from "react";
import { BusGo } from "@/components/Links";

export default function BusTime() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const renderTime = () => {
    const selectedBus = BusGo.find((bus) => bus.name === selectedOption);

    if (selectedBus) {
      return (
        <iframe
          src={selectedBus.href}
          className="h-screen w-screen border-8 border-black"
        ></iframe>
      );
    } else {
      return null;
    }
  };

  return (
    <main className="h-screen w-screen text-center font-bold text-3xl">
      <select
        className="m-10 p-3 bg-gray-600 appearance-none rounded-3xl"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option className="bg-green-600">行き先を選択</option>
        {BusGo.map((bus) => (
          <option key={bus.name} value={bus.name}>
            {bus.name}
          </option>
        ))}
      </select>
      {renderTime()}
    </main>
  );
}
