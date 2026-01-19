import Footer from "../assets/components/Footer";
import Nav from "../assets/components/Nav";
import ThemeSwitcher from "../assets/components/ThemeSwitcher";
import ColorBox from "../assets/components/subcomponents/ColorBox";
import RevealOnScroll from "../assets/components/subcomponents/RevealOnScroll";
import RoundImage from "../assets/components/subcomponents/RoundImage";
import Header from "../assets/components/subcomponents/Header";
import ImageWithDescription from "../assets/components/subcomponents/ImageWithDescription";
import { useEffect } from "react";
import RectangularImage from "../assets/components/subcomponents/RectangularImage";
import SkillsPanel from "../assets/components/SkillsPanel";

function FlightDataML() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav items={["About", "Demo", "Links"]} />
      <RevealOnScroll>
        <div className="flex justify-center items-center mt-32">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <div className=" md:justify-start justify-center">
              <RoundImage
                src="/projects/flight_data_ml.png"
                size="small"
                bonus_classes="scale-[200%] hover:scale-[210%]"
              />
            </div>
            <p className="m-5 lg:mt-5 mt-20 small-text-bg w-fit p-5 ">
              This is a project I did for a class which used flight data from the U.S. Bureau of Transportation, matched
              with the corresponding weather information from the National Centers for Environmental Information to
              predict the delay of flights.
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="About">About</Header>
        <div className="flex justify-center items-center mt-10">
          <div className="responsive-grid lg:space-x-10 space-y-10 lg:w-2/3 place-items-center">
            <RectangularImage src="/pages/flight_data_ml/3.png" size="large" bonus_classes="rotate-[-3deg]" />
            <ColorBox
              color="grey"
              title="What does it do?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
              languages={["python.png"]}
            >
              My partner and I grabbed a year's worth of flight data from the U.S. Bureau of Transportation, which
              includes flight times, dates, origin and destination airports. We then matched this with the airports with
              a corresponding NCEI weather station and retrieved the weather information at the time of each flight. We
              then used this information to predict flight delays in minutes using linear regression, neural networks,
              XGBoost and Catboost.
            </ColorBox>
            <ColorBox
              color="pink"
              title="My Accomplishments"
              subtitle="What am I proud of?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              {[
                `We used Pandas, and Numpy to consolidate data from the NCEI, data mined using their provided API`,
                `We were successfully able to link the data from the two sources together through geographic information and pattern matching`,
                `We ran the data through 35 different experiments, optimizing by tuning model hyperparametres and data exclusions to test correlation`,
                `Through these methods, we optimzied our model by 20-30% compared to our original experiment.`,
              ]}
            </ColorBox>
            <ColorBox
              color="purple"
              title="Steps Forward?"
              subtitle="Where do I improve off of this?"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              The next step would be primarily optimizing the model further as it is far from perfect. The mean squared
              error is still relatively high. Through our list pf experiments we know Catboost is the best on average,
              so any further experiments would primarily focus on that model. XGBoost is another model that performed
              quite well. Considering both of these models are gradient-boosting algorithms, it may be a topic worth
              exploring more.
            </ColorBox>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <Header id="Gallery">Gallery</Header>
        <div className="flex justify-center items-center mt-20">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <ImageWithDescription src="/pages/flight_data_ml/1.png" image_size="large" bonus_classes="rotate-[3deg]">
              An example of the dataset used in this project. Data was divided between Time-Related, Location-Related,
              and Weather-Related, woth flight delay in minutes as the label.
            </ImageWithDescription>
            <ImageWithDescription src="/pages/flight_data_ml/2.png" image_size="large" bonus_classes="rotate-[-3deg]">
              The table showcasing the average MSE of all the experiments, testing each unique combination of dataset
              groups with 7 regression models.
            </ImageWithDescription>

            <ImageWithDescription src="/pages/flight_data_ml/3.png" image_size="large" bonus_classes="rotate-[3deg]">
              Graph showcasing the MSE results. Catboost was on average the best model while also having good run time.
              Though a couple of experiments were won by Linear Regression.
            </ImageWithDescription>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SkillsPanel
          skills={[
            "Python",
            "Teamwork",
            "Collaboration",
            "ScikitLearn",
            "PyTorch",
            "XGBoost",
            "CatBoost",
            "Neural Networks",
            "Data-Mining",
          ]}
        />
      </RevealOnScroll>

      <ThemeSwitcher />
      <Footer />
    </>
  );
}

export default FlightDataML;
