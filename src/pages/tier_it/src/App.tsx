import "../../../App.css";
import Footer from "../../../assets/components/Footer";
import Nav from "../../../assets/components/Nav";
import ThemeSwitcher from "../../../assets/components/ThemeSwitcher";
import ColorBox from "../../../assets/components/subcomponents/ColorBox";
import RevealOnScroll from "../../../assets/components/subcomponents/RevealOnScroll";
import RoundImage from "../../../assets/components/subcomponents/RoundImage";
import RectangularImage from "../../../assets/components/subcomponents/RectangularImage";
import Header from "../../../assets/components/subcomponents/Header";
import ImageWithDescription from "../../../assets/components/subcomponents/ImageWithDescription";
import Video from "../../../assets/components/subcomponents/Video";
import SkillsPanel from "../../../assets/components/SkillsPanel";
import SocialMediaButton from "../../../assets/components/subcomponents/SocialMediaButton";

function App() {
  return (
    <>
      <Nav items={["About", "Gallery", "Demo", "Skills", "Links"]} />
      <RevealOnScroll>
        <div className="flex justify-center items-center mt-32">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <div className=" md:justify-start justify-center">
              <RoundImage src="/pages/tier_it/tier_it.png" size="medium" />
            </div>
            <p className="m-5 small-text-bg w-fit p-5 ">
              Tier it is my first original game made by myself. It takes the
              concept of a tier list, a way of categorizing certain things in a
              topic from best to worst, and turns it into a fun game to play
              with your friends. Though I certainly have my fun with this game,
              there is a lot that goes on under the surface to make this game
              work
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="About">About</Header>
        <div className="flex justify-center items-center mt-10">
          <div className="responsive-grid space-x-10 space-y-10 lg:w-2/3 place-items-center">
            <RectangularImage
              src="/pages/tier_it/Title.png"
              size="large"
              bonus_classes="rotate-[-3deg]"
            />
            <ColorBox
              color="pink"
              title="What does it do?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
              languages={["godot.svg", "firebase.png"]}
            >
              Tier it uses Godot as the game engine along with Firebase as the
              online database to create a fully-fledged online experience!
              Players can make a group (called a room in this game), choose a
              category, and rank eachother! There's also many features for group
              management such as an admin and player management system.
            </ColorBox>
            <ColorBox
              color="indigo"
              title="My Accomplishments"
              subtitle="What am I proud of?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              Tier it was my first major project for video games where I wasn't
              contracted. Every asset, other than a few royalty free ones such
              as music and backgrounds was made by me. I loved programming in
              Godot as it opened my eyes to a new game engine and let me apply
              my knowledge from other platforms such as Unity and apply it to
              something new. It wasn't easy, as Godot is still pretty niche and
              thus didn't have the best tools to work with Firebase, but I
              pushed through and made a beautiful end product that is both
              reliable and fairly efficient.
            </ColorBox>
            <ColorBox
              color="grey"
              title="Steps Forward?"
              subtitle="Where do I improve off of this?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              Like I mentioned before, Tier It uses Godot, which uses its own
              scripting language (GDScript). It was great and consise but it did
              not have the best tools to use Firebase with. However, I now know
              that Godot allows users to use C# and GDScript in the same
              project. C# obviously has much better Firebase tools, so I don't
              think it would be too hard to implement better database management
              code while leaving the rest of the game alone. I also want to add
              other features to the game, such as allowing players to rank
              objects rather than people. For example, let's say you add a "best
              fruit" category, and have each player in your room to rank various
              fruit.
            </ColorBox>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Gallery">Gallery</Header>
        <div className="flex justify-center items-center mt-20">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <ImageWithDescription
              src="/pages/tier_it/1.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              This is where you create a room. You give the room a unique name
              and a code to keep the room exclusive to mutual friends
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/tier_it/2.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              The main menu after you log in. You can go to active lists (lists
              in mid-ranking), inactive lists (already completed), or you can
              change your avatar.
            </ImageWithDescription>

            <ImageWithDescription
              src="/pages/tier_it/3.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              The active lists section, you can either vote on a list or view
              the rankings.
            </ImageWithDescription>

            <ImageWithDescription
              src="/pages/tier_it/4.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              The ranking screen. You rank everyone from best to worst.
            </ImageWithDescription>

            <ImageWithDescription
              src="/pages/tier_it/5.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              The main menu after you log in. You can go to active lists (lists
              in mid-ranking), inactive lists (already completed), or you can
              change your avatar.
            </ImageWithDescription>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <Header id="Demo">Demo</Header>
        <div className="flex justify-center items-center mt-12">
          <Video src="/pages/tier_it/video.mp4" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SkillsPanel
          skills={[
            "Godot",
            "Firebase",
            "Firestore",
            "Log In System",
            "Information Storing",
            "Photoshop",
            "JSON Dictionaries",
            "User Management",
          ]}
        />
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Links">Links</Header>
        <div className="flex justify-center items-center mt-20">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <SocialMediaButton
              title="Source Code"
              url="https://github.com/diceccoj/tier-it"
              image="github.png"
            />
            <SocialMediaButton
              title="Download"
              url="https://github.com/diceccoj/tier-it/releases"
              image="download.png"
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
