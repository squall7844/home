// リンク先を設定

interface LinksItems {
  href: string;
  title: string;
  subtitle: string;
}

const Links: LinksItems[] = [
  { href: "/", title: "test", subtitle: "test" },
  { href: "/bus", title: "バス", subtitle: "時刻表" },
  { href: "/home", title: "ポートフォリオ", subtitle: "勉強用" },
  { href: "/coin", title: "Coin", subtitle: "ビットバンクのAPI" },
];

interface BusGoItems {
  href: string;
  name: string;
}

const BusGo: BusGoItems[] = [
  {
    href: "https://kuruken.jp/Approach?sid=d7cc23ed-2fab-401a-8ddb-e8620f337625&noribaChange=1",
    name: "石内北 → 職場",
  },
  {
    href: "https://kuruken.jp/Approach?sid=c633f7c4-b318-4756-8bba-edd655d0a0a2&noribaChange=1",
    name: "紙屋町 → 職場",
  },
  {
    href: "https://kuruken.jp/Approach?sid=36468d12-cf5d-400e-812d-af2d671c342e&noribaChange=1",
    name: "バスセンター → 家",
  },
];

export { Links, BusGo };
