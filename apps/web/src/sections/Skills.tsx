import { motion } from "framer-motion";
import Heading from "../../src/components/core/heading.tsx";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const row = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

interface SkillGroup {
  label: string;
  items: string[];
}

const SKILLS: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    label: "Backend",
    items: ["NestJS", "Node.js", "REST APIs", "WebSockets"],
  },
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: "Dev & Tooling",
    items: ["Git", "Docker", "Turborepo", "Vite", "ESLint"],
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:border-foreground/25 hover:text-foreground select-none cursor-default">
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <Heading
          title="Skills"
          subtitle="What I'm strong at"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 space-y-6"
        >
          {SKILLS.map((group) => (
            <motion.div
              key={group.label}
              variants={row}
              className="grid grid-cols-[120px_1fr] items-start gap-4 md:grid-cols-[160px_1fr]"
            >
              <span className="pt-1 text-sm font-medium text-foreground/60">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}