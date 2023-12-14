export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4">
        <h1>Zach Grande</h1>
      </header>
      <main className="p-4 flex-grow">
        <h2 className="text-lg">About Me</h2>
        <p>Additional text</p>
        <section className="flex justify-between bg-pastel-pink p-4 mt-4">
          <div>
            <h3>Hockey Teeth</h3>
          </div>
          <div>
            <img className="w-48" src="/logo.png" alt="Hockey Teeth Logo" />
            <a href="https://www.hockeyteethband.com" target="_blank" rel="noopener noreferrer">hockeyteethband.com</a>
          </div>
        </section>
      </main>
      <footer className="p-4 content-center">Footer</footer>
    </div>
  )
}
