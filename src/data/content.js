// ============================================================
// SITE CONTENT — edit anything here, no need to touch components
// ============================================================

// ---- Basic profile info (shown in navbar + hero) ----
export const profile = {
  name: 'Harsh Agrawal',
  shortName: 'Harsh',        // used in navbar logo
  role: 'Frontend Developer',
  location: 'Remote, World',
  bannerImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop',
  avatarImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
  email: '', // e.g. 'you@example.com' — leave blank to keep the mail button decorative
};

// ---- Nav bar links ----
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Work', path: '/work' },
];

// ---- About section bullets ----
// "highlight" (optional) gets the accent-colored bold treatment, matched by exact text.
export const aboutItems = [
  {
    text: 'I am Harsh Agrawal, a passionate developer curious to learn new technologies and build production-ready applications.',
    highlight: 'Harsh Agrawal',
  },
  {
    text: 'Building modern web applications using React, Next.js, and Vite — creating highly interactive and performant user interfaces.',
    highlight: 'modern web applications',
  },
  {
    text: 'Designing scalable systems — from self-hosted infrastructure and Docker pipelines to serverless functions that optimize compute efficiency.',
    highlight: null,
  },
  {
    text: 'Exploring the intersection of Web and AI, integrating LLMs into robust full-stack workflows to solve complex problems.',
    highlight: null,
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
  { name: 'Github', icon: 'github', url: '#' },
  { name: 'Discord', icon: 'discord', url: '#' },
  { name: 'Twitter', icon: 'twitter', url: '#' },
  { name: 'Resume', icon: 'resume', url: '#' },
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
