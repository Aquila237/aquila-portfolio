'use client';

import { useEffect } from 'react';

const contactLinks = [
  { label: 'Email', value: 'aquilaananga@gmail.com', href: 'mailto:aquilaananga@gmail.com', icon: 'Email' },
  { label: 'Phone', value: '+1 343 262 4771', href: 'tel:+13432624771', icon: 'Phone' },
  { label: 'GitHub', value: 'github.com/aquilaananga', href: 'https://github.com/Aquila237', icon: 'GitHub' },
  { label: 'LinkedIn', value: 'linkedin.com/in/aquila-ananga-noah-8264a0179', href: 'https://www.linkedin.com/in/aquila-ananga-noah-8264a0179', icon: 'LinkedIn' },
];

const projects = [
  {
    title: 'Terracam Engineering',
    type: 'Corporate Engineering Website',
    image: '/projects/Terracam.jpg',
    description: 'A professional website for an engineering company with services, quote request, Google Maps location, and premium corporate pages.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    live: '#contact',
    github: 'https://github.com/aquilaananga',
  },
  {
    title: 'HTDev',
    type: 'Developer Hiring Platform',
    image: '/projects/HTDev.jpg',
    description: 'A marketplace-style platform where companies discover developers, view profiles, post jobs, and compare service packages.',
    tech: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    live: '#contact',
    github: 'https://github.com/aquilaananga',
  },
   {
    title: 'SkillSync',
    type: 'Java Web App',
    image: '/projects/Skyllsync.jpeg',
    description: 'Authentication, user sessions, activity logs, admin dashboard, Java Servlets, JSP, MySQL, and Tomcat.',
    tech: ['Java', 'JSP', 'MySQL', 'Tomcat'],
    live: '#contact',
    github: 'https://github.com/aquilaananga',
  },
  {
    title: 'LanguageLab',
    type: 'Learning Platform',
    image: '/projects/LanguageLab.jpg',
    description: 'Course enrollment, admin course management, exercises, speech recognition, XP, levels, and progress tracking.',
    tech: ['SvelteKit', 'JavaScript', 'Stores'],
    live: '#contact',
    github: 'https://github.com/Aquila237/LanguageLab',
  },
  {
    title: 'Azure E-Commerce',
    type: 'Cloud Application',
    image: '/projects/AzureEcomm.jpeg',
    description: 'Cloud e-commerce project using React, Node.js, Azure SQL Database, and Azure Blob Storage for product images.',
    tech: ['React', 'Node.js', 'Azure SQL'],
    live: '#contact',
    github: 'https://github.com/aquilaananga',
  },
  {
    title: 'Inventory System',
    type: 'JavaFX Desktop App',
    image: '/projects/Inventorysystem.jpeg',
    description: 'Desktop inventory application with CRUD operations, product management, SQLite storage, and MVC structure.',
    tech: ['JavaFX', 'SQLite', 'MVC'],
    live: '#contact',
    github: 'https://github.com/Aquila237/InventoryManagementSystem',
  },
];

const skills = ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'Java', 'JavaFX', 'SQL', 'MySQL', 'Oracle', 'SQLite', 'PostgreSQL', 'Azure', 'GitHub', 'Docker', 'UI/UX', 'Responsive Design'];
const services = ['Business websites', 'Full-stack web apps', 'Admin dashboards', 'Database design', 'Cloud deployment', 'Portfolio branding'];

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.14 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="gridBg" />
      <div className="glow glowOne" />
      <div className="glow glowTwo" />

      <nav className="nav">
        <a className="brand" href="#top"><span className="brandMark">A</span><span>Aquila Ananga Noah</span></a>
        <div className="navLinks">
          <a href="#top">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#services">Services</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        </div>
        <a className="download" href="/resume.pdf" download>Download Resume</a>
      </nav>

      <section id="top" className="hero">
        <div className="heroText scroll-reveal is-visible">
          <p className="pill">Hello, I&apos;m</p>
          <h1><span className="heroName">Aquila Ananga Noah</span></h1>
          <h2>Software Developer <span>|</span> Cloud Enthusiast <span>|</span> Builder</h2>
          <p className="intro">I build polished digital products with clean code, modern technologies, professional UI, and strong user experience.</p>
          <div className="terminal" aria-label="developer status">
            <p>&gt; Initializing portfolio...</p>
            <p>&gt; Loading projects...</p>
            <p>&gt; Building interface...</p>
            <p>&gt; <strong>Ready.</strong> Welcome to my world! </p>
          </div>
          <div className="buttons"><a className="primary" href="#projects">View My Work →</a><a className="secondary" href="#contact-options">Get In Touch</a><a className="secondary" href="/resume.pdf" download>Download Resume</a></div>
          <div className="heroSocials" aria-label="professional links">
            <a href="https://github.com/Aquila237" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/aquila-ananga-noah-8264a0179" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:aquilaananga@gmail.com">Email</a>
          </div>
        </div>

        <div className="portraitWrap scroll-reveal is-visible">
          <div className="portraitFrame">
            <img src="/profile.jpeg" alt="Aquila Ananga Noah profile picture" />
          </div>
          <span className="availability"><i /> Available for work</span>
        </div>
      </section>

      <section className="techStrip scroll-reveal">
        {['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Azure'].map((item) => <span key={item}>{item}</span>)}
      </section>

      <section className="stats scroll-reveal">
        <div><strong>2+</strong><span>Years Experience</span></div><div><strong>15+</strong><span>Projects Completed</span></div><div><strong>5+</strong><span>Technologies</span></div><div><strong>10+</strong><span>Happy Clients</span></div>
      </section>

      <section id="about" className="section about scroll-reveal">
        <div>
          <p className="sectionLabel">About me</p>
          <h2>Building digital solutions that make <em>impact.</em></h2>
          <p>I&apos;m a Computer Programming and Analysis student at Algonquin College. I create websites, dashboards, database systems, and cloud applications using practical development skills and clean design.</p>
        </div>
        <div className="codeCard">
          <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
          <pre>{`const developer = {\n  name: "Aquila",\n  role: "Software Developer",\n  focus: "Full-stack development",\n  tools: ["React", "Next.js", "Node.js", "Azure"],\n  goal: "Create impact"\n};\n\nwhile (learning) {\n  build();\n  improve();\n  ship();\n}`}</pre>
        </div>
      </section>

      <section id="projects" className="section scroll-reveal">
        <div className="sectionTop"><div><p className="sectionLabel">Featured Projects</p><h2>Selected work</h2></div><a href="#contact-options">Request a project →</a></div>
        <div className="projectConnect">
          <span>Connect with me:</span>
          <a href="https://github.com/aquilaananga" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/aquila-ananga-noah-8264a0179" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:aquilaananga@gmail.com">Email</a>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title} style={{ backgroundImage: `linear-gradient(180deg, rgba(2,6,23,.12), rgba(2,6,23,.94)), url(${project.image})` }}>
              <div className="projectBody"><p>{project.type}</p><h3>{project.title}</h3><span>{project.description}</span><div>{project.tech.map((t) => <small key={t}>{t}</small>)}</div>
                <div className="projectActions">
                  <a href={project.live}>Live / Details</a>
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section scroll-reveal">
        <p className="sectionLabel">What I can do for you</p><h2>Services</h2>
        <div className="serviceGrid">{services.map((s, i) => <article key={s}><b>0{i + 1}</b><h3>{s}</h3><p>Planning, clean UI, responsive development, testing, and documentation for real users.</p></article>)}</div>
      </section>

      <section id="skills" className="section scroll-reveal">
        <p className="sectionLabel">Technical toolkit</p><h2>Skills</h2><div className="skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section id="contact" className="contact scroll-reveal">
        <div><p className="sectionLabel">Let&apos;s connect</p><h2>Let&apos;s build something amazing together</h2><p>I&apos;m open to web development, portfolio, business website, database, and cloud projects.</p></div>
        <div className="buttons"><a className="primary" href="#contact-options">Get In Touch →</a><a className="secondary" href="/resume.pdf" download>Download Resume</a></div>
      </section>

      <section id="contact-options" className="contactOptions scroll-reveal">
        <div className="sectionTop"><div><p className="sectionLabel">Contact options</p><h2>Choose how to reach me</h2></div></div>
        <div className="contactGrid">
          {contactLinks.map((link) => (
            <a className="contactCard" href={link.href} key={link.label} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
              <strong>{link.icon} {link.label}</strong>
              <span>{link.value}</span>
            </a>
          ))}
        </div>
      </section>

      <footer>(c) 2026 Aquila Ananga Noah.All Rights Reserved </footer>
    </main>
  );
}
