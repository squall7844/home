// トップへ

import { useEffect, useState } from "react";

const normalStyle = {
  opacity: 0,
  transition: "0.5s",
  pointerEvents: "none",
};
const activeStyle = {
  opacity: 1,
  transition: "0.5s",
};

const TopButton = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const scrollWindow = () => {
    const top = 100;
    const scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const style = isButtonActive ? activeStyle : normalStyle;

  return (
    <button
      style={style}
      onClick={returnTop}
      className="fixed left-0 bottom-8 m-8 flex h-18  items-center justify-center rounded-xl p-3 font-mono text-xs text-white bg-blue-500"
    >
      TOPへ
    </button>
  );
};

export default TopButton;
