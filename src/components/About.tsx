import { ReactElement, ReactNode, ReactPortal } from "react";
import { Fade } from "react-awesome-reveal";
import "./style/About.css";

function About(props: {
  aboutOne:
    | string
    | number
    | boolean
    | ReactElement
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
  aboutTwo:
    | string
    | number
    | boolean
    | ReactElement
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <>
      <Fade delay={100} triggerOnce>
        <div className="about">
          <div className="aboutTitle">About</div>
          <div className="aboutDescription">
            <p>{props.aboutOne}</p>
            <p>{props.aboutTwo}</p>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default About;
