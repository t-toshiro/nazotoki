"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import AnswerForm from "./components/AnswerForm";
import VideoSection from "./components/VIdeoSection";
import Poster from "./components/Poster";
import Title from "./components/Title";
import ItemsTable from "./components/ItemsTable";
import WarningsSection from "./components/WarningsSection";
import StorySection from "./components/StorySection";
const QUIZ_STEPS = [
  {
    stepNum: 1,
    formTitle: "さいごのこたえ",
    videoSrc: "/midway.mp4",
    videoDesc: (
      <>
        怪盗「D」の仕掛けた罠だったようだ……
        <br />
        引き続き捜査を頼む！
      </>
    ),
    isEnding: false,
  },
  {
    stepNum: 2,
    formTitle: "ほんとうのこたえ",
    videoSrc: "/ending.mp4",
    videoDesc: (
      <>
        <p>見事、隠された「おトク」を見つけ出した！</p>
        <p>キミのヒラメキに感謝する！</p>
      </>
    ),
    isEnding: true,
  },
];

export default function Home() {
  const [step, setStep] = useState<number>(1);

  const videoRef = useRef<HTMLDivElement>(null);

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
