import { useState } from "react";

export default function HintAccordion({ item }: { item: any }) {
  const [visibleCount, setVisibleCount] = useState<number>(1);
  const isNextLast = visibleCount === item.hints.length - 1;

  return (
    <details className="group">
      <summary className="block w-full bg-white text-black font-bold text-lg py-4 px-6 rounded-xl text-center cursor-pointer hover:bg-gray-200 transition-colors list-none [&::-webkit-details-marker]:hidden shadow-sm active:scale-95">
        {item.title}
      </summary>

      <div className="mt-4 space-y-4 px-1">
        {item.hints.slice(0, visibleCount).map((hint: any, index: number) => {
          // これも名前ではなく「配列の最後かどうか」で判定するように改良しました
          const isAnswer = index === item.hints.length - 1;
          return (
            <div
              key={index}
              className={`p-4 rounded-lg border-l-4 ${isAnswer ? "bg-pink-950/40 border-pink-500" : "bg-gray-800/80 border-blue-500"}`}
            >
              <p
                className={`font-bold mb-2 ${isAnswer ? "text-pink-400" : "text-blue-300"}`}
              >
                【{hint.level}】
              </p>
              <p className="text-white leading-relaxed font-medium">
                {hint.text}
              </p>
            </div>
          );
        })}

        {/* まだ隠れているヒントがある場合 */}
        {visibleCount < item.hints.length && (
          <div className="pt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                setVisibleCount(visibleCount + 1);
              }}
              className={`w-full font-bold py-3 px-6 rounded-xl transition-colors shadow-md text-sm sm:text-base border-2 ${
                isNextLast
                  ? "bg-black text-pink-400 border-pink-500 hover:bg-pink-600 hover:text-white"
                  : "bg-black text-blue-300 border-blue-500 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {/* ★ isNextLast が true (次が最後) なら「答えを見る」 */}
              {isNextLast ? "答えを見る" : "もっと見る"}
            </button>
          </div>
        )}
      </div>
    </details>
  );
}
