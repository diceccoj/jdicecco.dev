import "./App.css";
import Nav from "./assets/components/Nav";
import ThemeSwitcher from "./assets/components/ThemeSwitcher";
import TopGraphic from "./assets/components/TopGraphic";
import JobsPanel from "./assets/components/JobsPanel";

function App() {
  return (
    <>
      <Nav items={["Introduction", "Work", "Projects", "Skills"]}></Nav>
      <TopGraphic />
      <JobsPanel />

      <ThemeSwitcher />
    </>
  );
}

export default App;
