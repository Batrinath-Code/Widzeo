import React from "react";
import { motion } from "framer-motion";
import registration from "../assets/medzo screen/Home Screen-4.png";
import dashbord from "../assets/medzo screen/Home Screen-9.png";
import Logo from "../assets/medzo screen/Logo intro.png";
import signin from "../assets/medzo screen/Sign In.png";
import appoinment from "../assets/medzo screen/Home Screen-5.png";
import selectDate from "../assets/medzo screen/Home Screen-10.png";
import noshedule from "../assets/medzo screen/Home Screen.png";
import addappo from "../assets/medzo screen/Home Screen-6.png";
import patientProfile from "../assets/medzo screen/Home Screen-11.png";
import addTimer from "../assets/medzo screen/Home Screen-2.png";
import listAppo from "../assets/medzo screen/Home Screen-10.png";
import reviewDetail from "../assets/medzo screen/Home Screen-12.png";
import myShedule from "../assets/medzo screen/Home Screen-3.png";
import allAppo from "../assets/medzo screen/Home Screen-7.png";
import Notifi from "../assets/medzo screen/Home Screen-13.png";
import start from "../assets/medzo screen/Home Screen-2.png";
import nowAppo from "../assets/medzo screen/Home Screen-8.png";
import message from "../assets/medzo screen/Home Screen-15.png";

//edzo
import websign from "../assets/Edzo Screen/web-signin.png";
import websign1 from "../assets/Edzo Screen/web-signin-1.png";
import dash from "../assets/Edzo Screen/web-dashboard.png";
import shedul from "../assets/Edzo Screen/web-dashboard-3.png";
import mycourse from "../assets/Edzo Screen/web-dashboard-4.png";
import edProfile from "../assets/Edzo Screen/web-dashboard-9.png";
import assList from "../assets/Edzo Screen/assignment correction.png";
import assList1 from "../assets/Edzo Screen/assignment correction-1.png";
import course from "../assets/Edzo Screen/course view.png";


const Column = ({ img, direction = "up",edzo }) => {
  const scrollDuration = 5; // Duration of the scroll animation
  const scrollLimit = 10; // Scroll limit in percentage

  // Scroll variants based on direction
  const scrollVariants = {
    up: { y: ["0%", `-${scrollLimit}%`] }, // Scroll upwards
    down: { y: ["0%", `${scrollLimit}%`] }, // Scroll downwards
  };

  return (
    <motion.div
      className={`flex flex-col ${edzo ? "w-1/3" : "w-[400px] h-[800px]"}  gap-3 overflow-hidden`}
      // Set the scroll animation to repeat and reverse continuously
      animate={scrollVariants[direction]}
      transition={{
        duration: scrollDuration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse", // This will reverse the direction automatically
      }}
    >
      {img.map((item, index) => (
        <img
          className="rounded-xl border object-cover shadow-2xl"
          key={index}
          src={item}
          alt={`dashboard ${index}`}
        />
      ))}
    </motion.div>
  );
};

const MultiScrollEffect = ({ edzo }) => {
  return !edzo ? (
    <div className="flex mx-auto gap-3">
      {/* Alternate scroll direction for each column */}
      <Column img={[Logo, registration, dashbord]} direction="up" />
      <Column img={[signin, appoinment, selectDate]} direction="down" />
      <Column img={[noshedule, addappo, patientProfile]} direction="up" />
      <Column img={[addTimer, listAppo, reviewDetail]} direction="down" />
      {/* <Column img={[myShedule, allAppo, Notifi]} direction="up" />
      <Column img={[start, nowAppo, message]} direction="down" /> */}
    </div>
  ) : (
    <div className="flex mx-auto gap-3">
      {/* Alternate scroll direction for each column */}
      <Column edzo="true" img={[websign, dash, websign1]} direction="up" />
      <Column edzo="true" img={[shedul, assList, assList1]} direction="down" />
      <Column edzo="true" img={[course, mycourse, edProfile]} direction="up" />
    </div>
  );
};

export default MultiScrollEffect;
