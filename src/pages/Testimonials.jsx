import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import Header from "../components/Header";
import axios from "axios";
import { API_URL } from "../config";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(1);
  const fetchTestimonialData = () => {
    axios
      .get(API_URL)
      .then((res) => {
        setTestimonialData(res?.data);
      })
      .catch((err) => alert("Failed to fetch data"));
  };

  const handlePrev = () => {
    setEndIndex((prev) => prev - 1);
    setStartIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setStartIndex((prev) => prev + 1);
    setEndIndex((prev) => prev + 1);
  };

  useEffect(() => {
    fetchTestimonialData();
  }, []);
  return (
    <div className="container">
      <div className="header-container">
        <Header />
      </div>
      <div className="sub-container">
        <div className="content-container">
          {testimonialData &&
            testimonialData
              ?.slice(startIndex, endIndex)
              .map((item) => (
                <TestimonialCard key={item?.name} cardData={item} />
              ))}
        </div>
        <div className="pagination">
          <button
            className="btn "
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            Prev
          </button>
          <button
            className="btn "
            onClick={handleNext}
            disabled={endIndex >= testimonialData?.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
