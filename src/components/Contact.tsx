import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:muneebahmed0341@gmail.com" data-cursor="disable">
                muneebahmed0341@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:03410462813" data-cursor="disable">
                0341-0462813
              </a>
            </p>
            <h4>Address</h4>
            <p>
              House # 21, Street # /18C Shibli Town Band Road, Lahore
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/muneebahmed0341"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Muneeb Ahmed</span>
            </h2>
            <h5>
              <MdCopyright /> 2024
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
