import Job from "./subcomponents/Job";
import Header from "./subcomponents/Header";

const JobsPanel = () => {
  return (
    <>
      <Header>My Job Experiences (Most Recent)</Header>
      <div className="flex justify-center  mt-10 animate animate-phase-in">
        <div className="responsive-grid-3 lg:w-3/4 bg-in  place-items-center">
          <Job
            title="Game Programmmer"
            subtitle="George Brown College"
            color="purple"
            can_rotate={true}
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
            can_rotate={true}
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
            can_rotate={true}
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
    </>
  );
};

export default JobsPanel;
