import Footer from "../assets/components/Footer";
import Nav from "../assets/components/Nav";
import ThemeSwitcher from "../assets/components/ThemeSwitcher";
import ColorBox from "../assets/components/subcomponents/ColorBox";
import RevealOnScroll from "../assets/components/subcomponents/RevealOnScroll";
import RoundImage from "../assets/components/subcomponents/RoundImage";
import Header from "../assets/components/subcomponents/Header";
import Video from "../assets/components/subcomponents/Video";
import SocialMediaButton from "../assets/components/subcomponents/SocialMediaButton";
function SudokuSolver() {
  return (
    <>
      <Nav items={["About", "Demo", "Links"]} />
      <RevealOnScroll>
        <div className="flex justify-center items-center mt-32">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <div className=" md:justify-start justify-center">
              <RoundImage src="/pages/sudoku_solver/sudoku.png" size="medium" />
            </div>
            <p className="m-5 small-text-bg w-fit p-5 ">
              This is a Sudoku Solver written in Python. To be honest, this is
              pretty self-explanitory.
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="About">About</Header>
        <div className="flex justify-center items-center mt-10">
          <div className="grid grid-cols-1 space-x-10 space-y-10 lg:w-2/3 place-items-center">
            <ColorBox
              color="pink"
              title="What does it do?"
              bonus_classes="w-[65%] h-min"
              can_rotate={true}
              languages={["python.png"]}
            >
              The program takes a pre-determined sudoku table (9x9), analyzes
              every row, column, and sub-grid and fills each spot with a unique
              number.
            </ColorBox>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <Header id="Demo">Demo</Header>
        <div className="flex justify-center items-center mt-12">
          <Video src="/pages/sudoku_solver/sudoku.mp4" />
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Links">Links</Header>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-1 lg:w-2/3  place-items-center">
            <SocialMediaButton
              title="Source Code"
              url="https://github.com/diceccoj/Sudoku-Solver"
              image="github.png"
            />
          </div>
        </div>
      </RevealOnScroll>

      <ThemeSwitcher />
      <Footer />
    </>
  );
}

export default SudokuSolver;
