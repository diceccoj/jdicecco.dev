import Header from "./subcomponents/Header";
import ColorBox from "./subcomponents/ColorBox";
import RoundImage from "./subcomponents/RoundImage";
import RevealOnScroll from "./subcomponents/RevealOnScroll";

interface Props {
  //for colorbox
  color: string;
  title: string;
  subtitle?: string;
  children: string;
  languages?: string[]; //the paths for the language images at public/languages_and_programs
  url: string;

  //for image
  image: string; //from work folder
}

const OtherProject = ({
  color,
  title,
  subtitle,
  children,
  languages,
  image,
  url,
}: Props) => {
  return (
    <div className="mt-20">
      <RoundImage
        src={`/projects/` + image}
        bonus_classes="rotate-[-6deg] absolute lg:translate-y-[-55px] translate-y-[-55px]"
        size="small"
      />
      <ColorBox
        color={color}
        title={title}
        subtitle={subtitle}
        can_rotate={true}
        languages={languages}
        bonus_classes="lg:h-[300px] mt-20 w-[250px] pt-5"
        text_box_classes="h-[35%]"
      >
        {children}
      </ColorBox>
      <button
        className="my-1 text-center w-90% small-text-bg w-[260px]"
        onClick={() => {
          window.location.href = url;
        }}
      >
        Learn More!
      </button>
    </div>
  );
};
const OtherProjectsPanel = () => {
  return (
    <RevealOnScroll>
      <Header id="Other Projects">Other Projects</Header>

      <div className="flex justify-center">
        <div className="responsive-grid-4 bg-in  place-items-center">
          <OtherProject
            color="pink"
            title="Autoclave Arm"
            languages={["python.png"]}
            image="autoclave.png"
            url="/#/autoclave_arm/"
          >
            A python script run in a Raspberry Pi, controlling a simulated
            autoclave arm, controlled using two muscle sensors.
          </OtherProject>
          <OtherProject
            color="purple"
            title="Sudoku Solver"
            languages={["python.png"]}
            image="sudoku.png"
            url="/#/sudoku_solver/"
          >
            A small project in Python which when given a sudoku board, will
            solve it for you!
          </OtherProject>
          <OtherProject
            color="grey"
            title="Billing System"
            languages={["C.png"]}
            image="bill.png"
            url="/#/billing_system/"
          >
            A billing system for "Jonathan's Cafe" written in C. Takes an amount
            of items and charges accordingly.
          </OtherProject>
          <OtherProject
            color="indigo"
            title="CPU Info Checker"
            languages={["bash.png", "C.png"]}
            image="cpu.png"
            url="/#/cpu_fetcher/"
          >
            A bash script that takes user input of what they want of the cpu,
            and returns the corresponding information.
          </OtherProject>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default OtherProjectsPanel;
