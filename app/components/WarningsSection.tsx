export default function WarningsSection() {
  return (
    <div className="w-full bg-black/90 border-2 border-pink-500 rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(236,72,153,0.3)] relative z-20 text-left">
      <h2 className="text-xl sm:text-2xl font-bold text-pink-500 mb-6 tracking-widest border-b border-gray-700 pb-4 text-center">
        <ruby>
          気<rt>き</rt>
        </ruby>
        をつけること
      </h2>
      {/* ルビが被らないよう leading-loose に変更し、項目間の余白を space-y-6 に広げました */}
      <ul className="space-y-6 text-sm sm:text-base md:text-lg text-white font-medium leading-loose tracking-wide">
        <li className="flex items-start">
          <span className="mr-3 text-pink-500 shrink-0">●</span>
          <span>
            <ruby>
              遊<rt>あそ</rt>
            </ruby>
            べる
            <ruby>
              時間<rt>じかん</rt>
            </ruby>
            は【10:30～18:30】だ！
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-pink-500 shrink-0">●</span>
          <span>
            ショッピングモール
            <ruby>
              内<rt>ない</rt>
            </ruby>
            では
            <ruby>
              走<rt>はし</rt>
            </ruby>
            らないようにしよう！
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-pink-500 shrink-0">●</span>
          <span>
            <ruby>
              他<rt>ほか</rt>
            </ruby>
            にも
            <ruby>
              遊<rt>あそ</rt>
            </ruby>
            んでいる
            <ruby>
              人<rt>ひと</rt>
            </ruby>
            がいるから、
            <ruby>
              謎<rt>なぞ</rt>
            </ruby>
            の
            <ruby>
              答<rt>こた</rt>
            </ruby>
            えは
            <ruby>
              大<rt>おお</rt>
            </ruby>
            きな
            <ruby>
              声<rt>こえ</rt>
            </ruby>
            で
            <ruby>
              言<rt>い</rt>
            </ruby>
            わないようにしよう！
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-pink-500 shrink-0">●</span>
          <span>
            <ruby>
              謎<rt>なぞ</rt>
            </ruby>
            が
            <ruby>
              難<rt>むずか</rt>
            </ruby>
            しくてわからない
            <ruby>
              時<rt>とき</rt>
            </ruby>
            は、
            <ruby>
              右下<rt>みぎした</rt>
            </ruby>
            のボタンからヒントを
            <ruby>
              見<rt>み</rt>
            </ruby>
            よう！それでもわからない時は
            <ruby>
              先輩<rt>せんぱい</rt>
            </ruby>
            <ruby>
              探偵<rt>たんてい</rt>
            </ruby>
            に
            <ruby>
              声<rt>こえ</rt>
            </ruby>
            をかけて
            <ruby>
              助<rt>たす</rt>
            </ruby>
            けてもらおう！
          </span>
        </li>
      </ul>
    </div>
  );
}
