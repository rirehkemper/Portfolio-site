export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center text-center px-6 py-20 space-y-8">
      <h1 className="text-5xl font-extrabold text-white">
        Building Intelligent Systems That Make Life Easier
      </h1>

      <p className="max-w-3xl text-gray-300">
        I’m <span className="text-accent font-semibold">Allen Rehkemper</span> — 
        an AI-focused software engineer and IT director who turns complex challenges
        into clean, scalable solutions. With a background spanning cybersecurity,
        full-stack development, and network infrastructure, I blend creative problem-solving
        with technical precision to build tools that actually make a difference.
      </p>

      <a
        href="#projects"
        className="bg-accent text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition transform"
      >
        View My Work
      </a>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-5xl">
        <div className="feature-card float">
          <h3 className="text-accent font-bold text-lg mb-2">AI & Automation</h3>
          <p className="text-gray-400 text-sm">
            Developed intelligent data integrations and APIs that automate tasks,
            from dynamic lesson plan generation to smart pricing tools.
          </p>
        </div>

        <div className="feature-card float">
          <h3 className="text-accent font-bold text-lg mb-2">Software & Web Development</h3>
          <p className="text-gray-400 text-sm">
            Built secure, scalable web apps using Python (Flask), JavaScript, C#, and Next.js.
            Designed systems that integrate AI, databases, and real-time interactivity.
          </p>
        </div>

        <div className="feature-card float">
          <h3 className="text-accent font-bold text-lg mb-2">Leadership & Systems</h3>
          <p className="text-gray-400 text-sm">
            Managed district-wide IT infrastructure, implemented cybersecurity frameworks,
            and modernized multi-campus networks with automation and visibility in mind.
          </p>
        </div>
      </div>

      <footer className="pt-8 text-sm text-gray-500">
        <strong className="text-accent">Tech Stack</strong><br />
        Python • Flask • JavaScript • React • Next.js • C# • SQL • AI Integration • Network Security
      </footer>
    </main>
  );
}
