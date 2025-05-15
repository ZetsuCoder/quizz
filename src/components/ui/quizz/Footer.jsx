import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        
        <p className="text-gray-400 text-sm mt-2">
          © {new Date().getFullYear()} ZetsuCoder
        </p>
      </div>
    </footer>
  );
};

export default Footer;
