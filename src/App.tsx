import Hero from "./components/Hero.tsx";
import HeroMobile from "./components/mobile/HeroMobile.tsx";
import SideTitle from "./components/SideTitle.tsx";
import ProjectCard from "./components/ProjectCard.tsx";
import ProjectCardMobile from "./components/mobile/ProjectCardMobile.tsx";
import About from "./components/About.tsx";
import Education from "./components/Education.tsx";
import EducationMobile from "./components/mobile/EducationMobile.tsx";
import TechStack from "./components/TechStack.tsx";
import Footer from "./components/Footer.tsx";
import useWindowSize from "./components/useWindowSize";
import FigmaGrey from "./assets/images/figma-grey.svg";
import FigmaWhite from "./assets/images/figma-white.svg";
import GithubGrey from "./assets/images/github-grey.svg";
import GithubWhite from "./assets/images/github-white.svg";
import WellnessImage from "./assets/images/WellnessProjectCover.jpg";
import WellnessVideo from "./assets/videos/WellnessVideo.mp4";
import WebsiteImg from "./assets/images/WebsiteImage.jpg";
import WebsiteVid from "./assets/videos/MyWebsiteVideo.mp4";

import "./App.css";

function App() {
  const { width } = useWindowSize();

  return (
    <>
      {width <= 768 ? (
        <>
          <HeroMobile />
          <SideTitle title="Projects" />
          <ProjectCardMobile
            name="Wellness — Designing an App for The Elderly"
            description="This UX/UI case study focused on
                        designing a mobile app to improve the quality of life for elderly individuals, particularly in
                        response to the isolation caused by the COVID-19 pandemic.
                        Using Figma, the app was designed to prioritize simplicity and accessibility."
            iconDef={FigmaGrey}
            iconHov={FigmaWhite}
            image={WellnessImage}
            video={WellnessVideo}
            link="https://wellness.mahmoud.cam"
            iconLink="https://www.figma.com/proto/7hW67dW7u4XA1QcKNUowjn/wellness?page-id=0%3A1&node-id=2-3&viewport=811%2C278%2C0.3&t=1A2rqVOA7bDNucOh-1&scaling=scale-down&starting-point-node-id=2%3A3"
          />
          <ProjectCardMobile
            name="Portfolio Website"
            description="This portfolio project is a comprehensive showcase of my work,
                        skills, and experience. Designed in Figma and built using React and TypeScript, the website serves
                        as a dynamic introduction to who I am as a developer. It features sections for my projects,
                        education, professional experience, and technical expertise. "
            iconDef={GithubGrey}
            iconHov={GithubWhite}
            image={WebsiteImg}
            video={WebsiteVid}
            link=""
            iconLink="https://github.com/mavmoud/portfolio"
          />
          <About
            aboutOne="I’m a passionate third-year Software Engineering student, eager to gain real-world experience and
                    contribute to innovative projects. My background combines technical skills like web development and
                    Java OOP with strong communication and problem-solving skills developed through sales experience.
                    I've also applied my technical knowledge by volunteering as a WordPress site administrator, further
                    solidifying my knowledge of content management systems."
            aboutTwo="I’m actively seeking part-time positions or internships to further my journey in software
                    development. I'm a fast learner with a growth mindset, constantly seeking opportunities to expand my
                    skillset and contribute meaningfully to a team."
          />
          <EducationMobile />
          <TechStack />
          <Footer />
        </>
      ) : (
        <>
          <Hero />
          <SideTitle title="Projects" />
          <ProjectCard
            name="Wellness — Designing an App for The Elderly"
            description="This UX/UI case study focused on
                        designing a mobile app to improve the quality of life for elderly individuals, particularly in
                        response to the isolation caused by the COVID-19 pandemic.
                        Using Figma, the app was designed to prioritize simplicity and accessibility."
            iconDef={FigmaGrey}
            iconHov={FigmaWhite}
            image={WellnessImage}
            video={WellnessVideo}
            link="https://wellness.mahmoud.cam"
            iconLink="https://www.figma.com/proto/7hW67dW7u4XA1QcKNUowjn/wellness?page-id=0%3A1&node-id=2-3&viewport=811%2C278%2C0.3&t=1A2rqVOA7bDNucOh-1&scaling=scale-down&starting-point-node-id=2%3A3"
          />
          <ProjectCard
            name="Portfolio Website"
            description="This portfolio project is a comprehensive showcase of my work,
                        skills, and experience. Designed in Figma and built using React and TypeScript, the website serves
                        as a dynamic introduction to who I am as a developer. It features sections for my projects,
                        education, professional experience, and technical expertise. "
            iconDef={GithubGrey}
            iconHov={GithubWhite}
            image={WebsiteImg}
            video={WebsiteVid}
            link=""
            iconLink="https://github.com/mavmoud/portfolio"
          />
          <About
            aboutOne="I’m a passionate third-year Software Engineering student, eager to gain real-world experience and
                    contribute to innovative projects. My background combines technical skills like web development and
                    Java OOP with strong communication and problem-solving skills developed through sales experience.
                    I've also applied my technical knowledge by volunteering as a WordPress site administrator, further
                    solidifying my knowledge of content management systems."
            aboutTwo="I’m actively seeking part-time positions or internships to further my journey in software
                    development. I'm a fast learner with a growth mindset, constantly seeking opportunities to expand my
                    skillset and contribute meaningfully to a team."
          />
          <Education />
          <TechStack />
          <Footer />
        </>
      )}
      {/*<HeroMobile />*/}
      {/*<SideTitle title="Projects" />*/}
      {/*<ProjectCardMobile*/}
      {/*  name="Wellness — Designing an App for The Elderly"*/}
      {/*  description="This UX/UI case study focused on*/}
      {/*                  designing a mobile app to improve the quality of life for elderly individuals, particularly in*/}
      {/*                  response to the isolation caused by the COVID-19 pandemic.*/}
      {/*                  Using Figma, the app was designed to prioritize simplicity and accessibility."*/}
      {/*  iconDef={FigmaGrey}*/}
      {/*  iconHov={FigmaWhite}*/}
      {/*  image={WellnessImage}*/}
      {/*  video={WellnessVideo}*/}
      {/*  link="https://wellness.mahmoud.cam"*/}
      {/*  iconLink="https://www.figma.com/proto/7hW67dW7u4XA1QcKNUowjn/wellness?page-id=0%3A1&node-id=2-3&viewport=811%2C278%2C0.3&t=1A2rqVOA7bDNucOh-1&scaling=scale-down&starting-point-node-id=2%3A3"*/}
      {/*/>*/}
      {/*<ProjectCardMobile*/}
      {/*  name="Portfolio Website"*/}
      {/*  description="This portfolio project is a comprehensive showcase of my work,*/}
      {/*                  skills, and experience. Designed in Figma and built using React and TypeScript, the website serves*/}
      {/*                  as a dynamic introduction to who I am as a developer. It features sections for my projects,*/}
      {/*                  education, professional experience, and technical expertise. "*/}
      {/*  iconDef={GithubGrey}*/}
      {/*  iconHov={GithubWhite}*/}
      {/*  image={WebsiteImg}*/}
      {/*  video={WebsiteVid}*/}
      {/*  link=""*/}
      {/*  iconLink="https://github.com/mavmoud/portfolio"*/}
      {/*/>*/}
      {/*<AboutMobile*/}
      {/*  aboutOne="I’m a passionate third-year Software Engineering student, eager to gain real-world experience and*/}
      {/*              contribute to innovative projects. My background combines technical skills like web development and*/}
      {/*              Java OOP with strong communication and problem-solving skills developed through sales experience.*/}
      {/*              I've also applied my technical knowledge by volunteering as a WordPress site administrator, further*/}
      {/*              solidifying my knowledge of content management systems."*/}
      {/*  aboutTwo="I’m actively seeking part-time positions or internships to further my journey in software*/}
      {/*              development. I'm a fast learner with a growth mindset, constantly seeking opportunities to expand my*/}
      {/*              skillset and contribute meaningfully to a team."*/}
      {/*/>*/}
      {/*<EducationMobile />*/}
      {/*<TechStackMobile />*/}
      {/*<FooterMobile />*/}
    </>
  );
}

export default App;
