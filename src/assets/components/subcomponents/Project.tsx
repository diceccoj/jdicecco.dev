import ColorBox from "./ColorBox";
import { useState } from "react";
import RectangularImage from "./RectangularImage";

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

//returns a color box, with an image overlay that moves on click, and a button under it that leads to a new link
const Project = ({
  color,
  title,
  children,
  languages,
  url = "",
  button_text = "Learn More!",
  image,
}: Props) => {
  const [buttonState, setButtonState] = useState(false);
  return (
    <div className="mt-3">
      <div className="hover:scale-105 transition-all">
        <button onClick={() => setButtonState(!buttonState)}>
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
            <RectangularImage
              size="medium"
              src={image}
              bonus_classes={
                "absolute " +
                (!buttonState
                  ? " translate-y-[-150%]"
                  : " translate-y-[-315%] rotate-[-30deg]")
              }
            ></RectangularImage>
          </div>
        </button>
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

export default Project;
