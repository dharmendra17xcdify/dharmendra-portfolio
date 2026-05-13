export default function Portfolio() {
  const skills = [
    'ReactJs',
    'VueJs',
    'JavaScript',
    'C#',
    'Dot Net Core',
    'NodeJs',
    'AngularJs',
    'SQL Server',
    'SSRS',
    'Material UI',
  ];

  const projects = [
    {
      title: 'PharmaBill — Pharmacy Billing & Inventory Management System',
      description: 'A full-stack pharmacy management platform with AI-powered billing, inventory tracking, GST invoice generation, purchase management, analytics, and business reporting capabilities.',
      tech: ['Next.js 15', 'React 19', 'TypeScript', 'MSSQL', 'Tailwind CSS', 'Claude API', 'Gemini API'],
    },
    {
      title: 'MainStreet',
      description: 'Enterprise application built with ReactJs, SQL Server, and Dot Net Core focused on scalable module development and modern UI experiences.',
      tech: ['ReactJs', 'Dot Net Core', 'SQL Server'],
    },
    {
      title: 'ERP System',
      description: 'ERP platform with scalable business modules, reporting solutions, and client-focused architecture using AngularJs and C#.',
      tech: ['C#', 'AngularJs', 'SSRS'],
    },
    {
      title: 'Physician Strategy Suite',
      description: 'Healthcare-focused application developed with VueJs and Dot Net Core featuring responsive UI and scalable backend systems.',
      tech: ['VueJs', 'Dot Net Core', 'Fomantic UI'],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_30%)]" />

      <header className="sticky top-0 z-20 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold tracking-wide">Dharmendra Yadav</h1>
          <nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-indigo-400">Portfolio</p>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Hi, I’m <span className="text-indigo-400">Dharmendra Yadav</span>
            </h2>
            <p className="mt-4 text-xl text-zinc-300 md:text-2xl">Full Stack Developer • React Developer • Modern Web Applications</p>
            <p className="mt-6 max-w-xl text-zinc-400">
              Experienced Full Stack Developer with expertise in ReactJs, VueJs, C#, Dot Net Core, and NodeJs. Passionate about building scalable applications, clean interfaces, and efficient digital solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-500"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-6 shadow-2xl backdrop-blur">
              <div className="mb-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
                <div className="h-4 w-2/3 rounded bg-zinc-800" />
                <div className="h-4 w-full rounded bg-zinc-900" />
                <div className="h-4 w-5/6 rounded bg-zinc-900" />
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
                    <p className="text-2xl font-bold text-indigo-400">8+</p>
                    <p className="text-sm text-zinc-400">Projects</p>
                  </div>
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
                    <p className="text-2xl font-bold text-cyan-400">9+</p>
                    <p className="text-sm text-zinc-400">Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">About</p>
            <h3 className="text-3xl font-semibold">Building digital experiences that feel premium.</h3>
            <p className="mt-4 max-w-3xl text-zinc-400">
              I am a Full Stack Developer currently working at Xcdify Solutions Pvt. Ltd, Bengaluru since 2017. I specialize in building scalable enterprise applications using ReactJs, VueJs, C#, Dot Net Core, AngularJs, SQL Server, and NodeJs. I enjoy creating modern user experiences with clean architecture and high-performance applications.
            </p>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-12">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-zinc-500">Skills</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 text-zinc-300 backdrop-blur">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-500">Projects</p>
              <h3 className="text-3xl font-semibold">Selected Work</h3>
              <p className="mt-3 max-w-2xl text-zinc-400">A collection of enterprise applications, healthcare systems, ERP platforms, and AI-powered full-stack products built with modern technologies.</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-zinc-700">
                <div className="mb-4 h-40 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/10" />
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">Contact</p>
            <h3 className="text-3xl font-semibold">Let’s build something great.</h3>
            <p className="mt-4 text-zinc-400">Email: dharmendra17893@gmail.com • LinkedIn: linkedin.com/in/dharmendra-yadav-299b20b3 • Bengaluru, India</p>
          </div>
        </section>
      </main>
    </div>
  );
}
