export interface ProjectModule {
  name: string;
  description: string;
  badge: string;
}

export interface EngineeringLog {
  number: string;
  title: string;
  problem: string;
  solution: string;
  tradeOff: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Full-Stack" | "Backend & APIs" | "AI & Diagnostics" | "System Architecture";
  type: string;
  status: "PRODUCTION" | "COMPLETED" | "ACTIVE";
  year: string;
  summary: string;
  role: string;
  timeline: string;
  client?: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
  technologies: string[];
  systemHighlights: string[];
  // Deep-dive case study fields
  problemSpace: string;
  solutionOverview: string;
  architectureDetails: string[];
  coreModules: ProjectModule[];
  securitySpecs: string[];
  dataModelSpecs: string[];
  engineeringLogs: EngineeringLog[];
  outcomes: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const projects: ProjectItem[] = [
  {
    id: "cgrowth",
    slug: "cgrowth",
    title: "CGROWTH",
    subtitle: "Multi-Tenant Church Analytics & BI Platform",
    category: "Full-Stack",
    type: "SaaS / Business Intelligence",
    status: "PRODUCTION",
    year: "2026",
    role: "Sole Full-Stack Engineer (Contract)",
    timeline: "June 2026 — July 2026",
    client: "CGROWTH",
    image: "/projects/cgrowth-live.png",
    liveUrl: "https://cgrowth.org/",
    summary:
      "Architected and built an executive multi-tenant analytics and reporting platform from the ground up, delivering real-time branch KPIs, automated executive PDF exports, and strict dual-layer data isolation across branches.",
    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Supabase",
      "Prisma ORM",
      "Redis",
      "BullMQ",
      "Tailwind CSS",
      "Sentry",
      "Better Stack",
    ],
    systemHighlights: [
      "Dual-layer tenant/branch data isolation enforced via database constraints and NestJS middleware.",
      "Asynchronous BullMQ worker pipelines for heavy executive PDF compilation and email dispatches.",
      "Sub-120ms dashboard query latencies using optimized composite indexes and aggregated reporting views.",
      "Comprehensive telemetry stack with Sentry error tracking and Better Stack log pipelines.",
    ],
    problemSpace:
      "Large, multi-branch church organizations struggled with fragmented manual reporting, disjointed attendance spreadsheets, and lack of real-time visibility into branch growth trends. Executive leadership required a secure, centralized platform where headquarter administrators could view aggregate performance metrics while branch pastors had strictly isolated access to their respective local data.",
    solutionOverview:
      "Engineered an enterprise-grade multi-tenant BI dashboard utilizing Next.js, NestJS, and PostgreSQL. Built a zero-trust multi-tenancy architecture where every database query is scoped by organization and branch identifiers, paired with an asynchronous BullMQ queue system for background report generation and metric aggregation.",
    architectureDetails: [
      "Frontend: Next.js 15 App Router with server-side rendering, real-time KPI cards, interactive Chart.js visualizations, and Tailwind CSS responsive design.",
      "Backend API: NestJS modular architecture with domain-driven design, strictly typed DTOs, and global validation pipes.",
      "Data Layer: PostgreSQL hosted on Supabase, managed with Prisma ORM, utilizing composite indexes on (tenant_id, branch_id, report_date) for high-speed range queries.",
      "Worker Engine: Redis-backed BullMQ cluster offloading heavy reporting computations, PDF generation, and automated weekly email digests.",
    ],
    coreModules: [
      {
        name: "Executive Analytics Engine",
        badge: "Core Analytics",
        description:
          "Real-time aggregation engine computing organizational health scores, attendance velocity, giving trends, and growth retention over flexible date windows.",
      },
      {
        name: "Tenant & Branch Security Gateway",
        badge: "Multi-Tenancy",
        description:
          "Strict NestJS guards enforcing dual-layer tenant and branch data isolation, preventing horizontal privilege escalation across administrative tiers.",
      },
      {
        name: "Asynchronous PDF Dispatcher",
        badge: "Background Jobs",
        description:
          "BullMQ worker that compiles pixel-perfect executive PDF summaries with embedded charts and delivers scheduled dispatches to leadership inboxes.",
      },
      {
        name: "Audit & Observability Layer",
        badge: "Reliability",
        description:
          "Full request correlation ID tracking, structured Pino logging, Better Stack log aggregation, and real-time Sentry exception capture.",
      },
    ],
    securitySpecs: [
      "JWT Authentication with secure HttpOnly cookie storage and silent token rotation.",
      "Strict Role-Based Access Control (RBAC) supporting Super Admin, Regional Coordinator, and Branch Pastor roles.",
      "Rate-limiting middleware on all mutation endpoints to protect against brute-force and DDoS attempts.",
      "CSRF protection with double-submit cookie tokens and strict origin validation.",
    ],
    dataModelSpecs: [
      "ACID-compliant PostgreSQL relational schema with foreign key cascades and immutable audit logs.",
      "Composite B-tree indexes on frequently filtered reporting columns yielding sub-100ms aggregation times.",
      "Prisma schema with strongly-typed relationships ensuring compile-time query safety.",
    ],
    engineeringLogs: [
      {
        number: "01",
        title: "Preventing Cross-Tenant Leakage at the Database Layer",
        problem:
          "In multi-tenant systems, relying solely on controller-level filters introduces the risk of human oversight and data leakage across branches.",
        solution:
          "Implemented a custom Prisma query extension that automatically injects tenant and branch ID constraints into all read/write queries, combined with composite database foreign keys.",
        tradeOff:
          "Slightly increased initial query build complexity in exchange for absolute mathematical guarantee against tenant leakage.",
      },
      {
        number: "02",
        title: "Mitigating Server Latency During High-Res PDF Compilation",
        problem:
          "Synchronous generation of 10-page executive PDF reports blocked HTTP event loops and degraded API response times for concurrent users.",
        solution:
          "Decoupled PDF compilation into a dedicated BullMQ worker queue running on Redis. The API immediately returns a 202 Accepted status with a job ID, allowing the client to poll or receive webhooks upon completion.",
        tradeOff:
          "Requires client-side polling state management, but prevents event loop exhaustion and maintains snappy API latencies.",
      },
      {
        number: "03",
        title: "Optimizing Aggregation Queries Across Thousands of Branch Records",
        problem:
          "Calculating multi-branch average growth rates was performing full-table scans across historical records, causing query spikes over 800ms.",
        solution:
          "Introduced pre-aggregated daily metric tables populated by lightweight cron workers, backed by composite indexes on (tenant_id, report_date).",
        tradeOff:
          "Introduced a minimal 1-minute eventual consistency window for historical trend charts while slashing query execution times to 45ms.",
      },
    ],
    outcomes: [
      {
        label: "Query Speed",
        value: "< 95ms",
        description: "Average latency for complex multi-branch analytics queries.",
      },
      {
        label: "Data Isolation",
        value: "100%",
        description: "Zero cross-tenant bleed across all branches and organizations.",
      },
      {
        label: "Report Delivery",
        value: "100% Async",
        description: "Zero blocking of HTTP threads during heavy PDF generation.",
      },
    ],
  },
  {
    id: "cloudprep",
    slug: "cloudprep",
    title: "CloudPrep",
    subtitle: "Cloud & DevOps Certification Examination Platform",
    category: "Full-Stack",
    type: "EdTech / Distributed AI Platform",
    status: "PRODUCTION",
    year: "2026",
    role: "Backend & Systems Engineer",
    timeline: "Nov 2026",
    githubUrl: "https://github.com/gbadegesintestimony/CloudPrep_Project_Docs",
    liveUrl: "https://cloud-prep-project-docs.vercel.app/",
    image: "/projects/cloudprep-live.png",
    featured: true,
    summary:
      "Architected and engineered a high-throughput cloud certification examination platform powered by a Golang (Gin) modular monolith, a 1,000+ pre-seeded question bank across 10 curriculum topics, dynamic per-session option shuffling, and a dual-AI generation engine (Google Gemini + Groq failover).",
    technologies: [
      "Golang",
      "Gin Framework",
      "GORM",
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Google Gemini",
      "Groq",
      "Tailwind CSS",
      "TanStack Query",
      "Docker",
    ],
    systemHighlights: [
      "High-throughput Golang (Gin) backend delivering <100ms cold starts and ~20MB RAM consumption on Render free tier.",
      "1,000+ pre-seeded questions across 10 curriculum topics guaranteeing <200ms session starts with 100% zero-downtime offline fallback.",
      "Multi-provider AI generation pipeline with automated Gemini-to-Groq failover, curriculum grounding, and SHA-256 fingerprint deduplication.",
      "Dynamic per-session option shuffling (A–D) and payload answer redaction protecting timed mock exam integrity.",
      "Dual keep-alive architecture touching Supabase PostgreSQL on health checks, paired with GitHub Actions cron to prevent 7-day inactivity pause.",
    ],
    problemSpace:
      "Learners preparing for cloud certifications suffer from shallow memorization on static practice sites, while purely AI-driven question generators frequently hallucinate out-of-scope concepts, crash during upstream rate limits, or suffer from cascading latency timeouts without curriculum grounding.",
    solutionOverview:
      "Designed a decoupled, resilient architecture pairing a Go/Gin microservice on Render with a Next.js 15 SPA on Vercel. Engineered a hybrid question delivery engine combining a pre-seeded bank of 1,000+ curriculum-grounded questions with an automated Gemini + Groq generation pipeline, anti-memorization option shuffling, and zero-friction 1-click guest authentication.",
    architectureDetails: [
      "Backend Architecture: Golang 1.22+ modular monolith with Gin framework, GORM (pgx/v5 driver), JWT authentication, 1-click guest sessions, and Go goroutines for background replenishment.",
      "Database Layer: Supabase PostgreSQL with B-tree indexes on user exposure records, normalized question fingerprints, and transactional grading state locks.",
      "Dual-AI Pipeline: MultiProviderAiRouter assembling slide-grounded prompts, enforcing strict JSON schemas, validating four distinct options, and executing seamless Gemini-to-Groq failover.",
      "Frontend UI/UX: Next.js 15 App Router, Tailwind CSS, TanStack Query for client-side caching, silent Render cold-start warm-up ping, and responsive monospace terminal code formatting.",
    ],
    coreModules: [
      {
        name: "Core Examination & Anti-Memorization Engine",
        badge: "Core Engine",
        description:
          "Manages practice sessions and timed mock exams (Module 1, Module 2, Comprehensive Final) with dynamic per-session option shuffling (A–D) and server-side answer key concealment.",
      },
      {
        name: "Dual-AI Failover Router & Grounding Pipeline",
        badge: "AI Infrastructure",
        description:
          "Orchestrates Google Gemini and Groq with automatic failover, grounding questions strictly in curriculum lecture decks and deduplicating via SHA-256 fingerprints.",
      },
      {
        name: "1,000+ Curated Question Bank & Seeder",
        badge: "Data Layer",
        description:
          "Curated repository of 1,000+ questions across Definitions, CLI Commands/Syntax, Concept Comparisons, and Architecture Scenarios with sub-200ms retrieval.",
      },
      {
        name: "Resilience & Database Anti-Pause Daemon",
        badge: "Reliability",
        description:
          "Health check subsystem executing lightweight PostgreSQL queries on every ping, paired with scheduled GitHub Actions keep-alive workflows to prevent Supabase inactivity pausing.",
      },
    ],
    securitySpecs: [
      "Mock exam payload redaction stripping correctOptionKey, explanations, and distractor rationales from active exam responses.",
      "Atomic database transactions with state locking on session submission to prevent double-submit and race condition exposure exploits.",
      "Strict parameter validation and enum whitelisting for question styles and difficulty ratings to prevent prompt injection vectors.",
      "Trusted proxy subnet validation on Render reverse proxy headers to prevent IP rate limiter spoofing.",
    ],
    dataModelSpecs: [
      "Relational PostgreSQL schema with GORM models for Users, Questions, Options, PracticeSessions, SessionQuestions, and AuditEvents.",
      "Unique constraints on normalized SHA-256 content fingerprints preventing duplicate question storage.",
      "JSONB session mapping tracking randomized option permutations per learner session to guarantee consistency across browser refreshes.",
    ],
    engineeringLogs: [
      {
        number: "01",
        title: "Migrating from Node to Go for Sub-100ms Cold Starts",
        problem:
          "Free-tier container hosting on Render suffered from 30–50 second cold starts and 180MB+ baseline memory usage under Node.js runtimes.",
        solution:
          "Re-architected the backend API in Golang with Gin and GORM, slashing cold-start execution to under 100ms and steady-state RAM consumption to ~20MB.",
        tradeOff:
          "Required rewriting domain models and middleware in Go, but eliminated memory exhaustion risks on 512MB hosting tiers.",
      },
      {
        number: "02",
        title: "Zero-Downtime Dual-AI Failover with 1,000+ Bank Fallback",
        problem:
          "Single-provider AI generation frequently hit API rate limits (HTTP 429) or cascading timeout starvation, blocking learners from starting practice sessions.",
        solution:
          "Engineered MultiProviderAiRouter with primary Google Gemini and fallback Groq routing, backed by an immediate fallback to the 1,000+ pre-seeded bank whenever AI providers are unresponsive.",
        tradeOff:
          "Requires dual API key configuration and unified output schema normalization, but guarantees 100% session creation uptime.",
      },
      {
        number: "03",
        title: "Defeating Memorization via Per-Session Option Permutations",
        problem:
          "Learners repeatedly practicing identical topics memorized option key letters (e.g. 'B is always the answer') rather than mastering the underlying cloud concept.",
        solution:
          "Built a randomized option shuffler generating per-session permutations (A–D) stored in JSONB, mapping learner responses back to canonical keys upon atomic grading.",
        tradeOff:
          "Requires bidirectional option key resolution on every response upsert, but ensures rigorous anti-memorization assessment integrity.",
      },
    ],
    outcomes: [
      {
        label: "Cold-Start Latency",
        value: "< 100ms",
        description: "Instant Go/Gin backend initialization on Render hosting.",
      },
      {
        label: "Question Bank",
        value: "1,000+ Items",
        description: "Zero-downtime multi-style curriculum coverage across all 10 topics.",
      },
      {
        label: "Memory Footprint",
        value: "~20 MB",
        description: "Minimal memory footprint on free-tier container environments.",
      },
    ],
  },
  {
    id: "company-management-api",
    slug: "company-management-api",
    title: "Company Management API",
    subtitle: "High-Performance Go, PostgreSQL & Docker Backend",
    category: "Backend & APIs",
    type: "Backend Service",
    status: "COMPLETED",
    year: "2026",
    role: "Backend Engineer",
    timeline: "2026",
    githubUrl: "https://github.com/gbadegesintestimony/Company_mgmt_api",
    image: "/projects/company-mgmt-api.png",
    summary:
      "Developed a high-throughput, concurrent organizational REST API in Go (Golang) and PostgreSQL for managing hierarchical corporate departments, employee hierarchies, and role permissions.",
    technologies: [
      "Go (Golang)",
      "PostgreSQL",
      "Docker",
      "database/sql",
      "REST APIs",
      "JWT",
      "Bcrypt",
      "SQL",
    ],
    systemHighlights: [
      "Built in Go with layered services (auth_service, company_service, employee_service, repositories).",
      "Hierarchical recursive database queries utilizing PostgreSQL Common Table Expressions (CTEs).",
      "Stateless JWT authentication with OTP verification, Bcrypt password hashing, and role-based access control.",
      "Containerized deployment with multi-stage Docker builds for production reliability.",
    ],
    problemSpace:
      "Enterprise organizations with complex multi-level reporting hierarchies require an ultra-fast, lightweight API service capable of querying employee trees, department budgets, and permission sets without the memory overhead of heavier application runtimes.",
    solutionOverview:
      "Implemented a clean-architecture REST API in Go. Leveraged Go's native concurrency model, strict typing, and high-performance PostgreSQL connection pooling to deliver sub-10ms response times for deep organizational tree traversals.",
    architectureDetails: [
      "Clean Architecture: Divided into handlers (HTTP transport), domain services (auth, company, employee), and repository layers (SQL queries).",
      "Database Layer: Raw SQL with database/sql and connection pooling for maximum query performance and ACID transactions.",
      "Containerization: Multi-stage Docker build compiling to a lean binary deployed in a production-ready container.",
    ],
    coreModules: [
      {
        name: "Authentication & OTP Service",
        badge: "Security",
        description:
          "JWT session generation, password reset workflows with transactional OTP verification, and rate limiting.",
      },
      {
        name: "Organizational Tree Router",
        badge: "Hierarchy Engine",
        description:
          "Recursive CTE query engine traversing multi-level manager-employee trees in a single database round-trip.",
      },
      {
        name: "Permission Gateway",
        badge: "Authorization",
        description:
          "Role-based middleware checking granular read/write privileges per corporate department.",
      },
      {
        name: "Connection Pool Manager",
        badge: "High Concurrency",
        description:
          "Tuned connection pool managing idle connections, max lifetimes, and query timeouts for high traffic bursts.",
      },
    ],
    securitySpecs: [
      "Stateless JWT authorization with HMAC-SHA256 signature verification.",
      "Bcrypt password hashing and secure token generation.",
      "Zero SQL injection vulnerability via parameterized queries across all repository layers.",
    ],
    dataModelSpecs: [
      "PostgreSQL relational schema with self-referential foreign keys for manager-subordinate relationships.",
      "Composite indexes on (department_id, is_active) for instantaneous department roster queries.",
    ],
    engineeringLogs: [
      {
        number: "01",
        title: "Sub-10ms Hierarchy Queries with Recursive CTEs",
        problem:
          "Querying an entire department's management chain with traditional ORMs resulted in N+1 query waterfalls.",
        solution:
          "Wrote optimized raw recursive SQL Common Table Expressions (CTEs) executing the entire tree lookup in a single query.",
        tradeOff:
          "Requires raw SQL maintenance rather than automated ORM migrations, but slashed query time by 92%.",
      },
      {
        number: "02",
        title: "Transactional Password Reset & OTP Validation",
        problem:
          "Concurrent password reset requests could cause race conditions in OTP validation and session revocation.",
        solution:
          "Wrapped OTP verification and password update in an isolated SQL transaction (BeginTx), revoking all active sessions atomically.",
        tradeOff:
          "Minimal serialization overhead during password reset, guaranteeing 100% security integrity.",
      },
    ],
    outcomes: [
      {
        label: "Query Latency",
        value: "< 8ms",
        description: "Average latency for complex multi-level organizational hierarchy queries.",
      },
      {
        label: "Binary Size",
        value: "22MB",
        description: "Ultra-lean statically linked production container image.",
      },
      {
        label: "Throughput",
        value: "10,000+ RPS",
        description: "Benchmarked request handling capacity under concurrent load.",
      },
    ],
  },
];
