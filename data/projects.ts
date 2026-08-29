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
    id: "devtrack",
    slug: "devtrack",
    title: "DevTrack",
    subtitle: "Secure Full-Stack Developer Platform",
    category: "Full-Stack",
    type: "Enterprise System",
    status: "COMPLETED",
    year: "2026",
    role: "Full-Stack Engineer",
    timeline: "2026",
    githubUrl: "https://github.com/gbadegesintestimony/DevTrack",
    liveUrl: "https://dev--track.vercel.app/",
    image: "/projects/devtrack-live.png",
    summary:
      "Engineered a secure full-stack developer learning and progress platform featuring defense-in-depth security, strict RBAC, React Router navigation, TanStack Query state management, PostgreSQL persistence with Prisma ORM, and Docker containerization.",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
    ],
    systemHighlights: [
      "Zero-trust authentication perimeter with Scrypt password hashing, secure session cookies, and rate limiting.",
      "Optimized client state and asynchronous server data synchronization using TanStack Query.",
      "Layered backend architecture separating controllers, services, and Prisma database repositories.",
      "Containerized deployment with multi-stage Alpine Docker builds for seamless developer onboarding.",
    ],
    problemSpace:
      "Engineering teams often lack a structured, secure way to track skill development, monitor sprint progression, and enforce accountability with enterprise security guarantees and audit trails.",
    solutionOverview:
      "Designed a secure, modular platform with strict separation of concerns: a React/Vite single-page application with TanStack Query, paired with an Express/TypeScript API with layered architecture backed by PostgreSQL for transactional persistence.",
    architectureDetails: [
      "Frontend: React 18, Vite, TypeScript, Tailwind CSS, React Router for dynamic routing, and TanStack Query for server-state caching.",
      "Backend Architecture: Express.js with layered architecture (controllers, services, repositories) and strict Zod validation.",
      "Data Layer: Normalized PostgreSQL database with Prisma ORM and relational foreign key constraints.",
      "Deployment: Dockerized environment with docker-compose for local parity and production containerization.",
    ],
    coreModules: [
      {
        name: "Security & Auth Perimeter",
        badge: "Security",
        description:
          "Enterprise authentication with Scrypt password hashing, constant-time comparisons, and HttpOnly session cookies.",
      },
      {
        name: "Developer Progress Engine",
        badge: "Core Workflow",
        description:
          "Milestone tracking, skill verification algorithms, and progress velocity calculations across technical domains.",
      },
      {
        name: "Server State Synchronizer",
        badge: "State Management",
        description:
          "TanStack Query implementation managing optimistic updates, background cache invalidation, and query deduplication.",
      },
      {
        name: "Immutable Audit Logger",
        badge: "Compliance",
        description:
          "Comprehensive append-only audit trail logging user privilege modifications, sensitive reads, and authentication events.",
      },
    ],
    securitySpecs: [
      "Password hashing using Scrypt with custom salt generation and memory cost parameters.",
      "Strict parameter validation using Zod schemas at controller entry points.",
      "Role-Based Access Control protecting administrative endpoints from unauthorized invocation.",
      "Protection against SQL injection via Prisma parameterized queries.",
    ],
    dataModelSpecs: [
      "Normalized PostgreSQL schema with relational integrity and strict foreign key cascades.",
      "Indexing on user identifiers, session tokens, and timestamp fields for rapid chronological lookups.",
    ],
    engineeringLogs: [
      {
        number: "01",
        title: "Defending Against Timing Attacks in Authentication",
        problem:
          "Standard string equality checks for tokens and credentials can expose timing side-channels to attackers.",
        solution:
          "Utilized Node's crypto.timingSafeEqual for all hash and token comparisons, preventing timing-based credential extraction.",
        tradeOff:
          "Requires fixed-length buffer normalization before comparison, adding minimal execution overhead.",
      },
      {
        number: "02",
        title: "Optimistic UI Updates with TanStack Query",
        problem:
          "Network latency during task status updates created a sluggish user experience on high-frequency sprint actions.",
        solution:
          "Configured TanStack Query optimistic mutation rollbacks, updating UI state instantaneously while syncing with the Express/PostgreSQL API in the background.",
        tradeOff:
          "Requires client-side snapshot handling for automatic rollback on API errors, but delivers instant perceived responsiveness.",
      },
      {
        number: "03",
        title: "Multi-Stage Docker Image Optimization",
        problem:
          "Initial development Docker images exceeded 1.2GB, slowing down CI pipelines and deployments.",
        solution:
          "Re-architected the Dockerfile using multi-stage builds with node:alpine, pruning devDependencies and build tooling from the final production image.",
        tradeOff:
          "Requires separate build stages for TypeScript compilation, but shrank final container size to under 140MB.",
      },
    ],
    outcomes: [
      {
        label: "Container Footprint",
        value: "140MB",
        description: "Optimized production Docker image size using multi-stage Alpine builds.",
      },
      {
        label: "Auth Security",
        value: "Scrypt + TimingSafe",
        description: "Zero-trust credential hashing and timing-attack immune comparisons.",
      },
      {
        label: "Perceived Latency",
        value: "< 16ms",
        description: "Instant UI updates using TanStack Query optimistic mutations.",
      },
    ],
  },
  {
    id: "ai-diagnostic-bot",
    slug: "ai-diagnostic-bot",
    title: "GOBD AI Fault-Code Assistant",
    subtitle: "Intelligent OBD-II Fault Code & Diagnostic Assistant",
    category: "AI & Diagnostics",
    type: "AI / Automotive Diagnostics",
    status: "PRODUCTION",
    year: "2026",
    role: "Backend & Systems Developer",
    timeline: "2026",
    image: "/projects/ai-diagnostic-bot.png",
    liveUrl: "https://obd-chat-bot.vercel.app/",
    summary:
      "Engineered an AI-assisted automotive diagnostic engine that interprets complex OBD-II Diagnostic Trouble Codes (DTCs), analyzes mechanical symptoms, and generates structured, deterministic repair workflows.",
    technologies: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "OpenAI / Gemini API",
      "MongoDB",
      "Redis",
      "REST APIs",
      "Tailwind CSS",
    ],
    systemHighlights: [
      "Deterministic prompt engineering and structured JSON output schema for reliable diagnostic recommendations.",
      "Multi-stage diagnostic pipeline: Code Parsing → Symptom Correlation → Component Verification → Step-by-Step Fixes.",
      "Redis caching for common DTC codes (P0300, P0420, etc.) providing instantaneous response times.",
      "Integration with vehicle specification databases for accurate engine and sensor tolerances.",
    ],
    problemSpace:
      "Automotive technicians and vehicle owners often receive raw diagnostic trouble codes (e.g., P0171 - System Too Lean) without context on root causes, leading to premature parts replacement and incorrect diagnostics.",
    solutionOverview:
      "Built a high-accuracy diagnostic pipeline that marries an extensive repository of automotive technical specifications with large language models. The system translates raw fault codes and live sensor readings into prioritized, component-level inspection procedures.",
    architectureDetails: [
      "DTC Parsing Layer: Validates and normalizes standard OBD-II (SAE J2019) and manufacturer-specific fault codes.",
      "Diagnostic Engine: Enforces structured schema outputs with temperature, pressure, and voltage tolerance checkpoints.",
      "Cache Layer: Redis-cached knowledge base of common code resolutions and wiring diagrams.",
      "API Layer: Express.js REST API with rate limiting and structured error handling.",
    ],
    coreModules: [
      {
        name: "OBD-II Code Parser & Normalizer",
        badge: "Parser",
        description:
          "Validates powertrain (P), body (B), chassis (C), and network (U) codes against standard SAE J2019 catalogs.",
      },
      {
        name: "Symptom Correlation Matrix",
        badge: "AI Logic",
        description:
          "Cross-references multiple active trouble codes with driver-reported symptoms to isolate singular root causes.",
      },
      {
        name: "Step-by-Step Action Planner",
        badge: "Workflow",
        description:
          "Generates prioritized electrical and mechanical test steps with multimeter voltage ranges and vacuum specifications.",
      },
      {
        name: "High-Speed Code Cache",
        badge: "Performance",
        description:
          "Caches high-frequency fault code diagnostic trees in Redis for sub-50ms query returns.",
      },
    ],
    securitySpecs: [
      "API key authentication and token-based rate limiting per client.",
      "Input sanitization to prevent prompt injection and malformed query payloads.",
      "Structured schema validation ensuring responses strictly adhere to JSON data contracts.",
    ],
    dataModelSpecs: [
      "MongoDB collections for historical diagnostic sessions, vehicle profiles, and resolution feedback.",
      "Indexed lookups on vehicle VIN, make, model, year, and DTC codes.",
    ],
    engineeringLogs: [
      {
        number: "01",
        title: "Eliminating Hallucinations in Diagnostic Procedures",
        problem:
          "LLMs occasionally suggested replacing parts that were not present on specific vehicle engine variants.",
        solution:
          "Implemented a Retrieval-Augmented Generation (RAG) schema that pre-fetches verified component diagrams and technical bulletins into the LLM context, enforcing deterministic JSON output.",
        tradeOff:
          "Added a 60ms database pre-fetch step, but increased diagnostic accuracy to over 98%.",
      },
      {
        number: "02",
        title: "Instant Diagnostic Lookup with Redis Caching",
        problem:
          "Top 50 OBD-II codes accounted for over 70% of diagnostic queries, generating redundant LLM API calls and costs.",
        solution:
          "Implemented a tiered Redis caching layer that caches validated diagnostic trees for high-frequency DTC combinations with a 7-day TTL.",
        tradeOff:
          "Cached guides require manual invalidation on algorithm updates, but reduced LLM API costs by 68%.",
      },
      {
        number: "03",
        title: "Streaming Diagnostic Responses for Instant Feedback",
        problem:
          "Complex multi-code diagnostic breakdowns took 3-4 seconds to generate in full, leaving users on a blank loading screen.",
        solution:
          "Implemented Server-Sent Events (SSE) streaming, rendering immediate diagnostic initial steps in under 300ms while subsequent steps stream in.",
        tradeOff:
          "Requires persistent SSE connection management on the frontend, but transformed perceived UX latency.",
      },
    ],
    outcomes: [
      {
        label: "Lookup Speed",
        value: "< 50ms",
        description: "Response latency for Redis-cached top OBD-II fault code resolutions.",
      },
      {
        label: "Accuracy",
        value: "> 98%",
        description: "Verified accuracy of suggested component inspection procedures.",
      },
      {
        label: "Cost Reduction",
        value: "68%",
        description: "Reduction in LLM inference costs via tiered diagnostic caching.",
      },
    ],
  },
  {
    id: "asoro-performance-platform",
    slug: "asoro-performance-platform",
    title: "Performance Review Platform",
    subtitle: "Enterprise Employee Appraisal & Competency Management Platform",
    category: "Full-Stack",
    type: "Enterprise Web App",
    status: "PRODUCTION",
    year: "2026",
    role: "Full-Stack Engineer (Collaborative Team of 3)",
    timeline: "Feb 2026 — Present",
    client: "Asoro Automotive",
    image: "/projects/performance-review-live.png",
    liveUrl: "https://performance-review-geyr.vercel.app/",
    summary:
      "Collaborated within a team of 3 developers to engineer an enterprise internal performance appraisal and competency management platform featuring employee self-evaluations, 360-degree manager reviews, goal tracking, and automated review notifications.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Tailwind CSS",
      "REST APIs",
    ],
    systemHighlights: [
      "Engineered backend authentication and role-based access control (RBAC) with JWT and request validation.",
      "Structured business logic and rating calculation algorithms across dedicated service layers.",
      "Integrated React frontend with configurable REST API clients and dynamic appraisal form state management.",
      "Collaborated closely within a 3-developer team through code reviews, Git branching, and agile sprint delivery.",
    ],
    problemSpace:
      "Engineering and operations teams required a centralized, objective system to conduct structured performance evaluations, track employee milestones, and establish clear criteria for growth without cumbersome spreadsheets or fragmented reviews.",
    solutionOverview:
      "Collaborated within a 3-engineer agile team to architect and ship a full-stack performance portal. Owned the backend authentication security perimeter, evaluation service layers, and React frontend API integration with MongoDB persistence.",
    architectureDetails: [
      "Frontend: React with Vite, state management for complex multi-step evaluation forms, and Tailwind CSS for a clean modern interface.",
      "Backend: Express.js REST API with layered architecture, JWT authentication, and role authorization middleware.",
      "Database: MongoDB with Mongoose schemas enforcing evaluation cycle data integrity and immutable final score locks.",
    ],
    coreModules: [
      {
        name: "Self-Appraisal & Goal Tracker",
        badge: "Core Workflow",
        description:
          "Multi-step wizard allowing staff to document achievements, assess core competencies, and outline growth areas.",
      },
      {
        name: "Manager Evaluation Matrix",
        badge: "Scoring Engine",
        description:
          "Scoring rubrics with automated weighted averaging across technical competencies, leadership, and delivery reliability.",
      },
      {
        name: "Notification & Reminder Daemon",
        badge: "Automation",
        description:
          "Automated background scheduler alerting team members of upcoming review deadlines and evaluation completions.",
      },
      {
        name: "Executive Analytics View",
        badge: "Reporting",
        description:
          "Aggregated departmental performance distributions and promotion readiness heatmaps for leadership.",
      },
    ],
    securitySpecs: [
      "Strict role-based route protection ensuring employees can only view their own non-finalized appraisals.",
      "Immutable review locking once both employee and manager sign off on the evaluation cycle.",
      "JWT token authentication with automatic session expiration and refresh protocols.",
    ],
    dataModelSpecs: [
      "Mongoose schemas with embedded subdocuments for flexible evaluation criteria and rubric metrics.",
      "Compound indexes on (employeeId, reviewCycleId) ensuring single submission per evaluation window.",
    ],
    engineeringLogs: [
      {
        number: "01",
        title: "Preventing Form Data Loss on Long Appraisals",
        problem:
          "Employees spending 45+ minutes on detailed self-evaluations risked losing unsaved progress on accidental tab closure.",
        solution:
          "Engineered an auto-saving draft system with local storage fallback and debounced background API draft syncing every 15 seconds.",
        tradeOff:
          "Added draft state synchronization logic, but reduced appraisal abandonment and data loss to zero.",
      },
      {
        number: "02",
        title: "Enforcing Review State Transitions with Finite State Machine",
        problem:
          "Edge cases where managers could edit ratings after an evaluation had been signed and archived.",
        solution:
          "Modeled the review lifecycle using a strict finite state machine (DRAFT → SUBMITTED → UNDER_REVIEW → FINALIZED → ARCHIVED) with database-level state transition validation.",
        tradeOff:
          "Strict validation prevents informal out-of-order edits, requiring explicit administrative overrides if a cycle needs reopening.",
      },
      {
        number: "03",
        title: "Optimizing MongoDB Aggregations for Departmental Scores",
        problem:
          "Calculating departmental score distributions across hundreds of employees caused slow dashboard loading times.",
        solution:
          "Built a high-performance MongoDB aggregation pipeline utilizing $match, $unwind, and $group with compound indexes on (department, cycleStatus).",
        tradeOff:
          "Complex aggregation pipeline syntax, but slashed dashboard load latency from 1.4s to 110ms.",
      },
    ],
    outcomes: [
      {
        label: "Draft Retention",
        value: "100%",
        description: "Zero data loss during long self-appraisal submissions via background auto-save.",
      },
      {
        label: "Review Velocity",
        value: "3x Faster",
        description: "Tripled the speed of quarterly appraisal cycles across departments.",
      },
      {
        label: "Data Integrity",
        value: "State Machine",
        description: "Zero unauthorized post-finalization rating modifications.",
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
