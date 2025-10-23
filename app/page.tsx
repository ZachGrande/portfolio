import Card from './card';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-12 max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-6">
            Zach Grande
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Software Engineer
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/ZachGrande" 
              className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              <Image
                className="w-5 h-5 dark:invert"
                src="/github.svg"
                alt="GitHub"
                width={20}
                height={20}
              />
              GitHub
            </a>
            <span className="text-gray-300 dark:text-gray-700">·</span>
            <a 
              href="https://linkedin.com/in/zach-grande" 
              className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              <Image
                className="w-5 h-5"
                src="/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
              LinkedIn
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-8">
            Selected Work
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card
              title="Hockey Teeth"
              description="Modern band website featuring music streaming integration, event management, and responsive design optimized for mobile fans."
              imageSrc="/hockeyteeth.svg"
              siteUrl="https://hockeyteethband.com"
              tags={['React', 'AWS Amplify', 'TypeScript', 'Responsive']}
              year="2021 - 2025"
              highlights={[
                'Integrated Spotify & Apple Music streaming',
                'Dynamic event calendar with ticket links'
              ]}
            />
            <Card
              title="Ice Cream Cult"
              description="Simplistic band website with embedded videos, music streaming, and biography."
              imageSrc="/icecreamcult.png"
              siteUrl="https://icecreamcult.com"
              tags={['Next.js', 'Tailwind CSS', 'Vercel', 'Animations']}
              year="2025"
              highlights={[
                'Animated loading page for first-time visitors',
                'Embedded Spotify albums'
              ]}
            />
            <Card
              title="Phenomenality"
              description="Educational platform developed as UW capstone project encouraging students to record their accomplishments."
              imageSrc="/phenomenality.png"
              siteUrl="https://phenomenality.web.app"
              tags={['Firebase', 'React', 'Cloud Functions', 'Authentication']}
              year="2022"
              highlights={[
                'Real-time database',
                'Tagging system for achievements'
              ]}
            />
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-8 max-w-6xl">
          <p className="text-sm text-gray-500 dark:text-gray-500">&copy; {new Date().getFullYear()} Zach Grande</p>
        </div>
      </footer>
    </div>
  );
}
