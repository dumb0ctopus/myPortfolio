import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faBookReader, faGuitar } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    // Return a cleanup function to clear the timeout when the component unmounts.
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I'm a multifaceted creative with a passion for web development and
            writing. I bring your digital visions to life with stunning
            websites, whilst crafting compelling narratives and lyrics.
          </p>
          <p>
            My relentless ambition fuels my desire for continuous growth, while
            my unwavering eagerness to learn empowers me to embrace new
            challenges, adapt to evolving landscapes, and thrive in an
            ever-changing world.
          </p>
          <p>
            Learning new languages opens doors to diverse cultures and broadens
            my communication horizons, while reading, swimming, cycling, and
            playing the guitar provide me with both physical and creative
            outlets, enriching my life with a balance of physical fitness and
            artistic expression.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faBookReader} color="#8B4513" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGuitar} color="#FF5733" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
