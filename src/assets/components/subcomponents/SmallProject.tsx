import ColorBox from "./ColorBox";
import RoundImage from "./RoundImage";
interface Props {
  //for colorbox
  color: string;
  title: string;
  children: string;
  languages?: string[]; //the paths for the language images at public/languages_and_programs
  url?: string;
  button_text?: string; //custom button text. returns "Learn More!" if nothing is given
  //for image
  image: string; //from games folder
}

const SmallProject = ({
  color,
  title,
  children,
  languages,
  url = "",
  button_text = "Learn More!",
  image,
}: Props) => {
  return (
    <div className="mt-3">
      <div className="hover:scale-105 transition-all">
        <ColorBox
          color={color}
          title={title}
          languages={languages}
          can_rotate={false}
          bonus_classes="h-[21.5rem]"
          text_box_classes="h-[45%]"
        >
          {children}
        </ColorBox>

        <div className="flex justify-center">
          <RoundImage size="medium" src={image}></RoundImage>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="my-1 text-center w-90% small-text-bg"
          onClick={() => {
            window.location.href = url;
          }}
        >
          {button_text}
        </button>
      </div>
    </div>
  );
};

export default SmallProject;
