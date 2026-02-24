"use server";

export async function checkAnswer(formData: FormData) {
  const answer = formData.get("answer") as string;
  const correctAnswer = "せいかい";
  if (answer === correctAnswer) {
    return { message: "正解です！" };
  } else {
    return { message: "残念！" };
  }
}
