// リンク先を設定

interface LinksItems {
  href: string;
  title: string;
  subtitle: string;
}

const Links: LinksItems[] = [
  { href: "/", title: "test", subtitle: "test" },
  { href: "/pages/bus", title: "バス", subtitle: "時刻表" },
  { href: "/pages/home", title: "ポートフォリオ", subtitle: "勉強用" },
  { href: "/pages/coin", title: "Coin", subtitle: "ビットバンクのAPI" },
  { href: "/pages/auth/login", title: "LOGIN", subtitle: "ログイン" },
];

interface BusGoItems {
  href: string;
  name: string;
}

const BusGo: BusGoItems[] = [
  {
    href: "https://kuruken.jp/Approach?sid=d7cc23ed-2fab-401a-8ddb-e8620f337625&noribaChange=1",
    name: "行 石 →",
  },
  {
    href: "https://kuruken.jp/Approach?sid=c633f7c4-b318-4756-8bba-edd655d0a0a2&noribaChange=1",
    name: "行 紙 →",
  },
  {
    href: "https://kuruken.jp/Approach?sid=36468d12-cf5d-400e-812d-af2d671c342e&noribaChange=1",
    name: "帰り バス →",
  },
  {
    href: "https://kuruken.jp/Approach?sid=bd520d05-74c8-4630-9afa-05bbd83ccffe&noribaChange=1",
    name: "帰り 出 →",
  },
];

export { Links, BusGo };
