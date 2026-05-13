const skills = [
  "React.js",
  "Vue.js",
  "JavaScript",
  "TypeScript",
  "C#",
  ".NET Core",
  "Node.js",
  "AngularJS",
  "SQL Server",
  "SSRS",
  "Material UI",
  "Tailwind CSS",
];

const highlights = [
  { value: "9+", label: "Years building enterprise software" },
  { value: "8+", label: "Production projects delivered" },
  { value: "4", label: "Modern frontend ecosystems" },
];

const projects = [
  {
    title: "PharmaBill",
    subtitle: "Pharmacy Billing & Inventory Management System",
    description:
      "Full-stack pharmacy management platform with AI-powered billing, inventory tracking, GST invoice generation, purchase workflows, analytics, and reporting.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "MSSQL",
      "Tailwind CSS",
      "Claude API",
      "Gemini API",
    ],
  },
  {
    title: "MainStreet",
    subtitle: "Enterprise Business Application",
    description:
      "Scalable enterprise application focused on module development, responsive interfaces, database-backed workflows, and maintainable service architecture.",
    tech: ["React.js", ".NET Core", "SQL Server"],
  },
  {
    title: "ERP System",
    subtitle: "Business Operations Platform",
    description:
      "ERP platform with business modules, role-aware workflows, reporting solutions, and client-focused architecture for operational teams.",
    tech: ["C#", "AngularJS", "SSRS"],
  },
  {
    title: "Physician Strategy Suite",
    subtitle: "Healthcare Strategy Application",
    description:
      "Healthcare-focused application with responsive Vue interfaces, scalable .NET services, and polished data-heavy user experiences.",
    tech: ["Vue.js", ".NET Core", "Fomantic UI"],
  },
];

const experience = [
  {
    company: "Xcdify Solutions Pvt. Ltd",
    role: "Full Stack Developer",
    location: "Bengaluru, India",
    years: "2017 - Present",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1117]/85 backdrop-blur-xl">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6"
        >
          <a href="#home" className="text-sm font-semibold tracking-wide">
            Dharmendra Yadav
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
          <a
            href="mailto:dharmendra17893@gmail.com"
            className="rounded-md bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            Hire Me
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Full Stack Developer
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building polished web apps for real business workflows.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I am Dharmendra Yadav, a full stack developer specializing in
            React.js, Vue.js, .NET Core, Node.js, SQL Server, and clean
            enterprise application experiences.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              View Projects
            </a>
            <a
              href="mailto:dharmendra17893@gmail.com"
              className="rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-300 hover:text-sky-200"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-sky-400/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 bg-slate-950 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-5 p-6">
              <div>
                <p className="text-sm text-slate-400">Current focus</p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  Scalable product engineering
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-3xl font-bold text-sky-300">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-5 text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-md border border-white/10 bg-[#0d1117] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">
                    Delivery strengths
                  </p>
                  <p className="text-xs text-slate-500">Production ready</p>
                </div>
                <div className="space-y-3">
                  {[
                    "Clean UI architecture",
                    "Backend API integration",
                    "Data-heavy enterprise workflows",
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-sky-400/15 text-xs font-bold text-sky-300">
                        {index + 1}
                      </span>
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="About"
            title="A practical engineer for complex business products."
            description="Since 2017, I have worked on enterprise, ERP, healthcare, and pharmacy platforms where reliability, maintainability, and clear user flows matter."
          />
          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              I build full-stack applications across modern frontend frameworks
              and Microsoft backend ecosystems. My work spans reusable UI
              components, API-connected workflows, reporting, SQL-backed
              features, and responsive product experiences.
            </p>
            <div className="rounded-lg border border-white/10 bg-[#0d1117] p-5">
              {experience.map((item) => (
                <div
                  key={item.company}
                  className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div>
                    <p className="font-semibold text-white">{item.role}</p>
                    <p className="mt-1 text-slate-400">
                      {item.company} · {item.location}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-sky-300">
                    {item.years}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I use to ship maintainable applications."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-medium text-slate-200 transition hover:border-sky-300/50 hover:bg-sky-300/10"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work across product, data, and enterprise systems."
            description="A focused set of platforms built with modern frontend frameworks, service-oriented backend code, reporting, and database-backed business logic."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-lg border border-white/10 bg-[#0d1117] p-6 transition hover:-translate-y-1 hover:border-sky-300/50"
              >
                <div className="mb-6 grid h-32 grid-cols-6 gap-2 rounded-md border border-white/10 bg-slate-950 p-3">
                  <div className="col-span-2 rounded bg-sky-400/20" />
                  <div className="col-span-4 space-y-2">
                    <div className="h-4 rounded bg-white/15" />
                    <div className="h-4 w-4/5 rounded bg-white/10" />
                    <div className="h-4 w-2/3 rounded bg-sky-400/20" />
                  </div>
                  <div className="col-span-6 grid grid-cols-3 gap-2">
                    <div className="rounded bg-white/10" />
                    <div className="rounded bg-white/10" />
                    <div className="rounded bg-sky-400/20" />
                  </div>
                </div>
                <p className="text-sm font-semibold text-sky-300">
                  {project.subtitle}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-white/10 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-6">
        <div className="grid gap-10 rounded-lg border border-white/10 bg-slate-900 p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr]">
          <SectionHeading
            eyebrow="Contact"
            title="Available for full-stack engineering opportunities."
            description="Have a product, enterprise app, or modernization effort in mind? I would be glad to talk through the details."
          />
          <div className="flex flex-col justify-center gap-4 text-sm">
            <a
              href="mailto:dharmendra17893@gmail.com"
              className="rounded-md border border-white/10 bg-[#0d1117] p-4 text-slate-200 transition hover:border-sky-300/50"
            >
              dharmendra17893@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/dharmendra-yadav-299b20b3"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/10 bg-[#0d1117] p-4 text-slate-200 transition hover:border-sky-300/50"
            >
              linkedin.com/in/dharmendra-yadav-299b20b3
            </a>
            <p className="rounded-md border border-white/10 bg-[#0d1117] p-4 text-slate-200">
              Bengaluru, India
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500 sm:px-6">
        © {new Date().getFullYear()} Dharmendra Yadav. Built with Next.js and
        Tailwind CSS.
      </footer>
    </main>
  );
}
