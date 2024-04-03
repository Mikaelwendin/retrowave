import React from "react";

const ContactForm = () => {
    return (
        <form className="contact__form" name="contact" method="POST" data-netlify="true">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button className="btn" type="submit">
                Send
            </button>
        </form>
    );
};

export default ContactForm;
