import { Fade } from "react-awesome-reveal";
import "./style/Mobile.css";

function Mobile() {
    const handleClick = (url: string) => {
        window.open(url);
    };
    const emailClick = () => {
        window.location.href = "mailto:Mahmoud%20M.%3cmm@mahmoud.cam%3e";
    };
    return (
        <>
            <Fade direction="down" cascade triggerOnce>
                <div className="mobileText">
                    Mobile version is under construction.
                </div>
                <div className="mobileLinks">
                    <div className="mLinks">
                        <div
                            className="mlink"
                            onClick={() => handleClick("https://github.com/mavmoud")}
                        >
                            Github
                        </div>
                        <div
                            className="mlink"
                            onClick={() =>
                                handleClick("https://www.linkedin.com/in/mavmoud/")
                            }
                        >
                            Linkedin
                        </div>
                        <div className="mlink" onClick={emailClick}>
                            Email
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
}

export default Mobile;
