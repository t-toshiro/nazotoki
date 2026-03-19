export default function ItemsTable() {
  return (
    <div className="w-full bg-black/90 border-2 border-pink-500 rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(236,72,153,0.3)] relative z-20 text-left">
      <h2 className="text-xl sm:text-2xl font-bold text-pink-500 mb-6 tracking-widest border-b border-gray-700 pb-4 text-center">
        <ruby>
          使<rt>つか</rt>
        </ruby>
        うアイテム
        <ruby>
          一覧<rt>いちらん</rt>
        </ruby>
      </h2>
      {/* ルビが入るので、space-y-2 を space-y-4 に変更してリストの縦幅にゆとりを持たせました */}
      <ul className="text-sm sm:text-base md:text-lg text-white font-medium tracking-wide space-y-4">
        <li className="flex items-start">
          <span className="mr-3 text-pink-500 shrink-0">●</span>
          <span>
            <ruby>
              謎<rt>なぞ</rt>
            </ruby>
            の
            <ruby>
              紙<rt>かみ</rt>
            </ruby>
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-pink-500 shrink-0">●</span>
          <span>
            UQ mobile{" "}
            <ruby>
              親子<rt>おやこ</rt>
            </ruby>
            <ruby>
              応援割<rt>おうえんわり</rt>
            </ruby>
            のチラシ
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-pink-500 shrink-0">●</span>
          <span>
            <ruby>
              筆記用具<rt>ひっきようぐ</rt>
            </ruby>
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-pink-500 shrink-0">●</span>
          <span>バインダー</span>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-pink-500 shrink-0">●</span>
          <span>スマートフォン</span>
        </li>
      </ul>
      {/* ルビが被らないように leading-loose に変更 */}
      <p className="mt-6 text-xs sm:text-sm text-yellow-300 font-bold tracking-wide leading-loose text-center">
        ※
        <ruby>
          足<rt>た</rt>
        </ruby>
        りないものがある
        <ruby>
          場合<rt>ばあい</rt>
        </ruby>
        はスタッフへ
        <ruby>
          声<rt>こえ</rt>
        </ruby>
        をかけてね
      </p>
    </div>
  );
}
