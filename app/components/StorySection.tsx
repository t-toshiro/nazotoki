export default function StorySection() {
  return (
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
  );
}
