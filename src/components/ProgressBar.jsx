import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ testimonials }) => {
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress(0);
  //     setCurrentTestimonial(
  //       (prevIndex) => (prevIndex + 1) % testimonials.length
  //     );
  //   }, 3000);

  //   const progressInterval = setInterval(() => {
  //     setProgress((prevProgress) => prevProgress + 1);
  //   }, 30);

  //   return () => {
  //     clearInterval(interval);
  //     clearInterval(progressInterval);
  //   };
  // }, []);
  return (
    <div className="progress-bar">
      <div className="progress"></div>
    </div>
  );
};

export default ProgressBar;
