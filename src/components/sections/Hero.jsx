import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { CustomButton } from "../buttons/CustomButton";
import NavBar from "../navbar/NavBar";
import profile from "../../assets/images/Profdp.png";
import { motion } from "framer-motion";
import { headlines } from "../../utils";
import { SocialMediaIcons } from "../ui/SocialMediaIcons";
import { animateScroll } from "react-scroll";

const Hero = () => {
  const scrollToContact = () => {
    animateScroll.scrollToBottom();
  };

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1HDOpJpxQRE2lEZnJ-fX_h0uXCvI1vWNB/view?usp=sharing"
    );
  };

  // Typewriter animation for title
  const [text] = useTypewriter({
    words: [
      "SQL Database Administrator",
      "Cloud Engineer",
      "Azure Architect",
      "Infrastructure Analyst",
    ],
    loop: 0, // Infinite loop
    typeSpeed: 40,
    deleteSpeed: 40,
    delaySpeed: 1000,
  });

  return (
    <div className="bg-primary bg-grid-small-white/[0.2]" id="home">
      <NavBar />

      <section>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          {/* Social Icons */}
          <SocialMediaIcons />

          {/* Info Div */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="flex justify-between items-center gap-6">
              {/* Left Section */}
              <div>
                {/* Static Title */}
                <h1 className="text-4xl font-extrabold mx-auto md:text-5xl text-primary-text">
                  Hi, I'm Adarsh Pathange.
                </h1>

                {/* Typewriter Animation */}
                <h2 className="text-secondary-text text-2xl md:text-3xl mx-auto font-bold break-words mt-4">
                  I&apos;m a <span className="text-purple-500">{text}</span>
                  <Cursor cursorStyle="|" />
                </h2>
              </div>
            </div>
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.6,
                },
              }}
              className="text-secondary-text text-lg pb-4"
            >
              {headlines[2]}
            </motion.p>

            {/* Buttons */}
            <div className="flex gap-4">
              {/* Say Hi Button */}
              <CustomButton
                label={"Say Hi"}
                onClick={scrollToContact}
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M21.894 2.368a1.125 1.125 0 00-1.332-.063L3.272 13.164a1.125 1.125 0 00.17 1.928l5.308 2.654 1.058 5.846a1.125 1.125 0 001.937.588l3.12-3.722 5.28 1.636a1.125 1.125 0 001.413-1.158l.75-14.063a1.125 1.125 0 00-.414-.905z" />
                  </svg>
                }
              />

              {/* See My Resume Button */}
              <CustomButton
                label={"See My Resume"}
                onClick={handleResumeClick}
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 3.75A.75.75 0 018.25 3h7.5a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0v-8.5h-6v8.5a.75.75 0 01-1.5 0v-9zm-4 13a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H4.25a.75.75 0 01-.75-.75zm10.22-5.53a.75.75 0 00-1.44 0l-2.25 6.75a.75.75 0 001.44.47l.35-1.06h2.42l.35 1.06a.75.75 0 001.44-.47l-2.25-6.75zm-.98 4.78l.7-2.1.7 2.1h-1.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </div>

        {/* Background */}
        <div
          className="absolute inset-0 ml-36 mt-44 max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default Hero;
