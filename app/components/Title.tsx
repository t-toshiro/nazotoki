export default function Title() {
  return (
    <>
      {/* タイトルセクション */}
      <div className="space-y-3 drop-shadow-md">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter">
          <span className="text-white">
            <ruby>
              未来<rt>みらい</rt>
            </ruby>
            <ruby>
              通信<rt>つうしん</rt>
            </ruby>
          </span>
          <span className="text-black bg-white px-2 py-1 ml-1 rounded-md inline-block transform -rotate-2">
            <ruby>
              探偵<rt>たんてい</rt>
            </ruby>
          </span>
        </h1>
        <p className="text-lg sm:text-xl font-bold text-yellow-300 tracking-widest mt-4 drop-shadow-sm">
          <ruby>
            隠<rt>かく</rt>
          </ruby>
          された「おトク」を
          <ruby>
            見<rt>み</rt>
          </ruby>
          つけ
          <ruby>
            出<rt>だ</rt>
          </ruby>
          せ
        </p>
      </div>

      <div className="text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-md leading-loose tracking-wider px-2">
        <p>
          この
          <ruby>
            度<rt>たび</rt>
          </ruby>
          は
        </p>
        <p className="whitespace-nowrap text-[13px] sm:text-base md:text-lg">
          「
          <ruby>
            未来<rt>みらい</rt>
          </ruby>
          <ruby>
            通信<rt>つうしん</rt>
          </ruby>
          <ruby>
            探偵<rt>たんてい</rt>
          </ruby>{" "}
          〜
          <ruby>
            隠<rt>かく</rt>
          </ruby>
          された「おトク」を
          <ruby>
            見<rt>み</rt>
          </ruby>
          つけ
          <ruby>
            出<rt>だ</rt>
          </ruby>
          せ〜」
        </p>
        <p>
          へのご
          <ruby>
            参加<rt>さんか</rt>
          </ruby>
          、
          <ruby>
            誠<rt>まこと</rt>
          </ruby>
          にありがとうございます！
        </p>
      </div>
    </>
  );
}
