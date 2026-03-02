"use server";

export async function checkAnswer(formData: FormData) {
  // 入力された文字を取得（前後の空白を自動削除）
  const answer = formData.get("answer")?.toString().trim();

  if (answer === "ニセモノ") {
    // 画面遷移せず、"midway"（途中）というステータスを返す
    return { status: "midway" };
  } else if (answer === "ホンモノ") {
    // 画面遷移せず、"ending"（クリア）というステータスを返す
    return { status: "ending" };
  } else {
    // どちらでもない場合はエラーメッセージを返す
    return { status: "error", message: "不正解です。もう一度考えてみよう！" };
  }
}
