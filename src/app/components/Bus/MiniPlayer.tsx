import Image from "next/image";

export default function MiniPlyer() {
  return (
    <div className="pt-16 relative flex justify-center items-center">
      <Image
        className="rounded-3xl"
        src="/背景.jpg"
        width={260}
        height={250}
        alt="ミニプレイヤー背景"
      ></Image>
      <iframe
        className="absolute flex justify-center items-center"
        width="200"
        height="140"
        src="https://www.youtube.com/embed/playlist?list=PLAba57iCK96m2_jMuL9BDpRqup2Ilnail&showinfo=0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
