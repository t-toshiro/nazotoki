"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import AnswerForm from "./components/AnswerForm";
import VideoSection from "./components/VideoSection";
import Poster from "./components/Poster";
import Title from "./components/Title";
import ItemsTable from "./components/ItemsTable";
import WarningsSection from "./components/WarningsSection";
import StorySection from "./components/StorySection";
import Image from "next/image";
const QUIZ_STEPS = [
  {
    stepNum: 1,
    formTitle: "最終解答",
    videoSrc: "/midway.mp4",
    videoDesc: (
      <div className="space-y-6 w-full">
        {/* 元々のメッセージ */}
        <p className="text-center">
          怪盗「D」の仕掛けた罠だったようだ……
          <br />
          引き続き捜査を頼む！
        </p>

        {/* ============================================== */}
        {/* ★ 修正：探偵EDOSHIのアイコンが食い込むアドバイス欄 ★ */}
        {/* ============================================== */}
        {/* アイコンが飛び出す分の余白(mt-10)と、テキストが画像に被らないための左余白(pl-[72px]やpl-[88px])を設定 */}
        <div className="bg-[#0f172a] border-2 border-blue-500 rounded-xl p-5 pl-[76px] sm:p-6 sm:pl-[96px] text-left shadow-[0_0_15px_rgba(59,130,246,0.3)] relative mt-10">
          {/* ★ アイコンを absolute で左上に配置 ★ */}
          {/* bg-[#0f172a] と p-1.5 で背景色と同じフチを作り、親の青い線を自然に隠すトリックを使っています */}
          <div className="absolute -top-8 -left-3 sm:-top-10 sm:-left-5 bg-[#0f172a] rounded-full p-1.5 z-10">
            {/* fillを使ってレスポンシブに丸く切り抜き */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <Image
                src="/edoshi_icon.jpg" // 保存した画像パス
                alt="探偵EDOSHIのアイコン"
                fill
                className="rounded-full border-[3px] border-blue-400 object-cover shadow-md"
              />
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-blue-200 font-bold text-lg sm:text-xl mb-3 tracking-widest">
              探偵EDOSHIからのアドバイス
            </h3>

            <p className="text-sm sm:text-base text-white leading-relaxed font-medium tracking-wide">
              ここまで君たちが解いた謎は確実にあっている。紙の中ではなく、実際に
              <span className="text-yellow-300 font-bold">
                「たんていのぼうしとあたま」
              </span>
              の間を探そう！特設ブースから離れる必要はないぞ！俺に手伝えることがあればなんでも言ってくれ！
            </p>
          </div>
        </div>
      </div>
    ),
    isEnding: false,
  },
  {
    stepNum: 2,
    formTitle: "本当の最終解答",
    videoSrc: "/ending.mp4",
    videoDesc: (
      <>
        <p>協力ありがとう！</p>
        <p>君たちの謎解き力は「ホンモノ」だ！</p>
        <p>今後も捜査の協力を頼む！</p>
      </>
    ),
    isEnding: true,
  },
];

export default function Home() {
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    if (step > 1) {
      setTimeout(() => {
        // 直前に正解した問題の動画エリアのIDを探してスクロール
        const videoEl = document.getElementById(`video-step-${step - 1}`);
        videoEl?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-[#3EBFFB] text-white font-sans relative pb-24 overflow-x-hidden selection:bg-pink-500">
      <Poster />

      {/* スクロールを促す▼マーク */}
      <div className="flex justify-center mt-4 mb-10 animate-bounce drop-shadow-md relative z-10">
        <span className="text-white text-sm font-bold tracking-widest flex flex-col items-center text-shadow">
          SCROLL
          <span className="mt-2 border-x-[10px] border-x-transparent border-t-[12px] border-t-white w-0 h-0 filter drop-shadow"></span>
        </span>
      </div>

      <div className="relative z-10 pb-10">
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 space-y-12 text-center max-w-2xl mx-auto">
          <Title />
          <ItemsTable />

          <WarningsSection />
          <StorySection />

          {QUIZ_STEPS.map((quiz) => (
            <div
              key={quiz.stepNum}
              className="w-full flex flex-col items-center"
            >
              {/* フォーム部分（AnswerFormの中で表示条件を制御しているのでそのまま置くだけでOK） */}
              <AnswerForm
                step={quiz.stepNum}
                title={quiz.formTitle}
                isActive={step === quiz.stepNum}
                isCompleted={step > quiz.stepNum}
                onSuccess={() => setStep(quiz.stepNum + 1)} // 正解したら次のstepへ
              />

              {/* 動画部分（その問題が「正解済み（step > quiz.stepNum）」になったら出現） */}
              {step > quiz.stepNum && (
                <div
                  id={`video-step-${quiz.stepNum}`}
                  className="w-full relative z-20 mt-8 transition-all duration-700 ease-in-out opacity-100 translate-y-0"
                >
                  <VideoSection
                    src={quiz.videoSrc}
                    description={quiz.videoDesc}
                    isEnding={quiz.isEnding}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 右下固定のHINTボタン */}
      <Link
        href="/hint"
        className="fixed bottom-6 right-6 bg-black/90 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black font-bold py-3 px-6 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.4)] backdrop-blur-sm transition-all z-50 tracking-widest"
      >
        HINT
      </Link>
    </div>
  );
}
