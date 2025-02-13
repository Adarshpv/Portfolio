import React from "react";
import Slider from "react-slick"; // Import the Slider from react-slick
import ProjectCard from "../cards/ProjectCard";
import SectionHeader from "../ui/SectionHeader";
import { projects } from "../../utils";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px", // Adjust padding for large screens
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10%",
        },
      },
    ],
  };

  return (
    <section
      className="mt-5 max-w-7xl mx-auto px-4 md:px-6 relative"
      id="projects"
    >
      {/* Section Header */}
      <SectionHeader title={"Projects."} subtitle={"Most recent works"} />

      {/* Carousel Slider */}
      <div className="mt-6 relative">
        <Slider {...settings}>
          {projects.map((project, idx) => (
            <div key={idx} className="px-3">
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </div>

      {/* GitHub Link Section */}
      <div className="flex flex-col items-center mt-8">
        <p className="text-md text-gray-700 dark:text-gray-300 font-medium">
          For more projects...
        </p>
        <a
          href="https://github.com/Adarshpv"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mt-2 group"
        >
          <span className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-purple-500 transition-colors duration-300">
            Head to my GitHub
          </span>
          <motion.div
            initial={{ x: -8 }}
            animate={{ x: 8 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            }}
            className="flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full shadow-md group-hover:bg-purple-500 transition-all duration-300"
          >
            <FaGithub className="text-xl text-gray-700 dark:text-white group-hover:text-white" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

// Custom Arrow Components
const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 z-50 cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:bg-gradient-to-r hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600 text-white shadow-lg transition-all duration-300"
      onClick={onClick}
      aria-label="Next slide"
      role="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 z-50 cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:bg-gradient-to-r hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600 text-white shadow-lg transition-all duration-300"
      onClick={onClick}
      aria-label="Previous slide"
      role="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

export default Projects;
