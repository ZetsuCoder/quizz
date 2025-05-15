import { Check, X } from "lucide-react";

const ResultItem = ({ question, userAnswer, index }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-5">
      <div className="flex items-start gap-3">
        <span className="text-gray-500 font-medium">#{index + 1}</span>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-800 mb-3">
            {question.question}
          </h3>

          <div className="space-y-2">
            {question.answers.map((answer, answerIndex) => (
              <div
                key={answerIndex}
                className={`p-3 rounded-md flex items-center
                  ${
                    answerIndex === userAnswer.selectedAnswerIndex &&
                    answerIndex === question.correctAnswerIndex
                      ? "bg-green-100 border border-green-200"
                      : answerIndex === userAnswer.selectedAnswerIndex
                      ? "bg-red-100 border border-red-200"
                      : answerIndex === question.correctAnswerIndex
                      ? "bg-green-50 border border-green-100"
                      : "bg-gray-50 border border-gray-100"
                  }
                `}
              >
                <span className="flex-1">{answer}</span>

                {answerIndex === userAnswer.selectedAnswerIndex && (
                  <div className="flex items-center">
                    {userAnswer.isCorrect ? (
                      <Check size={20} className="text-green-600" />
                    ) : (
                      <X size={20} className="text-red-600" />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {!userAnswer.isCorrect && (
            <p className="mt-3 text-sm font-medium text-gray-700">
              Correct answer: {question.answers[question.correctAnswerIndex]}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
