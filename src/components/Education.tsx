import useWindowSize from ".//useWindowSize";
import { Fade } from "react-awesome-reveal";
import "./style/Education.css";

function Education() {
  const { width } = useWindowSize();

  return (
    <>
      {width <= 768 ? (
        <>
          <div className="education">
            <div className="educationTitle">Education</div>
            <div className="educationDescription">
              <div className="universityProgram">
                <p>
                  Concordia University <br />{" "}
                  <span className="greyEducation">
                    BEng, Software Engineering
                  </span>
                </p>
              </div>
              <div className="locationDuration">
                <p>
                  Montreal, Quebec <br />{" "}
                  <span className="greyEducation">2020-Now</span>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Fade delay={100} triggerOnce>
            <div className="education">
              <div className="educationTitle">Education</div>
              <div className="educationDescription">
                <div className="universityProgram">
                  <p>
                    Concordia University <br />{" "}
                    <span className="greyEducation">
                      Bachelor of Engineering, Software Engineering
                    </span>
                  </p>
                </div>
                <div className="locationDuration">
                  <p>
                    Montreal, Quebec <br />{" "}
                    <span className="greyEducation">2020-Now</span>
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </>
      )}
    </>
  );
}

export default Education;
