import "./App.css";
import Nav from "./assets/components/Nav";
import ThemeSwitcher from "./assets/components/ThemeSwitcher";
import TopGraphic from "./assets/components/TopGraphic";
import JobsPanel from "./assets/components/JobsPanel";
import GamesPanel from "./assets/components/GamesPanel";
import WebPanel from "./assets/components/WebPanel";
import EventsPanel from "./assets/components/EventsPanel";
import SkillsPanel from "./assets/components/SkillsPanel";
import OtherProjectsPanel from "./assets/components/OtherProjectsPanel";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <Nav
        items={[
          "Work",
          "Games",
          "Websites",
          "Events",
          "Other Projects",
          "Skills",
        ]}
      ></Nav>
      <TopGraphic />
      <JobsPanel />
      <GamesPanel />
      <WebPanel />
      <EventsPanel />
      <OtherProjectsPanel />
      <SkillsPanel
        skills={[
          "Python",
          "C#",
          "C++",
          "C",
          "Java",
          "HTML",
          "css",
          "vite",
          "git",
          "git lfs",
          "Javascript",
          "Typescript",
          "Cherwell Ticketing System",
          "Microsoft Office",
          "Linux",
          "Ubuntu Server",
          "RHEL Linux",
          "Power Automate",
          "Excel",
          "Haskell",
          "React",
          "Tailwind",
          "OpenWeather API",
          "Open AI API",
          "Unsplash API",
          "Google Firebase",
          "Firestore",
          "REST API",
          "Godot",
          "Unity",
          "Finance",
          "Server management",
          "JSON Files",
          "Streamlit",
          "Windows 10/11",
          "Time Management",
          "Worked In Teams",
          "led groups",
          "communication",
          "hard working",
        ]}
      />
      <Footer />

      <ThemeSwitcher />
    </>
  );
}

export default App;
