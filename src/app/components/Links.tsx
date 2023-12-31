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

export default Links;
