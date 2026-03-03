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
import { QUIZ_STEPS } from "./data/quizSteps";

export default function Home() {
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    if (step > 1) {
      setTimeout(() => {
        const videoEl = document.getElementById(`video-step-${step - 1}`);
        videoEl?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-[#3EBFFB] text-white font-sans relative pb-24 overflow-x-hidden selection:bg-pink-500">
      <Poster />

      <div className="flex justify-center mt-4 mb-10 animate-bounce drop-shadow-md relative z-10">
        <span className="text-white text-sm font-bold tracking-widest flex flex-col items-center text-shadow">
          スクロール
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
              <AnswerForm
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
        href="/hint"
        className="fixed bottom-6 right-6 bg-black/90 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black font-bold py-3 px-6 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.4)] backdrop-blur-sm transition-all z-50 tracking-widest"
      >
        ヒント
      </Link>
    </div>
  );
}
