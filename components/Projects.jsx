import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="page">
      <h2>My Projects</h2>
      <div className="project-grid">
        <Link to="/projects/video-editing" className="project-card">
          <div>
            <h3>Video Editing Website</h3>
            <p>A modern website for video editing services built with React and styled with custom CSS.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects; 