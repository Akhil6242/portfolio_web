import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('About');
  const [projectDetails, setProjectDetails] = useState(null);

  React.useEffect(() => {
    if (activeSection === 'Resume') {
      setTimeout(() => {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          bar.style.setProperty('--skill-width', width);
          bar.style.width = width;
        });
      }, 300);
    }
  }, [activeSection]);
  // Content for different sections
  const renderContent = () => {
    switch(activeSection) {
      case 'About':
        return (
          <section className="hero-section">
            <h1>Digital Identity</h1>
            <div className="accent-line"></div>
            
            <p className="intro-text">
              I'm Akhilesh Yadav, a Full-Stack Developer based in Delhi NCR, India. 
              Passionate about building scalable web applications and innovative user experiences.
            </p>
            
            <p className="detail-text">
              I specialize in Java, React, Spring Boot, and AWS. My passion for continuous learning 
              drives me to stay up-to-date with the latest technologies and frameworks in the industry.
            </p>
            
            <div className="highlights-section">
              <h2><span>⭐</span> Highlights & Successes</h2>
              
              <div className="metrics-container">
                <div className="metric">
                  <div className="metric-number">+5</div>
                  <div className="metric-label">PROJECTS COMPLETED</div>
                </div>
                <div className="metric">
                  <div className="metric-number">+8</div>
                  <div className="metric-label">TECHNOLOGIES MASTERED</div>
                </div>
                <div className="metric">
                  <div className="metric-number">+3</div>
                  <div className="metric-label">LEARNING ACHIEVEMENTS</div>
                </div>
              </div>
            </div>
          </section>
        );
      
      case 'Resume':
        return (
          <section className="resume-section">
            <h1>Career Snapshot</h1>
            <div className="accent-line"></div>
            <p className="section-subtitle">A comprehensive overview of my professional journey and technical expertise.</p>

            {/* Projects Section */}
            <div className="resume-subsection">
              <h2>Projects</h2>
              
              <div className="projects-timeline">
                {/* University Android App */}
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="project-header">
                      <h3>University Android App & Admin Portal</h3>
                      <span className="project-date">May 2025</span>
                      <span className="project-badge grade-a">A Grade</span>
                    </div>
                    <p className="project-description">
                      Complete dual-platform university management system with Android mobile app 
                      and web-based admin portal for student verification and access control.
                    </p>
                    <div className="project-achievements">
                      <div className="achievement">A Grade from Faculty</div>
                      <div className="achievement">40% increased student engagement</div>
                      <div className="achievement">100+ user profiles managed</div>
                      <div className="achievement">15% enhanced admin efficiency</div>
                    </div>
                    <div className="tech-stack-inline">
                      <span className="tech-tag">Java</span>
                      <span className="tech-tag">Android Studio</span>
                      <span className="tech-tag">Firebase</span>
                      <span className="tech-tag">HTML/CSS/JS</span>
                    </div>
                  </div>
                </div>

                {/* AI Email Assistant */}
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="project-header">
                      <h3>AI Email Assistant</h3>
                      <span className="project-date">Sep 2025</span>
                      <span className="project-badge completed">Completed</span>
                    </div>
                    <p className="project-description">
                      AI-powered email processing system with automated response generation, 
                      built with React frontend and Python backend integration.
                    </p>
                    <div className="tech-stack-inline">
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">OpenAI API</span>
                      <span className="tech-tag">Flask</span>
                    </div>
                  </div>
                </div>

                {/* N-QueenPro */}
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="project-header">
                      <h3>N-QueenPro Puzzle Game</h3>
                      <span className="project-date">Aug 2025</span>
                      <span className="project-badge completed">Live</span>
                    </div>
                    <p className="project-description">
                      Interactive algorithm visualization game with leaderboard system, 
                      bot detection, and progressive difficulty levels.
                    </p>
                    <div className="tech-stack-inline">
                      <span className="tech-tag">JavaScript</span>
                      <span className="tech-tag">Supabase</span>
                      <span className="tech-tag">CSS3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="resume-subsection">
              <h2>Education</h2>
              
              <div className="education-grid">
                <div className="education-item">
                  <div className="education-header">
                    <h3>Master of Computer Application</h3>
                    <span className="education-grade">CGPA: 8.48</span>
                  </div>
                  <div className="education-details">
                    <p className="institution">M.J.P. ROHILKHAND UNIVERSITY</p>
                    <p className="duration">Oct. 2023 – July 2025 • Bareilly, UP</p>
                    <p className="specialization">
                      Specialized in software engineering, Android development, and 
                      database management with practical project experience.
                    </p>
                  </div>
                </div>

                <div className="education-item">
                  <div className="education-header">
                    <h3>Bachelor of Science</h3>
                    <span className="education-grade">58%</span>
                  </div>
                  <div className="education-details">
                    <p className="institution">GOVERNMENT COLLEGE, HEMPUR, BISALPUR</p>
                    <p className="duration">Sept. 2019 – June 2022 • Pilibhit, UP</p>
                    <p className="specialization">
                      Strong foundation in mathematics, programming fundamentals, 
                      and analytical thinking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="resume-subsection">
              <h2>Technical Skills</h2>
              
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Programming Languages</h4>
                  <div className="skills-list">
                    <div className="skill-item">
                      <span className="skill-name">Java</span>
                      <div className="skill-bar">
                        <div className="skill-progress" data-width="90%"></div>
                      </div>
                      <span className="skill-percentage">90%</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">JavaScript</span>
                      <div className="skill-bar">
                        <div className="skill-progress" data-width="75%"></div>
                      </div>
                      <span className="skill-percentage">75%</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">C#</span>
                      <div className="skill-bar">
                        <div className="skill-progress" data-width="75%"></div>
                      </div>
                      <span className="skill-percentage">75%</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">SQL</span>
                      <div className="skill-bar">
                        <div className="skill-progress" data-width="80%"></div>
                      </div>
                      <span className="skill-percentage">80%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-category">
                  <h4>Web Technologies</h4>
                  <div className="skills-list">
                    <div className="skill-item">
                      <span className="skill-name">React</span>
                      <div className="skill-bar">
                        <div className="skill-progress" data-width="75%"></div>
                      </div>
                      <span className="skill-percentage">75%</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">HTML/CSS</span>
                      <div className="skill-bar">
                        <div className="skill-progress" data-width="90%"></div>
                      </div>
                      <span className="skill-percentage">90%</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">Spring Boot</span>
                      <div className="skill-bar">
                        <div className="skill-progress" data-width="80%"></div>
                      </div>
                      <span className="skill-percentage">80%</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">Node.js</span>
                      <div className="skill-bar">
                        <div className="skill-progress" data-width="65%"></div>
                      </div>
                      <span className="skill-percentage">65%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-category">
                  <h4>Tools & Databases</h4>
                  <div className="skills-list">
                    <div className="skill-item">
                      <span className="skill-name">Firebase</span>
                      <div className="skill-bar">
                        <div className="skill-progress" data-width="85%"></div>
                      </div>
                      <span className="skill-percentage">85%</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">MySQL</span>
                      <div className="skill-bar">
                        <div className="skill-progress" data-width="80%"></div>
                      </div>
                      <span className="skill-percentage">80%</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">Git/GitHub</span>
                      <div className="skill-bar">
                        <div className="skill-progress" data-width="85%"></div>
                      </div>
                      <span className="skill-percentage">85%</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">Android Studio</span>
                      <div className="skill-bar">
                        <div className="skill-progress" data-width="75%"></div>
                      </div>
                      <span className="skill-percentage">75%</span>
                    </div>
                  </div>
                </div>

                <div className="skill-category">
                  <h4>Concepts & Frameworks</h4>
                  <div className="skills-list">
                    <div className="skill-item">
                      <span className="skill-name">Data Structures</span>
                      <div className="skill-bar">
                        <div className="skill-progress" data-width="85%"></div>
                      </div>
                      <span className="skill-percentage">85%</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">Algorithms</span>
                      <div className="skill-bar">
                        <div className="skill-progress" data-width="80%"></div>
                      </div>
                      <span className="skill-percentage">80%</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">OOP</span>
                      <div className="skill-bar">
                        <div className="skill-progress" data-width="90%"></div>
                      </div>
                      <span className="skill-percentage">90%</span>
                    </div>
                    <div className="skill-item">
                      <span className="skill-name">SDLC</span>
                      <div className="skill-bar">
                        <div className="skill-progress" data-width="75%"></div>
                      </div>
                      <span className="skill-percentage">75%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="certifications-section">
                <h4>📜 Certifications</h4>
                <div className="certifications-grid">
                  <div className="certification-item">
                    <h5>Introduction to Frontend Development</h5>
                    <p className="cert-issuer">Meta</p>
                    <p className="cert-skills">HTML, CSS, JavaScript, DOM Manipulation</p>
                  </div>
                  <div className="certification-item">
                    <h5>Software Engineering Job Simulation</h5>
                    <p className="cert-issuer">May 2025</p>
                    <p className="cert-skills">Software Architecture, Security, Agile, Testing</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      
      case 'Portfolio':
        return (
          <section className="portfolio-section">
            <h1>Creative Showcase</h1>
            <div className="accent-line"></div>
            <p className="section-subtitle">A glimpse into my professional journey.</p>
            
            <div className="projects-grid">
              {/* University Android App */}
              <div className="project-card featured">
                <div className="project-image">
                  <div className="project-placeholder">🏫</div>
                  <div className="project-status completed">Completed</div>
                </div>
                <div className="project-content">
                  <h3>University Android App</h3>
                  <p className="project-description">
                    Complete university management system with mobile and web interfaces
                  </p>
                  <div className="tech-stack">
                    <span className="tech-tag">Android</span>
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">Firebase Firestore</span>
                  </div>
                  <div className="project-features">
                    <div className="feature">Student Portal</div>
                    <div className="feature">Admin Dashboard</div>
                    <div className="feature">Course Management</div>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/Akhil6242/CollegeCampusApp" className="project-link github" target="_blank">GitHub</a>
                    <a 
                      href="/university-app-details.html" 
                      className="project-link details" 
                      
                      rel="noopener noreferrer"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>

              {/* AI Email Assistant */}
              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">🤖</div>
                  <div className="project-status completed">Completed</div>
                </div>
                <div className="project-content">
                  <h3>AI Email Assistant</h3>
                  <p className="project-description">
                    AI-powered system for automated email processing and intelligent responses.
                  </p>
                  <div className="tech-stack">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">SpringBoot</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">OpenAI</span>
                    <span className="tech-tag">Google Cloud</span>
                
                  </div>
                  <div className="project-links">
                    <a href="https://ai-communication-assistant-xi.vercel.app/" className="project-link demo" target="_blank">Live Demo</a>
                    <a href="https://github.com/Akhil6242/ai-communication-assistant-frontend" className="project-link github" target="_blank">GitHub</a>
                    <button 
                      className="project-link details"
                      onClick={() => setProjectDetails('aiemail')}
                    >
                      View Details
                    </button>

                  </div>
                </div>
              </div>

              {/* N-QueenPro */}
              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">👑</div>
                  <div className="project-status completed">Completed</div>
                </div>
                <div className="project-content">
                  <h3>N-QueenPro</h3>
                  <p className="project-description">
                    Interactive N-Queens puzzle game with advanced features and leaderboard
                  </p>
                  <div className="tech-stack">
                    <span className="tech-tag">HTML</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">CSS</span>
                    <span className="tech-tag">Supabase</span>
                    
                  </div>
                  <div className="project-links">
                    <a href="https://n-queenpro.netlify.app" className="project-link demo" target="_blank" >Live Demo</a>
                    <a href="https://github.com/Akhil6242/N-QueenPro" className="project-link github" target="_blank">GitHub</a>
                    <button 
                      className="project-link details"
                      onClick={() => setProjectDetails('nqueen')}
                    >
                        View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Portfolio Website */}
              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">💼</div>
                  <div className="project-status in-progress">In Progress</div>
                </div>
                <div className="project-content">
                  <h3>Portfolio Website</h3>
                  <p className="project-description">
                    Modern responsive portfolio showcasing projects and skills
                  </p>
                  <div className="tech-stack">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">CSS3</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">HTML</span>
                  </div>
                  <div className="project-links">
                    <a href="https://iakhilesh-yadav.vercel.app/" className="project-link demo" target="_blank" >Live Demo</a>
                    <a href="https://github.com/Akhil6242/portfolio_web" className="project-link github" target="_blank" >GitHub</a>
                    <button 
                      className="project-link details"
                      onClick={() => setProjectDetails('portfolioWebsite')}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      
      case 'Contact':
        return (
          <section className="contact-section">
            <h1>Let's Connect</h1>
            <div className="accent-line"></div>
            <p className="section-subtitle">Feel free to reach out to me for collaborations, inquiries, or just a friendly chat!</p>

            {/* Google Map at top */}
            <div className="map-container">
              <iframe
                title="Delhi NCR Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83908403646!2d77.06889953912692!3d28.527280424707372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02f2fac06123%3A0x566b5db6ea0f7b0f!2sDelhi%20NCR%2C%20India!5e0!3m2!1sen!2sus!4v1604923687983!5m2!1sen!2sus"
                width="100%"
                height="350"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>

            {/* Contact Details Card */}
            <div className="contact-details-card">
              <h2>Contact Details</h2>
              <div className="contact-info-item">
                <i className="fas fa-phone-alt contact-icon"></i>
                <span>+91 9759816242</span>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-envelope contact-icon"></i>
                <span>akhilyadavbil@gmail.com</span>
              </div>
            </div>


            <div className="contact-container">
              {/* Contact Form */}
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('It\'s not you it\'s us!!\n\nForm submission not implemented yet.\nThe backend logic will be provided soon!'); }}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your full name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="example@example.com" required />

                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject..." required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your message..." rows="6" required></textarea>

                <button type="submit" className="btn-submit">Send Message</button>
              </form>
            </div>
          </section>
        );

      
      default:
        return null;
    }
  };

  return (
    <div className="app">
      {projectDetails === 'nqueen' && (
        <div className="project-modal-overlay" onClick={() => setProjectDetails(null)}>
          <div className="project-modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setProjectDetails(null)}>✕</button>
            <div className="modal-header">
              <div className="modal-icon">👑</div>
              <h2>N-QueenPro Puzzle Game</h2>
            </div>
            <div className="modal-body">
              <p>
                <strong>Description:</strong> N-QueenPro is an interactive puzzle game implementing the famous N-Queens problem. It features dynamic board size selection, bot detection, leaderboard, and advanced score systems.
              </p>
              <div className="modal-section">
                <strong>Key Features:</strong>
                <ul>
                  <li>Dynamic board size and levels</li>
                  <li>User authentication and persistent scoring</li>
                  <li>Leaderboard for competitive play</li>
                  <li>Bot detection based on behavioral patterns</li>
                  <li>Progressive level-unlocking and difficulty</li>
                </ul>
              </div>
              <div className="modal-section">
                <strong>Tech Stack:</strong>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML5 + CSS3</li>
                  <li>Supabase (for database and auth)</li>
                  <li>Netlify (deployment)</li>
                </ul>
              </div>
              <div className="modal-section">
                <strong>Project Links:</strong>
                <ul>
                  <li>
                    <a href="https://n-queenpro.netlify.app" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Akhil6242/n-queenpro" target="_blank" rel="noopener noreferrer">
                      GitHub Repository
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {projectDetails === 'aiemail' && (
        <div className="project-modal-overlay" onClick={() => setProjectDetails(null)}>
          <div className="project-modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setProjectDetails(null)}>✕</button>
            <div className="modal-header">
              <div className="modal-icon">🤖</div>
              <h2>AI Email Assistant</h2>
            </div>
            <div className="modal-body">
              <p>
                <strong>Description:</strong> An AI-powered system for automated email processing and intelligent response generation, streamlining enterprise communications and daily workflows.
              </p>
              <div className="modal-section">
                <strong>Key Features:</strong>
                <ul>
                  <li>Automatic email categorization and smart inbox filtering</li>
                  <li>AI-generated email replies in natural language</li>
                  <li>Real-time email workflow dashboard</li>
                  <li>Integration with enterprise email platforms in larger scope</li>
                  <li>Java backend with SpringBoot API integration, AI module with Node.js and React frontend</li>
                </ul>
              </div>
              <div className="modal-section">
                <strong>Tech Stack:</strong>
                <ul>
                  <li>React (Frontend)</li>
                  <li>Java + SpringBoot (Backend)</li>
                  <li>Node.js (AI Backend)</li>
                  <li>Email Integration APIs (IMAP/SMTP/OAuth2)</li>
                  <li>Google Cloud/Vercel (Deployment)</li>
                </ul>
              </div>
              <div className="modal-section">
                <strong>Project Links:</strong>
                <ul>
                  <li>
                    <a href="https://github.com/Akhil6242/ai-communication-assistant-frontend" target="_blank" rel="noopener noreferrer">
                      GitHub Repository
                    </a>
                  </li>
                  <li>
                    <a href="https://ai-communication-assistant-xi.vercel.app/" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {projectDetails === 'portfolioWebsite' && (
        <div className="project-modal-overlay" onClick={() => setProjectDetails(null)}>
          <div className="project-modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setProjectDetails(null)}>✕</button>
            <div className="modal-header">
              <div className="modal-icon">💼</div>
              <h2>Portfolio Website</h2>
            </div>
            <div className="modal-body">
              <p>
                <strong>Description:</strong> Modern responsive portfolio website showcasing projects, skills, and career highlights. Features dark theme, smooth animations, and mobile responsiveness.
              </p>
              <div className="modal-section">
                <strong>Key Features:</strong>
                <ul>
                  <li>Dynamic navigation between about, resume, portfolio, and contact</li>
                  <li>Dark mode with teal accent color</li>
                  <li>Responsive layout for all devices</li>
                  <li>Interactive project showcase with expandable view details</li>
                  <li>Deployed on Vercel for fast and secure hosting</li>
                </ul>
              </div>
              <div className="modal-section">
                <strong>Tech Stack:</strong>
                <ul>
                  <li>React (functional components + hooks)</li>
                  <li>CSS3 (variables, grid, flexbox)</li>
                  <li>JavaScript ES6+</li>
                  <li>Vercel for deployment</li>
                </ul>
              </div>
              <div className="modal-section">
                <strong>Project Links:</strong>
                <ul>
                  <li>
                    <a href="https://iakhilesh-yadav.vercel.app/" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Akhil6242/portfolio_web" target="_blank" rel="noopener noreferrer">
                      GitHub Repository
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}



      <div className="portfolio-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="profile-section">
            <div className="profile-image">
              <img
                src="https://avatars.githubusercontent.com/u/181719775?v=4"
                alt="Profile Pic"
                className="profile-image"
              />
            </div>
            <h1 className="profile-name">Akhilesh Yadav</h1>
            <p className="profile-title">Software Developer</p>
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <span>📧</span>
              <div>
                <div style={{fontSize: '0.875rem', color: 'var(--text-secondary)'}}>EMAIL</div>
                <div>akhilyadavbil@gmail.com</div>
              </div>
            </div>
            
            <div className="contact-item">
              <span>📍</span>
              <div>
                <div style={{fontSize: '0.875rem', color: 'var(--text-secondary)'}}>LOCATION</div>
                <div>Delhi NCR, IN</div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/Akhil6242" 
                className="social-icon github" 
                target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                <span className="icon-tooltip">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/akhilesh-yadav-0b83032a5"
                className="social-icon linkedin"
                target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
                <span className="icon-tooltip">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/its__.akhil?igsh=MTZ4MWozMW96cm1rMQ=="
                className="social-icon instagram"
                target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
                <span className="icon-tooltip">Instagram</span>
              </a>
              <a href="https://drive.google.com/file/d/1EIPw99aATw58kXuirYTIkNG6dnyQfrLA/view?usp=sharing"
                className="social-icon resume"
                target="_blank" rel="noopener noreferrer">
                <i className="far fa-file-alt"></i>
                <span className="icon-tooltip">Resume</span>
              </a>
            </div>

          </div>
        </aside>
        
        {/* Main Content */}
        <main className="main-content">
          {/* Navigation */}
          <nav className="top-navigation">
            {['About', 'Resume', 'Portfolio', 'Contact'].map((section) => (
              <button
                key={section}
                className={`nav-button ${activeSection === section ? 'active' : ''}`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </button>
            ))}
          </nav>
          
          {/* Dynamic Content */}
          <div className="content-area">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
