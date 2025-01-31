import Card from './card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800">
      <header className="p-4 mb-4">
        <h1 className="flex justify-center mb-2 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl dark:text-white">
          Zach Grande
        </h1>
        <div className="flex justify-center items-center">
          <a href="https://github.com/ZachGrande" className="m-1">
            <img className="w-10 h-10" src="/github.svg" alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/zach-grande" className="m-1">
            <img className="w-10 h-10" src="/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto justify-center">
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
        </div>
      </main>
      <footer className="p-4 flex justify-center text-gray-400">&copy; Zach Grande 2024</footer>
    </div>
  )
}
