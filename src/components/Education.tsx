import useWindowSize from ".//useWindowSize";
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
            <div className="education">
              <div className="educationTitle">Education</div>
              <div className="educationDescription">
                <div className="universityProgram">
                  <p>
                    Concordia University <br/>{" "}
                    <span className="greyEducation">
                      Bachelor of Engineering, Software Engineering
                    </span>
                  </p>
                </div>
                <div className="locationDuration">
                  <p>
                    Montreal, Quebec <br/>{" "}
                    <span className="greyEducation">2020-Now</span>
                  </p>
                </div>
              </div>
            </div>
          </>
      )}
    </>
  );
}

export default Education;
