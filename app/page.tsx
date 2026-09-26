import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";
import { ThemeToggle } from "./theme-toggle";
import { RoleCarousel } from "./role-carousel";
import { MobileNav } from "./mobile-nav";
import { GitHubActivity } from "./github-activity";

const profile = {
  name: "Rhonel Anthony L. Cortez",
  role: "Computer Science Graduate and Freelance Developer",
  location: "Iguig, Cagayan, Philippines",
  email: "rhonelanthonycortez@gmail.com",
  phone: "+639079204158",
  phoneLabel: "+63 907 920 4158",
  github: "https://github.com/Hit2310",
  linkedin: "https://www.linkedin.com/in/rhonel-anthony-cortez",
  resume: "/assets/Rhonel-Anthony-Cortez-Resume.pdf",
};

const skillGroups = [
  {
    title: "Languages",
    skills: [
      {
        name: "Python",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Dart",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      },
      {
        name: "C#",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      },
      {
        name: "PHP",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "JavaScript",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Java",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "HTML",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    title: "Frameworks & Mobile",
    skills: [
      {
        name: "Next.js",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Flutter",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        name: "Ionic",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
      },
      {
        name: "Angular",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
      },
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      {
        name: "Firebase",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
      },
      {
        name: "Supabase",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
      {
        name: "PostgreSQL",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "XAMPP",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xampp/xampp-original.svg",
      },
      {
        name: "Android Studio",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
      },
    ],
  },
  {
    title: "AI & Vision",
    skills: [
      {
        name: "OpenCV",
        iconSrc:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      },
      { name: "YOLO", fallbackIcon: "YO" },
    ],
  },
];

const projects = [
  {
    name: "GUTVita (LZCAS)",
    type: "Inventory, POS, and MLM System",
    featured: true,
    imageSrc: "/assets/images/LZCAS.png",
    imageAlt: "GUTVita admin dashboard screenshot",
    imageWidth: 1919,
    imageHeight: 1013,
    description:
      "A cross-platform point-of-sale, inventory, and MLM membership system for a multi-branch business, shipped to Android and Windows. Access for six user roles is enforced at three layers: client route guards, Postgres row-level security, and admin-verified Edge Functions. A trigger-driven commission engine locks bonuses at purchase time, caps referral bonuses by package tier, and blocks withdrawals that would overdraw an account.",
    stack: ["Flutter", "Supabase", "PostgreSQL"],
    status: "Client system in production (v1.5.1)",
    proof: "Demo available on request",
  },
  {
    name: "Records Management System",
    type: "Web-based registrar office system",
    imageSrc: "/assets/images/RMS.png",
    imageAlt: "Records Management System dashboard screenshot",
    imageWidth: 1897,
    imageHeight: 957,
    description:
      "A PHP and MySQL records platform built for registrar workflows, digitizing physical student records with authentication, role-based access, and fast search and filtering.",
    stack: ["PHP", "MySQL", "CSS"],
    status: "Private Office System",
    proof: "Not deployed publicly",
  },
  {
    name: "HireGround",
    type: "Mobile Recruiting Platform",
    imageSrc: "/assets/images/HireGround.png",
    imageAlt: "HireGround mobile recruiting platform screenshot",
    imageWidth: 1897,
    imageHeight: 901,
    description:
      "A Flutter and Firebase app that connects job seekers and employers in Tuguegarao, with hybrid recommendation algorithms for personalized job matching, an in-app CV generator, Cloudinary asset storage, and an employer dashboard.",
    stack: ["Flutter", "Firebase", "Cloudinary"],
    status: "Private Mobile App Project",
    proof: "Demo available on request",
  },
  {
    name: "StudyLense",
    type: "AI Engagement Monitoring Prototype",
    description:
      "A computer vision prototype that detects student engagement and disengagement in classroom settings using labeled training data, OpenCV, and YOLO-based real-time detection.",
    stack: ["Python", "OpenCV", "YOLO"],
    status: "Academic prototype in progress",
    proof: "Demo available on request",
  },
];

const experience = [
  {
    title: "Freelance Software Developer",
    org: "Self-employed · Iguig, Cagayan",
    date: "June 2026 - Present",
    detail:
      "Co-developed GUTVita, a production point-of-sale, inventory, and MLM membership app built with Flutter and Supabase and deployed to Android and Windows, working on a team codebase and managing releases.",
  },
  {
    title: "Programming and Office Intern",
    org: "Cagayan State University - Andrews Campus Registrar's Office",
    date: "Dec 2025 - Feb 2026",
    detail:
      "Led development of a Records Management System that streamlined document workflows and reduced manual processing time, managed student asset inventory across 4 departments, and supported enrollment and student records operations.",
  },
  {
    title: "Bachelor of Science in Computer Science",
    org: "Cagayan State University - Carig Campus",
    date: "Sept 2022 - May 2026",
    detail:
      "Graduated with Merit and a GWA of 92.32 as a consecutive Dean's Lister, with coursework and project work spanning software development, databases, mobile apps, and AI-assisted systems.",
  },
];

const highlights = [
  "I build full-stack web and mobile applications, from database design to deployment.",
  "I have shipped production software for real clients and turn client requirements into practical, working systems.",
  "I work across Flutter, Supabase, PostgreSQL, Firebase, PHP, and Python, including OpenCV and YOLO for computer vision.",
];

const featuredProject = projects.find((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

export default function Home() {
  return (
    <main className="site-shell min-h-screen">
      <ScrollReveal />
      <div className="ambient-field" aria-hidden="true">
        <span className="ambient-object ambient-object-1" data-label="&lt;/&gt;" />
        <span className="ambient-object ambient-object-2" data-label="PHP" />
        <span className="ambient-object ambient-object-3" data-label="SQL" />
        <span className="ambient-object ambient-object-4" data-label="AI" />
        <span className="ambient-object ambient-object-5" data-label="01" />
        <span className="ambient-object ambient-object-6" data-label="fn" />
        <span className="ambient-object ambient-object-7" data-label="C#" />
      </div>
      <header className="site-header fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a className="font-semibold tracking-tight" href="#top">
            {profile.name}
          </a>
          <div className="flex items-center gap-3">
            <nav
              className="site-nav hidden items-center gap-5 text-sm sm:flex"
              aria-label="Main navigation"
            >
              <a href="#top">Home</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#github">GitHub</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </nav>
            <MobileNav />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section
        id="top"
        data-reveal
        className="mx-auto flex w-full max-w-6xl flex-col-reverse gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pt-16"
      >
        <div>
          <p className="eyebrow mb-4 inline-flex rounded-md border px-3 py-1 text-sm font-medium">
            Computer Science Graduate · Freelance Developer
          </p>
          <h1 className="text-heading max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
            Building practical software for real clients and communities.
          </h1>
          <p className="text-muted mt-6 max-w-2xl text-lg leading-8">
            I am a computer science graduate and freelance developer who has
            shipped production software for real clients, from a Flutter and
            Supabase point-of-sale system to a PHP records platform for a
            university registrar.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="button-primary inline-flex h-12 items-center justify-center rounded-md px-5 text-sm font-semibold transition"
              href={`mailto:${profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Email me
            </a>
            <a
              className="button-secondary inline-flex h-12 items-center justify-center rounded-md border px-5 text-sm font-semibold transition"
              href="#projects"
            >
              View projects
            </a>
          </div>
        </div>

        <div className="hero-panel relative min-h-[430px] overflow-hidden rounded-lg border p-5">
          <div className="hero-panel-glow absolute inset-0" />
          <div className="relative flex h-full min-h-[390px] flex-col justify-between">
            <div className="hero-panel-meta flex items-center justify-between border-b pb-4 text-sm">
              <span>Portfolio</span>
              <span>{profile.location}</span>
            </div>
            <div className="py-8">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/assets/images/CORTEZ, RHONEL ANTHONY L.JPG"
                  alt="Rhonel Anthony L. Cortez"
                  width={120}
                  height={120}
                  className="h-32 w-32 rounded-lg border object-cover object-top"
                  priority
                />
              </div>
              <p className="hero-accent text-sm uppercase tracking-[0.18em] text-blue-500">
                Available for Programming Roles
              </p>
              <p className="mt-3 text-3xl font-semibold leading-tight">
                <RoleCarousel />
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Web Apps", "Mobile Apps", "AI Systems"].map((item) => (
                <div
                  className="hero-feature rounded-md border p-3 text-sm"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="surface-band border-y" data-reveal>
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-8 sm:px-8 md:grid-cols-3">
          {highlights.map((highlight) => (
            <p className="text-muted text-base leading-7" key={highlight}>
              {highlight}
            </p>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-6xl px-5 py-16 sm:px-8"
        data-reveal
      >
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker text-sm font-semibold uppercase tracking-[0.18em]">
              Selected work
            </p>
            <h2 className="text-heading mt-2 text-3xl font-semibold">
              Notable Projects
            </h2>
          </div>
          <a
            className="text-link text-sm font-semibold hover:underline"
            href={`mailto:${profile.email}?subject=Project%20demo%20request`}
          >
            Request a demo
          </a>
        </div>

        {featuredProject && (
          <article
            className="project-card project-card-featured mb-5 rounded-lg border p-5 shadow-sm lg:grid lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-8 lg:p-6"
            data-reveal
          >
            <div className="project-icon mb-5 overflow-hidden rounded-md lg:mb-0">
              <Image
                src={featuredProject.imageSrc!}
                alt={featuredProject.imageAlt!}
                width={featuredProject.imageWidth}
                height={featuredProject.imageHeight}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 640px, 100vw"
              />
            </div>
            <div>
              <p className="section-kicker text-sm font-medium">
                Featured · {featuredProject.type}
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                {featuredProject.name}
              </h3>
              <p className="text-muted mt-3 text-sm leading-6 sm:text-base sm:leading-7">
                {featuredProject.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {featuredProject.stack.map((tech) => (
                  <span
                    className="tech-chip rounded-md px-2.5 py-1 text-xs font-medium"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-evidence mt-5 flex flex-col gap-2">
                <span>{featuredProject.status}</span>
                <span>{featuredProject.proof}</span>
              </div>
            </div>
          </article>
        )}

        <div className="grid gap-5 md:grid-cols-3">
          {otherProjects.map((project, index) => (
            <article
              className="project-card rounded-lg border p-5 shadow-sm"
              key={project.name}
              data-reveal
            >
              <div className="project-icon mb-5 flex h-36 items-center justify-center overflow-hidden rounded-md">
                {project.imageSrc ? (
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    className="h-full w-full object-cover object-top"
                  />
                ) : project.name === "StudyLense" ? (
                  <div className="coming-soon-preview">
                    <div className="study-lense-visual" aria-hidden="true">
                      <span className="study-lense-frame" />
                      <span className="study-lense-scan" />
                      <span className="study-lense-dot study-lense-dot-1" />
                      <span className="study-lense-dot study-lense-dot-2" />
                      <span className="study-lense-dot study-lense-dot-3" />
                    </div>
                    <div className="coming-soon-badge">
                      <strong>StudyLense</strong>
                      <span>Coming soon</span>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={index === 1 ? "/window.svg" : "/globe.svg"}
                    alt=""
                    width={58}
                    height={58}
                    aria-hidden="true"
                  />
                )}
              </div>
              <p className="section-kicker text-sm font-medium">
                {project.type}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
              <p className="text-muted mt-3 min-h-28 text-sm leading-6">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    className="tech-chip rounded-md px-2.5 py-1 text-xs font-medium"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-evidence mt-5 flex flex-col gap-2">
                <span>{project.status}</span>
                <span>{project.proof}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="skills-band border-y px-5 py-12 sm:px-8"
        data-reveal
      >
        <div className="mx-auto max-w-6xl">
          <div className="skills-intro">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f2c979]">
              Skills
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              A practical stack for web, mobile, and AI prototypes.
            </h2>
            <p className="mt-3 leading-7 text-white/72">
              My strongest tools come from building web systems, mobile apps,
              database-backed workflows, and computer vision prototypes.
            </p>
            <div className="skill-summary mt-5 grid grid-cols-3 gap-2">
              <div>
                <strong>19+</strong>
                <span>tools</span>
              </div>
              <div>
                <strong>3</strong>
                <span>project areas</span>
              </div>
              <div>
                <strong>Full</strong>
                <span>stack</span>
              </div>
            </div>
          </div>

          <div className="skill-groups mt-6 grid gap-3 md:grid-cols-6">
            {skillGroups.map((group) => (
              <article
                className={`skill-group skill-group-${group.title
                  .toLowerCase()
                  .replaceAll(" & ", "-")
                  .replaceAll(" ", "-")}`}
                key={group.title}
                data-reveal
              >
                <h3>{group.title}</h3>
                <div className="skill-grid">
                  {group.skills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      <span className="skill-icon">
                        {skill.iconSrc ? (
                          <Image
                            src={skill.iconSrc}
                            alt=""
                            width={28}
                            height={28}
                            unoptimized
                          />
                        ) : (
                          <span className="skill-fallback-icon">
                            {skill.fallbackIcon}
                          </span>
                        )}
                      </span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GitHubActivity />

      <section
        id="experience"
        className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]"
        data-reveal
      >
        <div>
          <p className="section-kicker text-sm font-semibold uppercase tracking-[0.18em]">
            Background
          </p>
          <h2 className="text-heading mt-2 text-3xl font-semibold">
            Education and experience
          </h2>
        </div>
        <div className="space-y-4">
          {experience.map((item) => (
            <article
              className="project-card rounded-lg border p-5"
              key={`${item.title}-${item.org}`}
              data-reveal
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="section-kicker text-sm">{item.org}</p>
                </div>
                <p className="text-subtle text-sm font-medium">{item.date}</p>
              </div>
              <p className="text-muted mt-3 leading-7">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="contact-section px-5 py-16 sm:px-8"
        data-reveal
      >
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="section-kicker text-sm font-semibold uppercase tracking-[0.18em]">
              Contact
            </p>
            <h2 className="text-heading mt-2 text-3xl font-semibold">
              Let&apos;s build what comes next.
            </h2>
            <p className="text-muted mt-4 max-w-xl leading-7">
              I am open to junior software engineering, web development, and
              mobile development roles, as well as freelance projects.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a className="contact-link" href={`mailto:${profile.email}`} target="_blank" rel="noopener noreferrer">
              {profile.email}
            </a>
            <a className="contact-link" href={`tel:${profile.phone}`} target="_blank" rel="noopener noreferrer">
              {profile.phoneLabel}
            </a>
            <a
              className="contact-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="contact-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="contact-link" href={profile.resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-6xl justify-center px-5 py-8 sm:px-8">
        <a
          href="#top"
          className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-blue-500/10"
        >
          ↑ Back to top
        </a>
      </div>
    </main>
  );
}
