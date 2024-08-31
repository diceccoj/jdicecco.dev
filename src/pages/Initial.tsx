import Footer from "../assets/components/Footer";
import Nav from "../assets/components/Nav";
import ThemeSwitcher from "../assets/components/ThemeSwitcher";
import ColorBox from "../assets/components/subcomponents/ColorBox";
import RevealOnScroll from "../assets/components/subcomponents/RevealOnScroll";
import RoundImage from "../assets/components/subcomponents/RoundImage";
import Header from "../assets/components/subcomponents/Header";
import ImageWithDescription from "../assets/components/subcomponents/ImageWithDescription";
import SkillsPanel from "../assets/components/SkillsPanel";
import SocialMediaButton from "../assets/components/subcomponents/SocialMediaButton";
import { useEffect } from "react";

function Initial() {
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
              <RoundImage src="/pages/initial/initial.png" size="medium" />
            </div>
            <p className="m-5 small-text-bg w-fit p-5 ">
              Initial is a startpage I made to use on your browser. I found that
              each extension or website I found was missing something or had
              something that bothered me, so after I made my first website, I
              decided to use what I learned to make a startpage myself
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="About">About</Header>
        <div className="flex justify-center items-center mt-10">
          <div className="responsive-grid lg:space-x-10 space-y-10 lg:w-2/3 place-items-center">
            <ColorBox
              color="pink"
              title="What does it do?"
              bonus_classes="w-[80%] h-min lg:col-span-2 lg:translate-x-0 col-span-1 translate-x-5"
              can_rotate={true}
              languages={["HTML.png", "CSS.png", "Javascript.png"]}
            >
              Initial is a simple startpage that I plan on expanding more as I
              have more time. Right now, it has 3 different widgets, which tell
              the time, check the weather, and provide hyperlinks to your
              favourite social media sites. You can change the widget
              orientation, the widget color (which saves on browser reset), the
              background theme using Unsplash API, and the weather location with
              OpenWeather API.
            </ColorBox>
            <ColorBox
              color="indigo"
              title="My Accomplishments"
              subtitle="What am I proud of?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              This was the first time I delved heavily into Javascript, as
              before I primarily stuck to CSS. Whether it be adding the light
              and dark mode toggle, disappearing divs off of a button click, or
              implementing APIs, this project felt a lot more focused towards
              Javascript, which I really liked and value the things I learned. I
              made a website before, but I followed a template and made mistakes
              at the sacrifice of code cleanliness. This project feels a lot
              more personal as I wanted to make something to do in my everyday
              life.
            </ColorBox>
            <ColorBox
              color="grey"
              title="Steps Forward?"
              subtitle="Where do I improve off of this?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              I want to add more features, such as uploading your own photos for
              the background, more complicated widget placement, and changing
              the widget color to whatever the user wants. Also, after I learned
              React the website you're looking at now, I feel like Initial is
              worth rebuilding in React + Tailwind considering how smooth
              building this website went.
            </ColorBox>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Gallery">Gallery</Header>
        <div className="flex justify-center items-center mt-20">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <ImageWithDescription
              src="/pages/initial/1.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              Initial in dark mode using the center orientation.
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/initial/2.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              Initial in the light mode with a Hawaii background theme and a
              left orientation.
            </ImageWithDescription>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SkillsPanel
          skills={[
            "HTML",
            "Javascript",
            "CSS",
            "Unsplash API",
            "OpenWeather API",
            "Originality & Creativity",
          ]}
        />
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Links">Links</Header>
        <div className="flex justify-center items-center ">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <SocialMediaButton
              title="Source Code"
              url="https://github.com/diceccoj/initial"
              image="github.png"
            />
            <SocialMediaButton
              title="Check It Out!"
              url="https://diceccoj.github.io/initial/"
              image="website.png"
            />
          </div>
        </div>
      </RevealOnScroll>

      <ThemeSwitcher />
      <Footer />
    </>
  );
}

export default Initial;
