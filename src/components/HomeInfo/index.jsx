import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../../assets/icons";
import { motion } from "framer-motion";

const InfoBox = ({ text, link, btnText }) => (
  <motion.div
    className="info-box"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {btnText}
      <img className="w-4 h-4 object-contain" src={arrow} />
    </Link>
  </motion.div>
);

const renderContent = {
  1: (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi there! <strong>Antonio</strong> here! <br></br> Your favorite
        software engineer speaking directly from Brazil
      </h1>
    </motion.div>
  ),
  2: (
    <InfoBox
      text={"Experience working in large-scale international projects"}
      link={"/about"}
      btnText={"Learn More about me!"}
    />
  ),
  3: (
    <InfoBox
      text={"Would you like to see a bit more of what I can do?"}
      link={"/projects"}
      btnText={"Visit my portfolio"}
    />
  ),
  4: (
    <InfoBox
      text={"Don't be shy and send me a message"}
      link={"/contact"}
      btnText={"Let's talk"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
