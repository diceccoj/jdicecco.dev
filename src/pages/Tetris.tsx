import Footer from "../assets/components/Footer";
import Nav from "../assets/components/Nav";
import ThemeSwitcher from "../assets/components/ThemeSwitcher";
import ColorBox from "../assets/components/subcomponents/ColorBox";
import RevealOnScroll from "../assets/components/subcomponents/RevealOnScroll";
import RoundImage from "../assets/components/subcomponents/RoundImage";
import RectangularImage from "../assets/components/subcomponents/RectangularImage";
import Header from "../assets/components/subcomponents/Header";
import Video from "../assets/components/subcomponents/Video";
import SkillsPanel from "../assets/components/SkillsPanel";
import SocialMediaButton from "../assets/components/subcomponents/SocialMediaButton";
import { useEffect } from "react";

function Tetris() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav items={["About", "Demo", "Skills", "Links"]} />
      <RevealOnScroll>
        <div className="flex justify-center items-center mt-32">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <div className=" md:justify-start justify-center">
              <RoundImage src="/pages/tetris/tetris.png" size="medium" />
            </div>
            <p className="m-5 small-text-bg w-fit p-5 ">
              My first game that I made as a side project was a small recreation
              of Tetris. The concept is pretty simple, place blocks at the
              bottom, if you fill a horizontal line, you clear the line, and you
              have to try to go as long as possible without reaching the top.
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="About">About</Header>
        <div className="flex justify-center items-center mt-10">
          <div className="responsive-grid lg:space-x-10 space-y-10 lg:w-2/3 place-items-center">
            <RectangularImage
              src="/pages/tetris/1.png"
              size="large"
              bonus_classes="rotate-[-3deg]"
            />
            <ColorBox
              color="purple"
              title="What does it do?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
              languages={["unity.png", "Csharp.png"]}
            >
              This is a basic Tetris game with all the basic features. You get
              1000 points for each line cleared, and you get a gameover when you
              reach the top. You can rotate and move blocks, in addition to
              fastfalling. I also implemented ghost blocks at the lowest
              possible point to show you where the block will land.
            </ColorBox>
            <ColorBox
              color="grey"
              title="My Accomplishments"
              subtitle="What am I proud of?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              Tetris was my first game a programmed and though I've accomplished
              much more since then, I learned a lot of valuable things. There
              was a lot of complicated logic such as how to rotate blocks, as
              each shape consists of 4 individual block elements that are
              repositioned, and how to predict where the block will fall with
              the ghost shapes.
            </ColorBox>
            <ColorBox
              color="pink"
              title="Steps Forward?"
              subtitle="Where do I improve off of this?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              This was my first experience with Unity and though I'm proud of
              what I accomplished, there was some missing features such as
              animations, sound, good use of fonts and button assets. Plus I
              believe I can add more features found in other Tetris games like
              modes with endgoals.
            </ColorBox>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <Header id="Demo">Demo</Header>
        <div className="flex justify-center items-center mt-12">
          <Video src="/pages/tetris/tetris.mp4" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SkillsPanel skills={["Unity", "C#", "Algebra"]} />
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Links">Links</Header>
        <div className="flex justify-center items-center ">
          <SocialMediaButton
            title="Source Code"
            url="https://github.com/diceccoj/tetris_unity"
            image="github.png"
          />
        </div>
      </RevealOnScroll>

      <ThemeSwitcher />
      <Footer />
    </>
  );
}

export default Tetris;
