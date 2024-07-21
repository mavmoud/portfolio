import React, { ReactElement, ReactNode, ReactPortal, useState } from "react";
import CustomCursor from "./CustomCursor.tsx";
import ProjectIcon from "./ProjectIcon.tsx";
import useWindowSize from ".//useWindowSize";
import Background from "../assets/images/background.png";
import "./style/ProjectCard.css";

interface ProjectCardProps {
  link: string | URL | undefined;
  name:
    | string
    | number
    | boolean
    | ReactElement
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
  description:
    | string
    | number
    | boolean
    | ReactElement
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
  iconDef: string | undefined;
  iconHov: string | undefined;
  iconLink: string | URL | undefined;
  image: string | undefined;
  onMouseEnter: () => void; // Add onMouseEnter prop
  onMouseLeave: () => void; // Add onMouseLeave prop
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { width } = useWindowSize();

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    window.open(props.link);
  };
  const [isCursorVisible, setCursorVisibility] = useState(false);

  const handleMouseEnter = () => {
    setCursorVisibility(true);
    document.body.style.cursor = "none";
  };

  const handleMouseLeave = () => {
    setCursorVisibility(false);
    setTimeout(() => {
      document.body.style.cursor = "default"; // Show the default cursor after the custom cursor fades out
    }, 300);
  };

  const handleIconMouseEnter = () => {
    setCursorVisibility(false);
    document.body.style.cursor = "none";
  };

  const handleIconMouseLeave = () => {
    setCursorVisibility(true);
    document.body.style.cursor = "none";
  };

  return (
    <>
      {width <= 768 ? (
        <>
          <div onClick={handleClick} className="ProjectDiv">
            <div className="ProjectCard">
              <img src={Background} alt="Background Blur" className="RightBlur"/>
              <div className="DetailsDiv">
                <div className="CardImg">
                  <img
                      className="ProjectImg"
                      src={props.image}
                      alt="Project Image"
                  />
                </div>
                <div className="ProjectDetails">
                  <div className="ProjectInfo">
                    <h1 className="ProjectName">{props.name}</h1>
                    <p className="ProjectDescription">{props.description}</p>
                  </div>
                  <ProjectIcon
                      iconDef={props.iconDef}
                      iconHov={props.iconHov}
                      iconLink={props.iconLink}
                      onMouseEnter={handleIconMouseEnter}
                      onMouseLeave={handleIconMouseLeave}
                  />
                  <img
                      src={Background}
                      alt="Background Blur"
                      className="LeftBlur"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
          <>
            <div onClick={handleClick} className="ProjectDiv">
            <CustomCursor isVisible={isCursorVisible}/>
              <div
                  className="ProjectCard"
                  style={{}}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
              >
                <img src={Background} alt="Background Blur" className="RightBlur"/>
                <div className="DetailsDiv">
                  <div className="ProjectDetails" style={{}}>
                    <div className="ProjectInfo" style={{}}>
                      <h1 className="ProjectName">{props.name}</h1>
                      <p className="ProjectDescription">{props.description}</p>
                    </div>
                    <ProjectIcon
                        iconDef={props.iconDef}
                        iconHov={props.iconHov}
                        iconLink={props.iconLink}
                        onMouseEnter={handleIconMouseEnter}
                        onMouseLeave={handleIconMouseLeave}
                    />
                    <img
                        src={Background}
                        alt="Background Blur"
                        className="LeftBlur"
                    />
                  </div>
                  <div className="CardImg" style={{}}>
                    <img
                        className="ProjectImg"
                        src={props.image}
                        alt="Project Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
      )}
    </>
  );
};

export default ProjectCard;
