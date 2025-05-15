// FloatingIcons.jsx
import React from "react";
import { motion } from "framer-motion";
import "./FloatingIcons.css";

import html from "../assets/html-icon.svg";
import css from "../assets/css-icon.svg";
import js from "../assets/js-icon.svg";
import react from "../assets/react-icon.svg";
import java from "../assets/java.svg";
import python from "../assets/python.svg";

const icons = [html, css, js, react, java, python];

const getRandom = (min, max) => Math.random() * (max - min) + min;

const FloatingIcons = () => {
  const particles = Array.from({ length: 18 }).map((_, i) => {
    const icon = icons[i % icons.length];
    const top = getRandom(0, 100);
    const left = getRandom(0, 100);
    const size = getRandom(24, 32);
    const xMove = getRandom(-20, 20);
    const yMove = getRandom(-30, 30);
    const rotateDeg = getRandom(60, 180);
    const duration = getRandom(8, 12);
    const delay = getRandom(0, 2);

    return (
      <motion.img
        key={i}
        src={icon}
        className="particle-icon"
        alt={`floating-icon-${i}`}
        initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
        animate={{
          opacity: [0.08, 0.15, 0.08],
          x: [0, xMove, 0],
          y: [0, yMove, 0],
          rotate: [0, rotateDeg, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay,
        }}
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
        }}
      />
    );
  });

  return <div className="floating-icons">{particles}</div>;
};

export default FloatingIcons;


