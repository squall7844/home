"use client";

import React, { useState } from "react";
import Price from "../components/Price";
import { Header } from "../components/Header";

const Coin: React.FunctionComponent = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("btc");

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
    console.log(`Selected currency: ${newCurrency}`);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center pt-20">
        <select
          name=""
          id="currency"
          onChange={handleCurrencyChange}
          value={selectedCurrency}
        >
          <option value="btc">btc</option>
          <option value="eth">eth</option>
          <option value="xym">xym</option>
          {/* 他の通貨のオプションを追加できます */}
        </select>
        <div>の価格</div>
        <Price coins={selectedCurrency} />
      </div>
    </div>
  );
};

export default Coin;
