import { motion } from "framer-motion";

const AnswerOption = ({
  answerText,
  index,
  isSelected,
  onSelect,
  disabled,
}) => {
  const letters = ["A", "B", "C", "D"];

  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={() => !disabled && onSelect()}
      className={`
        p-4 rounded-lg mb-3 border-2 cursor-pointer transition-all
        ${
          isSelected
            ? "border-purple-600 bg-purple-50"
            : "border-gray-200 hover:border-gray-300"
        }
        ${disabled ? "opacity-70 cursor-not-allowed" : ""}
      `}
    >
      <div className="flex items-center">
        <div
          className={`
            w-8 h-8 rounded-full flex items-center justify-center mr-3 font-medium
            ${
              isSelected
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-700"
            }
          `}
        >
          {letters[index]}
        </div>
        <span className="text-gray-800">{answerText}</span>
      </div>
    </motion.div>
  );
};

export default AnswerOption;
