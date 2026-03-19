export default function StorySection() {
  return (
    <div className="w-full px-2 relative z-20 mt-4 text-center">
      {/* ▼ 文字色はピンクのまま、影を「明るい発光」と「暗い輪郭」の多重影にして視認性をアップ ▼ */}
      <h2 className="text-4xl sm:text-5xl font-serif font-black text-pink-400 mb-8 tracking-[0.2em] [text-shadow:_0_0_10px_#f472b6,_0_0_20px_#881337]">
        ストーリー
      </h2>

      {/* ルビが入るので、space-y-6 を space-y-8 に、leading を常に leading-loose に変更してゆとりを持たせました */}
      <div className="space-y-8 text-sm sm:text-base md:text-lg text-white font-bold leading-loose tracking-wider drop-shadow-md mx-auto max-w-xl">
        <p>
          <ruby>
            突如<rt>とつじょ</rt>
          </ruby>
          <ruby>
            現<rt>あらわ</rt>
          </ruby>
          れた
          <ruby>
            怪盗<rt>かいとう</rt>
          </ruby>
          Dによって、au・UQモバイルの
          <br className="sm:hidden" />
          おトクがイオンモール
          <ruby>
            春日部<rt>かすかべ</rt>
          </ruby>
          の
          <ruby>
            中<rt>なか</rt>
          </ruby>
          に
          <br className="sm:hidden" />
          <ruby>
            隠<rt>かく</rt>
          </ruby>
          されてしまった！
        </p>
        <p>
          {/* ↓ 指定された位置で改行（<br />）するように修正 */}
          <ruby>
            新人<rt>しんじん</rt>
          </ruby>
          <ruby>
            探偵<rt>たんてい</rt>
          </ruby>
          <ruby>
            助手<rt>じょしゅ</rt>
          </ruby>
          として
          <ruby>
            協力<rt>きょうりょく</rt>
          </ruby>
          <ruby>
            依頼<rt>いらい</rt>
          </ruby>
          を
          <ruby>
            受<rt>う</rt>
          </ruby>
          けたあなたは、
          <br />
          <ruby>
            怪盗<rt>かいとう</rt>
          </ruby>
          が
          <ruby>
            残<rt>のこ</rt>
          </ruby>
          した
          <ruby>
            手<rt>て</rt>
          </ruby>
          がかりを
          <ruby>
            解<rt>と</rt>
          </ruby>
          き
          <ruby>
            明<rt>あ</rt>
          </ruby>
          かし、
          <span className="whitespace-nowrap text-[15px] sm:text-xl text-yellow-300 text-center mt-10 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]">
            <ruby>
              見事<rt>みごと</rt>
            </ruby>
            「おトク」を
            <ruby>
              見<rt>み</rt>
            </ruby>
            つけ
            <ruby>
              出<rt>だ</rt>
            </ruby>
            すことができるか！？
          </span>
        </p>
      </div>
    </div>
  );
}
