import Footer from "../assets/components/Footer";
import Nav from "../assets/components/Nav";
import ThemeSwitcher from "../assets/components/ThemeSwitcher";
import ColorBox from "../assets/components/subcomponents/ColorBox";
import RevealOnScroll from "../assets/components/subcomponents/RevealOnScroll";
import RoundImage from "../assets/components/subcomponents/RoundImage";
import RectangularImage from "../assets/components/subcomponents/RectangularImage";
import Header from "../assets/components/subcomponents/Header";
import ImageWithDescription from "../assets/components/subcomponents/ImageWithDescription";
import Video from "../assets/components/subcomponents/Video";
import SkillsPanel from "../assets/components/SkillsPanel";
import SocialMediaButton from "../assets/components/subcomponents/SocialMediaButton";
import { useEffect } from "react";

function PowerBI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav items={["About", "Gallery", "Demo", "Skills", "Links"]} />
      <RevealOnScroll>
        <div className="flex justify-center items-center mt-32">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <div className=" md:justify-start justify-center">
              <RoundImage src="/pages/pbi/power-bi.png" size="medium" />
            </div>
            <p className="m-5 small-text-bg w-fit p-5 ">
              In case you don't know, Power BI is a powerful tool used in the
              world of data analytics that uses Excel files, CSV files, or
              queries made with SQL or other programs to collect data, build
              relationships between different tables (similar to SQL in a
              sense), create new queries with its built in DAX language, and
              finally, model and filter your data to present in a user-friendly
              manner with its many powerful tools.
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="About">About</Header>
        <div className="flex justify-center items-center mt-10">
          <div className="responsive-grid space-x-10 space-y-10 lg:w-2/3 place-items-center">
            <RectangularImage
              src="/pages/pbi/1.png"
              size="large"
              bonus_classes="rotate-[-3deg]"
            />
            <ColorBox
              color="indigo"
              title="What does it do?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
              languages={["power-bi.png"]}
            >
              As mentioned above, Power BI, like other programs such as Tableau,
              grabs your data tables from a variety of programs, will help you
              create additional columns and queries with Power Query (which I
              also learned how to use in this course), build relationships
              between the tables based on primary and foreign keys, helps build
              more queries and measures thanks to its built-in DAX language, and
              lastly, help you create a powerful and beautiful report to display
              a multitude of information, what you see on the left (or above on
              mobile) is the frontpage of the report built throughout the
              course. It gives you the revenue trends, the top 10 best selling
              products, and other basic information such as profit.
            </ColorBox>
            <ColorBox
              color="purple"
              title="My Accomplishments"
              subtitle="What am I proud of?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              I was very interested in data analytics going into this course,
              and even more interested going out. Being able to use my skills
              from my previous SQL knowledge and general design principles from
              learning how to build websites meant that the transition to DAX
              and Power BI tools went very smoothly. In addition down below you
              will see the many other tools I used to create (in my opinion) a
              fantastic report, such as a map visual with custom hovering
              tooltips.
            </ColorBox>
            <ColorBox
              color="grey"
              title="Steps Forward?"
              subtitle="Where do I improve off of this?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              Honestly I'm proud of what I was able to produce, I think the big
              step forward is to just learn more about how to use Power BI and
              its many tools to their full extent. In addition to this, there
              are many, MANY ways to import data with this program and ideally I
              want to see how to use each individual one.
            </ColorBox>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Gallery">Gallery</Header>
        <div className="flex justify-center items-center mt-20">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <ImageWithDescription
              src="/pages/pbi/2.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              My first of two reports built in this course, this is the second
              page of the report shown above. This is a map with blue circles
              indictating the sales data of each store location.
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/pbi/3.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              A product report, shows the monthly revenue, profit and orders
              compared to their target, where you can look at the metric
              selection graph for each.
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/pbi/4.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              A customer report, will show the top customers by revenue at a
              given time point of your choosing, along with a graph that
              switches between total customers and revenue per customer.
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/pbi/5.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              The second report, that poses as a "final project", which will
              give you the monthly and lifelong trends, the most profitable
              product brands, and compare the total revenue to its target.
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/pbi/6.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              A map visual similar to the first report, with a filter based on
              country.
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/pbi/7.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              A customer visual similar to the first report, finds the most
              profitable customers in each year/country or overall impact.
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/pbi/8.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              An AI visual that breaks down the total transactions by the
              selected categories using a "Decomposition Tree".
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/pbi/9.jpg"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              My certificate for completeing the course!
            </ImageWithDescription>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <Header id="Demo">Demo</Header>
        <div className="flex justify-center items-center mt-12">
          <Video src="/pages/pbi/1.mov" />
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SkillsPanel
          skills={[
            "Power BI",
            "Power Query",
            "SQL",
            "Report Building",
            "DAX Queries",
            "Table Manipulation",
            "AI Tools",
          ]}
        />
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Links">Links</Header>
        <div className="flex justify-center items-center mt-20">
          <SocialMediaButton
            title="Udemy Course"
            url="https://www.udemy.com/course/microsoft-power-bi-up-running-with-power-bi-desktop/?couponCode=PPINTENTP3"
            image="udemy.png"
          />
        </div>
      </RevealOnScroll>

      <ThemeSwitcher />
      <Footer />
    </>
  );
}

export default PowerBI;
