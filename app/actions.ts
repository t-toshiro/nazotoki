"use server";

const QUIZ_ANSWERS: Record<number, string[]> = {
  1: ["偽物", "にせもの", "ニセモノ"],
  2: ["情報", "じょうほう", "ジョウホウ"],
};
export async function checkAnswer(step: number, formData: FormData) {
  // 入力された文字を取得（前後の空白を自動削除）
  const answer = formData.get("answer")?.toString().trim() || "";
  if (answer.length > 20) {
    return { status: "incorrect" };
  }
  const validAnswer = QUIZ_ANSWERS[step];

  if (validAnswer.includes(answer)) {
    // 画面遷移せず、"midway"（途中）というステータスを返す
    return { status: "success" };
  } else {
    // どちらでもない場合はエラーメッセージを返す
    return { status: "incorrect" };
  }
}
