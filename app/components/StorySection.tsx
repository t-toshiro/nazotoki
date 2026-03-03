export default function StorySection() {
  return (
    <div className="w-full px-2 relative z-20 mt-4 text-center">
      {/* ▼ 文字色はピンクのまま、影を「明るい発光」と「暗い輪郭」の多重影にして視認性をアップ ▼ */}
      <h2 className="text-4xl sm:text-5xl font-serif font-black text-pink-400 mb-8 tracking-[0.2em] [text-shadow:_0_0_10px_#f472b6,_0_0_20px_#881337]">
        Story
      </h2>

      <div className="space-y-6 text-sm sm:text-base md:text-lg text-white font-bold leading-relaxed sm:leading-loose tracking-wider drop-shadow-md mx-auto max-w-xl">
        <p>
          突如現れた怪盗Dによって、au・UQモバイルのお得情報がイオン幕張新都心の中に隠されてしまった！
        </p>
        <p>
          {/* ↓ 指定された位置で改行（<br />）するように修正 */}
          新人探偵助手として協力依頼を受けたあなたは、
          <br />
          怪盗が残した手がかりを解き明かし、
        </p>
        {/* ↓ whitespace-nowrap（改行禁止）を追加し、スマホ用に文字サイズを微調整 */}
        <p className="whitespace-nowrap text-[15px] sm:text-xl text-yellow-300 text-center mt-8 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]">
          見事「おトク」を見つけ出すことができるか！？
        </p>
      </div>
    </div>
  );
}
