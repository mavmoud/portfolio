import { ReactElement, ReactNode, ReactPortal } from "react";
import { Fade } from "react-awesome-reveal";
import "./style/SideTitle.css";

function SideTitle(props: {
  title:
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
      <Fade direction="down" cascade triggerOnce>
        <div className="ProjectsTitle">
          <h1 className="SideTitle">{props.title}</h1>
        </div>
      </Fade>
    </>
  );
}

export default SideTitle;
