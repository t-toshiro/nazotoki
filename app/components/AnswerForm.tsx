"use client";

import { useState } from "react";
import { checkAnswer } from "../actions";

type Props = {
  step: number; // 何問目か
  title: string; // 1st Answer などのタイトル
  isActive: boolean; // 今この問題を解ける状態か
  isCompleted: boolean; // 既に正解済みか
  onSuccess: () => void; // 正解した時に親に知らせる関数
};

export default function AnswerForm({
  step,
  title,
  isActive,
  isCompleted,
  onSuccess,
}: Props) {
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData: FormData) => {
    setMessage("");
    // サーバー関数を呼び出す（stepを渡す）
    const result = await checkAnswer(step, formData);

    if (result.status === "success") {
      onSuccess(); // 正解したら親に報告！
    } else {
      setMessage(result?.message || "エラーが発生しました");
    }
  };

  // まだ解けない状態の時は何も表示しない（非表示にする）
  if (!isActive && !isCompleted) return null;

  return (
    <div className="w-full bg-black/90 border-2 border-pink-500 rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(236,72,153,0.3)] relative z-20 mt-4 text-left transition-all">
      {/* 親から渡されたタイトルを表示 */}
      <h2 className="text-xl sm:text-2xl font-bold text-orange-400 mb-6 uppercase tracking-widest border-b border-gray-700 pb-4 text-center">
        {title}
      </h2>

      <form action={handleSubmit} className="flex flex-col gap-6">
        <input
          name="answer"
          type="text"
          placeholder="答えを入力"
          disabled={isCompleted} // 正解済みならロックする
          className="w-full px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg text-black bg-white rounded-lg border-4 border-transparent focus:outline-none focus:border-orange-500 transition-all font-bold placeholder-gray-400 disabled:bg-gray-300 disabled:text-gray-500"
          required
        />
        {message && !isCompleted && (
          <p className="text-pink-500 font-bold text-sm bg-pink-500/10 py-2 px-4 rounded-lg text-center">
            {message}
          </p>
        )}

        {!isCompleted ? (
          <button
            type="submit"
            className="w-full bg-transparent border-2 border-pink-500 hover:bg-pink-500 text-pink-500 hover:text-white font-bold py-3 sm:py-4 px-6 rounded-full text-base sm:text-lg transition-all active:scale-95"
          >
            確定
          </button>
        ) : (
          <div className="text-center text-green-400 font-bold text-xl tracking-widest animate-pulse">
            ✓ 正解
          </div>
        )}
      </form>
    </div>
  );
}
