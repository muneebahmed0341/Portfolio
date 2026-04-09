import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Operator</h4>
                <h5>Govt. Mian Munshi DHQ Teaching Hospital Lahore</h5>
              </div>
              <h3>PAST</h3>
            </div>
            <p>
              Worked as a Computer Operator, responsible for maintaining patient records, managing hospital databases, entering data into the Health Information Management System (HIMS), and generating reports. Experienced with MLC and Post Mortem Cases. Collaborated with teams to update real-time data and streamline documentation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Web Development Intern</h4>
                <h5>Pixel Pace Technologies</h5>
              </div>
              <h3>2022-2023</h3>
            </div>
            <p>
              Gained hands-on experience in designing and implementing user-friendly web interfaces. Worked closely with the development team to create responsive and visually appealing websites using HTML, CSS, and JavaScript. Translated design mockups into functional web pages and optimized site performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Shopify Developer</h4>
                <h5>Alifdukan</h5>
              </div>
              <h3>PRESENT</h3>
            </div>
            <p>
              Experienced Shopify Developer skilled in creating, customizing, and optimizing stores using Liquid, HTML, CSS, JavaScript, and modern themes like Dawn, Kalles, Debut. Building responsive custom sections, speed optimization, metafields setup, app integrations, and resolving theme bugs.
            </p>
          </div>
        </div>
        
        <h2 style={{ marginTop: "100px" }}>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graduation</h4>
                <h5>Virtual University (VU), Lahore</h5>
              </div>
              <h3>2023-2025</h3>
            </div>
            <p>
              Currently pursuing graduation degree and enhancing academic and technical skillsets.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>Govt. M.A.O College, Lahore</h5>
              </div>
              <h3>2019-2020</h3>
            </div>
            <p>
              Completed intermediate education with a focus on core subjects and foundational knowledge.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matriculation</h4>
                <h5>Imran Education School System, Lahore</h5>
              </div>
              <h3>2017-2018</h3>
            </div>
            <p>
              Successfully completed matriculation with strong baseline academic performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
