import Header from "./subcomponents/Header";
import ColorBox from "./subcomponents/ColorBox";
import RoundImage from "./subcomponents/RoundImage";
import RevealOnScroll from "./subcomponents/RevealOnScroll";

interface Props {
  //for colorbox
  color: string;
  title: string;
  url: string;
  //for image
  image: string; //from games folder
}

//an event button, consists of a round image, right beside a color box, and a div right under it
const Event = ({ color, title, url = "", image = "" }: Props) => {
  return (
    <div className="grid grid-cols-2 w-[350px]">
      <RoundImage src={image} size="small"></RoundImage>
      <ColorBox
        title={title}
        color={color}
        bonus_classes="hover:scale-105"
      ></ColorBox>
      <button
        className={
          //changes class names and content if url is blank
          "my-1 text-center w-90% h-[100%] small-text-bg col-span-2 " +
          (url == "" && "opacity-50 hover:opacity-50 ")
        }
        onClick={() => {
          window.location.href = url;
        }}
      >
        {url != "" ? "Learn More!" : "Coming Soon!"}
      </button>
    </div>
  );
};

const EventsPanel = () => {
  return (
    <RevealOnScroll>
      <Header id="Events">Events</Header>
      <div className="flex justify-center items-center mt-10">
        <p className="m-5 small-text-bg p-2 lg:w-[50%] w-[80%]">
          These are events in which I participated involving making some sort of
          product, whether it be making a game, coding, or frontend development.
          These events have taken place in jobs, hackathons, online classes
          (i.e. Udemy) or just general challenges I pursued to brighten my
          skills.
        </p>
      </div>
      <div className="justify-center items-center flex mt-10  animate-phase-in">
        <div className="responsive-grid-3 place-items-center w-3/4 p-2">
          <Event
            color="indigo"
            title="Cells at War Vs. Diabetes"
            url="/src/pages/diabetes_game/"
            image="/events/cells_at_war.png"
          />
          <Event
            color="pink"
            title="GDSC Solutions Hackathon (Finalist)"
            url="/src/pages/mindmender_ai/"
            image="/events/gdsc.png"
          />
          <Event
            color="grey"
            title="Power BI Udemy Course"
            url="/src/pages/pbi/"
            image="/events/power-bi.png"
          />
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default EventsPanel;
