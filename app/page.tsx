import Link from "next/link";
import Poster from "@/app/components/Poster";
import Title from "@/app/components/Title";
import ItemsTable from "./components/ItemsTable";
import WarningsSection from "./components/WarningsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#3EBFFB] text-white font-sans relative pb-24 overflow-x-hidden selection:bg-pink-500">
      <Poster />
      <div className="flex justify-center mt-4 mb-10 animate-bounce drop-shadow-md relative z-10">
        <span className="text-white text-sm font-bold tracking-widest flex flex-col items-center text-shadow">
          スクロール
          <span className="mt-2 border-x-[10px] border-x-transparent border-t-[12px] border-t-white w-0 h-0 filter drop-shadow"></span>
        </span>
      </div>
      <div className="relative z-10 py-10">
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 space-y-12 text-center max-w-2xl mx-auto">
          <Title />
          <ItemsTable />
          <WarningsSection />
          {/* 難易度選択セクション */}
          <div className="w-full space-y-8">
            <h2 className="text-2xl sm:text-3xl font-black tracking-widest text-white drop-shadow-md">
              <ruby>
                難易度<rt>なんいど</rt>
              </ruby>
              を
              <ruby>
                選<rt>えら</rt>
              </ruby>
              ぼう！
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* ノーマルボタン */}
              <Link
                href="/normal"
                className="group relative bg-white border-4 border-blue-400 p-8 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 active:scale-95"
              >
                <span className="text-blue-600 text-3xl font-black tracking-widest block mb-2">
                  <ruby>
                    初級<rt>しょきゅう</rt>
                  </ruby>
                </span>
                <span className="text-blue-400 text-lg font-bold block mb-4">
                  ノーマル
                </span>
                <p className="text-gray-600 text-sm font-bold leading-relaxed">
                  はじめて
                  <ruby>
                    謎解<rt>なぞと</rt>
                  </ruby>
                  きを
                  <br />
                  する
                  <ruby>
                    人<rt>ひと</rt>
                  </ruby>
                  にオススメ！
                </p>
              </Link>

              {/* ハードボタン */}
              <Link
                href="/hard"
                className="group relative bg-black/90 border-4 border-pink-500 p-8 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 active:scale-95"
              >
                <span className="text-pink-500 text-3xl font-black tracking-widest block mb-2">
                  <ruby>
                    上級<rt>じょうきゅう</rt>
                  </ruby>
                </span>
                <span className="text-white text-lg font-bold block mb-4">
                  ハード
                </span>
                <p className="text-gray-300 text-sm font-bold leading-relaxed">
                  <ruby>
                    謎解<rt>なぞと</rt>
                  </ruby>
                  きに
                  <ruby>
                    自信<rt>じしん</rt>
                  </ruby>
                  のある
                  <br />
                  <ruby>
                    人<rt>ひと</rt>
                  </ruby>
                  はこっちだ！
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
