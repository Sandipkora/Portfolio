import React from "react";
import { motion } from "framer-motion";
import "./Hero.css"; // optional if you're using custom styling
import heroImage from "../assets/illustration.svg"; // replace with your image

const Hero = () => {
  return (
    <section className="hero-container">
      <motion.div
        className="hero-text"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <p className="wave">Hello 👋, I'm</p>
        <h1>Sandip Kora</h1>
        <h2>Software Engineer</h2>
        <div className="hero-buttons">
          <button>Contact</button>
          <a href="https://github.com/sandipkora" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/sandipkora" target="_blank">LinkedIn</a>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <img src={heroImage} alt="Illustration" />
      </motion.div>
    </section>
  );
};

export default Hero;

