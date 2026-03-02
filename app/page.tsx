"use client";

import Image from "next/image";
import Link from "next/link";
import { checkAnswer } from "./actions";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  // ★追加：どの動画を表示するか管理するステート ("none" | "midway" | "ending")
  const [videoState, setVideoState] = useState<"none" | "midway" | "ending">(
    "none",
  );

  // ★追加：動画が出現したときに自動スクロールするための参照
  const videoRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (formData: FormData) => {
    // 送信時に一旦リセット
    setMessage("");
    setVideoState("none");

    const result = await checkAnswer(formData);

    // サーバーからの返答に応じて状態を変更
    if (result?.status === "midway") {
      setVideoState("midway");
    } else if (result?.status === "ending") {
      setVideoState("ending");
    } else if (result?.message) {
      setMessage(result.message);
    }
  };

  // ★追加：動画ステータスが変わって表示されたら、そこにフワッと自動スクロールする
  useEffect(() => {
    if (videoState !== "none" && videoRef.current) {
      // 少し遅延させることで、DOMが描画された後に綺麗にスクロールする
      setTimeout(() => {
        videoRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [videoState]);

  return (
    // 背景色をポスターの水色に合わせて設定
    <div className="min-h-screen bg-[#3EBFFB] text-white font-sans relative pb-24 overflow-x-hidden selection:bg-pink-500">
      {/* 1. トップ画像エリア */}
      <div className="w-full flex justify-center pt-6 md:pt-10 px-4">
        <div className="relative w-full max-w-2xl aspect-[3/4] pointer-events-none select-none overflow-hidden">
          <Image
            src="/nazotoki_poster.jpg"
            alt="未来通信探偵 ポスター"
            fill
            className="object-contain object-top"
            priority
          />
        </div>
      </div>

      {/* スクロールを促す▼マーク */}
      <div className="flex justify-center mt-4 mb-10 animate-bounce drop-shadow-md relative z-10">
        <span className="text-white text-sm font-bold tracking-widest flex flex-col items-center text-shadow">
          SCROLL
          <span className="mt-2 border-x-[10px] border-x-transparent border-t-[12px] border-t-white w-0 h-0 filter drop-shadow"></span>
        </span>
      </div>

      {/* 2. コンテンツエリア */}
      <div className="relative z-10 pb-10">
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 space-y-12 text-center max-w-2xl mx-auto">
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

          {/* ご挨拶テキスト */}
          <div className="text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-md leading-loose tracking-wider px-2">
            <p>この度は</p>
            <p>
              「未来通信探偵
              <br className="sm:hidden" />
              〜隠された「おトク」を見つけ出せ〜」
            </p>
            <p>へのご参加、誠にありがとうございます</p>
          </div>

          {/* 使用アイテム一覧セクション */}
          <div className="w-full bg-black/90 border-2 border-pink-500 rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(236,72,153,0.3)] relative z-20 text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-pink-500 mb-6 tracking-widest border-b border-gray-700 pb-4">
              使用するアイテム一覧
            </h2>
            <ul className="text-sm sm:text-base md:text-lg text-white font-medium tracking-wide space-y-2 pl-2">
              <li>・謎の紙</li>
              <li>・チラシ</li>
              <li>・ペグシル</li>
              <li>・バインダー</li>
              <li>・スマートフォン</li>
            </ul>
            <p className="mt-6 text-xs sm:text-sm text-yellow-300 font-bold tracking-widest leading-relaxed">
              ※不備がある場合はスタッフへお声がけください
            </p>
          </div>

          {/* 注意事項セクション */}
          <div className="w-full bg-black/90 border-2 border-pink-500 rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(236,72,153,0.3)] relative z-20 text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-pink-500 mb-6 tracking-widest border-b border-gray-700 pb-4">
              注意事項
            </h2>
            <ul className="space-y-5 text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed tracking-wide">
              <li className="flex items-start">
                <span className="mr-2">・</span>
                <span>プレイ可能時間は〇〇時〜〇〇時までとなります。</span>
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

          {/* プロローグ（ストーリー）セクション */}
          <div className="w-full px-2 relative z-20 mt-4 text-left sm:text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-pink-400 mb-6 tracking-widest drop-shadow-[0_0_15px_rgba(244,114,182,0.8)] text-center">
              Story
            </h2>
            <div className="space-y-5 text-sm sm:text-base md:text-lg text-white font-bold leading-relaxed sm:leading-loose tracking-wider drop-shadow-md">
              <p>
                突如現れた怪盗「D」によって、au・UQモバイルのお得情報がイオン幕張新都心の中に隠されてしまった！
              </p>
              <p>
                新人探偵助手として捜査の協力依頼を受けたあなたは、怪盗が残した手がかりを解き明かし、
              </p>
              <p className="text-base sm:text-xl text-yellow-300 text-center mt-8">
                見事「おトク」を見つけ出すことができるか！？
              </p>
            </div>
          </div>

          {/* 3. 回答フォーム（LAST ANSWER） */}
          <div className="w-full bg-black/90 border-2 border-pink-500 rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(236,72,153,0.3)] relative z-20 mt-4 text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-400 mb-6 uppercase tracking-widest border-b border-gray-700 pb-4 text-center">
              Last Answer
            </h2>

            <form action={handleSubmit} className="flex flex-col gap-6">
              <input
                name="answer"
                type="text"
                placeholder="回答を入力してください"
                className="w-full px-4 py-3 sm:px-5 sm:py-4 text-base sm:text-lg text-black bg-white rounded-lg border-4 border-transparent focus:outline-none focus:border-orange-500 transition-all font-bold placeholder-gray-400"
                required
              />
              {message && (
                <p className="text-pink-500 font-bold text-sm bg-pink-500/10 py-2 px-4 rounded-lg text-center">
                  {message}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-transparent border-2 border-pink-500 hover:bg-pink-500 text-pink-500 hover:text-white font-bold py-3 sm:py-4 px-6 rounded-full text-base sm:text-lg transition-all active:scale-95"
              >
                確定
              </button>
            </form>
          </div>

          {/* === 新規追加：動画表示エリア === */}
          {/* videoStateが "none" 以外の時に表示されます */}
          {videoState !== "none" && (
            <div
              ref={videoRef}
              className="w-full relative z-20 mt-4 transition-all duration-700 ease-in-out opacity-100 translate-y-0"
            >
              {/* ニセモノ（途中動画）の場合 */}
              {videoState === "midway" && (
                <div className="bg-black/90 border-2 border-orange-500 rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(249,115,22,0.4)] text-center">
                  <h2 className="text-xl sm:text-2xl font-bold text-orange-400 mb-4 tracking-widest">
                    途中経過
                  </h2>
                  <div className="w-full aspect-video rounded-lg overflow-hidden border border-orange-500/30">
                    <video
                      controls
                      autoPlay
                      className="w-full h-full object-cover bg-gray-900"
                    >
                      <source src="/midway.mp4" type="video/mp4" />
                      お使いのブラウザは動画の再生に対応していません。
                    </video>
                  </div>
                  <p className="mt-6 text-white font-medium tracking-wider leading-relaxed text-sm sm:text-base">
                    怪盗「D」の仕掛けた罠だったようだ……
                    <br />
                    引き続き捜査を頼む！
                  </p>
                </div>
              )}

              {/* ホンモノ（エンディング動画）の場合 */}
              {videoState === "ending" && (
                <div className="bg-black/90 border-2 border-yellow-400 rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(250,204,21,0.4)] text-center">
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-yellow-400 mb-6 tracking-widest drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">
                    TRUE END
                  </h2>
                  <div className="w-full aspect-video rounded-lg overflow-hidden border border-yellow-400/30">
                    <video
                      controls
                      autoPlay
                      className="w-full h-full object-cover bg-gray-900"
                    >
                      <source src="/ending.mp4" type="video/mp4" />
                      お使いのブラウザは動画の再生に対応していません。
                    </video>
                  </div>
                  <div className="mt-6 space-y-3 text-white font-bold tracking-wider text-sm sm:text-base">
                    <p>見事、隠された「おトク」を見つけ出した！</p>
                    <p>キミのヒラメキに感謝する！</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 4. 右下固定のHINTボタン */}
      <Link
        href="/hint"
        className="fixed bottom-6 right-6 bg-black/90 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black font-bold py-3 px-6 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.4)] backdrop-blur-sm transition-all z-50 tracking-widest"
      >
        HINT
      </Link>
    </div>
  );
}
