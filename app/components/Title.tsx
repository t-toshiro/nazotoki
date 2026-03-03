export default function () {
  return (
    <>
      {/* タイトルセクション */}
      <div className="space-y-3 drop-shadow-md">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter">
          <span className="text-white">未来通信</span>
          <span className="text-black bg-white px-2 py-1 ml-1 rounded-md inline-block transform -rotate-2">
            探偵
          </span>
        </h1>
        <p className="text-lg sm:text-xl font-bold text-yellow-300 tracking-widest mt-4 drop-shadow-sm">
          隠された「おトク」を見つけ出せ
        </p>
      </div>

      {/* ご挨拶・アイテム・注意事項・ストーリー（省略せずにそのまま残しています） */}
      <div className="text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-md leading-loose tracking-wider px-2">
        <p>この度は</p>
        {/* ↓ <br>を削除し、改行禁止（whitespace-nowrap）とスマホ用の微調整サイズを追加 */}
        <p className="whitespace-nowrap text-[13px] sm:text-base md:text-lg">
          「未来通信探偵 〜隠された「おトク」を見つけ出せ〜」
        </p>
        <p>へのご参加、誠にありがとうございます</p>
      </div>
    </>
  );
}
