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
import { useEffect } from "react";

function DeltaHacksXI() {
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
              <RoundImage
                src="/pages/deltahacksxi/deltahacksxi.png"
                size="medium"
              />
            </div>
            <p className="m-5 small-text-bg w-fit p-5 ">
              This page details my second Hackathon experience, this time with
              DeltaHacks. With this hackathon, my group and I were able to make
              an AI-powered security suite that will help you make your internet
              habits more secure on top of providing many services to check your
              privacy. We built this project primarily with Python and it's
              tools such as streamlit for the frontend, but we also used react
              to make our custom components.
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="About">About</Header>
        <div className="flex justify-center items-center mt-10">
          <div className="responsive-grid lg:space-x-10 space-y-10 lg:w-2/3 place-items-center">
            <RectangularImage
              src="/pages/deltahacksxi/0.png"
              size="large"
              bonus_classes="rotate-[-3deg]"
            />
            <ColorBox
              color="teal"
              title="What does it do?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
              languages={["python.png", "react.svg"]}
            >
              {[
                `NδtHacked provides many services for the user's disposal.`,
                `First, you can input your email address 
              to check if that address has been part of a data breach. If so, it will list those breaches
              out for you, along with providing a button to learn more, which uses Cohere AI to describe the data breach to 
              you.`,
                `Includes a password manager which uses Cohere to make a random password that uses key words
              rather than random letters to make it easier to remember.`,
                `Includes a tab that uses Google's list of safe
              websites to determine if a URL you received is safe.`,
                `The last
              tab will store files for you and encrypts them after upload. You
              can then take back the file and the website will decrypt it for
              you.`,
              ]}
            </ColorBox>
            <ColorBox
              color="indigo"
              title="My Accomplishments"
              subtitle="What am I proud of?"
              bonus_classes="w-[80%] h-min lg:translate-y-[-30%] translate-y-[0px]"
              can_rotate={true}
            >
              {[
                `Our initial ideas for the website was small but after a lot of
              work, we kept making ideas and added more. We made a website that
              does a million things in one and made those features of high
              quality.`,
                `A good example of this is that we all know of tools that tell you if your
              email has been pwned but we came up with the idea to use AI to
              describe the breach to you on our own, which I think made some
              points for creativity!`,
                `We also managed to inject our
              custom react components into our streamlit application, which
              though it doesn't sound impressive, with little documentation and
              incredibly outdated tools was arguably one of the hardest parts
              about the project (using streamlit in our project left us eligible
              for a prize, which is why we insisted on using it).`,
              ]}
            </ColorBox>
            <ColorBox
              color="blue"
              title="Steps Forward?"
              subtitle="Where do I improve off of this?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              There were a few bugs with the scaling of some of out custom
              buttons in the code but other than that, I think streamlit
              actively limits creativity since it is heavily sandboxed. With a
              prize behind it or not I think we're better off not using it next
              time.
            </ColorBox>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Gallery">Gallery</Header>
        <div className="flex justify-center items-center mt-20">
          <div className="responsive-grid lg:w-2/3  place-items-center gap-5">
            <ImageWithDescription
              src="/pages/deltahacksxi/1.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              The first page of NδtHacked, which gives you a quiz and ranks your
              privacy habits on a scale from 0-100
            </ImageWithDescription>

            <ImageWithDescription
              src="/pages/deltahacksxi/2.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              The data breach checker. After clicking on "Inspect Threat", you
              are given a detailed explanation of the breach thanks to Cohere
              AI.
            </ImageWithDescription>

            <ImageWithDescription
              src="/pages/deltahacksxi/3.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              A simple password generator and manager. Will use AI to generate
              memorable passwords for you.
            </ImageWithDescription>

            <ImageWithDescription
              src="/pages/deltahacksxi/4.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              A vault for you to store/encrypt files.
            </ImageWithDescription>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SkillsPanel
          skills={["Python", "React", "Cohere AI", "Teamwork", "Collaboration"]}
        />
      </RevealOnScroll>

      <ThemeSwitcher />
      <Footer />
    </>
  );
}

export default DeltaHacksXI;
