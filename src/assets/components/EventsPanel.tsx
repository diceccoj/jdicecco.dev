import Header from "./subcomponents/Header";
import ColorBox from "./subcomponents/ColorBox";
import RoundImage from "./subcomponents/RoundImage";

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
    <div className="grid grid-cols-2">
      <RoundImage src={image} size="small"></RoundImage>
      <ColorBox title={title} color={color}></ColorBox>
      <button
        className="my-1 text-center w-90% h-[100%] small-text-bg col-span-2"
        onClick={() => {
          window.location.href = url;
        }}
      >
        Learn More!
      </button>
    </div>
  );
};

const EventsPanel = () => {
  return (
    <>
      <Header>Events</Header>
      <div className="justify-center flex mt-10  animate-phase-in">
        <div className="responsive-grid place-items-center w-3/4 p-2">
          <div className="small-text-bg p-2">
            <p>
              These are events in which I participated involving making some
              sort of product, whether it be making a game, coding, or frontend
              development. These events have taken place in jobs, hackathons, or
              just general challenges. The first of which being my experience at
              George Brown's "Cells at War" project, in which I helped make a
              game teaching children about diabetes. The second is my group
              project for the GDSC Solutions Hackathon, where students were
              challenged to make a piece of software about a selected global
              issue, in which my group chose mental health. You can learn more
              about these projects on the side.
            </p>
          </div>
          <div className="justify-items-center lg:w-3/4 w-1/2">
            <Event
              color="indigo"
              title="Cells at War Vs. Diabetes"
              url=""
              image="/events/cells_at_war.png"
            />
            <Event
              color="pink"
              title="GDSC Solutions Hackathon"
              url=""
              image="/events/gdsc.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPanel;
