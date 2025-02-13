import React, { useState } from "react";
import ProjectCard from "../cards/ProjectCard";
import SectionHeader from "../ui/SectionHeader";
import { articles } from "../../utils";

const Passion = () => {
  // State to manage the number of visible articles
  const [visibleCount, setVisibleCount] = useState(3);
  const initialCount = 3;

  // Function to show more articles
  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Increase visible articles by 3
  };

  // Function to collapse articles
  const handleSeeLess = () => {
    setVisibleCount(initialCount); // Reset to the initial visible articles
  };

  return (
    <section className="mt-5 max-w-6xl mx-auto px-4 md:px-8" id="passion">
      {/* Section Header */}
      <SectionHeader
        title={"Mastering Data & Cloud."}
        subtitle={"Optimizing Databases, Elevating Performance"}
      />

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-items-center">
        {articles.slice(0, visibleCount).map((article, idx) => (
          <ProjectCard
            key={idx}
            project={{
              title: (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 transition-colors"
                >
                  {article.title}
                </a>
              ),
              image: article.image,
              isBlog: true,
            }}
          />
        ))}
      </div>

      {/* See More and See Less Buttons */}
      <div className="flex justify-center mt-8 gap-4">
        {visibleCount < articles.length && (
          <button
            onClick={handleSeeMore}
            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
          >
            {/* Downward pointing arrow SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.5l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <span>See More</span>
          </button>
        )}

        {visibleCount > initialCount && (
          <button
            onClick={handleSeeLess}
            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
          >
            {/* Upward pointing arrow SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 15.5l-7.5-7.5-7.5 7.5"
              />
            </svg>
            <span>See Less</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default Passion;
