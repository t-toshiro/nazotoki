import Image from "next/image";

export default function Poster() {
  return (
    <>
      <div className="w-full flex justify-center pt-6 md:pt-10 px-4">
        <div className="relative w-full max-w-2xl aspect-[3/4] pointer-events-none select-none overflow-hidden">
          <Image
            src="/poster.png"
            alt="未来通信探偵 ポスター"
            fill
            className="object-contain object-top"
            priority
          />
        </div>
      </div>
    </>
  );
}
