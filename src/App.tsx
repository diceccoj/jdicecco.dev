import "./App.css";
import Nav from "./assets/components/Nav";
import ThemeSwitcher from "./assets/components/ThemeSwitcher";
import TopGraphic from "./assets/components/TopGraphic";
import JobsPanel from "./assets/components/JobsPanel";
import GamesPanel from "./assets/components/GamesPanel";
import WebPanel from "./assets/components/WebPanel";
import EventsPanel from "./assets/components/EventsPanel";

function App() {
  return (
    <>
      <Nav
        items={["Introduction", "Work", "Projects", "Events", "Skills"]}
      ></Nav>
      <TopGraphic />
      <JobsPanel />
      <GamesPanel />
      <WebPanel />
      <EventsPanel />

      <ThemeSwitcher />
    </>
  );
}

export default App;
