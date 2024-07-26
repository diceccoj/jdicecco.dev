import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Autoclave from "./pages/Autoclave";
import BillingSystem from "./pages/BillingSystem";
import CPUFetcher from "./pages/CPUFetcher";
import DiabetesGame from "./pages/DiabetesGame";
import FirstWebsite from "./pages/FirstWebsite";
import Initial from "./pages/Initial";
import TierIt from "./pages/TierIt";
import Tetris from "./pages/Tetris";
import SudokuSolver from "./pages/SudokuSolver";
import PowerBI from "./pages/PowerBI";
import MindmenderAI from "./pages/mindmender_ai/src/App";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/src/pages/autoclave_arm/" element={<Autoclave />} />
        <Route path="/src/pages/billing_system/" element={<BillingSystem />} />
        <Route path="/src/pages/cpu_fetcher/" element={<CPUFetcher />} />
        <Route path="/src/pages/diabetes_game/" element={<DiabetesGame />} />
        <Route path="/src/pages/first_website/" element={<FirstWebsite />} />
        <Route path="/src/pages/initial/" element={<Initial />} />
        <Route path="/src/pages/tier_it/" element={<TierIt />} />
        <Route path="/src/pages/tetris/" element={<Tetris />} />
        <Route path="/src/pages/sudoku_solver/" element={<SudokuSolver />} />
        <Route path="/src/pages/pbi/" element={<PowerBI />} />
        <Route path="/src/pages/mindmender_ai/" element={<MindmenderAI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
