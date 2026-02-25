"use client";

import Image from "next/image";
import Link from "next/link";
import { checkAnswer } from "./actions";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const handleSubmit = async (formData: FormData) => {
    setMessage("");
    const result = await checkAnswer(formData);
    if (result?.message) setMessage(result.message);
  };

  return (
    // 背景色をポスターの水色に合わせて設定
    <div className="min-h-screen bg-[#3EBFFB] text-white font-sans relative pb-24 overflow-x-hidden selection:bg-pink-500">
      {/* 1. トップ画像エリア */}
      {/* 1. トップ画像エリア */}
      <div className="w-full flex justify-center pt-6 md:pt-10 px-4">
        {/* ★変更ポイント1: 箱の縦幅をポスターの比率に近づけるため aspect-[2/3] を aspect-[3/4] に変更 */}
        <div className="relative w-full max-w-2xl aspect-[3/4] pointer-events-none select-none overflow-hidden">
          <Image
            src="/nazotoki_photo.jpg"
            alt="未来通信探偵 ポスター"
            fill
            className="object-contain object-top"
            priority
          />
        </div>
      </div>

      {/* スクロールを促す▼マーク */}
      {/* ★変更ポイント2: my-8（上下に余白）を、マイナスマージン（-mt-4）に変更して物理的に上に引き上げる */}
      <div className="flex justify-center mt-4 mb-10 animate-bounce drop-shadow-md relative z-10">
        <span className="text-white text-sm font-bold tracking-widest flex flex-col items-center text-shadow">
          SCROLL
          <span className="mt-2 border-x-[10px] border-x-transparent border-t-[12px] border-t-white w-0 h-0 filter drop-shadow"></span>
        </span>
      </div>

      {/* 2. コンテンツエリア */}
      <div className="relative z-10 pb-10">
        <div className="flex flex-col items-center justify-center px-6 space-y-12 text-center max-w-2xl mx-auto">
          {/* タイトルセクション */}
          <div className="space-y-3 drop-shadow-md">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter">
              <span className="text-white">未来通信</span>
              <span className="text-black bg-white px-2 py-1 ml-1 rounded-md inline-block transform -rotate-2">
                探偵
              </span>
            </h1>
            <p className="text-xl font-bold text-yellow-300 tracking-widest mt-4 drop-shadow-sm">
              隠された「お得」を見つけ出せ
            </p>
          </div>

          {/* お問い合わせテキスト */}
          <div className="text-base sm:text-lg font-bold text-white drop-shadow-md leading-loose tracking-wide">
            <p>webサイトの不具合や</p>
            <p>印刷の不備がありましたら、</p>
            <p>公式ホームページの</p>
            <p>問い合わせフォームよりご連絡ください。</p>
          </div>

          {/* 注意事項セクション */}
          <div className="w-full bg-black/90 border-2 border-pink-500 rounded-2xl p-8 shadow-[0_0_20px_rgba(236,72,153,0.3)] relative z-20">
            <h2 className="text-2xl font-bold text-pink-500 mb-6 tracking-widest border-b border-gray-700 pb-4">
              注意事項
            </h2>
            <div className="space-y-8 text-base sm:text-lg text-white font-medium leading-loose tracking-wide">
              <p>~~~~~~~</p>
            </div>
          </div>

          {/* === 新規追加：プロローグ（ストーリー）セクション === */}
          <div className="w-full bg-black/90 border-2 border-pink-500 rounded-2xl p-8 shadow-[0_0_20px_rgba(236,72,153,0.3)] relative z-20 mt-4">
            {/* Prologueの文字は明朝体っぽく（font-serif）、ネオン風の光を追加 */}
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-pink-400 mb-8 tracking-widest drop-shadow-[0_0_15px_rgba(244,114,182,0.8)]">
              Story
            </h2>
            <div className="space-y-3 text-base sm:text-lg text-white font-medium leading-loose tracking-wide">
              <p>~~~~~~~</p>
            </div>
          </div>

          {/* 3. 回答フォーム（LAST ANSWER） */}
          <div className="w-full bg-black/90 border-2 border-pink-500 rounded-2xl p-8 shadow-[0_0_20px_rgba(236,72,153,0.3)] relative z-20 mt-4">
            <h2 className="text-xl font-bold text-orange-400 mb-6 uppercase tracking-widest border-b border-gray-700 pb-4">
              Last Answer
            </h2>

            <form action={handleSubmit} className="flex flex-col gap-6">
              <input
                name="answer"
                type="text"
                placeholder="回答を入力してください"
                className="w-full px-5 py-4 text-lg text-black bg-white rounded-lg border-4 border-transparent focus:outline-none focus:border-orange-500 transition-all font-bold placeholder-gray-400"
              />
              {message && (
                <p className="text-pink-500 font-bold text-sm bg-pink-500/10 py-2 px-4 rounded-lg">
                  {message}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-transparent border-2 border-pink-500 hover:bg-pink-500 text-pink-500 hover:text-white font-bold py-4 px-6 rounded-full text-lg transition-all active:scale-95"
              >
                確定
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 4. 右下固定のHINTボタン */}
      <Link
        href="/hint"
        className="fixed bottom-6 right-6 bg-black/90 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black font-bold py-3 px-6 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.4)] backdrop-blur-sm transition-all z-50 tracking-widest"
      >
        HINT
      </Link>
    </div>
  );
}
