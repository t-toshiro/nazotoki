"use server";

export type Difficulty = "normal" | "hard";

const QUIZ_ANSWERS: Record<Difficulty, Record<number, string[]>> = {
  hard: {
    1: ["偽物", "にせもの", "ニセモノ"],
    2: ["情報", "じょうほう", "ジョウホウ"],
  },
  normal: {
    1: ["情報", "じょうほう", "ジョウホウ"],
  },
};

export async function checkAnswer(
  difficulty: Difficulty,
  step: number,
  formData: FormData
) {
  // 入力された文字を取得（前後の空白を自動削除）
  const answer = formData.get("answer")?.toString().trim() || "";
  if (answer.length > 20) {
    return { status: "incorrect" };
  }
  const validAnswer = QUIZ_ANSWERS[difficulty]?.[step];

  if (validAnswer && validAnswer.includes(answer)) {
    // 画面遷移せず、"midway"（途中）というステータスを返す
    return { status: "success" };
  } else {
    // どちらでもない場合はエラーメッセージを返す
    return { status: "incorrect" };
  }
}
