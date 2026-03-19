"use client";

import Link from "next/link";
import { useState, useEffect, use } from "react";
import AnswerForm from "@/app/components/AnswerForm";
import VideoSection from "@/app/components/VideoSection";
import StorySection from "@/app/components/StorySection";
import { getQuizSteps } from "@/app/data/quizSteps";
import { Difficulty } from "@/app/actions";

export default function Home({
  params,
}: {
  params: Promise<{ difficulty: string }>;
}) {
  const { difficulty } = use(params);
  const currentDifficulty = (
    difficulty === "hard" ? "hard" : "normal"
  ) as Difficulty;
  const QUIZ_STEPS = getQuizSteps(currentDifficulty);

  const [step, setStep] = useState<number>(1);
  const [isInitialized, setIsInitialized] = useState(false);

  // 1. 初回読み込み時にLocalStorageから進捗を復元
  useEffect(() => {
    const savedStep = localStorage.getItem(`nazotoki_step_${currentDifficulty}`);
    if (savedStep) {
      const parsedStep = parseInt(savedStep, 10);
      if (!isNaN(parsedStep)) {
        setStep(parsedStep);
      }
    }
    setIsInitialized(true);
  }, [currentDifficulty]);

  // 2. ステップが更新されるたびにLocalStorageに保存
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(`nazotoki_step_${currentDifficulty}`, step.toString());
    }
  }, [step, currentDifficulty, isInitialized]);

  // スクロール制御
  useEffect(() => {
    if (step > 1 && isInitialized) {
      setTimeout(() => {
        const videoEl = document.getElementById(`video-step-${step - 1}`);
        videoEl?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [step, isInitialized]);

  return (
    <div className="min-h-screen bg-[#3EBFFB] text-white font-sans relative pb-24 overflow-x-hidden selection:bg-pink-500">
      <div className="relative z-10 pt-16 pb-10">
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 space-y-12 text-center max-w-2xl mx-auto">
          <Link
            href="/"
            className="mb-4 bg-black/20 hover:bg-black/40 text-white/80 text-xs font-bold py-2 px-4 rounded-full border border-white/20 transition-all"
          >
            ◀{" "}
            <ruby>
              難易度選択<rt>なんいどせんたく</rt>
            </ruby>
            に
            <ruby>
              戻<rt>もど</rt>
            </ruby>
            る
          </Link>

          <StorySection />

          {QUIZ_STEPS.map((quiz) => (
            <div
              key={quiz.stepNum}
              className="w-full flex flex-col items-center"
            >
              <AnswerForm
                difficulty={currentDifficulty}
                step={quiz.stepNum}
                title={quiz.formTitle}
                isActive={step === quiz.stepNum}
                isCompleted={step > quiz.stepNum}
                onSuccess={() => setStep(quiz.stepNum + 1)}
              />

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

      <Link
        href={`/${currentDifficulty}/hint`}
        className="fixed bottom-6 right-6 bg-black/90 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black font-bold py-3 px-6 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.4)] backdrop-blur-sm transition-all z-50 tracking-widest"
      >
        ヒント
      </Link>
    </div>
  );
}
