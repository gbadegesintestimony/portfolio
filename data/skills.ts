export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Go", "TypeScript", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend & Styling",
    skills: ["Tailwind CSS", "React", "Next.js", "Vite", "Responsive Design", "CSS Modules"],
  },
  {
    title: "Backend & Runtimes",
    skills: ["Node.js", "Express.js", "NestJS", "Gin", "REST APIs", "WebSockets", "Background Workers"],
  },
  {
    title: "Databases & ORMs",
    skills: ["PostgreSQL (Supabase)", "MongoDB", "Redis", "Prisma ORM", "GORM"],
  },
  {
    title: "Security & Auth",
    skills: [
      "JWT Rotation",
      "Session-Based Auth",
      "RBAC",
      "CSRF Protection",
      "Rate Limiting",
      "Input Validation",
      "Scrypt / Bcrypt",
      "Secure Cookies",
      "Audit Logging",
      "SQL Injection Prevention",
    ],
  },
  {
    title: "Observability & Reliability",
    skills: [
      "Structured Logging",
      "Pino",
      "Sentry",
      "Better Stack",
      "Grafana Cloud / Loki",
      "Correlation IDs",
      "Log Redaction",
      "Error Handling",
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Git / GitHub", "pnpm", "Turborepo", "BullMQ", "Render", "AWS EC2", "CI/CD Pipelines"],
  },
];
