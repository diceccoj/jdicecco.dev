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
import SkillsPanel from "../../../assets/components/SkillsPanel";

function App() {
  return (
    <>
      <Nav items={["About", "Gallery", "Skills", "Links"]} />
      <RevealOnScroll>
        <div className="flex justify-center items-center mt-32">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <div className=" md:justify-start justify-center">
              <RoundImage src="/pages/mindmender_ai/gdsc.png" size="medium" />
            </div>
            <p className="m-5 small-text-bg w-fit p-5 ">
              This page goes over my first experience at a Hackathon, in which
              my group placed as finalists in our category, which was to use
              some of Google's technologies to make an app that supports those
              with mental health needs. This was certainly an interesting
              experience as we had to make such a complicated project in a short
              amount of time. Nonetheless, I am proud of what our group made,
              which we call MindMenderAI!
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="About">About</Header>
        <div className="flex justify-center items-center mt-10">
          <div className="responsive-grid space-x-10 space-y-10 lg:w-2/3 place-items-center">
            <RectangularImage
              src="/pages/mindmender_ai/1.png"
              size="large"
              bonus_classes="rotate-[-3deg]"
            />
            <ColorBox
              color="indigo"
              title="What does it do?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
              languages={["python.png", "firebase.png", "openai.png"]}
            >
              MindMenderAI uses ChatGPT as a temporary mental health support
              system. Using the API, we were able to configure ChatGPT to answer
              questions specifically about Mental Health issues and forward it
              to our frontend website. With our configurations, we were able to
              have ChatGPT respond to the user's issues in a calm manner,
              recommend nearby places to rewind (sorted based on rating) by
              communicating with Google Maps, and using Google Firebase to set
              up an account for the bot, with the plan to have Google Firebase
              store the chat logs per account, but unfortunately we ran out of
              time. Of course, one of the big issues of this bot would be people
              seeing this bot as a replacement to real life services, so we had
              the bot frequently suggest seeking professional help for serious
              situations.
            </ColorBox>
            <ColorBox
              color="grey"
              title="My Accomplishments"
              subtitle="What am I proud of?"
              bonus_classes="w-[80%] h-min lg:translate-y-[-30%] translate-y-[0px]"
              can_rotate={true}
            >
              This was a massive project for a day and a half, and I can safely
              say that my group killed it! We were able to make this chatbot
              work with the Python library we used for the frontend very
              smoothly. With ChatGPT's, Google Map's, and Firebase's API, we
              were able to combine multiple services together to create a
              project that could help those in need. In addition to this, my
              group was able to communicate effectively, split up work, and
              combine our efforts to make a fully-working product.
            </ColorBox>
            <ColorBox
              color="pink"
              title="Steps Forward?"
              subtitle="Where do I improve off of this?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              Simply put, I think this website would've been much better if we
              had more time. For one, our options were limited in what to use
              for our frontend as we only had about aa day and a half. We used
              Streamlit, which though it made setting up frontend very fast, it
              did not allow us to do much more other than communicate with Chat
              GPT and log in to Firebase. Which was a problem as we wanted to
              add a chat history with the bot. If we had more time, using a
              different frontend framework, such as React ir maybe Angular,
              would give us significantly more flexibility and allow us to
              pursue the idea to its full potential.
            </ColorBox>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Gallery">Gallery</Header>
        <div className="flex justify-center items-center mt-20">
          <div className="responsive-grid lg:w-2/3  place-items-center gap-5">
            <ImageWithDescription
              src="/pages/mindmender_ai/2.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              This is the login section which asks you to register, log in, or
              create a new password if you forgot it.
            </ImageWithDescription>

            <ImageWithDescription
              src="/pages/mindmender_ai/3.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              The main menu after you log in. You can either sign out or delete
              your account.
            </ImageWithDescription>

            <ImageWithDescription
              src="/pages/mindmender_ai/4.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              A simple chat with MindMenderAI, where it asks you to unwind
              somewhere before suggesting places via Google Maps.
            </ImageWithDescription>

            <ImageWithDescription
              src="/pages/mindmender_ai/5.jpeg"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              Us working hard (unfortunately I'm facing away from the camera)
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/mindmender_ai/6.jpeg"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              My team's badges for the event. My team was hard at work for the
              whole event and I highly recommend you look at their portfolios.
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/mindmender_ai/7.jpeg"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              The event announcing us as a runner up! I'm proud at how far my
              team has come.
            </ImageWithDescription>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SkillsPanel
          skills={[
            "Python",
            "Firebase",
            "Firestore",
            "Log In System",
            "Streamlit",
            "Open AI API",
            "Teamwork",
            "Collaboration",
          ]}
        />
      </RevealOnScroll>

      <ThemeSwitcher />
      <Footer />
    </>
  );
}

export default App;
