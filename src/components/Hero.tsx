import Background from "../assets/images/background.png";
import { Fade } from "react-awesome-reveal";
import useWindowSize from ".//useWindowSize";
import "./style/Hero.css";

function Hero() {
  const { width } = useWindowSize();

  const handleClick = (url: string) => {
    window.open(url);
  };
  const emailClick = () => {
    window.location.href = "mailto:Mahmoud%20M.%3cmm@mahmoud.cam%3e";
  };

  return (
    <>
      {width <= 768 ? (
        <>
          <div className="hero">
            <Fade direction="down" cascade triggerOnce>
              <div className="ppContainer">
                <div className="pp"/>
              </div>
              <div className="heroContent">
                <div className="heroText">
                  Hey, I’m Mahmoud <br/>
                  a Software Engineering student <br/> at Concordia University
                  based
                  <br/> in Montreal, Quebec
                </div>
              </div>
              <div className="heroLinks">
                <div className="hLinks">
                  <div
                      className="link"
                      onClick={() => handleClick("https://github.com/mavmoud")}
                  >
                    Github
                  </div>
                  <div
                      className="link"
                      onClick={() =>
                          handleClick("https://www.linkedin.com/in/mavmoud/")
                      }
                  >
                    Linkedin
                  </div>
                  <div className="link" onClick={emailClick}>
                    Email
                  </div>
                </div>
              </div>
              <div className="heroBackground">
                <img
                    src={Background}
                    alt="Background Blur"
                    className="background"
                />
              </div>
            </Fade>
          </div>
        </>
      ) : (
          <>
            <div className="hero">
              <Fade direction="up" cascade triggerOnce>
                <div className="ppContainer">
                  <div className="pp"/>
                </div>
                <div className="heroContent">
                  <div className="heroText">
                    Hey, I’m Mahmoud
                    <br/>
                    a Software Engineering student at Concordia <br/> University
                    based in Montreal, Quebec
                  </div>
                </div>
                <div className="heroLinks">
                  <div className="hLinks">
                    <div
                        className="link"
                        onClick={() => handleClick("https://github.com/mavmoud")}
                    >
                      Github
                    </div>
                    <div
                        className="link"
                        onClick={() =>
                            handleClick("https://www.linkedin.com/in/mavmoud/")
                        }
                    >
                      Linkedin
                    </div>
                    <div className="link" onClick={emailClick}>
                      Email
                    </div>
                  </div>
                </div>
                <div className="heroBackground">
                  <img
                    src={Background}
                    alt="Background Blur"
                    className="background"
                  />
                </div>
            </Fade>
          </div>
        </>
      )}
    </>
  );
}

export default Hero;
