import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./components/ui/quiz/Layout";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultPage";
import { QuizProvider } from "./context/quizContext";
import './index.css'
function App() {
  return (
    <QuizProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/quiz/:category" element={<QuizPage />} />
            <Route path="/quiz" element={<Navigate to={'/'} />} />
            <Route path="/results" element={<ResultsPage />} />
          </Route>
        </Routes>
    </QuizProvider>
  );
}

export default App;
