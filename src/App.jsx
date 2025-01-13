import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <div
      className={`
        relative min-h-screen overflow-hidden bg-[#0a0a0f] text-neutral-300 antialiased
        selection:bg-purple-500/20 selection:text-purple-300
        ${
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-700"
        }
      `}
    >
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent md:bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_50%)]" />

        <div
          className="absolute inset-0 opacity-10 md:opacity-20"
          style={{
            backgroundImage: 'url("/noise.png")',
            backgroundSize: "200px 200px",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl md:top-0 md:left-1/4 md:h-96 md:w-96" />
        <div className="absolute -bottom-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl md:bottom-0 md:right-1/4 md:left-auto md:h-96 md:w-96 md:translate-x-1/2" />
      </div>

      <div className="relative">
        <NavBar />

        <main className="mx-auto w-full max-w-7xl">
          <div className="flex min-h-screen flex-col px-4 pt-16 sm:px-6 md:pt-20 lg:px-8">
            <div className="space-y-16 pb-16 md:space-y-32 md:pb-32">
              <Hero />
              <About />
              <Technologies />
              <Experience />
              <Projects />
              <Contact />
            </div>
          </div>
        </main>

        <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent md:h-40" />
      </div>
    </div>
  );
}

export default App;
