import Header from "./subcomponents/Header";
import Project from "./subcomponents/Project";
import RevealOnScroll from "./subcomponents/RevealOnScroll";

const GamesPanel = () => {
  return (
    <RevealOnScroll>
      <Header id="Games">My Games</Header>
      <div className=" flex justify-center  mt-10">
        <div className="responsive-grid-3 lg:w-3/4 w-[90%] bg-in place-items-center">
          <Project
            color="indigo"
            title="Tier It"
            image="/games/tier_it.png"
            languages={["godot.svg", "firebase.png"]}
            url="/#/tier_it/"
          >
            An online game to play with your friends where you choose a topic,
            and rank eachother on who fits the best! Made in the Godot engine
            and used Google Firestore as the database
          </Project>

          <Project
            color="pink"
            title="Cells At War vs Diabetes"
            image="games/george_brown.png"
            languages={["unity.png", "Csharp.png"]}
            url="/#/diabetes_game/"
          >
            A game made in Unity meant to help educate children about diabetes.
            My main role was creating menus and implementing new features such
            as the ability to eat food with various different stats.
          </Project>

          <Project
            color="teal"
            title="Tetris"
            image="/games/tetris.png"
            languages={["unity.png", "Csharp.png"]}
            url="/#/tetris/"
          >
            My first unity project! A clone of the original Tetris Project with
            block ghosting, and a score counter for how many lines you cleared.
          </Project>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default GamesPanel;
