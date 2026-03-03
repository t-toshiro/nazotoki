export default function ItemsTable() {
  return (
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
  );
}
