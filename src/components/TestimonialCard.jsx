import React from "react";
import "./TestimonialCard.css";
import ProgressBar from "./ProgressBar";
import ProfileAvatar from "./ProfileAvatar";

const TestimonialCard = ({ cardData }) => {
  console.log(cardData);

  return (
    <div className="card-container">
      <ProgressBar />
      <div className="card-sub-container">
        <p className="testimonial">{cardData?.testimonial}</p>
        <div className="card-footer">
          <div className="name-container">
            <h3 className="name">{cardData?.name}</h3>
            <p className="designation">{cardData?.profession}</p>
          </div>
          <ProfileAvatar />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
