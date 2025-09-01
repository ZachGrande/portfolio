import Card from './card';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800">
      <header className="p-4 mb-4">
        <h1 className="flex justify-center mb-2 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl dark:text-white">
          Zach Grande
        </h1>
        <div className="flex justify-center items-center">
          <a href="https://github.com/ZachGrande" className="m-1">
            <Image
              className="w-10 h-10 dark:invert"
              src="/github.svg"
              alt="GitHub"
              width={10}
              height={10}
            />
          </a>
          <a href="https://linkedin.com/in/zach-grande" className="m-1">
            <Image
              className="w-10 h-10"
              src="/linkedin.svg"
              alt="LinkedIn"
              width={10}
              height={10}
            />
          </a>
        </div>
      </header>
      <main className="grow">
        <div className="container mx-auto justify-center md:grid md:grid-cols-2 md:gap-4">
          <Card
            title="Hockey Teeth"
            description="Built with React, hosted with AWS Amplify"
            imageSrc="/hockeyteeth.png"
            siteUrl="https://hockeyteethband.com"
          />
          <Card
            title="Ice Cream Cult"
            description="NextJS with Tailwind CSS, hosted with Vercel"
            imageSrc="/icecreamcult.png"
            siteUrl="https://icecreamcult.com"
          />
          <div className="md:col-span-2 md:flex md:justify-center">
            <Card
              title="Phenomenality"
              description="UW Capstone Project, powered by Firebase"
              imageSrc="/phenomenality.png"
              siteUrl="https://phenomenality.web.app"
            />
          </div>
        </div>
      </main>
      <footer className="p-4 flex justify-center text-gray-400">&copy; Zach Grande 2025</footer>
    </div>
  )
}
