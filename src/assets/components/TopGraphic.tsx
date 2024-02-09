import RoundImage from "./RoundImage";

//props for social media button
interface SMBProps {
  image: string; //the image file path in folder public/social_media
  url: string;
  title: string;
}

//displays a small round image and provides a link to the social media button
const SocialMediaButton = ({ image, url, title }: SMBProps) => {
  return (
    <button
      className="size-min slate-400 opacity-95 hover:opacity-100"
      onClick={() => {
        window.location.href = url;
      }}
    >
      <RoundImage size="small" src={`/social_media/${image}`} />
      <div className="flex justify-center translate-y-[-30%]">
        <p className="small-text-bg text-sm text-center w-2/3 ">{title}</p>
      </div>
    </button>
  );
};

//the top graphic of the website
const TopGraphic = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-32">
        <div className="responsive-grid items-center lg:w-2/3  place-items-center">
          <div className=" md:justify-start justify-center">
            <RoundImage src="/portrait.png" size="medium" />
          </div>
          <p className="m-5 small-text-bg w-fit p-5 ">
            Hi! My name is Jonathan DiCecco. I am a second year Computer Science
            Student at McMaster University. My favourite thing about CS is the
            ability to make something new. Some neat idea for a game or program
            caught your eye? Just make it! My favourite aspects of coding
            specifically are gaming and frontend development.
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
    </>
  );
};

export default TopGraphic;
