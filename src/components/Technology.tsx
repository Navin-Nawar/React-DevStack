import React from "react";
import { SiDocker, SiJavascript, SiNextdotjs, SiNodedotjs, SiOpenjdk, SiPostgresql, SiReact, SiRedis, SiSvelte, SiTailwindcss, SiTypescript, SiVuedotjs } from "react-icons/si";


type Technology = {
  name: string;
  description: string;
  category: string;
  level: string;
  rating: string;
  badge?: string;
  badgeColor?: string;
  icon: React.ReactNode;
};

const technologies: Technology[] = [
  {
    name: "React",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: "4.9",
    badge: "Popular",
    badgeColor: "bg-sky-50 text-sky-500",
    icon: <SiReact className="text-cyan-400" />,
  },
  {
    name: "Vue.js",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: "4.8",
    badge: "Versatile",
    badgeColor: "bg-emerald-50 text-emerald-500",
    icon: <SiVuedotjs className="text-green-500" />,
  },
  {
    name: "Svelte",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    category: "Frontend",
    level: "Intermediate",
    rating: "4.8",
    badge: "Fast",
    badgeColor: "bg-orange-50 text-orange-500",
    icon: <SiSvelte className="text-orange-500" />,
  },
  {
    name: "Next.js",
    description:
      "The React framework for full-stack web applications with hybrid static & server rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: "4.9",
    icon: <SiNextdotjs className="text-black" />,
  },
  {
    name: "Node.js",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    level: "Intermediate",
    rating: "4.8",
    badge: "Standard",
    badgeColor: "bg-emerald-50 text-emerald-500",
    icon: <SiNodedotjs className="text-green-500" />,
  },
  {
    name: "PostgreSQL",
    description:
      "A powerful, open-source object-relational database system with proven reliability.",
    category: "Database",
    level: "Intermediate",
    rating: "4.9",
    badge: "Top SQL",
    badgeColor: "bg-blue-50 text-blue-500",
    icon: <SiPostgresql className="text-blue-500" />,
  },
  {
    name: "Redis",
    description:
      "In-memory data structure store used as a high-speed database, cache, and message broker.",
    category: "Database",
    level: "Intermediate",
    rating: "4.8",
    badge: "Cache",
    badgeColor: "bg-red-50 text-red-500",
    icon: <SiRedis className="text-red-500" />,
  },
  {
    name: "JavaScript",
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    category: "Language",
    level: "Beginner-Friendly",
    rating: "4.9",
    badge: "Ubiquitous",
    badgeColor: "bg-yellow-50 text-yellow-600",
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    name: "TypeScript",
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
    category: "Language",
    level: "Intermediate",
    rating: "4.9",
    badge: "Essential",
    badgeColor: "bg-sky-50 text-sky-500",
    icon: <SiTypescript className="text-blue-500" />,
  },
  {
    name: "Java",
    description:
      "A secure, object-oriented programming language designed for portability and scale.",
    category: "Language",
    level: "Intermediate",
    rating: "4.6",
    badge: "Robust",
    badgeColor: "bg-sky-50 text-sky-500",
    icon: <SiOpenjdk className="text-red-500" />,
  },
  {
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: "4.9",
    badge: "Modern",
    badgeColor: "bg-cyan-50 text-cyan-500",
    icon: <SiTailwindcss className="text-cyan-400" />,
  },
  {
    name: "Docker",
    description:
      "A platform designed to build, share, and run containerized applications reliably.",
    category: "DevOps",
    level: "Intermediate",
    rating: "4.9",
    badge: "Containers",
    badgeColor: "bg-blue-50 text-blue-500",
    icon: <SiDocker className="text-blue-500" />,
  },
];

const Technology: React.FC = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-8">
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Explore the{" "}
            <span className="text-pink-500">Technologies</span>
          </h1>

          <p className="mt-1 text-xs text-slate-400">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr_1fr_0.95fr]">

          {/* ================= TECHNOLOGY GRID ================= */}
          <div className="col-span-full grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">

            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.name}
                tech={tech}
              />
            ))}

          </div>

          {/* ================= YOUR STACK ================= */}
          <aside className="hidden h-fit rounded-xl border border-slate-100 bg-white p-4 shadow-sm lg:block">

            <h2 className="text-xs font-semibold text-slate-800">
              Your Stack
            </h2>

            <p className="mt-1 text-[10px] text-slate-400">
              No technologies selected yet.
            </p>

            <div className="mt-3 flex h-20 items-center justify-center rounded-lg border border-dashed border-slate-200">
              <span className="text-[10px] text-slate-300">
                Your stack is empty.
              </span>
            </div>

          </aside>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   TECHNOLOGY CARD
========================================================= */

const TechnologyCard = ({
  tech,
}: {
  tech: Technology;
}) => {
  return (
    <div
      className="
        group
        flex
        min-h-[174px]
        flex-col
        rounded-xl
        border
        border-slate-100
        bg-white
        p-3
        shadow-[0_2px_8px_rgba(15,23,42,0.03)]
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >

      {/* ================= TOP ROW ================= */}
      <div className="flex items-start justify-between">

        {/* Icon */}
        <div className="flex h-8 w-8 items-center justify-center text-2xl">
          {tech.icon}
        </div>

        {/* Badge */}
        {tech.badge && (
          <span
            className={`
              rounded-full
              px-2
              py-0.5
              text-[8px]
              font-medium
              ${tech.badgeColor}
            `}
          >
            {tech.badge}
          </span>
        )}

      </div>

      {/* ================= NAME ================= */}
      <h3 className="mt-2 text-xs font-semibold text-slate-800">
        {tech.name}
      </h3>

      {/* ================= DESCRIPTION ================= */}
      <p className="mt-1 flex-1 text-[9px] leading-4 text-slate-400">
        {tech.description}
      </p>

      {/* ================= META INFORMATION ================= */}
      <div
        className="
          mt-2
          flex
          items-center
          justify-between
          border-t
          border-slate-50
          pt-2
        "
      >

        {/* Category */}
        <span className="rounded bg-slate-50 px-1.5 py-1 text-[8px] text-slate-500">
          {tech.category}
        </span>

        {/* Level */}
        <span className="text-[8px] text-slate-400">
          {tech.level}
        </span>

        {/* Rating */}
        <span className="text-[9px] text-slate-600">
          <span className="text-yellow-400">★</span>{" "}
          {tech.rating}
        </span>

      </div>

      {/* ================= ADD BUTTON ================= */}
      <button
        type="button"
        className="
          btn
          btn-sm
          mt-2
          h-7
          min-h-0
          rounded-md
          border-none
          bg-slate-950
          text-[9px]
          font-normal
          text-white
          hover:bg-slate-800
        "
      >
        Add to Stack
      </button>

    </div>
  );
};

export default Technology;
