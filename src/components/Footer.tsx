import "./style/Footer.css";

function Footer() {
  const copyright = new Date().getFullYear();

  const handleClick = (url: string) => {
    window.open(url);
  };
  const emailClick = () => {
    window.location.href = "mailto:Mahmoud%20M.%3cmm@mahmmk.com%3e";
  };

  return (
      <>
        <div className="footer">
          <div className="hr"/>
          <div className="footerLinks">
            <div className="links">
              <div
                  className="socialLinks"
                  onClick={() => handleClick("https://github.com/mavmoud")}
              >
                Github
              </div>
              <div
                  className="socialLinks"
                  onClick={() =>
                      handleClick("https://www.linkedin.com/in/mavmoud/")
                  }
              >
                Linkedin
              </div>
              <div className="socialLinks" onClick={emailClick}>
                Email
              </div>
            </div>
            <div className="copyright">© {copyright}</div>
          </div>
        </div>
      </>
  );
}

export default Footer;
