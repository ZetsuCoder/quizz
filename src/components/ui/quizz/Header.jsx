import { Link } from 'react-router-dom';
import { BrainCog } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-purple-600 hover:text-purple-800 transition-colors"
        >
          <BrainCog size={28} />
          <span>ZetsuQuiz</span>
        </Link>
        <nav>
          <Link
            to="/"
            className="font-medium text-gray-700 hover:text-purple-600 transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;