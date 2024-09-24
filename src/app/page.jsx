"use client";
import React from "react";

function MainComponent() {
  const questions = [
    {
      question: "我想买一个____。",
      answer: "苹果",
      pinyin: "píngguǒ",
      explanation: "私はリンゴを買いたいです。",
    },
    {
      question: "我喜欢吃____。",
      answer: "苹果",
      pinyin: "píngguǒ",
      explanation: "私はリンゴを食べるのが好きです。",
    },
    {
      question: "今天的天气很____。",
      answer: "好",
      pinyin: "hǎo",
      explanation: "今日の天気はとても良いです。",
    },
    {
      question: "我喜欢____音乐。",
      answer: "听",
      pinyin: "tīng",
      explanation: "私は音楽を聴くのが好きです。",
    },
    {
      question: "天气预报说今天会____。",
      answer: "下雨",
      pinyin: "xià yǔ",
      explanation: "天気予報では今日は雨が降ると言っています。",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [userInput, setUserInput] = React.useState("");
  const [completed, setCompleted] = React.useState(false);
  const [score, setScore] = React.useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleSubmitAnswer = () => {
    if (userInput === currentQuestion.answer) {
      setScore(score + 1);
    }
    setCompleted(true);
  };

  const handleNextQuestion = () => {
    setCompleted(false);
    setUserInput("");
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  return (
    <div className="min-h-screen bg-red-100 font-sans">
      <nav className="bg-red-600 text-white p-4">
        <h1 className="text-2xl font-bold">HSK Level 3 中国語填空</h1>
      </nav>

      <div className="container mx-auto p-4">
        <div className="bg-white p-4 rounded shadow-lg border border-red-300">
          <h2 className="text-xl font-bold mb-2">填空</h2>
          <p className="mb-2">{currentQuestion.question}</p>
          <p className="mb-2 text-gray-500">{currentQuestion.explanation}</p>

          <input
            type="text"
            placeholder="回答を入力..."
            className="w-full p-2 border rounded mb-4 border-red-300"
            name="answer"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={completed}
          />

          <button
            onClick={handleSubmitAnswer}
            className="bg-red-500 text-white px-4 py-2 rounded mb-4"
            disabled={completed}
          >
            回答する
          </button>

          {completed && (
            <div className="mt-4">
              {userInput === currentQuestion.answer ? (
                <p className="text-green-600">
                  正解！拼音は {currentQuestion.pinyin} です。
                </p>
              ) : (
                <p className="text-red-600">
                  不正解。正しい答えは {currentQuestion.answer} で、拼音は {currentQuestion.pinyin} です。
                </p>
              )}

              <button
                onClick={handleNextQuestion}
                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              >
                次の問題
              </button>
            </div>
          )}

          <p className="mt-4">スコア: {score}</p>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;

