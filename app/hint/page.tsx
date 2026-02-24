import Link from "next/link";

export default function HintPage() {
  return (
    // メインページと同じ水色の背景
    <div className="min-h-screen bg-[#3EBFFB] text-white font-sans p-4 sm:p-8 selection:bg-pink-500">
      {/* 戻るボタン */}
      <div className="max-w-2xl mx-auto mb-6">
        <Link
          href="/"
          className="inline-block bg-black/80 border border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-black transition-colors shadow-md text-sm"
        >
          ◀ メインページに戻る
        </Link>
      </div>

      {/* ヒントコンテナ（黒背景＋ピンクのネオン枠） */}
      <div className="max-w-2xl mx-auto bg-black/90 border-2 border-pink-500 rounded-2xl p-6 sm:p-10 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
        {/* ヘッダー部分 */}
        <h1 className="text-xl sm:text-2xl font-bold text-center tracking-widest text-white">
          『未来通信探偵』ヒント
        </h1>
        <hr className="border-gray-700 my-6" />
        <p className="text-center text-gray-300 font-medium mb-8">
          ヒントを見たい問題をタップしてください。
        </p>

        {/* ヒントリスト */}
        <div className="space-y-6">
          {/* === 1問目 === */}
          <details className="group">
            {/* 参考画像に合わせた、白い丸角の大きなボタン（▶マークは非表示にしています） */}
            <summary className="block w-full bg-white text-black font-bold text-lg py-4 px-6 rounded-xl text-center cursor-pointer hover:bg-gray-200 transition-colors list-none [&::-webkit-details-marker]:hidden shadow-sm active:scale-95">
              1問目のヒント
            </summary>

            {/* 1問目の中身（入れ子のdetails）ピンクの縦線で階層を分かりやすく */}
            <div className="mt-4 ml-2 sm:ml-4 pl-4 border-l-2 border-pink-500 space-y-4">
              {/* ヒント1 */}
              <details className="group/hint">
                <summary className="inline-block bg-transparent border border-orange-500 text-orange-400 py-2 px-6 rounded-full cursor-pointer hover:bg-orange-500 hover:text-black transition-colors font-bold text-sm list-none [&::-webkit-details-marker]:hidden active:scale-95">
                  ヒント1を見る
                </summary>
                <p className="mt-3 text-white leading-relaxed bg-gray-800/80 p-4 rounded-lg font-medium">
                  ここにはヒント1の中身が入ります。写真の右下によく注目してみて！
                </p>
              </details>

              {/* ヒント2（必要な場合） */}
              <details className="group/hint">
                <summary className="inline-block bg-transparent border border-orange-500 text-orange-400 py-2 px-6 rounded-full cursor-pointer hover:bg-orange-500 hover:text-black transition-colors font-bold text-sm list-none [&::-webkit-details-marker]:hidden active:scale-95">
                  ヒント2を見る
                </summary>
                <p className="mt-3 text-white leading-relaxed bg-gray-800/80 p-4 rounded-lg font-medium">
                  ここにはヒント2の中身が入ります。〇〇と〇〇を組み合わせてみよう。
                </p>
              </details>
            </div>
          </details>

          {/* === 2問目 === */}
          <details className="group">
            <summary className="block w-full bg-white text-black font-bold text-lg py-4 px-6 rounded-xl text-center cursor-pointer hover:bg-gray-200 transition-colors list-none [&::-webkit-details-marker]:hidden shadow-sm active:scale-95">
              2問目のヒント
            </summary>
            <div className="mt-4 ml-2 sm:ml-4 pl-4 border-l-2 border-pink-500 space-y-4">
              <details className="group/hint">
                <summary className="inline-block bg-transparent border border-orange-500 text-orange-400 py-2 px-6 rounded-full cursor-pointer hover:bg-orange-500 hover:text-black transition-colors font-bold text-sm list-none [&::-webkit-details-marker]:hidden active:scale-95">
                  ヒント1を見る
                </summary>
                <p className="mt-3 text-white leading-relaxed bg-gray-800/80 p-4 rounded-lg font-medium">
                  2問目のヒントテキストです。
                </p>
              </details>
            </div>
          </details>

          {/* === LAST === */}
          <details className="group">
            <summary className="block w-full bg-white text-black font-bold text-lg py-4 px-6 rounded-xl text-center cursor-pointer hover:bg-gray-200 transition-colors list-none [&::-webkit-details-marker]:hidden shadow-sm active:scale-95">
              LASTのヒント
            </summary>
            <div className="mt-4 ml-2 sm:ml-4 pl-4 border-l-2 border-pink-500 space-y-4">
              <details className="group/hint">
                <summary className="inline-block bg-transparent border border-orange-500 text-orange-400 py-2 px-6 rounded-full cursor-pointer hover:bg-orange-500 hover:text-black transition-colors font-bold text-sm list-none [&::-webkit-details-marker]:hidden active:scale-95">
                  ヒント1を見る
                </summary>
                <p className="mt-3 text-white leading-relaxed bg-gray-800/80 p-4 rounded-lg font-medium">
                  いよいよ最後です！今まで解いた答えを並べてみましょう。
                </p>
              </details>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
