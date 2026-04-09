import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          As a Shopify, WordPress, and Frontend Developer, I build responsive, user-friendly websites and eCommerce stores. I customize Shopify and WordPress platforms, develop modern web interfaces using HTML, CSS, and JavaScript, and ensure fast, clean, and optimized user experiences across all devices.
        </p>
        
        <h3 className="title" style={{ marginTop: "3rem" }}>Personal Information</h3>
        <ul className="para" style={{ listStyleType: "none", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <li><strong>Date Of Birth:</strong> 20/12/1999</li>
          <li><strong>Gender:</strong> Male</li>
          <li><strong>City:</strong> Lahore</li>
          <li><strong>Religion:</strong> Islam</li>
          <li><strong>Marital Status:</strong> Single</li>
          <li><strong>Health Status:</strong> Good</li>
          <li><strong>NIC Number:</strong> 35202-8982989-9</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
