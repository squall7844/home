import Image from "next/image";

export default function MiniPlyer() {
  return (
    <div className="mt-16 relative flex justify-center items-center">
      <Image
        className="rounded-3xl"
        src="/背景.jpg"
        width={360}
        height={290}
        alt="ミニプレイヤー背景"
      ></Image>
      <iframe
        className="absolute flex justify-center items-center"
        width="290"
        height="190"
        src="https://www.youtube.com/embed/playlist?list=PLAba57iCK96m2_jMuL9BDpRqup2Ilnail"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
