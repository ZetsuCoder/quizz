import { createContext, useContext, useState } from "react";
import { quizData } from "../data/quizData";
import { useNavigate } from "react-router-dom";

const QuizContext = createContext();

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};

export const QuizProvider = ({ children }) => {
    const navigate = useNavigate()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const getRandomQuestions = (questions, count = 10) => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const startQuiz = (category) => {
    if (!quizData[category]) {
        navigate("/")
      console.error(`Category "${category}" not found in quiz data`);
      return false; // indicate failure
    }

    const randomQuestions = getRandomQuestions(quizData[category]);

    setSelectedCategory(category);
    setShuffledQuestions(randomQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizCompleted(false);

    return true; // indicate success
  };

  const getCurrentQuestion = () => {
    if (!shuffledQuestions.length) return null;
    return shuffledQuestions[currentQuestionIndex];
  };

  const selectAnswer = (answerIndex) => {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return;

    const isCorrect = answerIndex === currentQuestion.correctAnswerIndex;

    setUserAnswers((prev) => [
      ...prev,
      {
        questionIndex: currentQuestionIndex,
        selectedAnswerIndex: answerIndex,
        isCorrect,
      },
    ]);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    if (selectedCategory && quizData[selectedCategory]) {
      const randomQuestions = getRandomQuestions(quizData[selectedCategory]);
      setShuffledQuestions(randomQuestions);
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setQuizCompleted(false);
    }
  };

  const value = {
    selectedCategory,
    startQuiz,
    getCurrentQuestion,
    currentQuestionIndex,
    selectAnswer,
    nextQuestion,
    userAnswers,
    quizCompleted,
    restartQuiz,
    totalQuestions: shuffledQuestions.length,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
