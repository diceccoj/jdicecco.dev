import "../../../App.css";
import Footer from "../../../assets/components/Footer";
import Nav from "../../../assets/components/Nav";
import ThemeSwitcher from "../../../assets/components/ThemeSwitcher";
//import ColorBox from "../../../assets/components/subcomponents/ColorBox";
//import RevealOnScroll from "../../../assets/components/subcomponents/RevealOnScroll";

function App() {
  return (
    <>
      <Nav items={[]}></Nav>

      <ThemeSwitcher />
      <Footer />
    </>
  );
}

export default App;
