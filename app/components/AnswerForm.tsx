"use client";

import { useState } from "react";
import { checkAnswer, Difficulty } from "@/app/actions";

type Props = {
  difficulty: Difficulty;
  step: number;
  title: React.ReactNode;
  isActive: boolean;
  isCompleted: boolean;
  onSuccess: () => void;
};

export default function AnswerForm({
  difficulty,
  step,
  title,
  isActive,
  isCompleted,
  onSuccess,
}: Props) {
  const [errorStatus, setErrorStatus] = useState("");

  const handleSubmit = async (formData: FormData) => {
    setErrorStatus("");
    const result = await checkAnswer(difficulty, step, formData);

    if (result.status === "success") {
      onSuccess();
    } else {
      setErrorStatus(result.status);
    }
  };

  if (!isActive && !isCompleted) return null;

  return (
    <div className="w-full bg-black/90 border-2 border-pink-500 rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(236,72,153,0.3)] relative z-20 mt-4 text-left transition-all">
      <h2 className="text-xl sm:text-2xl font-bold text-orange-400 mb-6 uppercase tracking-widest border-b border-gray-700 pb-4 text-center">
        {title}
      </h2>

      <form action={handleSubmit} className="flex flex-col gap-6">
        <label className="text-white font-bold text-sm sm:text-base text-center">
          <ruby>
            答<rt>こた</rt>
          </ruby>
          えを
          <ruby>
            入力<rt>にゅうりょく</rt>
          </ruby>
          しよう
        </label>

        <input
          name="answer"
          type="text"
          disabled={isCompleted}
          className="w-full px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg text-black bg-white rounded-lg border-4 border-transparent focus:outline-none focus:border-orange-500 transition-all font-bold disabled:bg-gray-300 disabled:text-gray-500"
          required
        />

        {/* エラーメッセージ（ルビ付き） */}
        {errorStatus === "incorrect" && !isCompleted && (
          <p className="text-pink-500 font-bold text-sm bg-pink-500/10 py-2 px-4 rounded-lg text-center">
            <ruby>
              不正解<rt>ふせいかい</rt>
            </ruby>
            です。もう
            <ruby>
              一度<rt>いちど</rt>
            </ruby>
            <ruby>
              考<rt>かんが</rt>
            </ruby>
            えてみよう！
          </p>
        )}

        {/* ボタン or 正解表示 */}
        {!isCompleted ? (
          <button
            type="submit"
            className="w-full bg-transparent border-2 border-pink-500 hover:bg-pink-500 text-pink-500 hover:text-white font-bold py-3 sm:py-4 px-6 rounded-full text-base sm:text-lg transition-all active:scale-95"
          >
            <ruby>
              確定<rt>かくてい</rt>
            </ruby>
          </button>
        ) : (
          <div className="text-center text-green-400 font-bold text-xl tracking-widest animate-pulse">
            ✓{" "}
            <ruby>
              正解<rt>せいかい</rt>
            </ruby>
          </div>
        )}
      </form>
    </div>
  );
}
