import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProgressBar from "../components/ui/quizz/ProgressBar";
import { useQuiz } from "../context/quizContext";
import AnswerOption from "../components/ui/quizz/AnswerOptions";

const QuizPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

  const {
    selectedCategory,
    startQuiz,
    getCurrentQuestion,
    currentQuestionIndex,
    selectAnswer,
    nextQuestion,
    quizCompleted,
    totalQuestions,
  } = useQuiz();

  useEffect(() => {
    if (!selectedCategory && category) {
      const formattedCategory =
        category.charAt(0).toUpperCase() + category.slice(1);
      startQuiz(formattedCategory);
    }
  }, [category, selectedCategory, startQuiz]);

  useEffect(() => {
    if (quizCompleted) {
      navigate("/results");
    }
  }, [quizCompleted, navigate]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setIsAnswerSelected(false);
  }, [currentQuestionIndex]);

  const currentQuestion = getCurrentQuestion();

  if (!currentQuestion) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  const handleSelectAnswer = (index) => {
    if (isAnswerSelected) return;

    setSelectedAnswerIndex(index);
    setIsAnswerSelected(true);
    selectAnswer(index);
  };

  const handleNextQuestion = () => {
    nextQuestion();
  };

  return (
    <div className="max-w-3xl mx-auto">
      <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />

      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-md p-6 mt-6"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          {currentQuestion.question}
        </h2>

        <div className="space-y-3">
          {currentQuestion.answers.map((answer, index) => (
            <AnswerOption
              key={index}
              answerText={answer}
              index={index}
              isSelected={selectedAnswerIndex === index}
              onSelect={() => handleSelectAnswer(index)}
              disabled={isAnswerSelected && selectedAnswerIndex !== index}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleNextQuestion}
            disabled={!isAnswerSelected}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white
              ${
                isAnswerSelected
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-gray-300 cursor-not-allowed"
              }
              transition-colors
            `}
          >
            {currentQuestionIndex < totalQuestions - 1
              ? "Next Question"
              : "See Results"}
            <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizPage;
