import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Matthew de la Rosa | GT CS 22', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Matthew',
  subtitle: 'CS developer and student',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Headshot.jpg',
  paragraphOne:
    'I am a student attending Georgia Institute of Technology as a computer science major. I began my interest in computers at a young age by playing online video games. This piqued my interest and in high school I began taking some coding classes. After high school when I first began attending college, I wanted to focus on cyber security and one day make my own anti-virus software. After taking some more coding classes my interests shifted more into the UI aspect of computer science. I then changed my concentrations to be more focused in app development and UI. Since then, I love creating apps and making user interfaces that are visually aesthetic as well as easy to navigate. ',
  paragraphTwo:
    'In the past I have done a lot of object-oriented programming focused on data structures and algorithms. I’ve had multiple group projects that spanned the course of a semester or more to put together a functional app that has many layers and depth. Some of the C work that I’ve done has consisted of creating games for the GBA in a variety of modes as well as implementing sprites and different states.',
  paragraphThree: 'My preferred languages to use are Python, Java, and C.',
  resume:
    'https://docs.google.com/document/d/1JOoGVHvlZRnSDVLovOzmVuJcGCFLERD4hYKURC_aGz0/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'literacyapppic.jpg',
    title: '3rd Grade Literacy App',
    info: 'This is a literacy app used to help 3rd graders learn basic word structures.',
    info2: '',
    url: '',
    repo: 'https://github.com/mattthematt76-crypto/3rd-grade-literacy-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'spaceinvaderspic.jpg',
    title: 'Space Invaders',
    info: 'This is a recreation of the classic game Space Invaders.',
    info2: '',
    url: '',
    repo: 'https://github.com/mattthematt76-crypto/Space-Invaders', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ast.jpg',
    title: 'Asteroids',
    info: 'This is a recreation of the classic game Asteroids.',
    info2: '',
    url: '',
    repo: 'https://github.com/mattthematt76-crypto/Asteroids', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email',
  email: 'mrosa9@gatech.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mattthematt76-crypto',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
