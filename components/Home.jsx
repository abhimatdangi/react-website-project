import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="page">
      <header className="intro">
        <h1 className="myname">Abhimat Dangi</h1>
        <div className="socials">
          <a href="https://github.com/abhimatdangi" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/abhimatdangi/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/prodbyabhimat/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </header>

      <section className="about-me">
        <h2>About Me</h2>
        <p className="about-text">
          Hello! I'm a <span className="highlight">Frontend Developer</span> and{' '}
          <span className="highlight">Video Editor</span> based in Kathmandu, Nepal. 
          I have <span className="highlight">over 2 years of experience in video editing</span> and i am a newbie in web development. 
          I focus on creating functional websites and high-quality videos that engage audiences.
        </p>
      </section>

      <section className="my-skills">
        <h2>Tech Stack & Tools</h2>
        <div className="skills-box">
          <div className="skill-area">
            <h3>Web Development</h3>
            <div className="tags">
              <span>
                <img src="/react.png" alt="React" className="tech-icon" />
              </span>
              <span>
                <img src="/javascript.png" alt="JavaScript" className="tech-icon" />
              </span>
              <span>
                <img src="/html.png" alt="HTML" className="tech-icon" />
              </span>
              <span>
                <img src="/css.png" alt="CSS" className="tech-icon" />
              </span>
            </div>
          </div>
          
          <div className="skill-area">
            <h3>Design Tools</h3>
            <div className="tags">
              <span>
                <img src="/figma.png" alt="Figma" className="tech-icon" />
              </span>
              <span>
                <img src="photoshop.png" alt="Photoshop" className="tech-icon" />
              </span>
            </div>
          </div>
          
          <div className="skill-area">
            <h3>Video Editing</h3>
            <div className="tags">
              <span>
                <img src="/after-effects.png" alt="After Effects" className="tech-icon" />
              </span>
              <span>
                <img src="/premiere-pro.png" alt="Premiere Pro" className="tech-icon" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="my-work">
        <h2>Professional Journey</h2>
        <div className="work-item">
          <h3>Video Editor</h3>
          <p className="duration">2022 Nov - Present</p>
          <ul className="work-list">
            <li>Created and edited over 50+ videos for various clients and platforms.</li>
            <li>Collaborated with content creators and agencies.</li>
          </ul>
        </div>
        

      </section>

      <section className="my-education">
        <h2>Education</h2>
        <div className="edu-box">
          <h3>Bachelor's in Computer Science with AI</h3>
          <p>Birmingham City University - 2024 to Present</p>
        </div> 
      </section>

      <section className="interests">
        <h2>Interests & Hobbies</h2>
        <div className="hobby-box">
          <p>
            Beyond coding and video editing, I'm a huge fan of gaming—PC, mobile, you name it. 
            I've spent countless hours grinding in Valorant and PUBG, even gave the pro scene a shot, 
            but let's just say my reflexes didn't get the memo. When I'm not gaming, you'll find me 
            editing videos (because turning raw footage into something epic is just as thrilling). 
            I also freelance as a video editor, helping brands and creators bring their ideas to life. 
            Oh, and I love geeking out over new tech and sharing what I learn with others!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home; 