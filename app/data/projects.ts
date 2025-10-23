import { Project } from '../components/ProjectGrid';

const currentYear = new Date().getFullYear();

export const projects: Project[] = [
  {
    title: 'Hockey Teeth',
    description:
      'Modern band website featuring music streaming integration, event management, and responsive design optimized for mobile fans.',
    imageSrc: '/hockeyteeth.svg',
    siteUrl: 'https://hockeyteethband.com',
    tags: ['React', 'AWS Amplify', 'TypeScript', 'Responsive'],
    year: `2021 - ${currentYear}`,
    highlights: [
      'Integrated Spotify & Apple Music streaming',
      'Dynamic event calendar with ticket links',
    ],
  },
  {
    title: 'Ice Cream Cult',
    description:
      'Simplistic band website with embedded videos, music streaming, and biography.',
    imageSrc: '/icecreamcult.png',
    siteUrl: 'https://icecreamcult.com',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel', 'Animations'],
    year: '2025',
    highlights: [
      'Animated loading page for first-time visitors',
      'Embedded Spotify albums',
    ],
  },
  {
    title: 'Phenomenality',
    description:
      'Educational platform developed as UW capstone project encouraging students to record their accomplishments.',
    imageSrc: '/phenomenality.png',
    siteUrl: 'https://phenomenality.web.app',
    tags: ['Firebase', 'React', 'Cloud Functions', 'Authentication'],
    year: '2022',
    highlights: ['Real-time database', 'Tagging system for achievements'],
  },
];
