export default function WarningsSection() {
  return (
    <div className="w-full bg-black/90 border-2 border-pink-500 rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(236,72,153,0.3)] relative z-20 text-left">
      {/* ↓ ここにも text-center を追加しました */}
      <h2 className="text-xl sm:text-2xl font-bold text-pink-500 mb-6 tracking-widest border-b border-gray-700 pb-4 text-center">
        注意事項
      </h2>
      <ul className="space-y-5 text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed tracking-wide">
        <li className="flex items-start">
          <span className="mr-2">・</span>
          <span>プレイ可能時間は 10:30〜18:00 までとなります。</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">・</span>
          <span>
            ショッピングモール内を移動する際は走らずに歩いてのご移動をお願いいたします。
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">・</span>
          <span>
            謎の答えを大声で話す行為はお控えください。他にプレイをされている方へのご配慮をお願いいたします。
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">・</span>
          <span>
            もし謎に行き詰まってしまった時はWebページ右下のHINTボタンからヒントをご活用ください。それでもわからない時は先輩探偵に力を貸してもらいましょう。
          </span>
        </li>
      </ul>
    </div>
  );
}
