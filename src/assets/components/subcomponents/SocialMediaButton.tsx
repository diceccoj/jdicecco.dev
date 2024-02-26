//props for social media button
import RoundImage from "./RoundImage";

interface SMBProps {
  image: string; //the image file path in folder public/social_media
  url: string;
  title: string;
}

//displays a small round image and provides a link to the social media button
const SocialMediaButton = ({ image, url, title }: SMBProps) => {
  return (
    <button
      className="size-min slate-400"
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

export default SocialMediaButton;
