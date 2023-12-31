"use client";

import { Header } from "../components/Header";
import BusTime from "../components/BusTime";
import { Response } from "../components/Response";

export default function Bus() {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-gray-800 text-white">
      <Header />
      <Response />
      <BusTime />
    </div>
  );
}
