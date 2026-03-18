// app/components/VideoSection.tsx
"use client";

import { ReactNode } from "react";

type Props = {
  src?: string;
  description: ReactNode; // JSX（HTMLタグ）も受け取れるようにする
  isEnding?: boolean; // エンディングかどうかの判定（?は省略可能という意味）
};

export default function VideoSection({ src, description, isEnding }: Props) {
  // エンディングかどうかで枠線の色や影、タイトルの大きさを変える
  const borderColor = isEnding ? "border-yellow-400" : "border-orange-500";
  const shadowColor = isEnding
    ? "shadow-[0_0_20px_rgba(250,204,21,0.4)]"
    : "shadow-[0_0_20px_rgba(249,115,22,0.4)]";
  const titleColor = isEnding
    ? "text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)] font-serif text-3xl sm:text-4xl"
    : "text-orange-400 text-xl sm:text-2xl";

  return (
    <div
      className={`bg-black/90 border-2 ${borderColor} rounded-2xl p-6 sm:p-8 ${shadowColor} text-center`}
    >
      {src && (
        <div
          className={`w-full aspect-video rounded-lg overflow-hidden border ${borderColor}/30`}
        >
          <video controls className="w-full h-full object-cover bg-gray-900">
            <source src={src} type="video/mp4" />
            お使いのブラウザは動画の再生に対応していません。
          </video>
        </div>
      )}
      <div className="mt-6 space-y-3 text-white font-bold tracking-wider text-sm sm:text-base leading-relaxed">
        {description}
      </div>
    </div>
  );
}
