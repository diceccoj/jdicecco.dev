import "../../../App.css";
import Footer from "../../../assets/components/Footer";
import Nav from "../../../assets/components/Nav";
import ThemeSwitcher from "../../../assets/components/ThemeSwitcher";
import ColorBox from "../../../assets/components/subcomponents/ColorBox";
import RevealOnScroll from "../../../assets/components/subcomponents/RevealOnScroll";
import RoundImage from "../../../assets/components/subcomponents/RoundImage";
import Header from "../../../assets/components/subcomponents/Header";
import Video from "../../../assets/components/subcomponents/Video";
import SocialMediaButton from "../../../assets/components/subcomponents/SocialMediaButton";
function App() {
  return (
    <>
      <Nav items={["About", "Demo", "Links"]} />
      <RevealOnScroll>
        <div className="flex justify-center items-center mt-32">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <div className=" md:justify-start justify-center">
              <RoundImage
                src="/pages/autoclave_arm/autoclave.png"
                size="medium"
              />
            </div>
            <p className="m-5 small-text-bg w-fit p-5 ">
              This was a project I did in class where I used a Raspberry Pi to
              program an autoclave arm two dispense surgery tools into
              sanitization chambers (simulated due to COVID restrictions). It
              uses two muscle sensors to move the sensor around. The program was
              made in Python.
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
              The two muscle sensors control the arms ability to grab, release,
              and activate chamber doors. The path of the autoclave arm was
              predetermined by the randomly-spawning case and the rest of the
              functionality is done by the hypothetical person on the other end.
            </ColorBox>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <Header id="Demo">Demo</Header>
        <div className="flex justify-center items-center mt-12">
          <Video src="/pages/autoclave_arm/arm_video.mp4" />
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Links">Links</Header>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-1 lg:w-2/3  place-items-center">
            <SocialMediaButton
              title="Source Code"
              url="https://github.com/diceccoj/Raspberry-Pi-Autoclave-Arm"
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

export default App;
