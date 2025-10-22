import React from "react";
import "./contant.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">
        {/* Left Side - Form */}
        <form className="contact-form">
          <label htmlFor="name">YOUR NAME (required)</label>
          <input type="text" id="name" placeholder="Enter your Name" required />

          <label htmlFor="email">YOUR EMAIL (required)</label>
          <input type="email" id="email" placeholder="Enter your Email" required />

          <label htmlFor="subject">SUBJECT</label>
          <input type="text" id="subject" placeholder="Enter your Subject" />

          <label htmlFor="message">YOUR MESSAGE</label>
          <textarea id="message" rows="5" placeholder="Enter your Message"></textarea>

          <button type="submit" className="send-btn">Send</button>
        </form>

        {/* Right Side - Contact Info */}
        <div className="contact-info">
          <p><strong>E-Mail:</strong> dushyantsaket20@gmail.com</p>
          <p><strong>Phone:</strong> 9244526432</p>

          <p><strong>On The Web:</strong></p>
          <table className="contact-table">
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png"
                    alt="Linkedin"
                    className="icon"
                  />
                </td>
                <td>
                  <a
                    href="https://www.linkedin.com/in/dushyant-choudhuary-aa20b52b2/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914417/github-icon-md.png"
                    alt="Github"
                    className="icon"
                  />
                </td>
                <td>
                  <a
                    href="https://github.com/dushyantsaket"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/144_Gitlab-1024.png"
                    alt="Gitlab"
                    className="icon"
                  />
                </td>
                <td>
                  <a
                    href="https://gitlab.com/dushyantsaket"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Gitlab
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Section */}
      <div className="contact-footer">
        <h3>Get In Touch</h3>
        <p>You can reach out to me at</p>
        <p>📧 dushyantsaket20@gmail.com</p>
        <p>📞 +91 9244526432</p>

        <div className="footer-socials">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              className="footer-icon"
            />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
              alt="Facebook"
              className="footer-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/dushyant-choudhuary-aa20b52b2/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png"
              alt="LinkedIn"
              className="footer-icon"
            />
          </a>
          <a href="https://github.com/dushyantsaket" target="_blank" rel="noreferrer">
            <img
              src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914417/github-icon-md.png"
              alt="GitHub"
              className="footer-icon"
            />
          </a>
          <a href="https://wa.me/919244526432" target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              className="footer-icon"
            />
          </a>
        </div>

        <p className="footer-bottom">
          Created By <span>Dushyant Saket</span> © 2025. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
