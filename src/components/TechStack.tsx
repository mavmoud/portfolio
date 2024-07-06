import { Fade } from "react-awesome-reveal";
import Plus from "../assets/images/plus.svg";
import "./style/TechStack.css";
function TechStack() {
  return (
    <>
      <Fade delay={100} triggerOnce>
        <div className="techStack">
          <div className="stackTitle">Tech Stack</div>
          <div className="stackColumns">
            <div className="columns">
              <div>
                <ul className="plusUl">
                  <li>
                    <img className="plus" src={Plus} alt="Plus Icon" />
                  </li>
                  <li>
                    <img className="plus" src={Plus} alt="Plus Icon" />
                  </li>
                  <li>
                    <img className="plus" src={Plus} alt="Plus Icon" />
                  </li>
                  <li>
                    <img className="plus" src={Plus} alt="Plus Icon" />
                  </li>
                  <li>
                    <img className="plus" src={Plus} alt="Plus Icon" />
                  </li>
                </ul>
              </div>
              <div className="columnSkills">
                <ul className="ul">
                  <li>Java</li>
                  <li>Python</li>
                  <li>C</li>
                  <li>C++</li>
                  <li>HTML</li>
                </ul>
              </div>
            </div>
            <div className="columns">
              <div>
                <ul className="plusUl">
                  <li>
                    <img className="plus" src={Plus} alt="Plus Icon" />
                  </li>
                  <li>
                    <img className="plus" src={Plus} alt="Plus Icon" />
                  </li>
                  <li>
                    <img className="plus" src={Plus} alt="Plus Icon" />
                  </li>
                  <li>
                    <img className="plus" src={Plus} alt="Plus Icon" />
                  </li>
                  <li>
                    <img className="plus" src={Plus} alt="Plus Icon" />
                  </li>
                </ul>
              </div>
              <div className="columnskills">
                <ul className="ul">
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>NodeJS</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
            <div className="columns">
              <div>
                <ul className="incompUl">
                  <li>
                    <img className="plus" src={Plus} alt="Plus Icon" />
                  </li>
                  <li>
                    <img className="plus" src={Plus} alt="Plus Icon" />
                  </li>
                  <li>
                    <img className="plus" src={Plus} alt="Plus Icon" />
                  </li>
                  {/*<li><img className="plus" src={Plus} alt="Plus Icon"/></li>*/}
                  {/*<li><img className="plus" src={Plus} alt="Plus Icon"/></li>*/}
                </ul>
              </div>
              <div className="columnskills">
                <ul className="ul">
                  <li>MySQL</li>
                  <li>Figma</li>
                  <li>WordPress</li>
                  {/*<li></li>*/}
                  {/*<li></li>*/}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default TechStack;
