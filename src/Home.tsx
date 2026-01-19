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

import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav items={["Work", "Games", "Websites", "Events", "Other Projects", "Skills"]}></Nav>
      <TopGraphic />
      <JobsPanel />
      <WebPanel />
      <GamesPanel />
      <EventsPanel />
      <OtherProjectsPanel />
      <SkillsPanel
        skills={[
          "Python",
          "C#",
          "C++",
          "C",
          "Time Management",
          "Worked In Teams",
          "teamwork",
          "collaboration",
          "communication",
          "organized",
          "machine learning",
          "scikitlearn",
          "Java",
          "HTML",
          "css",
          "Javascript",
          "Typescript",
          "next.js",
          "React",
          "visual basic",
          "git",
          "Django",
          "SQL",
          "Microsoft Office",
          "Linux",
          "Power BI",
          "Excel",
          "REST API",
          "Google Firebase",
          "Godot",
          "Unity",
          "Server management",
        ]}
      />
      <Footer />

      <ThemeSwitcher />
    </>
  );
}

export default Home;
