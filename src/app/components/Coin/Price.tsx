// 仮想通貨を表示するためのロジック
import React, { useEffect, useState } from "react";
import axios from "axios";

interface PriceProps {
  coins: string;
}

const Price: React.FC<PriceProps> = ({ coins }) => {
  const [CoinPrice, setCoinPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchCoinPrice = async () => {
      try {
        const response = await axios.get(
          `https://public.bitbank.cc/${coins}_jpy/ticker`
        );
        const data = response.data;
        setCoinPrice(data.data.last);
      } catch (error) {
        console.error("Error fetching ${coins} price:", error);
      }
    };

    fetchCoinPrice();
  }, [coins]);

  return (
    <div>
      {CoinPrice !== null ? <p>{`${CoinPrice}円`}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Price;
