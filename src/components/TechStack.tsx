import "./styles/TechStack.css";

const skills = [
  "HTML",
  "CSS",
  "SCSS",
  "Bootstrap",
  "Editing",
  "Canva Designer",
  "Shopify Complete",
  "Problem Solving",
  "English",
  "Urdu",
  "Typing Speed",
  "Data Entry",
  "Medico-Legal Case (MLC) Type",
  "Medicine Slips Entry",
  "Post Mortem Case Type",
  "Using (Internet/Email)",
  "Software Installation",
];

const TechStack = () => {
  return (
    <div className="techstack section-container" id="techstack">
      <h2 className="techstack-title">
        My <span>Skills</span>
      </h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-badge">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
