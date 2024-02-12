import Project from "./subcomponents/Project";
import Header from "./subcomponents/Header";

const WebPanel = () => {
  return (
    <>
      <Header>My Websites</Header>

      <div className=" flex justify-center  mt-10 animate animate-phase-in">
        <div className="responsive-grid-3 lg:w-3/4 w-1/2 bg-in place-items-center">
          <Project
            color="grey"
            title="This Website"
            image="/webs/this.png"
            languages={["react.svg", "typescript.png", "tailwind.png"]}
            url="https://github.com/diceccoj"
            button_text="View Source Code"
          >
            My new website! Built as a multipage React app with Tailwind CSS for
            styling!
          </Project>

          <Project
            color="indigo"
            title="Initial Startpage"
            image="/webs/initial.png"
            languages={["HTML.png", "CSS.png", "Javascript.png"]}
            url="https://github.com/diceccoj"
          >
            A custom project of mine where I made a small startpage for my
            browser. Made custom styling and features with CSS and Javascript,
            and used implemented APIs such as Unsplash and OpenWeather!
          </Project>

          <Project
            color="pink"
            title="My First Portfolio"
            image="/webs/old_website.png"
            languages={["HTML.png", "CSS.png", "Javascript.png"]}
            url="https://github.com/diceccoj"
            button_text="View Here!"
          >
            My very first website project. Built with HTML, CSS and Javascript.
            Implemented sliders, gradient backgrounds, and learned the basics
            and Javascript and CSS with this project.
          </Project>
        </div>
      </div>
    </>
  );
};

export default WebPanel;
