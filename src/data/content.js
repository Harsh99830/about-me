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
  { name: 'FastAPI', icon: 'server' },
  { name: 'Python', icon: 'terminal' },
  { name: 'Postgresql', icon: 'database' },
  { name: 'Supabase', icon: 'database' },
  { name: 'Git', icon: 'code' },
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
    title: 'Fuudr',
    description: 'The ultimate short-form food reel app. Watch video reels of dishes from restaurants near you and order instantly.',
    image: 'https://fuudr.com/banner.png',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    link: 'https://fuudr.com',
    github: '',
  },
  {
    title: 'FewPick',
    description: 'FewPick delivers groceries, snacks, drinks, and essentials to your door in minutes. Order even a small cart.',
    image: '/fewpick.png',
    tags: ['E-commerce', 'React', 'Node.js'],
    link: 'https://fewpick.store',
    github: '',
  },
  {
    title: 'AutoSlay',
    description: 'Smart form filler. Autofill applications in one click and save time applying to jobs and forms.',
    image: 'https://autoslay.vercel.app/banner.png',
    tags: ['Extension', 'Javascript'],
    link: 'https://autoslay.online',
    github: '',
  },
  {
    title: 'STED',
    description: 'The premium platform for mastering Python, Data Science, and Power BI through industry workflows.',
    image: '/sted.png',
    tags: ['Web', 'Development'],
    link: 'https://sted.co.in',
    github: '',
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
