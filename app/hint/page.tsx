"use client";
import Link from "next/link";
import { useState } from "react";
import HintAccordion from "../components/HintAccordion";
import { hintData } from "../data/hintData";

export default function HintPage() {
  return (
    <div className="min-h-screen bg-[#3EBFFB] text-white font-sans p-4 sm:p-8 selection:bg-pink-500">
      {/* 戻るボタン */}
      <div className="max-w-2xl mx-auto mb-6">
        <Link
          href="/"
          className="inline-block bg-black/80 border border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-black transition-colors shadow-md text-sm"
        >
          ◀{" "}
          <ruby>
            戻<rt>もど</rt>
          </ruby>
          るボタン
        </Link>
      </div>

      {/* ヒントコンテナ */}
      <div className="max-w-2xl mx-auto bg-black/90 border-2 border-pink-500 rounded-2xl p-6 sm:p-10 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
        {/* ヘッダー部分 */}
        <h1 className="text-xl sm:text-2xl font-bold text-center tracking-widest text-white">
          『
          <ruby>
            未来通信探偵<rt>みらいつうしんたんてい</rt>
          </ruby>
          』ヒント
        </h1>

        <hr className="border-gray-700 my-6" />

        <p className="text-center text-gray-300 font-medium mb-8">
          ヒントを
          <ruby>
            見<rt>み</rt>
          </ruby>
          たい
          <ruby>
            問題<rt>もんだい</rt>
          </ruby>
          を<br className="sm:hidden" />
          タップしてください。
        </p>

        {/* ヒントリスト */}
        <div className="space-y-6">
          {hintData.map((item, index) => (
            <HintAccordion key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
