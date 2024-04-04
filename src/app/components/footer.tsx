import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "./contactform";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <h2>Contact</h2>
                <ContactForm></ContactForm>
                <div className="contact__icons-container">
                    <a
                        title="github"
                        href="https://github.com/Mikaelwendin"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={50} />
                    </a>
                    <a
                        title="linkedin"
                        href="https://www.linkedin.com/in/mikael-wendin-2a7223251/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={50} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
