import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' },
            });

            if (response.ok) {
                setStatus('✅ Message sent successfully!');
                form.reset();
            } else {
                const data = await response.json();
                if (data.errors) {
                    setStatus(data.errors.map(err => err.message).join(', '));
                } else {
                    setStatus('❌ Something went wrong. Please try again.');
                }
            }
        } catch (error) {
            setStatus('❌ Network error. Please try again.');
        }
    };

    return (
        <section className="contact" id="contact">
            <h2 className="contact-title">Contact</h2>
            <p className="contact-subtitle">
                Ready to get started on your project? Contact me now for a free consultation.
            </p>

            <div className="contact-boxes">
                <div className="box">
                    <FaEnvelope />
                    <a href="mailto:sandipkora12@gmail.com"> sandipkora12@gmail.com</a>
                </div>
                <div className="box">
                    <FaPhone />
                    <a href="tel:+917602136667"> (+91) 7602136667</a>
                </div>
            </div>

            <form
                className="contact-form"
                action="https://formspree.io/f/mqaqgqeo" // 🔁 Replace this
                method="POST"
                onSubmit={handleSubmit}
            >
                <input name="email" type="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Send a message to get started." required />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <button type="submit">Submit</button>
                {status && <p className="form-status">{status}</p>}
            </form>
        </section>
    );
}

export default Contact;
