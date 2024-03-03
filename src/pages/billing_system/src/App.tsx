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
                src="/pages/billing_system/bill.png"
                size="small"
                bonus_classes="scale-[200%] hover:scale-[210%]"
              />
            </div>
            <p className="m-5 small-text-bg w-fit p-5 ">
              This is a small billing system that I made using C. The program
              takes your order, finds the total cost, and displays the receipt
              for the user.
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
              languages={["C.png", "bash.png"]}
            >
              I made a program that takes the user's order, finds the total cost
              of the order, and prints a receipt for the user in an
              easy-to-read, pretty manner, using C's incredible text formatting
              options.
            </ColorBox>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <Header id="Demo">Demo</Header>
        <div className="flex justify-center items-center mt-12">
          <Video src="/pages/billing_system/billing_video.mp4" />
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Links">Links</Header>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-1 lg:w-2/3  place-items-center">
            <SocialMediaButton
              title="Source Code"
              url="https://github.com/diceccoj/Billing-System"
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
