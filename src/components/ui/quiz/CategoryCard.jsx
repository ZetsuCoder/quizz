import { motion } from "framer-motion";
import { getCategoryIcon } from "../../../utills/icons";

const CategoryCard = ({ category, onClick }) => {
  const Icon = getCategoryIcon(category);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer border-2 border-transparent hover:border-purple-400 transition-colors"
    >
      <div className={`p-6 flex flex-col items-center text-center`}>
        <div className="p-3 rounded-full bg-purple-100 mb-4">
          <Icon size={32} className="text-purple-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{category}</h3>
        <p className="text-gray-600 text-sm">
          Test your knowledge in {category}
        </p>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
