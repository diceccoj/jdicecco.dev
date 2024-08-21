import Header from "./subcomponents/Header";
import RevealOnScroll from "./subcomponents/RevealOnScroll";
interface Props {
  skills: string[];
}

const SkillsPanel = ({ skills }: Props) => {
  //takes a list of skills and pushes them into a flex wrap, each as their own div
  return (
    <RevealOnScroll>
      <Header id="Skills">Skills</Header>
      <div className="flex justify-center">
        <div className="w-3/4 mt-8 justify-center flex flex-wrap">
          {skills.map((skill) => (
            <h3 key={skill} className="small-text-bg">
              {skill.toUpperCase()}
            </h3>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default SkillsPanel;
