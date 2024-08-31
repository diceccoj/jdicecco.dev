import Footer from "../assets/components/Footer";
import Nav from "../assets/components/Nav";
import ThemeSwitcher from "../assets/components/ThemeSwitcher";
import ColorBox from "../assets/components/subcomponents/ColorBox";
import RevealOnScroll from "../assets/components/subcomponents/RevealOnScroll";
import RoundImage from "../assets/components/subcomponents/RoundImage";
import RectangularImage from "../assets/components/subcomponents/RectangularImage";
import Header from "../assets/components/subcomponents/Header";
import ImageWithDescription from "../assets/components/subcomponents/ImageWithDescription";
import SkillsPanel from "../assets/components/SkillsPanel";
import SocialMediaButton from "../assets/components/subcomponents/SocialMediaButton";
import { useEffect } from "react";

function DiabetesGame() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav items={["About", "Gallery", "Demo", "Skills", "Links"]} />
      <RevealOnScroll>
        <div className="flex justify-center items-center mt-32">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <div className=" md:justify-start justify-center">
              <RoundImage
                src="/pages/diabetes_game/diabetes_game.png"
                size="medium"
              />
            </div>
            <p className="m-5 small-text-bg w-fit p-5 ">
              Cells at War vs Diabetes is a game I made with my work experience
              at George Brown. During this experience, I was in charge of adding
              new components and UI elements to a prestablished base for a game.
              Particularily, I added the food function to the game on top of
              creating the base for the character selector. In addition, I
              designed selection menus for both.
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="About">About</Header>
        <div className="flex justify-center items-center mt-10">
          <div className="responsive-grid lg:space-x-10 space-y-10 lg:w-2/3 place-items-center">
            <RectangularImage
              src="/pages/diabetes_game/1.png"
              size="large"
              bonus_classes="rotate-[-3deg]"
            />
            <ColorBox
              color="pink"
              title="What does it do?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
              languages={["unity.png", "Csharp.png"]}
            >
              This game mimics the bloodstream of an average human. First
              representing a diabetes-free person, then a type 1, type 2, and
              adds new features to the game such as implementing exercise.
              Though the features I was responsible for are available from the
              beginning.
            </ColorBox>
            <ColorBox
              color="indigo"
              title="My Accomplishments"
              subtitle="What am I proud of?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              This was the first professional project I participated in and I am
              proud of the result. The base of the game, at first, was hard to
              maintain attention or give much sense of reward, which are
              important factors to consider when making a game for children as
              they usually want a game that is colorful, intriguing, and pops
              out. By the end, the game's main issues, that being going for long
              periods of time without any actions, now has a ton of activity and
              info to learn about while still being approachable to children.
            </ColorBox>
            <ColorBox
              color="grey"
              title="Steps Forward?"
              subtitle="Where do I improve off of this?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              There isn't much to say as I was simply a programmer in a game
              that was already pre-established, but one thing that I should've
              done more was learn how the pre-established game worked more at a
              technical level, as taking my assets and gluing them to the main
              part of the game was quite difficult and I think if I looked at
              the code a bit more, the process would have been much more smooth.
            </ColorBox>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Gallery">Gallery</Header>
        <div className="flex justify-center items-center mt-20">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <ImageWithDescription
              src="/pages/diabetes_game/2.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              The food selector in which you choose two foods of each category.
              This was my main contribution to the project
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/diabetes_game/3.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              The main game. The purple bar on the side pulls up the food panel
              where you can click each food to eat, which I implemented myself.
            </ImageWithDescription>

            <ImageWithDescription
              src="/pages/diabetes_game/4.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              The "Expert Deck", which shows the more specific details about
              diabetes.
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/diabetes_game/5.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              The Character Selector in which I was a part of making.
            </ImageWithDescription>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SkillsPanel
          skills={[
            "Unity",
            "C#",
            "User Experience",
            "Teamwork",
            "Collaborative Effort",
            "Work with designers",
            "Implemeting Assets",
            "Game Programming",
            "Browser Game",
          ]}
        />
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Links">Links</Header>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-1 lg:w-2/3  place-items-center">
            <SocialMediaButton
              title="More Info!"
              url="https://cellsatwar-documentation.vercel.app/advanced/diabetes"
              image="github.png"
            />
            <p className="font-mono font-sm mt-5">
              The game will be linked here when officially released
            </p>
          </div>
        </div>
      </RevealOnScroll>

      <ThemeSwitcher />
      <Footer />
    </>
  );
}

export default DiabetesGame;
