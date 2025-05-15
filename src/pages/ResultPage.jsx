import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, RotateCcw } from 'lucide-react';
import ResultItem from '../components/ui/quizz/ResultItem';
import { useQuiz } from '../context/quizContext';
import { quizData } from '../data/quizData';

const ResultsPage = () => {
  const navigate = useNavigate();
  const { selectedCategory, userAnswers, restartQuiz, startQuiz } = useQuiz();

  useEffect(() => {
    if (!selectedCategory || userAnswers.length === 0) {
      navigate('/');
    }
  }, [selectedCategory, userAnswers, navigate]);

  if (!selectedCategory) {
    return null;
  }

  const questions = quizData[selectedCategory];
  const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
  const totalQuestions = questions.length;
  const score = Math.round((correctAnswers / totalQuestions) * 100);

 const handleRestart = () => {
   startQuiz(selectedCategory);
   setTimeout(() => {
     navigate(`/quiz/${selectedCategory.toLowerCase()}`);
   }, 50); // or even 0 can sometimes help
 };


 

  const handleGoHome = () => {
    navigate('/');
  };

  let resultMessage = '';
  let resultClass = '';

  if (score >= 80) {
    resultMessage = 'Excellent!';
    resultClass = 'text-green-600';
  } else if (score >= 60) {
    resultMessage = 'Good job!';
    resultClass = 'text-blue-600';
  } else if (score >= 40) {
    resultMessage = 'Nice try!';
    resultClass = 'text-yellow-600';
  } else {
    resultMessage = 'Keep practicing!';
    resultClass = 'text-red-600';
  }

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6 mb-8"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {selectedCategory} Quiz Results
        </h1>
        
        <div className="flex flex-col items-center mb-6">
          <div className="w-32 h-32 rounded-full flex items-center justify-center border-8 border-purple-100 mb-4">
            <span className="text-3xl font-bold text-purple-600">{score}%</span>
          </div>
          <p className={`text-xl font-semibold ${resultClass}`}>{resultMessage}</p>
          <p className="text-gray-600 mt-2">
            You got {correctAnswers} out of {totalQuestions} questions correct
          </p>
        </div>
        
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={handleRestart}
            className="flex items-center gap-2 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <RotateCcw size={18} />
            <span>Restart Quiz</span>
          </button>
          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <Home size={18} />
            <span>Go Home</span>
          </button>
        </div>
      </motion.div>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">Question Review</h2>
      
      <div className="space-y-4">
        {questions.map((question, index) => {
          const userAnswer = userAnswers.find(answer => answer.questionIndex === index);
          
          if (!userAnswer) return null;
          
          return (
            <ResultItem
              key={index}
              question={question}
              userAnswer={userAnswer}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResultsPage;