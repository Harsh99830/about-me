// ============================================================
// SITE CONTENT — edit anything here, no need to touch components
// ============================================================

// ---- Basic profile info (shown in navbar + hero) ----
export const profile = {
  name: 'Harsh Agrawal',
  shortName: 'Harsh',        // used in navbar logo
  role: 'Web developer',
  location: '20, Jaipur, India',
  bannerImage: '/banner.png',
  avatarImage: '/avatar.png',
  dreamImage: '/dream.png',
  email: 'harshagrawal7878@gmail.com',
};

// ---- Nav bar links ----
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
];

// ---- About section bullets ----
// "highlight" (optional) gets the accent-colored bold treatment, matched by exact text.
export const aboutItems = [
  {
    text: 'I’m Harsh Agrawal, a developer who enjoys turning ideas into things people can actually use.',
    highlight: 'Harsh Agrawal',
  },
  {
    text: 'Final-year B.Tech CSE (AI & ML) student, constantly exploring new technologies and understanding how they can be used to solve real problems.',
    highlight: 'Final-year B.Tech CSE (AI & ML) student',
  },
  {
    text: 'I build full-stack applications and AI-powered products, from the first idea and architecture to deployment and everything in between.',
    highlight: 'full-stack applications and AI-powered products',
  },
  {
    text: 'My long-term goal is to become a founder and build something truly meaningful, a company that solves a real problem, reaches millions of people, and leaves a lasting impact on the world.',
    highlight: 'founder',
  },
];

// ---- Tech stack pills ----
// icon options: 'code' | 'layout' | 'server' | 'terminal' | 'database' | 'cloud'
export const techStack = [
  { name: 'Javascript', icon: 'code' },
  { name: 'Typescript', icon: 'code' },
  { name: 'React', icon: 'layout' },
  { name: 'Tailwind CSS', icon: 'layout' },
  { name: 'Node.js', icon: 'server' },
  { name: 'Python', icon: 'terminal' },
  { name: 'Postgresql', icon: 'database' },
  { name: 'Docker', icon: 'cloud' },
];

// ---- Contact / social links ----
// icon options: 'github' | 'discord' | 'twitter' | 'resume'
export const socialLinks = [
  { name: 'Github', icon: 'github', url: 'https://github.com/harsh99830' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/harsh-agrawal-a6b260241/' },
  { name: 'Twitter', icon: 'twitter', url: 'https://x.com/Harsh100710' },
  { name: 'Resume', icon: 'resume', url: 'https://drive.google.com/file/d/13SHfO-bHM_QiUXmBlnem0TOWU2r8cZfu/view?usp=sharing' },
];

// ---- Projects page ----
export const projects = [
  {
    title: 'Agentic Workflow Builder',
    description: 'A visual node-based editor for building and deploying AI agent workflows autonomously. Built with React Flow and LangChain.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop',
    tags: ['React', 'LangChain', 'Tailwind'],
    link: '#',
    github: '#',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'High performance data visualization dashboard handling millions of events via WebSockets. Deployed on custom AWS infrastructure.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    tags: ['Next.js', 'PostgreSQL', 'WebSockets'],
    link: '#',
    github: '#',
  },
];

// ---- Work experience page ----
// Add entries here and Work.jsx will render them automatically.
export const workExperience = [
  // {
  //   company: 'Company Name',
  //   role: 'Role Title',
  //   duration: 'Jan 2025 — Present',
  //   description: 'What you did there.',
  // },
];
