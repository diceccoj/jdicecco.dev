import "./App.css";
import Nav from "./assets/components/Nav";
import ThemeSwitcher from "./assets/components/ThemeSwitcher";
import TopGraphic from "./assets/components/TopGraphic";
import JobsPanel from "./assets/components/JobsPanel";
import GamesPanel from "./assets/components/GamesPanel";
import WebPanel from "./assets/components/WebPanel";

function App() {
  return (
    <>
      <Nav items={["Introduction", "Work", "Projects", "Skills"]}></Nav>
      <TopGraphic />
      <JobsPanel />
      <GamesPanel />
      <WebPanel />

      <ThemeSwitcher />
    </>
  );
}

export default App;
