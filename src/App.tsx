import "./App.css";
import Nav from "./assets/components/Nav";
import ThemeSwitcher from "./assets/components/ThemeSwitcher";
import TopGraphic from "./assets/components/TopGraphic";
function App() {
  return (
    <>
      <Nav items={["Introduction", "Work", "Projects", "Skills"]}></Nav>
      <TopGraphic />

      <ThemeSwitcher />
    </>
  );
}

export default App;
