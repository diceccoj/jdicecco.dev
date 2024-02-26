import SocialMediaButton from "./subcomponents/SocialMediaButton";
import RevealOnScroll from "./subcomponents/RevealOnScroll";
import RoundImage from "./subcomponents/RoundImage";
//the top graphic of the website
const TopGraphic = () => {
  return (
    <RevealOnScroll>
      <div className="flex justify-center items-center mt-32">
        <div className="responsive-grid lg:w-2/3  place-items-center">
          <div className=" md:justify-start justify-center">
            <RoundImage src="/portrait.png" size="medium" />
          </div>
          <p className="m-5 small-text-bg w-fit p-5 ">
            Hi! My name is Jonathan DiCecco. I am a second year Computer Science
            Student at McMaster University. My favourite thing about CS is the
            ability to make something new. I like being able to come up with an
            interesting idea for a game, website or program. If no one else made
            it, then why not try to make it yourself? Below you'll find some
            examples of that.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-10 ">
        <div className="responsive-grid-3 place-items-center w-1/2">
          <SocialMediaButton
            title="Github Page"
            url="https://github.com/diceccoj"
            image="github.png"
          />
          <SocialMediaButton
            title="Linkedin"
            url="https://www.linkedin.com/in/jonathan-dicecco-b9529a234/"
            image="linkedin.png"
          />
          <SocialMediaButton
            title="Resume"
            url="/resume.pdf"
            image="resume.png"
          />
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default TopGraphic;
