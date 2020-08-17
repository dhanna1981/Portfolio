import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dan, | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my Porfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Dan',
  subtitle: 'Let me help you grow your Small Business',
  cta: 'Connect',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'react.jpg',
    title: 'React JS Builds',
    info: 'Check out some of the web applications I have built with React Js.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wordpress.jpg',
    title: 'WordPress Website Builds',
    info: 'Check out some of the websites I have built with WordPress',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Shoppify.PNG',
    title: 'Shopify E Commerce Store Builds',
    info: 'Check out some of the online stores I have built on the Shopify Platform',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Lets Connect',
  btn: 'Email',
  email: 'dhanna@sbhelpgroup.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dan-hanna-55160029/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dhanna1981',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
