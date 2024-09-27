import { ReactElement, ReactNode, ReactPortal } from "react";
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
          <div className="ProjectsTitle">
              <h1 className="SideTitle">{props.title}</h1>
          </div>
      </>
  );
}

export default SideTitle;
