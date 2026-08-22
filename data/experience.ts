export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "vaelis-group",
    role: "Backend Engineer",
    company: "Vaelis Group",
    location: "Remote",
    period: "June 2026 — Present",
    type: "Engineering / FinTech",
    description:
      "Contributed to the development of secure full-stack and backend systems, focusing on financial technology, transaction processing, API development, background execution, PostgreSQL persistence, security, and observability.",
    highlights: [
      "Strengthened reliability and production readiness of backend services through strict validation, error handling, caching, and external-service resilience.",
      "Enhanced production observability by implementing structured JSON logging, request correlation IDs, centralized log aggregation, and consistent monitoring standards.",
      "Engineered durable background execution patterns, job queues, worker leases, and stale worker protection.",
      "Collaborated within a remote engineering team through Git-based workflows, code reviews, issue tracking, and iterative software delivery.",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Turborepo", "Node.js", "Pino", "Docker"],
  },
  {
    id: "asoro-automotive",
    role: "Full-Stack Engineer",
    company: "Asoro Automotive",
    location: "Remote (Benin, Nigeria)",
    period: "Feb 2026 — Present",
    type: "Full-Stack Engineering",
    description:
      "Contributed to the development of a full-stack performance review platform implementing employee self-evaluations, competency ratings, goals, growth areas, achievements, reviews, and notifications.",
    highlights: [
      "Developed backend authentication and authorization with JWT, role-based access control (RBAC), request validation, and rate limiting.",
      "Structured business logic through dedicated service layers and integrated the React frontend with configurable REST API clients for deployment.",
      "Collaborated closely with senior developers to deliver high-quality production features.",
    ],
    technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Tailwind CSS"],
  },
  {
    id: "cgrowth",
    role: "Full-Stack Engineer (Contract)",
    company: "CGROWTH",
    location: "Remote",
    period: "June 2026 — July 2026",
    type: "Contract / Production",
    description:
      "Sole Full-Stack Engineer, architecting and building a multi-tenant church analytics and business intelligence platform end-to-end with dual-layer tenant/branch data isolation and role-based access for executive administrators and branch pastors.",
    highlights: [
      "Built an executive analytics platform featuring real-time dashboards, branch health scoring, historical insights, automated PDF reports, and cross-branch performance monitoring.",
      "Engineered validated reporting workflows, Redis/BullMQ background processing, and production-grade security with JWT rotation, CSRF protection, RBAC, and rate limiting.",
      "Centralized observability using Sentry and Better Stack for error tracking and performance metrics.",
    ],
    technologies: ["Next.js", "TypeScript", "NestJS", "PostgreSQL (Supabase)", "Prisma", "Redis", "BullMQ", "Tailwind CSS", "Sentry", "Better Stack"],
  },
];

export const earlierExperience = [
  {
    title: "Automated Irrigation System",
    context: "Final-Year Engineering Project · FUNAAB",
    description:
      "Planned and engineered an automated irrigation system integrating soil moisture sensors, water pump actuation, microcontroller logic, and mathematical flow-rate calculations.",
  },
  {
    title: "Technical Engineering Assistance",
    context: "Buildwell Plants & Equipment Industries Ltd",
    description:
      "Assisted with mechanical and electrical troubleshooting, maintenance, and technical repairs on heavy-duty engines, crane systems, Bobcat machinery, and Special Purpose Moving Trailers (SPMT).",
  },
];
