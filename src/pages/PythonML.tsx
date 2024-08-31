import Footer from "../assets/components/Footer";
import Nav from "../assets/components/Nav";
import ThemeSwitcher from "../assets/components/ThemeSwitcher";
import ColorBox from "../assets/components/subcomponents/ColorBox";
import RevealOnScroll from "../assets/components/subcomponents/RevealOnScroll";
import RoundImage from "../assets/components/subcomponents/RoundImage";
import RectangularImage from "../assets/components/subcomponents/RectangularImage";
import Header from "../assets/components/subcomponents/Header";
import ImageWithDescription from "../assets/components/subcomponents/ImageWithDescription";
import SkillsPanel from "../assets/components/SkillsPanel";
import SocialMediaButton from "../assets/components/subcomponents/SocialMediaButton";
import { useEffect } from "react";

function PythonML() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav items={["About", "Gallery", "Skills", "Links"]} />
      <RevealOnScroll>
        <div className="flex justify-center items-center mt-32">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <div className=" md:justify-start justify-center">
              <RoundImage src="/events/python_ml.png" size="medium" />
            </div>
            <p className="m-5 small-text-bg w-fit p-5 ">
              In this article, I will be going over the many things I learned in
              a Python Data Analysis and Machine Learning Bootcamp I took on
              Udemy, where I learned the many different ways to predict new
              incoming data with some of Python's machine learning libraries,
              while also learning to graph said data in multiple ways.
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="About">About</Header>
        <div className="flex justify-center items-center mt-10">
          <div className="responsive-grid lg:space-x-10 space-y-10 lg:w-2/3 place-items-center">
            <RectangularImage
              src="/pages/python_ml/2.gif"
              size="large"
              bonus_classes="rotate-[-3deg]"
            />
            <ColorBox
              color="blue"
              title="Displaying Data"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              The first half of this course covered how to display data using
              graphs, which later tied in to the more complicated machine
              learning section. I learned the basics of the popular Numpy and
              Pandas libraries and was able to fetch, modify and export data.
              More importantly I was able to take that modified data and put it
              on a graph. I learned how to make plots using Matplotlib, Seaborn
              (which is built on Matplotlib and outputs more complicated,
              prettier graphs). I also learned plotly and cufflinks in offline,
              which outputs interactive graphs and maps in html. What you see
              here is a cloropleth map based on power consumption built using
              plotly.
            </ColorBox>
            <ColorBox
              color="pink"
              title="Machine Learning"
              bonus_classes="w-[80%] h-min"
              can_rotate={true}
            >
              The undoubtedly more complicated section of the course was the
              machine learning course, in which I used the SciKitLearn library
              to predict data when given training samples. We would give the
              class some real data to train on, and then followed by random data
              to test the classification ability, and compare the results. The
              types of classification I learned included, but were not limited
              to linear regression, logistic regression, K-nearest neighbours,
              support vector machines, and finally used Google's Tensorflow
              library with Keras to use neural networks and put them on an
              interactive dashboard. I would then test the accuracy of this data
              with SciKitLearn's classification reports and try to optimize
              them. I would also use the plotting software from before to find
              correlated data.
            </ColorBox>
            <ColorBox
              color="indigo"
              title="My Accomplishments"
              bonus_classes="w-[80%] h-min"
              languages={["python.png"]}
              can_rotate={true}
            >
              This is just yet another step in me exploring the field in data
              analysis, and I am loving it. I liike finding new and improved
              ways to not only display information (such as the Seaborn library)
              or manipulate information (with Pandas), but also predict
              information with machine learning. Before going into this, I knew
              nothing about machine learning. But now I must say I am much more
              comfortable with it. Albeit, this is only an introductory course,
              but this is a path I do not see myself stopping with any time
              soon.
            </ColorBox>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Gallery">Gallery</Header>
        <div className="flex justify-center items-center mt-20">
          <p className="small-text-bg m-5 w-2/3">
            This is only a small set of examples in the course I took. Due to
            the size of it, I had to cut the examples down to a small portion.
          </p>
        </div>
        <div className="flex justify-center items-center mt-20">
          <div className="responsive-grid lg:w-2/3  place-items-center">
            <ImageWithDescription
              src="/pages/python_ml/1.gif"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              A 3D interactive graph I made using Plotly and Cufflinks
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/python_ml/3.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              A pairplot comparing data taken from a set of iris flowers (i.e.
              sepal length & width, petal length & width). Color separates the
              types of iris flowers as we wanted to classify random points using
              machine learning classes. Made using Seaborn.
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/python_ml/4.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              The classification report of the Graph Search Cross Validation
              analysis trying to detect the iris species of random samples using
              the data above. It reports and accuracy of 98%
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/python_ml/6.png"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              A graph finding the locations of houses in a small area,
              color-coding based on price. This data will later be used to find
              the estimated price of random points using the Keras library
              imported from Tensorflow. The graph was made using Seaborn.
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/python_ml/5.png"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              The error rate of the repeated attempts of a neural network trying
              to find the price of random houses. The error rate quickly grows
              smaller over 400 attempts until reaching a plateau.
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/python_ml/tensorboard1.gif"
              image_size="large"
              bonus_classes="rotate-[3deg]"
            >
              An interactive dashboard made using Tensorboard. Shows the
              learning and error rate of the classification of different cancer
              diagnosises (between benign and malignant tumours).
            </ImageWithDescription>
            <ImageWithDescription
              src="/pages/python_ml/certificate.jpg"
              image_size="large"
              bonus_classes="rotate-[-3deg]"
            >
              My certification in this course!
            </ImageWithDescription>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <SkillsPanel
          skills={[
            "Python",
            "Numpy",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "Plotly",
            "SciKitLearn",
            "Machine learning",
            "Data Analysis",
            "Tensorflow",
          ]}
        />
      </RevealOnScroll>
      <RevealOnScroll>
        <Header id="Links">Links</Header>
        <div className="flex justify-center items-center mt-20">
          <SocialMediaButton
            title="Udemy Course"
            url="https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp"
            image="udemy.png"
          />
        </div>
      </RevealOnScroll>

      <ThemeSwitcher />
      <Footer />
    </>
  );
}

export default PythonML;
