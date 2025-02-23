import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

const VideoEditing = () => {
  return (
    <div className="container">
      <section className="video-preview">
        <div className="video-preview-header">
          <h2>Video Editing Website Preview</h2>
          <div className="back-link-container">
            <a href="/projects" className="back-link">← Back</a>
          </div>
        </div>
        
        <div className="preview-images">
          <div className="preview-item">
            <img src="/head.png" alt="Website Header Section" />
            <p>Header Section</p>
          </div>
          
          <div className="preview-item">
            <img src="/shortvdo.png" alt="Short Video Services" />
            <p>Short Video Services</p>
          </div>
          
          <div className="preview-item">
            <img src="/longvdo.png" alt="Long Video Services" />
            <p>Long Video Services</p>
          </div>
          
          <div className="preview-item">
            <img src="/services.png" alt="Services Section" />
            <p>Services Overview</p>
          </div>
          
          <div className="preview-item">
            <img src="/pricing.png" alt="Pricing Plans" />
            <p>Pricing Plans</p>
          </div>
          
          <div className="preview-item">
            <img src="/faq.png" alt="FAQ Section" />
            <p>FAQ Section</p>
          </div>
          
          <div className="preview-item">
            <img src="/testimonials.png" alt="Client Testimonials" />
            <p>Client Testimonials</p>
          </div>
        </div>

        <div className="project-description">
          <p>
            This video editing website is built using React JSX and Tailwind CSS, 
            featuring a modern and responsive design. The website includes comprehensive 
            video editing services, pricing plans, and client testimonials. 
            Currently under construction - coming soon!
          </p>
          <div className="stay-tuned">
            <h3>Stay Tuned!</h3>
            <div className="social-icons">
              <a 
                href="https://linkedin.com/in/YourLinkedInUsername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://instagram.com/YourInstagramUsername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoEditing 