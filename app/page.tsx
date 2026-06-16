const projects = [
  {
    title: 'SkillSync',
    type: 'Java Web Application',
    description: 'A team project built with Java Servlets, JSP, MySQL, and Tomcat. It includes login, user sessions, activity logs, and an admin dashboard.',
    tech: ['Java', 'JSP', 'Servlets', 'MySQL', 'Tomcat'],
  },
  {
    title: 'LanguageLab',
    type: 'Language Learning Platform',
    description: 'A SvelteKit learning app with course enrollment, admin course management, interactive exercises, XP, levels, and progress tracking.',
    tech: ['SvelteKit', 'JavaScript', 'LocalStorage', 'Trello'],
    github: "https://github.com/Aquila237/LanguageLab",
    demo: "https://youtu.be/XztRzW7SX30"

  },
  {
    title: 'SchoolBites',
    type: 'Meal Booking System',
    description: 'A student meal booking system with booking endpoints, duplicate booking prevention, role checks, and dashboard functionality.',
    tech: ['Node.js', 'Express', 'SvelteKit', 'PostgreSQL'],
     github: 'https://github.com/Aquila237/SchoolBites',
  },
  {
    title: 'Azure E-Commerce Platform',
    type: 'Cloud Application',
    description: 'A cloud-based e-commerce project using React, Node.js, Azure SQL Database, and Azure Blob Storage for product image uploads.',
    tech: ['React', 'Node.js', 'Azure SQL', 'Blob Storage'],
  },
  {
    title: 'Inventory Management System',
    type: 'JavaFX Desktop Application',
    description: 'A desktop inventory application with CRUD operations, product management, SQLite storage, and MVC structure.',
    tech: ['JavaFX', 'SQLite', 'MVC', 'SQL'],
     github: "https://github.com/Aquila237/InventoryManagementSystem",
     demo: "https://youtu.be/2Nc2z0T5Xcw"
  },
];

const skills = ['Java', 'JavaScript', 'TypeScript', 'SQL', 'Python', 'HTML', 'CSS', 'Node.js', 'Express.js', 'SvelteKit', 'React', 'Next.js', 'MySQL', 'Oracle', 'SQLite', 'PostgreSQL', 'Azure', 'Git', 'GitHub', 'Docker'];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <strong>Aquila Ananga Noah</strong>
        <div>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        
  <img
    src="/profile.jpeg"
    alt="Aquila Ananga Noah"
    className="profileImage"
  />
        <p className="tag">Software Developer | Cloud Enthusiast | Business Intelligence Student</p>
        <h1>Building practical software solutions for real-world problems.</h1>
        <p className="intro">
          I am a Computer Programming and Analysis student at Algonquin College, expected to graduate in August 2026. I build full-stack, database-driven, and cloud-based applications using modern development tools.
        </p>
        <div className="buttons">
          <a className="primary" href="#projects">View Projects</a>
          <a className="secondary" href="/Resume.pdf">Download Resume</a>
        </div>
      </section>

      <section className="section">
        <h2>About Me</h2>
        <p>
          I have experience with Java, JavaScript, Node.js, SvelteKit, React, SQL databases, and Microsoft Azure. My academic and personal projects focus on authentication, dashboards, CRUD systems, cloud storage, project management, and business intelligence concepts.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Featured Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <p className="projectType">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="chips">
                {project.tech.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="projectLinks">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>
<a
  href={project.demo}
  target="_blank"
  rel="noopener noreferrer"
>
  Demo Video
</a>
 
</div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <div className="skills">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <div className="card">
          <p className="projectType">Academic Project Role</p>
          <h3>Project Manager & Front-End Developer — LanguageLab</h3>
          <p>
            Managed sprint planning, organized Trello tasks, coordinated team progress, and developed front-end features including course enrollment, progress tracking, and interactive exercises.
          </p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:aquilaananga@gmail.com">aquilaananga@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/Aquila237">github.com/aquilaananga</a></p>
        <p>LinkedIn: <a href="www.linkedin.com/in/aquila-ananga-noah-8264a0179">My Linkedln </a></p>
        <p>Location: Ottawa, Ontario, Canada</p>
      </section>
      <footer className="footer">
  <p>
    Created by <strong>Aquila Ananga Noah</strong> | © 2026 All Rights Reserved
  </p>
</footer>
    </main>
  );
}
