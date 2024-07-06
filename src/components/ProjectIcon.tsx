import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import "./style/ProjectIcon.css";

const ROTATION_RANGE = 10;
const HALF_ROTATION_RANGE = 10 / 2;

function ProjectIcon(props: {
  iconLink: string | URL | undefined;
  iconHov: string | undefined;
  iconDef: string | undefined;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [hover, setHover] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHover(true);

    props.onMouseEnter();

    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    setHover(false);

    props.onMouseLeave();

    x.set(0);
    y.set(0);
  };

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    window.open(props.iconLink);
  };

  return (
    <>
      <motion.div
        className="iconDiv hide-cursor"
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
      >
        {hover ? (
          <img
            className="icon"
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            src={props.iconHov}
            alt="Project Icon"
          />
        ) : (
          <img
            className="icon"
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            src={props.iconDef}
            alt="Project Icon"
          />
        )}
      </motion.div>
    </>
  );
}

export default ProjectIcon;
