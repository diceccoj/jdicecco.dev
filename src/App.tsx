import { HashRouter, Routes, Route } from "react-router-dom";
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
import MindmenderAI from "./pages/MindMenderAI";
import PythonML from "./pages/PythonML";
import ArtPortfolio from "./pages/ArtPortfolio";
import DeltaHacksXI from "./pages/DeltaHacksXI";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autoclave_arm/" element={<Autoclave />} />
        <Route path="/billing_system/" element={<BillingSystem />} />
        <Route path="/cpu_fetcher/" element={<CPUFetcher />} />
        <Route path="/diabetes_game/" element={<DiabetesGame />} />
        <Route path="/first_website/" element={<FirstWebsite />} />
        <Route path="/initial/" element={<Initial />} />
        <Route path="/tier_it/" element={<TierIt />} />
        <Route path="/tetris/" element={<Tetris />} />
        <Route path="/sudoku_solver/" element={<SudokuSolver />} />
        <Route path="/pbi/" element={<PowerBI />} />
        <Route path="/mindmender_ai/" element={<MindmenderAI />} />
        <Route path="/python_ml/" element={<PythonML />} />
        <Route path="/art_portfolio/" element={<ArtPortfolio />} />
        <Route path="/deltahacksxi/" element={<DeltaHacksXI />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
