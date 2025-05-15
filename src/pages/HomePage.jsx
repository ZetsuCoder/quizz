import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CategoryCard from "../components/ui/quizz/CategoryCard";
import { useQuiz } from "../context/quizContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { startQuiz } = useQuiz();

  const categories = ["HTML", "CSS", "JavaScript", "React"];

  const handleCategorySelect = (category) => {
    startQuiz(category);
    navigate(`/quiz/${category.toLowerCase()}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-purple-600">QuizMaster</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Test your knowledge in various web development topics. Select a
          category below to get started.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {categories.map((category) => (
          <CategoryCard
            key={category}
            category={category}
            onClick={() => handleCategorySelect(category)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default HomePage;
