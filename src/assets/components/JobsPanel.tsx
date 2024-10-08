import Header from "./subcomponents/Header";
import ColorBox from "./subcomponents/ColorBox";
import RectangularImage from "./subcomponents/RectangularImage";
import RevealOnScroll from "./subcomponents/RevealOnScroll";

interface Props {
  //for colorbox
  color: string;
  title: string;
  subtitle: string;
  children: string;
  languages?: string[]; //the paths for the language images at public/languages_and_programs

  //for image
  image: string; //from work folder
}

const Job = ({ color, title, subtitle, children, languages, image }: Props) => {
  return (
    <div className="lg:mt-0 mt-5">
      <RectangularImage
        src={`/work/` + image}
        bonus_classes="rotate-[-6deg] absolute lg:translate-y-[-30px] translate-y-[-30px] w-32 "
        size=""
      />
      <ColorBox
        color={color}
        title={title}
        subtitle={subtitle}
        can_rotate={true}
        languages={languages}
        bonus_classes="lg:h-[575px] mt-20 max-w-[90%]"
        text_box_classes="h-[60%]"
      >
        {children}
      </ColorBox>
    </div>
  );
};

const JobsPanel = () => {
  return (
    <RevealOnScroll>
      <Header id="Work">My Job Experiences (Most Recent)</Header>
      <div className="flex justify-center  mt-10">
        <div className="responsive-grid-4 lg:w-[95%] place-items-center">
          <Job
            title="IT Cherwell Admin - Summer Student"
            subtitle="CAA Insurance"
            color="indigo"
            languages={["cherwell.png", "SQL.png", "power-bi.png", "excel.png"]}
            image="CAA.png"
          >
            Used Cherwell Client to access various databases for the company,
            including incident tickets and server databases. I was in charge of
            a number of cleanup tasks in the server management database,
            including talking to fellow employees to identify security
            information of servers. In addition, I was responsible for testing
            an employee onboarding form, resulting in me finding many bugs for
            the team.
          </Job>
          <Job
            title="Game Programmmer"
            subtitle="George Brown College"
            color="blue"
            languages={["unity.png", "Csharp.png"]}
            image="george_brown.png"
          >
            Created an educational game in Unity and C# by implementing assets
            and code, developing the user interface, and incorporating
            additional features to allow for informative/engaging game play.
            Worked with designers and artists to create and implement assets
            into the game. Translated visual ideas into code and ensure that all
            coding operates appropriately in addition to prototyping game play
            and developing multiple iterations to create a high-quality product.
          </Job>

          <Job
            title="Jr. Data Analyst"
            subtitle="Clearbox Retail"
            color="pink"
            languages={["python.png", "power_automate.png", "excel.png"]}
            image="clearbox.png"
          >
            Utilized Sobey’s IRI data, Walmart Retail Link, and the Metro
            database throughout data extraction and CSV file downloads. I used
            Power Automate to download those CSV files, Python to convert those
            files to their proper Excel format, and then uploaded the data to a
            cloud for them to be visualized for easier understanding. Also
            gained training in PowerBI near the end of my contract.
          </Job>

          <Job
            title="Finance Clerk"
            subtitle="Echelon Insurance"
            color="grey"
            languages={["excel.png"]}
            image="echelon.jpg"
          >
            Performed 200+ representments and declines daily without sacrificing
            compliance with necessary regulations or quality control/assurance
            in service delivery. Collaborated with the broker to determine
            clients' financial status, provide updates, and perform internal
            file modifications/updates as needed, ensuring the privacy and
            confidentiality of client data. Utilized the Echelon database to
            maintain credit files and support customer delinquencies/financing.
          </Job>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default JobsPanel;
