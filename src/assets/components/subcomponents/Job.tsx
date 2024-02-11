import ColorBox from "./ColorBox";
import RectangularImage from "./RectangularImage";

interface Props {
  //for colorbox
  color: string;
  title: string;
  subtitle: string;
  children: string;
  can_rotate?: boolean; //enables/disables rotating effect
  languages?: string[]; //the paths for the language images at public/languages_and_programs

  //for image
  image: string; //from work folder
}

const Job = ({
  color,
  title,
  subtitle,
  children,
  can_rotate,
  languages,
  image,
}: Props) => {
  return (
    <div>
      <RectangularImage
        src={`/work/` + image}
        bonus_classes="rotate-[-6deg] absolute translate-y-[-30px]"
        size="small"
      />
      <ColorBox
        color={color}
        title={title}
        subtitle={subtitle}
        can_rotate={can_rotate}
        languages={languages}
        bonus_classes="lg:h-[515px] mt-20"
      >
        {children}
      </ColorBox>
    </div>
  );
};

export default Job;
