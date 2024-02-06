import "./App.css";
import Nav from "./assets/components/Nav";
function App() {
  return (
    <>
      <div>
        <Nav items={["Introduction", "Work", "Projects", "Skills"]}></Nav>
      </div>
    </>
  );
}

export default App;
