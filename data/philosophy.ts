export interface PhilosophyPrinciple {
  number: string;
  title: string;
  tag: string;
  description: string;
}

export const philosophies: PhilosophyPrinciple[] = [
  {
    number: "01",
    title: "Architecture",
    tag: "BOUNDARIES_&_MAINTAINABILITY",
    description:
      "I care deeply about clean boundaries, modularity, maintainable systems, and predictable behavior. Complex problems are best solved through well-partitioned services and deterministic data flow.",
  },
  {
    number: "02",
    title: "Security",
    tag: "DEFENSE_IN_DEPTH",
    description:
      "Security should be engineered from Day 1 at the application and data layer (RBAC, CSRF protection, rate limiting, and audit logging), never bolted on as a superficial afterthought.",
  },
  {
    number: "03",
    title: "Data Integrity",
    tag: "ACID_&_CONSISTENCY",
    description:
      "Good software depends on disciplined data modeling, strict schema constraints, efficient indexing, and predictable access patterns across both transactional and relational storage.",
  },
  {
    number: "04",
    title: "Production Readiness",
    tag: "OBSERVABILITY_&_RELIABILITY",
    description:
      "Software isn't finished when it works on localhost. Structured JSON logging, contextual Correlation IDs, error tracking, automated deployments, and resilient worker queues matter.",
  },
  {
    number: "05",
    title: "Simplicity",
    tag: "MINIMAL_ESSENTIAL_COMPLEXITY",
    description:
      "I prioritize solving the actual business problem with the cleanest, simplest architecture that meets technical requirements rather than introducing complexity for its own sake.",
  },
];
