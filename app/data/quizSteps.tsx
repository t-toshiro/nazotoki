import Image from "next/image";

export const QUIZ_STEPS = [
  {
    stepNum: 1,
    formTitle: (
      <>
        <ruby>
          最後<rt>さいご</rt>
        </ruby>
        の
        <ruby>
          答<rt>こた</rt>
        </ruby>
        え
      </>
    ),
    videoSrc: "/midway.mp4",
    videoDesc: (
      <div className="space-y-6 w-full">
        <p className="text-center">
          <ruby>
            怪盗<rt>かいとう</rt>
          </ruby>
          「D」の
          <ruby>
            仕掛<rt>しか</rt>
          </ruby>
          けた
          <ruby>
            罠<rt>わな</rt>
          </ruby>
          だったようだ……
          <br />
          <ruby>
            引<rt>ひ</rt>
          </ruby>
          き
          <ruby>
            続<rt>つづ</rt>
          </ruby>
          き
          <ruby>
            捜査<rt>そうさ</rt>
          </ruby>
          を
          <ruby>
            頼<rt>たの</rt>
          </ruby>
          む！
        </p>

        <div className="bg-[#0f172a] border-2 border-blue-500 rounded-xl p-5 sm:p-6 text-left shadow-[0_0_15px_rgba(59,130,246,0.3)] relative mt-10">
          <div className="absolute -top-8 -left-3 sm:-top-10 sm:-left-5 bg-[#0f172a] rounded-full p-1.5 z-10">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <Image
                src="/edoshi_icon.jpg"
                alt="探偵EDOSHIのアイコン"
                fill
                className="rounded-full border-[3px] border-blue-400 object-cover shadow-md"
              />
            </div>
          </div>

          <div className="w-full">
            {/* ★ 修正：タイトルだけを ml-[44px] で右にずらし、アイコンとの被りを防ぐ ★ */}
            <h3 className="text-blue-200 font-bold text-lg sm:text-xl mb-5 tracking-widest ml-[44px] sm:ml-[56px] leading-relaxed">
              <ruby>
                探偵<rt>たんてい</rt>
              </ruby>
              EDOSHINからの
              <br className="sm:hidden" />
              アドバイス
            </h3>

            {/* ★ 修正：親枠の pl-[76px] を消したので、ここは左端から広く使えるようになります ★ */}
            <p className="text-sm sm:text-base text-white leading-loose font-medium tracking-wide">
              ここまで
              <ruby>
                君<rt>きみ</rt>
              </ruby>
              たちが
              <ruby>
                解<rt>と</rt>
              </ruby>
              いた
              <ruby>
                謎<rt>なぞ</rt>
              </ruby>
              は
              <ruby>
                確実<rt>かくじつ</rt>
              </ruby>
              にあっている。
              <ruby>
                紙<rt>かみ</rt>
              </ruby>
              の
              <ruby>
                中<rt>なか</rt>
              </ruby>
              ではなく、
              <ruby>
                実際<rt>じっさい</rt>
              </ruby>
              に
              <span className="text-yellow-300 font-bold">
                「たんていのぼうしとあたま」
              </span>
              の
              <ruby>
                間<rt>あいだ</rt>
              </ruby>
              を
              <ruby>
                探<rt>さが</rt>
              </ruby>
              そう！
              <ruby>
                特設<rt>とくせつ</rt>
              </ruby>
              ブースから
              <ruby>
                離<rt>はな</rt>
              </ruby>
              れる
              <ruby>
                必要<rt>ひつよう</rt>
              </ruby>
              はないぞ！
              <ruby>
                俺<rt>おれ</rt>
              </ruby>
              に
              <ruby>
                手伝<rt>てつだ</rt>
              </ruby>
              えることがあれば なんでも
              <ruby>
                言<rt>い</rt>
              </ruby>
              ってくれ！
            </p>
          </div>
        </div>
      </div>
    ),
    isEnding: false,
  },
  {
    stepNum: 2,
    formTitle: (
      <>
        <ruby>
          本当<rt>ほんとう</rt>
        </ruby>
        の
        <ruby>
          答<rt>こた</rt>
        </ruby>
        え
      </>
    ),
    videoSrc: "/ending.mp4",
    videoDesc: (
      <>
        <p>
          <ruby>
            協力<rt>きょうりょく</rt>
          </ruby>
          ありがとう！
        </p>
        <p>
          <ruby>
            君<rt>きみ</rt>
          </ruby>
          たちの
          <ruby>
            謎解<rt>なぞと</rt>
          </ruby>
          き
          <ruby>
            力<rt>りょく</rt>
          </ruby>
          は「ホンモノ」だ！
        </p>
        <p>
          <ruby>
            最後<rt>さいご</rt>
          </ruby>
          に
          <ruby>
            探偵<rt>たんてい</rt>
          </ruby>
          アンケートに
          <ruby>
            解答<rt>かいとう</rt>
          </ruby>
          して
          <br />
          <ruby>
            認定証<rt>にんていしょう</rt>
          </ruby>
          を
          <ruby>
            受<rt>う</rt>
          </ruby>
          け
          <ruby>
            取<rt>と</rt>
          </ruby>
          ってくれ！
        </p>
      </>
    ),
    isEnding: true,
  },
];
