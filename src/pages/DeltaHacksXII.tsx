import Footer from "../assets/components/Footer";
import Nav from "../assets/components/Nav";
import ThemeSwitcher from "../assets/components/ThemeSwitcher";
import ColorBox from "../assets/components/subcomponents/ColorBox";
import RevealOnScroll from "../assets/components/subcomponents/RevealOnScroll";
import RoundImage from "../assets/components/subcomponents/RoundImage";
import Header from "../assets/components/subcomponents/Header";
import SkillsPanel from "../assets/components/SkillsPanel";
import { useEffect } from "react";
import Video from "../assets/components/subcomponents/Video";
import SocialMediaButton from "../assets/components/subcomponents/SocialMediaButton";

function DeltaHacksXII() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav items={["About", "Gallery", "Skills", "Links"]} />
      <RevealOnScroll>
        <div className="flex justify-center items-center mt-32">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <div className=" md:justify-start justify-center">
              <RoundImage src="/events/deltahacksxii.png" size="medium" />
            </div>
            <p className="m-5 small-text-bg w-fit p-5 ">
              This page details my third Hackathon experience, this time with DeltaHacks. I worked with a group of four
              to create a game within 24h which has two players face off to deploy troops to attack the other player's
              tower. But in order to place troops, you have to do a certain exercise!
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="About">About</Header>
        <div className="flex justify-center items-center mt-10">
          <div className="responsive-grid lg:space-x-10 space-y-10 lg:w-2/3 place-items-center grid-rw">
            <ColorBox
              color="indigo"
              title="My Accomplishments"
              subtitle="What am I proud of?"
              bonus_classes="w-[80%] h-min lg:translate-y-[-30%] translate-y-[0px]"
              can_rotate={true}
            >
              {[
                `Our group was able to successfully make this game within a 24 hour period`,
                `We were able to use the results of the Mediapipe API, and detect when a user is performing an exercise.`,
                `We used a UDP server to make a "bridge" between Python and GDScript to make effective cross-language scripting`,
              ]}
            </ColorBox>
            <ColorBox
              color="pink"
              title="What does it do?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
              languages={["python.png", "godot.svg"]}
            >
              {[
                `Two towers are placed on opposite sides of the field`,
                `Users must place a troop by exercising in order to take down the other player's tower`,
                `Certain exercises are mapped to specific troops`,
                `Uses Google's Mediapipe API to mount an LLM to detect body movement.`,
              ]}
            </ColorBox>
            <ColorBox
              color="blue"
              title="Steps Forward?"
              subtitle="Where do I improve off of this?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              With the strict time limit, there were a few bug fixes and quality-of-life improvements that could not be
              implemented in time. Such as being able to detect both players with one camera, or fleshing out some troop
              animations, something that the group aims to fix in the future.
            </ColorBox>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Demo">Demo</Header>
        <div className="flex justify-center items-center mt-12">
          <Video src="/pages/deltahacksxii/video.mov" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SkillsPanel skills={["Python", "Godot", "Mediapipe", "Cross-Language Scripting", "Artificial Intelligence"]} />
      </RevealOnScroll>

      <RevealOnScroll>
        <Header id="Links">Links</Header>
        <div className="flex justify-center items-center ">
          <SocialMediaButton title="Source Code" url="https://github.com/diceccoj/deltahacks-12" image="github.png" />
        </div>
      </RevealOnScroll>

      <ThemeSwitcher />
      <Footer />
    </>
  );
}

export default DeltaHacksXII;
