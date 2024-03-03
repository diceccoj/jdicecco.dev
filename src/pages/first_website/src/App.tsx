import "../../../App.css";
import Footer from "../../../assets/components/Footer";
import Nav from "../../../assets/components/Nav";
import ThemeSwitcher from "../../../assets/components/ThemeSwitcher";
import ColorBox from "../../../assets/components/subcomponents/ColorBox";
import RevealOnScroll from "../../../assets/components/subcomponents/RevealOnScroll";
import RoundImage from "../../../assets/components/subcomponents/RoundImage";
import RectangularImage from "../../../assets/components/subcomponents/RectangularImage";
import Header from "../../../assets/components/subcomponents/Header";
import SkillsPanel from "../../../assets/components/SkillsPanel";
import SocialMediaButton from "../../../assets/components/subcomponents/SocialMediaButton";

function App() {
  return (
    <>
      <Nav items={["About", "Skills", "Links"]} />
      <RevealOnScroll>
        <div className="flex justify-center items-center mt-32">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <div className=" md:justify-start justify-center">
              <RoundImage
                src="/pages/first_website/first_website.png"
                size="small"
                bonus_classes="scale-[200%] hover:scale-[210%]"
              />
            </div>
            <p className="m-5 small-text-bg w-fit p-5 ">
              This was the first website I made, which I used vanilla HTML,
              Javascript and CSS. Though I have since moved to this website as
              my portfolio, I learned a lot of valuable skills which what led me
              to be able to make better projects. Plus, as time moved on I
              learned more and added more features and effects to make the
              website stand out more.
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="About">About</Header>
        <div className="flex justify-center items-center mt-10">
          <div className="responsive-grid space-x-10 space-y-10 lg:w-2/3 place-items-center">
            <RectangularImage
              src="/webs/old_website.png"
              size="large"
              bonus_classes="rotate-[-3deg]"
            />
            <ColorBox
              color="grey"
              title="What does it do?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
              languages={["HTML.png", "CSS.png", "Javascript.png"]}
            >
              Well, this is my first portfolio/website. So its pretty
              self-explanitory. But there were a few pretty neat things I made
              for this website, such as a carousel at the bottom using the A11y
              sliders library for Javascript, and making a fade-in effect that
              makes sections appear/disappear as you scroll.
            </ColorBox>
            <ColorBox
              color="pink"
              title="My Accomplishments"
              subtitle="What am I proud of?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              This is my first website and though I believe my mor modern
              projects have improved a lot, this was a big accomplishment at the
              time. Plus, there's a lot of things on that website, like the
              things I mentioned in the "What Does it Do?" section that required
              a lot of effort, and made the website look very pretty as a
              result.
            </ColorBox>
            <ColorBox
              color="purple"
              title="Steps Forward?"
              subtitle="Where do I improve off of this?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              Being my first website, the project's code can be very messy once
              in a while, making it hard to follow along and less optimized than
              it could've been polished. Unfortunately (or fortunately), I
              decided to rehaul the website entirely using React to make a
              cleaner, more efficient website, which is the website you're
              looking at right now.
            </ColorBox>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SkillsPanel
          skills={[
            "HTML",
            "CSS",
            "Javascript",
            "Creativity",
            "Visual Effects",
            "Working with Libraries",
          ]}
        />
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Links">Links</Header>
        <div className="flex justify-center items-center ">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <SocialMediaButton
              title="Source Code"
              url="https://github.com/diceccoj/vite-website"
              image="github.png"
            />
            <SocialMediaButton
              title="View Page"
              url="https://diceccoj.github.io/vite-website/"
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

export default App;
