import Footer from "../assets/components/Footer";
import Nav from "../assets/components/Nav";
import ThemeSwitcher from "../assets/components/ThemeSwitcher";
import ColorBox from "../assets/components/subcomponents/ColorBox";
import RevealOnScroll from "../assets/components/subcomponents/RevealOnScroll";
import RoundImage from "../assets/components/subcomponents/RoundImage";
import Header from "../assets/components/subcomponents/Header";
import Video from "../assets/components/subcomponents/Video";
import SocialMediaButton from "../assets/components/subcomponents/SocialMediaButton";
import { useEffect } from "react";

function CPUFetcher() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav items={["About", "Demo", "Links"]} />
      <RevealOnScroll>
        <div className="flex justify-center items-center mt-32">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <div className=" md:justify-start justify-center">
              <RoundImage
                src="/pages/cpu_fetcher/cpu.png"
                size="small"
                bonus_classes="scale-[200%] hover:scale-[210%]"
              />
            </div>
            <p className="m-5 lg:mt-5 mt-20 small-text-bg w-fit p-5 ">
              This was a small project I made using bash script and C to
              communicate with eachother, to grab information about the CPU for
              the user, depending on their input.
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="About">About</Header>
        <div className="flex justify-center items-center mt-10">
          <div className="grid grid-cols-1 lg:space-x-10 space-y-10 lg:w-2/3 place-items-center">
            <ColorBox
              color="pink"
              title="What does it do?"
              bonus_classes="w-[65%] h-min"
              can_rotate={true}
              languages={["C.png"]}
            >
              The program uses bash initially to ask the user for what
              information they want from the command "head /proc/cpuinfo" in
              Linux's bash. Then it triggers a C file that decides what part of
              the CPU the user wants. Then sends the information back to the
              bash script, which will print the corresponding line of the
              command output, stored in a text file, and then removed after the
              program closes.
            </ColorBox>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <Header id="Demo">Demo</Header>
        <div className="flex justify-center items-center mt-12">
          <Video src="/pages/cpu_fetcher/cpufetch.mp4" />
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Links">Links</Header>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-1 lg:w-2/3  place-items-center">
            <SocialMediaButton
              title="Source Code"
              url="https://github.com/diceccoj/cpu_info_fetch"
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

export default CPUFetcher;
