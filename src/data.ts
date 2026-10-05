// All the site's content lives here. Edit this file to change text; use **double asterisks** for bold.

export const profile = {
  name: 'Zahra Haghjoo',
  role: 'Senior Frontend Engineer, React & TypeScript',
  place: 'Tehran, Iran',
  email: 'zahrahaghjo75@gmail.com',
  github: 'https://github.com/zahrahaghjo',
  linkedin: 'https://www.linkedin.com/in/zahrahaghjo',
  summary: [
    'I am a front-end developer specializing in React and TypeScript, with more than 7 years of experience building and maintaining production web applications. I work on scalable frontend architecture, REST API integration, server-side data, reusable UI components and Nx monorepos.',
    'I debug, test and tune performance, and I resolve production issues. I work closely with Product, Design and Backend teams to turn requirements and designs into reliable, maintainable products, with a focus on code quality, user experience and predictable delivery.',
  ],
}

export const nav = [
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export type Job = { when: string; title: string; org: string; bullets: string[] }

export const jobs: Job[] = [
  {
    when: 'Aug 2023 – Mar 2026',
    title: 'React Developer',
    org: 'Butane Industrial Group, Tehran',
    bullets: [
      'Developed and maintained production-grade web applications using **React, TypeScript, Redux Toolkit and RTK Query**.',
      'Worked within an **Nx monorepo architecture**, contributing to reusable and maintainable frontend modules.',
      'Built reusable UI components and implemented complex business requirements across multiple product areas.',
      'Integrated REST APIs and handled loading, error, empty and edge-case states in production features.',
      'Collaborated closely with Backend, Product and Design teams to translate business requirements and UI designs into production-ready interfaces.',
      'Investigated and resolved frontend bugs and production issues through systematic debugging and root-cause analysis.',
      'Worked on responsive interfaces and ensured consistent UI behavior across different screen sizes.',
      'Contributed to improving frontend code quality through reusable patterns, custom hooks, component refactoring and maintainable architecture.',
      'Participated in testing and debugging activities during feature development and production releases.',
      'Worked in a fast-paced environment with changing priorities and tight delivery timelines.',
    ],
  },
  {
    when: 'Dec 2021 – Jul 2023',
    title: 'React Developer',
    org: 'MCI / Boomrang, Tehran',
    bullets: [
      'Developed frontend features using **React, JavaScript/TypeScript, REST APIs and modern component-based architecture**.',
      'Implemented responsive and reusable user interfaces based on product requirements and UI designs.',
      'Integrated backend services and managed API-related states, including loading and error scenarios.',
      'Worked with reusable UI libraries and component systems to maintain consistency across the application.',
      'Collaborated with backend developers, designers and other frontend developers throughout the development lifecycle.',
      'Debugged frontend issues and improved application stability and maintainability.',
      'Used Git-based workflows for collaborative development and code management.',
    ],
  },
  {
    when: 'May 2020 – Dec 2022',
    title: 'Mentor / Instructor',
    org: 'Maktab Sharif, Tehran',
    bullets: [
      'Mentored students in frontend development and programming concepts.',
      'Explained JavaScript and frontend development concepts through practical examples and problem-solving.',
      'Helped learners understand development workflows, debugging techniques and software development practices.',
      'Strengthened communication, technical explanation and knowledge-sharing skills through regular mentoring.',
    ],
  },
  {
    when: 'Nov 2018 – Jan 2021',
    title: 'React Developer',
    org: 'Asarad, Tehran',
    bullets: [
      'Developed web applications and reusable frontend components using **React and JavaScript**.',
      'Implemented responsive user interfaces based on business requirements and UI designs.',
      'Integrated REST APIs and handled frontend data and application states.',
      'Identified and resolved UI and functional issues through debugging and testing.',
      'Collaborated with team members to deliver frontend features within project deadlines.',
    ],
  },
]

export type OrgKey = 'butane' | 'asarad' | 'boomrang-mci' | 'saipa'

export const orgFilters: { key: OrgKey; label: string }[] = [
  { key: 'butane', label: 'Butane group' },
  { key: 'asarad', label: 'Asarad' },
  { key: 'boomrang-mci', label: 'Boomrang & MCI' },
  { key: 'saipa', label: 'Saipa' },
]

export type Project = {
  name: string
  org: string
  group: OrgKey
  text?: string
  tags?: string[]
}

const nxStack = ['Nx', 'React', 'Material UI', 'Vite']

export const projects: Project[] = [
  { name: 'Installment Store', org: 'Butane', group: 'butane', tags: nxStack },
  {
    name: 'Exhibition Landing',
    org: 'Butane, ChiniCord, AzarGarma, ButaneRun',
    group: 'butane',
    text: 'Landing page where companies register as participants for exhibition booths.',
  },
  {
    name: 'Waybill system',
    org: 'ButaneRun · May to Jul 2025',
    group: 'butane',
    text: 'Lets drivers and organizations deliver cargo and register waybills electronically.',
    tags: nxStack,
  },
  {
    name: 'FamilyShop',
    org: 'Butane',
    group: 'butane',
    text: 'Internal store that gives factory workers essential products at affordable prices.',
    tags: nxStack,
  },
  {
    name: 'Porsojoo',
    org: 'Butane',
    group: 'butane',
    text: 'Platform for running internal competitions inside the organization.',
    tags: nxStack,
  },
  {
    name: 'Academy',
    org: 'Butane',
    group: 'butane',
    text: 'Specialized training courses and the certification employees need for their profession.',
    tags: nxStack,
  },
  {
    name: 'Employee entry and exit permit system',
    org: 'Saipa',
    group: 'saipa',
    text: 'Records attendance, issues permits and tracks movements, with separate access levels for security, managers and others.',
  },
  {
    name: 'Career Progression system',
    org: 'HamrahAval (MCI)',
    group: 'boomrang-mci',
    text: 'Employee evaluation system.',
    tags: ['React', 'Material UI', 'Redux'],
  },
  {
    name: 'Manday',
    org: 'Boomrang',
    group: 'boomrang-mci',
    text: 'Task management and project planning system, similar to Jira and Trello.',
  },
  {
    name: 'Foodidoodie',
    org: 'Boomrang',
    group: 'boomrang-mci',
    text: 'English-language app for ordering and sending food in Australia, similar to Snappfood.',
  },
  {
    name: 'Behine WebApp',
    org: 'Asarad',
    group: 'asarad',
    text: "Food-rescue startup platform that sells restaurants' end-of-day surplus food to customers at lower prices.",
    tags: ['React', 'Redux', 'Material UI'],
  },
  {
    name: 'Accounting system',
    org: 'Asarad',
    group: 'asarad',
    text: 'Accounting system similar to Hesabfa.',
    tags: ['React', 'Material UI'],
  },
  {
    name: 'Namlik',
    org: 'Asarad',
    group: 'asarad',
    text: 'Podcast streaming website. Next.js keeps data loading fast.',
    tags: ['Next.js'],
  },
  { name: 'Smart trade', org: 'Asarad', group: 'asarad', tags: ['DevExtreme', 'React', 'Webpack'] },
  {
    name: 'Marco wedding card store',
    org: 'Asarad',
    group: 'asarad',
    text: 'Website for designing and selling wedding invitation cards.',
  },
  { name: 'Asarad company site', org: 'Asarad', group: 'asarad', tags: ['Laravel', 'MySQL', 'Blade', 'Sass'] },
]

export const focus: { title: string; bullets: string[] }[] = [
  {
    title: 'Scalable frontend architecture',
    bullets: [
      'Experience working with **Nx monorepos** and shared frontend modules.',
      'Strong understanding of reusable React components and custom hooks.',
      'Experience organizing frontend code for maintainability and scalability.',
    ],
  },
  {
    title: 'API and server data',
    bullets: [
      'Hands-on experience integrating RESTful APIs.',
      'Extensive use of **RTK Query** for server state and API data management.',
      'Experience handling loading, error, empty and edge-case states in production applications.',
    ],
  },
  {
    title: 'UI and component development',
    bullets: [
      'Strong experience translating UI/UX designs into production-ready React interfaces.',
      'Experience with **Material UI, Ant Design, DevExtreme, Reactstrap, Sass, Less and CSS**.',
      'Focus on reusable components and consistent user experiences.',
    ],
  },
  {
    title: 'Debugging and performance',
    bullets: [
      'Hands-on experience investigating frontend bugs and production issues.',
      'Experience debugging UI, API integration, state management and rendering-related problems.',
      'Focus on maintainable code, reusable patterns and reliable production behavior.',
    ],
  },
]

export const skills: { label: string; items: string[] }[] = [
  {
    label: 'Frontend',
    items: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'Next.js',
      'HTML5 / CSS3',
      'Responsive web design',
      'Custom hooks',
      'Component-based architecture',
    ],
  },
  {
    label: 'State and data',
    items: [
      'Redux Toolkit',
      'RTK Query',
      'REST APIs',
      'Server data management',
      'API integration',
      'Authentication and error handling',
    ],
  },
  {
    label: 'Architecture and tooling',
    items: [
      'Nx monorepo',
      'Webpack',
      'Git',
      'Reusable component architecture',
      'Frontend debugging',
      'Performance optimization',
    ],
  },
  {
    label: 'UI and design systems',
    items: [
      'Material UI',
      'Ant Design',
      'DevExtreme',
      'Reactstrap',
      'Sass / Less / CSS',
      'UI/UX implementation',
      'Reusable UI components',
      'Design-to-code implementation',
    ],
  },
  {
    label: 'Engineering practices',
    items: [
      'Code review',
      'Testing and debugging',
      'Production troubleshooting',
      'Cross-functional collaboration',
      'Technical documentation',
      'Agile development',
      'Remote collaboration',
    ],
  },
]

export const background: { when: string; title?: string; org?: string; notes?: string[] }[] = [
  {
    when: 'Sep 2019 – Feb 2022',
    title: 'Master of Science, E-Commerce',
    org: 'Faran University',
  },
  {
    when: 'Sep 2014 – Feb 2018',
    title: 'Bachelor of Science, Information Technology',
    org: 'Abrar University',
  },
  {
    when: 'Languages',
    notes: ['**English**, professional working proficiency (C1)', '**Persian**, native'],
  },
  {
    when: 'Working style',
    notes: [
      'Experienced in remote and cross-functional collaboration, with strong communication and problem-solving skills. Comfortable working with deadlines and production-critical tasks.',
    ],
  },
  {
    when: 'Interests',
    notes: [
      'Modern frontend architecture, developer tooling, AI-assisted development and scalable product engineering.',
    ],
  },
]
