export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 mb-4">
        <h1 className="flex justify-center mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Zach Grande
        </h1>
        <div className="flex justify-center items-center">
          <a href="https://github.com/ZachGrande" className="m-1">
            <img className="w-10" src="/github.svg" alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/zach-grande" className="m-1">
            <img className="w-10" src="/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto justify-center">
          <div className="p-4 m-4 bg-card-brown rounded-xl shadow-lg">
            <h1 className="flex justify-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 sm: text-2xl md:text-3xl lg:text-4xl dark:text-white">
              Hockey Teeth
            </h1>
            <p className="flex justify-center text-lg font-normal lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Built with React, hosted with AWS Amplify & EC2.
            </p>
            <div className="flex flex-col justify-center items-center">
              <div>
                <img className="max-w-sm mb-6" src="/logo.png" alt="Hockey Teeth" />
              </div>
              <a href="https://hockeyteethband.com" className="inline-flex items-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                  Visit the site
                  <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="p-4 flex justify-center text-gray-400">&copy; Zach Grande 2024</footer>
    </div>
  )
}
