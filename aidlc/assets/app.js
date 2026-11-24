// =========================================================================
// SHARED REFERENCE DATA — AI-DLC Method Paper (Raja SP, AWS) + Repo v2.11.4
// =========================================================================
const PRINCIPLES = [
  ['1. Reimagine, Don’t Retrofit', 'Build from first principles for hours/days AI cycles ("automobiles, not faster horse chariots") instead of bolting AI onto week-long Scrum handoffs.', 'Traditional SDLC assumes humans do every slow manual step; keeping old ceremonies wastes AI velocity.'],
  ['2. Reverse Conversation Direction', 'AI initiates plans, asks clarifying questions & proposes trade-offs; humans approve and steer at critical junctures.', 'Like Google Maps: you set the destination (Intent), AI computes step-by-step directions, and you stay in charge.'],
  ['3. Bake Design into the Core', 'Embed DDD (or BDD/TDD) directly into workflow stages rather than leaving design out-of-scope like Scrum/Kanban.', 'Cites $2.41T/yr US poor software quality cost — AI without design structure generates fast technical debt.'],
  ['4. Align with AI Capability', 'Adopt the realistic AI-Driven middle ground: neither mere autocomplete (AI-Assisted) nor unsupervised autonomy.', 'Humans retain ultimate responsibility for validation, interpretability, safety, and architectural judgement.'],
  ['5. Built for Complex Systems', 'Targeted at scalable, regulated, multi-team systems needing real architectural trade-offs (not trivial low-code apps).', 'Simple CRUD apps don’t need DDD or ADRs; enterprise systems fail without them.'],
  ['6. Retain Human Symbiosis', 'Keep proven alignment & risk artifacts — specifically User Stories (human–AI contracts) and Risk Registers — tuned for real-time use.', 'Don’t throw away the few artifacts that actually keep humans and AI aligned on business value.'],
  ['7. Transition via Familiarity', 'Designed so practitioners can orient and practice in 1 day via associative mappings: Epics → Units, Sprints → Bolts.', 'Familiar mental anchors dramatically lower team adoption friction.'],
  ['8. Streamline Responsibilities', 'AI bridges rigid FE/BE/Infra/DevOps/Security silos; Product Owners and Developers anchor core oversight and accountability.', 'Fewer handoffs between silos means faster flow and clearer ownership.'],
  ['9. Minimize Stages, Maximize Flow', 'Keep handoffs minimal while placing sharp human validation gates that act as a "loss function" catching mistakes early.', 'Prevents AI-generated code from hardening into rigid "quick-cement" before you spot a flaw.'],
  ['10. No Hard-Wired Workflows', 'Avoid rigid one-size-fits-all pipelines. AI proposes a dynamic Level 1 Plan for your Intent, humans refine it, then AI breaks down Level 2 subtasks.', 'Greenfield features, refactors, bug fixes, and scaling need different routes — not identical bureaucracy.']
];

const STAGE_DETAILS = {
  'workspace-detection': 'Inspects repo layout, language, frameworks, and whether this is greenfield, brownfield, or multi-repo.',
  'workspace-scaffold': 'Creates the aidlc/ tracking folder structure for spaces, intents, artifacts, and audit logs.',
  'state-init': 'Initializes aidlc-state.md (6-state checkboxes) and registers the intent with a UUIDv7 ID.',
  'intent-capture': 'Captures the raw business or technical Intent in plain English and clarifies success criteria.',
  'market-research': 'Researches user needs, competitors, and industry patterns before committing to scope.',
  'feasibility': 'Evaluates technical, cost, timeline, and compliance feasibility of the idea.',
  'rough-mockups': 'Sketches early low-fidelity UX/UI flows so stakeholders can react visually.',
  'team-formation': 'Identifies roles, ownership, and collaboration model needed to deliver the initiative.',
  'scope-definition': 'Draws clear in-scope / out-of-scope boundaries and risks before Inception.',
  'approval-handoff': 'Ideation boundary gate: verifies traceability and hands an approved brief into Inception.',
  'practices-discovery': 'Hub-and-spoke discovery of existing team conventions, coding standards, and repo practices.',
  'reverse-engineering': 'Pipeline stage for brownfield repos: builds Static & Dynamic models of existing code.',
  'requirements-analysis': 'Turns Intent into crisp functional & non-functional requirements with clarifying Q&A.',
  'user-stories': 'Mob-capable stage producing User Stories & Acceptance Criteria (human–AI contracts).',
  'refined-mockups': 'Produces detailed UI/UX specifications and accessibility flows aligned with stories.',
  'domain-design': 'Models core business logic using DDD (aggregates, entities, value objects, events, bounded contexts).',
  'contract-design': 'Defines exact API, schema, and integration contracts between Units before coding.',
  'units-generation': 'Decomposes the system into loosely coupled Units of Work and their dependency DAG.',
  'delivery-planning': 'Groups Units into Bolts, proposes the Construction Verification Command, and checks Inception traceability.',
  'functional-design': 'Translates Unit stories & domain models into detailed module-level behavior.',
  'nfr-requirements': 'Specifies concrete latency, throughput, security, availability, and compliance targets.',
  'nfr-design': 'Applies architectural patterns (CQRS, circuit breakers, caching) and writes ADRs for NFRs.',
  'infrastructure-design': 'Designs cloud resources, networking, IAM, and IaC topology mapped to Well-Architected principles.',
  'code-generation': 'Subagent-focused stage generating production code & unit tests — protected by the Plan Approval Fence.',
  'build-and-test': 'Runs build, unit/integration/security tests, and verifies the recorded Construction Verification Command.',
  'ci-pipeline': 'Creates or updates automated CI workflows and runs Construction phase-boundary verification.',
  'environment-provisioning': 'Provisions target cloud environments via IaC (Terraform, CDK, CloudFormation).',
  'deployment-pipeline': 'Sets up CD pipelines, promotion stages, and rollback gates.',
  'deployment-execution': 'Deploys verified Deployment Units into target environments with human approval.',
  'observability-setup': 'Configures logs, metrics, traces, dashboards, and SLA alerts.',
  'performance-validation': 'Runs load/stress tests against NFR targets in realistic environments.',
  'incident-response': 'Wires AI telemetry analysis to incident runbooks to propose human-approved mitigations.',
  'feedback-optimization': 'Feeds production learnings, cost/perf data, and incidents back into the next Intent.'
};

const PHASES = [
  { num: 1, name: 'Initialization', pill: 'pill-c5', paperTag: 'Repo Setup', desc: 'Detects your repo layout, scaffolds aidlc/ context memory, and initializes state.', stages: ['workspace-detection', 'workspace-scaffold', 'state-init'], agents: ['Conductor', 'Developer'] },
  { num: 2, name: 'Ideation', pill: 'pill-c6', paperTag: 'Pre-Inception Discovery', desc: 'Shapes a raw idea before engineering: intent capture, market research, feasibility, rough mockups, scope.', stages: ['intent-capture', 'market-research', 'feasibility', 'rough-mockups', 'team-formation', 'scope-definition', 'approval-handoff'], agents: ['Product', 'Design', 'Delivery', 'Product Lead'] },
  { num: 3, name: 'Inception', pill: 'pill-c1', paperTag: 'Paper Phase 1 · Mob Elaboration', desc: 'Turns approved intent into specs, User Stories, NFRs, DDD Domain Design, Contracts, Units & Bolt plans.', stages: ['practices-discovery', 'reverse-engineering', 'requirements-analysis', 'user-stories', 'refined-mockups', 'domain-design', 'contract-design', 'units-generation', 'delivery-planning'], agents: ['Product', 'Architect', 'Design', 'Delivery', 'Architecture Reviewer'] },
  { num: 4, name: 'Construction', pill: 'pill-c2', paperTag: 'Paper Phase 2 · Mob Construction', desc: 'Builds & verifies Bolts: Functional/NFR/Infra design, Code Generation, Build & Test, CI — guarded by hooks & sensors.', stages: ['functional-design', 'nfr-requirements', 'nfr-design', 'infrastructure-design', 'code-generation', 'build-and-test', 'ci-pipeline'], agents: ['Developer', 'Architect', 'Quality', 'DevSecOps', 'AWS Platform', 'Compliance'] },
  { num: 5, name: 'Operation', pill: 'pill-c3', paperTag: 'Paper Phase 3 · AI Operations', desc: 'Provisions infra, deploys Deployment Units, wires observability, validates performance, and assists incident response.', stages: ['environment-provisioning', 'deployment-pipeline', 'deployment-execution', 'observability-setup', 'performance-validation', 'incident-response', 'feedback-optimization'], agents: ['Pipeline Deploy', 'Operations', 'AWS Platform', 'DevSecOps'] }
];

const SCOPES = [
  ['classic', 'Standard', 'skeleton: off', 'V1-style ceremony through Inception & Construction (implicit default).'],
  ['feature', 'Standard', 'skeleton: on', 'Full lifecycle for new features with practical depth & walking skeleton.'],
  ['enterprise', 'Comprehensive', 'skeleton: on', 'Regulated enterprise delivery, full audit trail, mob collaborators on.'],
  ['express', 'Minimal', 'lightweight', 'Fast, streamlined path for small, well-understood tasks.'],
  ['bugfix', 'Minimal', 'focused', 'Rapid root-cause analysis, targeted fix, and regression verification.'],
  ['refactor', 'Minimal', 'focused', 'Safe structural cleanup with behavior preservation checks.'],
  ['security-patch', 'Minimal', 'focused', 'Urgent CVE / vulnerability remediation with DevSecOps focus.'],
  ['infra', 'Standard', 'focused', 'Infrastructure-as-Code, cloud provisioning, and deployment changes.'],
  ['mvp', 'Standard', 'balanced', 'Minimum viable product balancing speed with clean architecture.'],
  ['poc', 'Minimal', 'rapid', 'Quick proof-of-concept / prototype to validate feasibility.'],
  ['workshop', 'Standard', 'test: Minimal', 'Guided learning & practice mode (e.g., AI-DLC Unicorn Gym).']
];

const PRACTICES = [
  ['Walking Skeleton & Walk Order', 'pill-c1', 'When skeleton is ON, AI-DLC builds and verifies the smallest working end-to-end slice (first DAG Unit) before building later Units. New solo workflows default to unit-major order (finish one Unit end-to-end before starting the next).'],
  ['Swarm, Parallel Batches & Git Worktrees', 'pill-c2', 'Independent Units in the dependency DAG run concurrently as a parallel batch. Each Unit gets its own isolated git worktree (bolt-<id8>_<slug> branch) so parallel agents never clobber each other’s files.'],
  ['Tri-Mode Question Flow & 3-Strike Hatch', 'pill-c3', 'Answer open questions however you prefer: Guide Me (interactive Q&A), Edit File (fill in Markdown directly), or Chat (freeform). If revisions loop 3 times, the 3-Strike Escape Hatch pauses to reset alignment instead of spinning.'],
  ['Autonomy Modes & Ladder Prompt', 'pill-c4', 'At Construction entry (or after the walking skeleton), the Ladder Prompt lets you choose "Review each checkpoint" (gated) or "Continue automatically" (autonomous). Plan Approval, Verification Command & Skeleton Approval ALWAYS remain human.'],
  ['Adversarial Reviewers & Fingerprints', 'pill-c5', 'Product Lead & Architecture Reviewer run in separate read-only contexts, issuing READY or NOT-READY receipts cryptographically bound to artifact fingerprints. Loops up to 2 times, never blocks your final call.'],
  ['Spaces, Intents & Multi-Repo Workspaces', 'pill-c6', 'Work lives in aidlc/spaces/<space>/intents/<YYMMDD>-<label>/ with collision-proof UUIDv7 IDs. One workspace can manage a single repo, a monorepo, or multiple sibling repos under one intent.']
];

const FENCES = [
  ['1. Plan Approval', 'Blocks code generation until your approved plan fingerprint matches.', 'Switchable'],
  ['2. Review Freeze', 'Prevents editing artifacts after a review receipt certifies them.', 'Switchable'],
  ['3. State Transition', 'Protects runtime records & session folders from model tampering.', 'Switchable'],
  ['4. Reviewer Scope', 'Keeps dispatched reviewers strictly read-only & scoped.', 'Switchable'],
  ['5. Human Presence', 'Ensures sensitive actions come from an observed human turn.', 'Env-only']
];

const SENSORS = [
  ['linter', 'Runs project linter (e.g., ESLint/Biome) on TS/JS code outputs.'],
  ['type-check', 'Runs TypeScript compiler (tsc) on TS/TSX code outputs.'],
  ['required-sections', 'Verifies stage markdown artifacts include every mandatory heading.'],
  ['traceability', 'Checks bidirectional links from Intent → Stories → Design → Code.'],
  ['upstream-coverage', 'Ensures nothing approved in earlier stages was silently dropped.'],
  ['claim-sources', 'Verifies factual claims in artifacts cite real, verifiable sources.']
];

const SKILLS = [
  ['aidlc-knowledge', 'Indexes and searches your team’s domain documents.'],
  ['aidlc-issue-report', 'Generates a redacted diagnostic bundle for bug reports.'],
  ['aidlc-session-cost', 'Reports token usage and cost breakdown for sessions.'],
  ['aidlc-replay', 'Replays or inspects past workflow execution traces.'],
  ['aidlc-outcomes-pack', 'Summarizes final deliverables and outcomes for stakeholders.']
];

const AGENTS = [
  ['Product Agent', 'Expert', 'Roadmaps, personas, requirements, user stories.'],
  ['Design Agent', 'Expert', 'UX flows, rough & refined mockups, accessibility.'],
  ['Delivery Agent', 'Expert', 'Bolt planning, Definition of Done, delivery cadence.'],
  ['Architect Agent', 'Expert', 'Domain Design (DDD), Logical Design, ADRs, tech stack.'],
  ['Developer Agent', 'Expert', 'Functional design, code generation, unit tests, error handling.'],
  ['Quality Agent', 'Expert', 'Test strategy, coverage, build & verification.'],
  ['AWS Platform Agent', 'Expert', 'AWS services, account structure, Well-Architected mapping.'],
  ['DevSecOps Agent', 'Expert', 'Security baselines, threat modeling, SAST/DAST checks.'],
  ['Compliance Agent', 'Expert', 'Data governance, audit requirements, regulatory controls.'],
  ['Pipeline & Deploy Agent', 'Expert', 'CI/CD pipelines, IaC packaging, deployment gates.'],
  ['Operations Agent', 'Expert', 'Observability, monitoring, SLA prediction, incident runbooks.'],
  ['Product Lead', 'Reviewer', 'Read-only reviewer challenging requirements, stories & UX.'],
  ['Architecture Reviewer', 'Reviewer', 'Read-only reviewer challenging design soundness & coherence.'],
  ['Composer Agent', 'Composer', 'Estimates entropy & composes custom adaptive workflows.']
];

// =========================================================================
// DEEP EXPANDABLE MIND MAP TREE (130+ NODES DOWN TO EVERY LEAF CONCEPT)
// =========================================================================
const MINDMAP_TREE = {
  id: 'root', label: 'AI-DLC', sub: 'Paper + Repo v2.11.4',
  color: 'var(--primary)', pill: 'pill-primary', badge: 'Root · Big Picture',
  title: 'AI-DLC (AI-Driven Development Lifecycle)',
  summary: 'A complete AI-native software delivery methodology (Raja SP, AWS) paired with a deterministic, multi-harness software factory (awslabs/aidlc-workflows v2.11.4) that runs natively across 7 AI coding tools.',
  why: 'Ad-hoc AI chatting loses context, skips design, and pours unverified code. AI-DLC pairs human judgement and deterministic tools with LLM knowledge.',
  analogy: 'A software factory: you are the driver, scopes are assembly lines, stages are stations, agents are specialist workers, and Claude/Cursor/Kiro is the building it runs in.',
  items: ['Click any branch with +N to expand all the way down to individual concepts.', 'Use Expand All or Zoom controls in the toolbar above.'],
  children: [
    // -------- BRANCH 1: FIRST PRINCIPLES --------
    {
      id: 'fp', label: 'First Principles', sub: 'Why AI-DLC Exists',
      color: 'var(--chart-6)', pill: 'pill-c6', badge: 'First Principles',
      title: 'First Principles & Architecture Theory',
      summary: 'The four root physics problems of AI coding, the 4 Golden Tenets, the 3-Plane networking architecture, and the Feedforward/Feedback Control Loop.',
      why: 'Understanding the root constraints makes every stage, hook, and guard feel obvious rather than arbitrary.',
      analogy: 'Learning the laws of aerodynamics before memorizing cockpit switches.',
      children: [
        {
          id: 'fp-problems', label: '4 Root Problems', sub: 'Physics of AI Coding',
          color: 'var(--chart-6)', pill: 'pill-c6', badge: 'First Principles',
          title: 'The 4 Fundamental Problems AI-DLC Solves',
          summary: 'Every mechanism in AI-DLC traces back to one of these four realities of working with LLMs.',
          why: 'Ignoring any of these four leads to drift, broken code, wasted velocity, or lost context.',
          children: [
            { id: 'fp-p1', label: 'Probabilistic LLMs', sub: 'Tools own determinism', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Root Problem #1', title: 'LLMs Are Probabilistic, Not Deterministic', summary: 'LLMs drift when asked to track state, routing, or approval history across long sessions.', why: 'Mechanical bookkeeping (next stage, receipts, audit logs) must live in deterministic TypeScript tools & hooks, never in LLM memory.', analogy: 'You don’t ask a creative architect to manually stamp every safety inspection form — use a checklist machine.' },
            { id: 'fp-p2', label: 'Quick-Cement Code', sub: 'Human "loss function"', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Root Problem #2', title: 'The "Quick-Cement" Problem', summary: 'AI generates massive code in minutes. One wrong early assumption quickly hardens into thousands of interconnected lines.', why: 'Sharp human approval gates, adversarial reviewers, and Walking Skeletons act as a loss function catching errors while changes are cheap.', analogy: 'Check the house blueprint before pouring the concrete foundation.' },
            { id: 'fp-p3', label: 'Reverse Conversation', sub: 'Google Maps Model', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Root Problem #3', title: 'Horse Chariot vs Automobile (Google Maps)', summary: 'In AI-Assisted coding, humans manually break down every micro-prompt. In AI-DLC, you set the Intent and AI proposes plans, questions, and trade-offs.', why: 'Reversing conversation direction unlocks AI speed while keeping humans in the driver’s seat.', analogy: 'Google Maps: you pick the destination, it proposes the route, and you decide whether to take the detour.' },
            { id: 'fp-p4', label: 'Compounding Context', sub: 'Repo Context Memory', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Root Problem #4', title: 'Chat Evaporates; Repo Artifacts Compound', summary: 'Chat history gets compacted or closed. Persisting specs, stories, DDD models, ADRs, and audit logs in aidlc/ preserves truth across sessions.', why: 'Each stage builds semantically richer Context Memory so later stages get smarter instead of starting blind.', analogy: 'A shared engineering flight recorder stored right inside the repo.' }
          ]
        },
        {
          id: 'fp-tenets', label: '4 Golden Tenets', sub: 'Priority Order (#1 Wins)',
          color: 'var(--chart-6)', pill: 'pill-c6', badge: 'AGENTS.md Tenets',
          title: 'The 4 Golden Tenets (Strict Priority Order)',
          summary: 'Whenever two design goals conflict in AI-DLC, the higher tenet always wins.',
          why: 'Guarantees user experience and human control never get overridden by overly clever automation.',
          children: [
            { id: 't1', label: '1. Human Drives Engine', sub: 'Highest Priority', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Tenet #1', title: 'The Human Drives the Engine', summary: 'You keep the wheel. Plain-English status, undo paths, asks once, never refuses an explicit request (approve, skip, jump, stop).', why: 'Guards and tools exist to serve the person, never to trap or lecture them.' },
            { id: 't2', label: '2. Tools for Determinism', sub: 'Bookkeeping & Guards', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Tenet #2', title: 'Tools for Determinism', summary: 'TypeScript tools and hooks handle routing, state, receipts, and guards identically every time — tools never judge human phrasing.', why: 'Keeps agent prompts short and focused on engineering work instead of bookkeeping.' },
            { id: 't3', label: '3. LLM for Knowledge', sub: 'Expertise & Translation', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Tenet #3', title: 'LLM for Knowledge', summary: 'Agents bring coding, architecture, security, and testing expertise, explain options in plain words, and pass exact structured args to tools.', why: 'Uses LLMs for what they excel at: domain knowledge and natural language understanding.' },
            { id: 't4', label: '4. Human for Judgement', sub: 'Decisions & Trade-offs', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Tenet #4', title: 'Human for Judgement', summary: 'You decide what to build, approve gates, weigh trade-offs, and decide when to stop. Nothing tools or knowledge can settle is dumped on you.', why: 'Protects human attention for decisions that actually require human accountability.' }
          ]
        },
        {
          id: 'fp-planes', label: '3-Plane Architecture', sub: 'Networking Analogy',
          color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Architecture Theory',
          title: '3-Plane Architecture (Control / Data / Management)',
          summary: 'Borrowed from network routers: separates compile-time rules from live execution and diagnostic observation.',
          why: 'Prevents rule evaluation from slowing down execution and isolates failures cleanly.',
          analogy: 'A router compiles routing tables once (Control), forwards packets fast (Data), and exposes health dashboards (Management).',
          children: [
            { id: 'pl-ctrl', label: 'Control Plane', sub: 'Compiled Stage Graph', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Control Plane', title: 'Control Plane (Schema)', summary: 'Stage definitions, 5-layer Rules, and Sensor bindings compiled atomically into the structural stage graph before a run.', why: 'Compile once, enforce consistently everywhere.' },
            { id: 'pl-data', label: 'Data Plane', sub: 'Live Runs & Audit', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Data Plane', title: 'Data Plane (Execution)', summary: 'Actual stage runs, Units, Bolts, produced artifacts, runtime-graph.json, and the append-only 134-event audit trail.', why: 'Records exact execution truth so recovery and resume work deterministically.' },
            { id: 'pl-mgmt', label: 'Management Plane', sub: 'Doctor & Status', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Management Plane', title: 'Management Plane (Observe)', summary: 'aidlc doctor, /aidlc --status, audit queries, issue reports, and onboarding docs (AGENTS.md / CLAUDE.md).', why: 'Lets humans inspect health and diagnose problems without touching live workflow state.' }
          ]
        },
        {
          id: 'fp-loop', label: 'Control & Learning Loop', sub: 'Rules + Sensors + Learn',
          color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Control Theory',
          title: 'Feedforward / Feedback Control Loop & Learning Loop',
          summary: 'Rules steer agents BEFORE work (feedforward), Sensors check outputs AFTER work (feedback), and the Learning Loop turns your corrections into permanent Rules or Sensors.',
          why: 'Ensures you never have to repeat the same correction twice.',
          children: [
            { id: 'lp-ff', label: 'Feedforward (Rules)', sub: 'Steer before work', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Feedforward', title: 'Rules = Feedforward Control', summary: '5-layer additive rules loaded before a stage begins so agents follow your org, team, and project standards upfront.', why: 'Preventing mistakes upfront is cheaper than fixing them at review.' },
            { id: 'lp-fb', label: 'Feedback (Sensors)', sub: 'Check after work', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Feedback', title: 'Sensors = Feedback Control', summary: '6 deterministic checks (lint, types, traceability, claim sources, required sections, upstream coverage) run on outputs.', why: 'Provides an objective, repeatable second opinion before you review.' },
            { id: 'lp-lrn', label: 'Learning Loop', sub: 'Keep for next time?', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Learning Loop', title: 'The Learning Loop', summary: 'When you correct an agent, it asks once before the gate: "Keep that for next time?" (Project / Team / No) and writes it to project.md or team.md.', why: 'Turns every human correction into permanent institutional memory.' }
          ]
        }
      ]
    },

    // -------- BRANCH 2: METHOD PAPER (RAJA SP, AWS) --------
    {
      id: 'paper', label: 'Method Paper', sub: 'Raja SP (AWS) · 8pp PDF',
      color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Method Definition Paper',
      title: 'AI-DLC Method Definition Paper (Raja SP, AWS)',
      summary: 'The foundational 8-page paper that introduced AI-DLC: 10 principles, new vocabulary (Intent, Unit, Bolt), Mob rituals, DDD-in-the-core, and the 3-phase / 9-step lifecycle.',
      why: 'Provides the theoretical backbone and vocabulary implemented by the aidlc-workflows repository.',
      analogy: 'The architectural manifesto ("automobiles, not faster horse chariots").',
      children: [
        {
          id: 'paper-p10', label: '10 Key Principles', sub: 'Click to see all 10',
          color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Paper Section II',
          title: 'The 10 Key Principles of AI-DLC',
          summary: 'The 10 foundational design principles from Section II of Raja SP’s Method Definition Paper.',
          why: 'Each principle explains how AI-DLC breaks from legacy Scrum/Agile to fit AI speed and capabilities.',
          children: PRINCIPLES.map(([name, summary, why], idx) => ({
            id: `p10-${idx + 1}`,
            label: name,
            sub: `Principle #${idx + 1}`,
            color: 'var(--chart-5)',
            pill: 'pill-c5',
            badge: `Paper Principle #${idx + 1}`,
            title: name,
            summary,
            why
          }))
        },
        {
          id: 'paper-vocab', label: 'Core Vocabulary', sub: '7 Key Terms',
          color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Paper Section III.1',
          title: 'AI-DLC Core Vocabulary',
          summary: 'Modernized terms mapped to familiar Agile/DDD concepts so teams can learn AI-DLC in a single day.',
          why: 'Precision language prevents teams from slipping back into slow Sprint/ticket habits.',
          children: [
            { id: 'v-intent', label: 'Intent', sub: 'Business / Tech Goal', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Vocabulary', title: 'Intent', summary: 'High-level statement of purpose (feature, refactor, or scaling goal) that initiates AI-driven decomposition.', why: 'Gives AI the "destination" so it can propose the route.' },
            { id: 'v-unit', label: 'Unit of Work', sub: 'Replaces Epic / Subdomain', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Vocabulary', title: 'Unit of Work', summary: 'Cohesive, loosely coupled, independently buildable & deployable slice of value derived from an Intent (like a DDD Subdomain or Scrum Epic).', why: 'Enables parallel development and independent deployment without team bottlenecks.' },
            { id: 'v-bolt', label: 'Bolt', sub: 'Hours/Days Sprint', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Vocabulary', title: 'Bolt (Replaces Multi-Week Sprint)', summary: 'The smallest iterative build-validate cycle in AI-DLC, measured in hours or days rather than 2–6 week Sprints.', why: 'Matches iteration cadence to AI generation speed.' },
            { id: 'v-ddd', label: 'Domain Design (DDD)', sub: 'Core Business Logic', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Vocabulary', title: 'Domain Design (DDD)', summary: 'Models core business logic independently of infrastructure using DDD aggregates, entities, value objects, events, and repositories.', why: 'Keeps business rules clean and decoupled from cloud/framework churn.' },
            { id: 'v-logical', label: 'Logical Design & ADRs', sub: 'NFR Patterns', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Vocabulary', title: 'Logical Design & Architecture Decision Records', summary: 'Extends Domain Design to meet Non-Functional Requirements (CQRS, circuit breakers, caching) with AI-drafted ADRs validated by developers.', why: 'Documents the "why" behind architectural trade-offs permanently.' },
            { id: 'v-depunit', label: 'Deployment Unit', sub: 'Production Artifact', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Vocabulary', title: 'Deployment Unit', summary: 'Packaged, secured, instrumented, IaC-backed artifact (containers, Lambda, Helm, Terraform) validated by functional, security, and load tests.', why: 'Ensures what ships to production is verified end-to-end, not just "works on my machine."' },
            { id: 'v-ctxmem', label: 'Context Memory', sub: 'Bidirectional Traceability', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Vocabulary', title: 'Persistent Context Memory', summary: 'All persisted artifacts (intents, stories, models, ADRs, test plans) stored in the repo with forward & backward traceability.', why: 'Makes AI more accurate at every subsequent stage.' }
          ]
        },
        {
          id: 'paper-mob', label: 'Mob Rituals', sub: '3 Live Collaborations',
          color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Paper Rituals',
          title: 'Collocated Human + AI Mob Rituals',
          summary: 'Replaces async ticket handoffs and slow PR queues with real-time, single-room collaboration alongside AI.',
          why: 'Compresses weeks of back-and-forth clarification into hours of shared alignment.',
          children: [
            { id: 'mob-elab', label: 'Mob Elaboration', sub: 'Inception Ritual', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Ritual', title: 'Mob Elaboration', summary: 'PO, Developers, QA, Facilitator & AI in one room turning Intent into User Stories, NFRs, Risks, PRFAQ, Units, and Suggested Bolts in hours.', why: 'Eliminates weeks of asynchronous backlog grooming.' },
            { id: 'mob-prog', label: 'Mob Programming', sub: 'Construction Ritual', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Ritual', title: 'Mob Programming', summary: 'Developers and AI work live on DDD models, Logical Design, ADRs, and code across Bolts while exchanging integration contracts.', why: 'Resolves architectural decisions on the fly instead of waiting days for PR reviews.' },
            { id: 'mob-test', label: 'Mob Testing', sub: 'Verification Ritual', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Ritual', title: 'Mob Testing', summary: 'PO, Developers, and AI validate functional, security, and performance tests live against acceptance criteria.', why: 'Closes the quality loop immediately before deployment.' }
          ]
        },
        {
          id: 'paper-bf', label: 'Brown-Field Models', sub: 'Static & Dynamic',
          color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Existing Codebases',
          title: 'Brown-Field Reverse-Engineering Models',
          summary: 'Before changing an existing codebase, AI elevates code into human-validated architectural models.',
          why: 'Prevents AI from breaking hidden dependencies in legacy systems.',
          children: [
            { id: 'bf-static', label: 'Static Models', sub: 'Components & Relations', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Brown-Field', title: 'Static Models', summary: 'Reverse-engineered map of existing domain components, responsibilities, and structural relationships.', why: 'Gives both humans and AI an accurate map of what exists today.' },
            { id: 'bf-dyn', label: 'Dynamic Models', sub: 'Use-Case Interactions', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Brown-Field', title: 'Dynamic Models', summary: 'Shows how existing components interact at runtime to realize key business use cases.', why: 'Reveals runtime coupling and side effects before refactoring or extending.' }
          ]
        }
      ]
    },

    // -------- BRANCH 3: 5 PHASES & 33 STAGES --------
    {
      id: 'phases', label: '5 Phases & 33 Stages', sub: 'core/aidlc-common/stages/',
      color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Lifecycle',
      title: '5 Lifecycle Phases & All 33 Stages',
      summary: 'Expands the Paper’s 3 core phases (Inception, Construction, Operations) into 5 modular phases by adding Initialization and Ideation upfront.',
      why: 'Breaking delivery into 33 small, well-defined stations lets scopes pick only what a task actually needs.',
      analogy: '33 specialized stations on a modular factory floor — you only visit the stations your job requires.',
      children: PHASES.map(p => ({
        id: `ph-${p.num}`,
        label: `${p.num}. ${p.name}`,
        sub: `${p.stages.length} stages · ${p.paperTag}`,
        color: 'var(--chart-1)',
        pill: p.pill,
        badge: `Phase ${p.num} · ${p.paperTag}`,
        title: `Phase ${p.num}: ${p.name}`,
        summary: p.desc,
        why: `Groups ${p.stages.length} focused stations led by: ${p.agents.join(', ')}.`,
        children: p.stages.map((st, i) => ({
          id: `st-${p.num}-${i + 1}`,
          label: `${p.num}.${i + 1} ${st}`,
          sub: 'Stage',
          color: 'var(--chart-1)',
          pill: p.pill,
          badge: `Stage ${p.num}.${i + 1} · ${p.name}`,
          title: st,
          summary: STAGE_DETAILS[st] || 'Modular lifecycle stage.',
          why: `Part of Phase ${p.num} (${p.name}); writes durable artifacts into the intent record dir.`
        }))
      }))
    },

    // -------- BRANCH 4: SCOPES & MEMORY --------
    {
      id: 'scopes-mem', label: 'Scopes & Memory', sub: '11 Presets + 5-Layer Rules',
      color: 'var(--chart-2)', pill: 'pill-c2', badge: 'core/scopes & memory',
      title: '11 Workflow Scopes & 5-Layer Additive Memory',
      summary: 'Scopes choose which stages run and how deep; Memory layers persistent rules from org defaults down to individual stages.',
      why: 'Implements Paper Principle #10 (no rigid one-size-fits-all workflow) plus team learning.',
      children: [
        {
          id: 'all-scopes', label: '11 Workflow Scopes', sub: 'Click to see all 11',
          color: 'var(--chart-2)', pill: 'pill-c2', badge: 'core/scopes/',
          title: 'All 11 Workflow Scopes (Profiles)',
          summary: 'Curated stage routes and depth presets for common engineering tasks.',
          why: 'A bug fix shouldn’t sit through market research; an enterprise feature needs full auditability.',
          children: SCOPES.map(([name, depth, meta, desc]) => ({
            id: `sc-${name}`,
            label: name,
            sub: `${depth} · ${meta}`,
            color: 'var(--chart-2)',
            pill: 'pill-c2',
            badge: `Scope · ${depth}`,
            title: `Scope: ${name}`,
            summary: desc,
            why: `Pre-configured depth (${depth}) and ceremony (${meta}) — you can still override any stage or depth on demand.`
          }))
        },
        {
          id: 'all-mem', label: '5-Layer Additive Rules', sub: 'org → team → project → phase → stage',
          color: 'var(--chart-2)', pill: 'pill-c2', badge: 'core/memory/',
          title: '5-Layer Strict-Additive Rule Chain',
          summary: 'Rules accumulate from broadest to most specific. Broader rules are never silently deleted — each layer adds specificity.',
          why: 'Prevents a single project edit from accidentally wiping out organization-wide security or compliance rules.',
          children: [
            { id: 'mem-1', label: '1. org.md', sub: 'Framework defaults', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Layer 1', title: 'org.md (Organization Defaults)', summary: 'Baseline methodology and framework rules shipped across all teams.', why: 'Establishes a reliable floor for every workflow.' },
            { id: 'mem-2', label: '2. team.md', sub: 'Affirmed team practices', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Layer 2', title: 'team.md (Team Practices)', summary: 'Shared practices affirmed by your team via the Learning Loop.', why: 'Spreads lessons learned across every project in the space.' },
            { id: 'mem-3', label: '3. project.md', sub: 'Project-specific rules', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Layer 3', title: 'project.md (Project Rules)', summary: 'Conventions and overrides specific to this repository.', why: 'Adapts AI-DLC to your exact stack and repo standards.' },
            { id: 'mem-4', label: '4. phases/<phase>.md', sub: 'Phase-level guardrails', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Layer 4', title: 'Phase Rules', summary: 'Rules that apply only during Ideation, Inception, Construction, or Operation.', why: 'Keeps context lean by loading phase rules only when relevant.' },
            { id: 'mem-5', label: '5. Stage Rules', sub: 'Station-specific rules', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Layer 5', title: 'Stage-Specific Rules', summary: 'Exact rules delivered for the active station via aidlc-deliver-stage-rules.ts.', why: 'Focuses the agent on the exact constraints of the current station.' }
          ]
        }
      ]
    },

    // -------- BRANCH 5: TECHNIQUES & PRACTICES --------
    {
      id: 'practices', label: 'Techniques & Practices', sub: 'Execution, Swarm & Flow',
      color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Engineering Practices',
      title: 'Execution Modes, Collaboration & Construction Practices',
      summary: 'Concrete engineering techniques that make AI-DLC fast, parallel, and safe on real codebases.',
      why: 'Bridges high-level methodology theory with real-world git, testing, and UX mechanics.',
      children: [
        {
          id: 'exec-modes', label: '4 Execution Modes', sub: 'Inline · Subagent · Pipeline · Mob',
          color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Stage Protocols',
          title: '4 Ways a Stage Can Execute',
          summary: 'Depending on complexity, the conductor runs a stage inline, via subagent hub, as an ordered pipeline, or as a blind mob mesh.',
          why: 'Matches agent topology to the cognitive shape of the task.',
          children: [
            { id: 'em-inline', label: 'Inline Execution', sub: 'Default in main chat', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Mode 1', title: 'Inline Execution', summary: 'Conductor wears the lead agent’s hat directly in your chat for fast, interactive Q&A.', why: 'Lowest friction when tight back-and-forth with the human is needed.' },
            { id: 'em-sub', label: 'Subagent / Hub-Spoke', sub: 'Isolated focus', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Mode 2', title: 'Subagent / Hub-and-Spoke Execution', summary: 'Dispatches an isolated agent context (e.g., Code Generation, or Practices Discovery with 3 mutually blind spokes).', why: 'Keeps heavy file/code work from cluttering the main conversation context.' },
            { id: 'em-pipe', label: 'Pipeline Execution', sub: 'Ordered chain + receipts', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Mode 3', title: 'Pipeline Execution', summary: 'Dispatched chain running in strict order, each link seeing all upstream work and minting a receipt (e.g., Reverse Engineering).', why: 'Guarantees sequential dependency order across multi-repo analysis.' },
            { id: 'em-mob', label: 'Mob Execution', sub: 'Mutually blind rounds', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Mode 4', title: 'Mob Execution Mesh', summary: 'Lead drafts, mutually blind collaborators write parallel critiques/contributions, lead integrates (e.g., User Stories in enterprise scope).', why: 'Prevents groupthink and surfaces diverse perspectives before human review.' }
          ]
        },
        {
          id: 'const-prac', label: 'Construction Practices', sub: 'Skeleton, Swarm & Reviews',
          color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Construction',
          title: 'Core Construction Practices',
          summary: 'Walking Skeletons, Swarm Git Worktrees, Autonomy Modes, and Adversarial Reviewers.',
          why: 'Prevents big-bang integration failures and keeps parallel AI coding safe.',
          children: [
            { id: 'cp-skel', label: 'Walking Skeleton', sub: 'End-to-end slice first', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Practice', title: 'Walking Skeleton & Unit-Major Walk Order', summary: 'Builds and verifies the smallest working end-to-end Unit first (passing your human-approved Construction Verification Command) before building later Units.', why: 'Proves the architecture actually compiles, runs, and passes tests before scaling out.' },
            { id: 'cp-swarm', label: 'Swarm & Git Worktrees', sub: 'Parallel isolated Units', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Practice', title: 'Swarm Parallel Batches & Git Worktrees', summary: 'Dependency-ready Units from the DAG run concurrently, each in its own isolated git worktree (bolt-<id8>_<slug> branch).', why: 'Lets multiple agents build in parallel without file conflicts.' },
            { id: 'cp-auto', label: 'Autonomy & Ladder', sub: 'gated vs autonomous', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Practice', title: 'Autonomy Modes & Ladder Prompt', summary: 'Lets you choose "Review each checkpoint" (gated) or "Continue automatically" (autonomous). Plan Approval, Verification Command & Skeleton Approval ALWAYS remain human.', why: 'Balances speed with control — earn trust on the first slice, then accelerate.' },
            { id: 'cp-rev', label: 'Adversarial Reviewers', sub: 'READY / NOT-READY', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Practice', title: 'Adversarial Reviewers & Fingerprints', summary: 'Product Lead & Architecture Reviewer run read-only in separate contexts, writing receipts bound to artifact fingerprints (up to 2 repair loops).', why: 'Catches blind spots before the artifact ever reaches your desk — without blocking your final call.' }
          ]
        },
        {
          id: 'inter-prac', label: 'Interaction & State', sub: 'Questions, Spaces & State',
          color: 'var(--chart-3)', pill: 'pill-c3', badge: 'UX & State',
          title: 'Human Interaction & Workspace Organization',
          summary: 'Tri-Mode Question Flow, 3-Strike Revision Escape Hatch, Spaces/Intents, and 6-State Checkboxes.',
          why: 'Makes working with AI-DLC comfortable, resumable, and immune to endless revision loops.',
          children: [
            { id: 'ip-tri', label: 'Tri-Mode Questions', sub: 'Guide Me · Edit File · Chat', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'UX', title: 'Tri-Mode Question Flow', summary: 'Answer open questions in your preferred style: interactive Q&A (Guide Me), directly editing a Markdown file (Edit File), or freeform Chat.', why: 'Adapts to how different engineers like to think and respond.' },
            { id: 'ip-3s', label: '3-Strike Escape Hatch', sub: 'Breaks revision loops', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'UX Safety', title: 'The 3-Strike Revision Escape Hatch', summary: 'If a stage goes through 3 revision loops without converging, AI-DLC pauses to reset alignment instead of endlessly spinning.', why: 'Saves time and tokens when requirements or assumptions are misaligned.' },
            { id: 'ip-space', label: 'Spaces, Intents & 6-State', sub: 'aidlc/spaces/<space>/', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Persistence', title: 'Spaces, Intents & 6-State Checkboxes', summary: 'Each team gets a Space, each piece of work gets an Intent dir (<YYMMDD>-<label>, UUIDv7) with aidlc-state.md checkboxes: [ ] [-] [?] [R] [x] [S].', why: 'Supports multiple concurrent initiatives and multi-repo workspaces cleanly across compactions.' }
          ]
        }
      ]
    },

    // -------- BRANCH 6: ENGINE, GUARDS, SENSORS & AGENTS --------
    {
      id: 'machinery', label: 'Engine, Guards & Agents', sub: 'Tools, Fences, Sensors, 14 Agents',
      color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Deterministic Machinery',
      title: 'Engine, Safety Guards, Sensors, Hooks & Agents',
      summary: 'The deterministic TypeScript spine that orchestrates stages, enforces your approvals, checks quality, and dispatches all 14 specialist agents.',
      why: 'Separates mechanical reliability (tools/hooks) from domain intelligence (agents).',
      children: [
        {
          id: 'm-eng', label: 'Conductor ↔ Engine', sub: 'aidlc-orchestrate.ts',
          color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Orchestration',
          title: 'The Conductor ↔ Engine Forwarding Loop',
          summary: 'The Conductor (SKILL.md) never decides routing. It calls the deterministic Engine (next → typed Directive → execute → report).',
          why: 'Guarantees identical stage routing across all 7 AI harnesses.',
          children: [
            { id: 'eng-cond', label: 'Conductor (SKILL.md)', sub: 'Carries out directives', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Orchestrator', title: 'The Conductor', summary: 'Reads the human’s intent, cues the station’s agents, owns execution quality, and reports structured outcomes to the Engine.', why: 'Keeps the LLM focused on craft and communication rather than state-machine math.' },
            { id: 'eng-cli', label: 'Engine (6 Subcommands)', sub: 'next, continue, report, park, team-board, wait', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Engine', title: 'Deterministic Engine (aidlc-orchestrate.ts)', summary: 'Owns scope resolution, stage sequencing, jumps, resume, and gate status via 6 exact subcommands.', why: 'One single source of routing truth for every harness.' },
            { id: 'eng-dir', label: 'Typed Directives', sub: 'run-stage, ask, invoke-swarm, print, done', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Protocol', title: 'Typed Engine Directives', summary: 'Structured commands emitted by `engine next` telling the Conductor the exact next action to take.', why: 'Eliminates ambiguity between the engine and the AI session.' }
          ]
        },
        {
          id: 'm-fences', label: 'Guard Policy & 5 Fences', sub: 'strict / relaxed / off',
          color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Safety Guards',
          title: 'Guard Policy & The 5 Fences',
          summary: 'Deterministic checks over recorded facts aimed at agent actions — never at human messages. Your plain request lifts switchable fences.',
          why: 'Keeps workers on your last approved plan without ever trapping you.',
          children: FENCES.map(([name, desc, mode], i) => ({
            id: `fn-${i + 1}`,
            label: name,
            sub: mode,
            color: 'var(--chart-4)',
            pill: 'pill-c4',
            badge: `Fence · ${mode}`,
            title: `Fence ${name}`,
            summary: desc,
            why: mode === 'Switchable' ? 'Can be lowered or raised per intent via plain request or `/aidlc config set guard.<fence> off|on`.' : 'Lowered only via environment variable `AIDLC_SKIP_HUMAN_PRESENCE_GUARD=1`.'
          }))
        },
        {
          id: 'm-sensors', label: '6 Deterministic Sensors', sub: 'core/sensors/',
          color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Quality Checks',
          title: 'All 6 Deterministic Sensors',
          summary: 'Automated checks that inspect outputs identically every time (advisory by default, or blocking if your team configures them).',
          why: 'Catches mechanical defects before human review.',
          children: SENSORS.map(([id, desc]) => ({
            id: `sn-${id}`,
            label: id,
            sub: 'Sensor',
            color: 'var(--chart-4)',
            pill: 'pill-c4',
            badge: 'Sensor',
            title: `Sensor: aidlc-${id}`,
            summary: desc,
            why: 'Records deterministic SENSOR_* audit rows at write/edit or gate boundaries.'
          }))
        },
        {
          id: 'm-hooks', label: '17 Framework Hooks', sub: 'core/hooks/',
          color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Event Hooks',
          title: 'All 17 Framework Hooks',
          summary: 'TypeScript scripts triggered automatically by harness lifecycle events (PreToolUse, PostToolUse, Stop, SessionStart, etc.).',
          why: 'Enforces guards, audit logging, and sensor dispatch automatically without relying on the LLM to remember.',
          children: [
            { id: 'hk-guard', label: '6 Safety & Guard Hooks', sub: 'plan-approval, review-freeze...', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Hooks (6)', title: 'Safety & Guard Hooks', summary: 'aidlc-plan-approval-guard, aidlc-state-transition-guard, aidlc-review-freeze, aidlc-reviewer-scope, aidlc-record-human-turn, aidlc-continue-workflow.', why: 'Enforces the 5 Fences and forwarding-loop integrity automatically.' },
            { id: 'hk-spine', label: '6 Workflow Spine Hooks', sub: 'audit, sensors, stage-graph...', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Hooks (6)', title: 'Workflow Spine & Check Hooks', summary: 'aidlc-write-audit-log, aidlc-run-sensors, aidlc-rebuild-stage-graph, aidlc-deliver-stage-rules, aidlc-validate-state, aidlc-sync-workflow-state.', why: 'Keeps the 134-event audit trail, stage graph, and rules synchronized automatically.' },
            { id: 'hk-life', label: '5 Lifecycle & Telemetry', sub: 'session, subagent, statusline...', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Hooks (5)', title: 'Lifecycle & Telemetry Hooks', summary: 'aidlc-session-start, aidlc-session-end, aidlc-log-subagent, aidlc-statusline, aidlc-fold-usage (Claude token usage ledger).', why: 'Tracks session ancestry, subagents, live statusline, and token costs.' }
          ]
        },
        {
          id: 'm-agents', label: '14 Specialist Agents', sub: '11 Experts · 2 Reviewers · 1 Composer',
          color: 'var(--chart-4)', pill: 'pill-c4', badge: 'core/agents/',
          title: 'All 14 Shipped Specialist Agents',
          summary: 'Domain-expert personas with customizable knowledge libraries. Agents never call each other — only the Conductor dispatches work.',
          why: 'Focusing each station on one specialist persona produces sharper, deeper engineering outputs.',
          children: [
            {
              id: 'ag-exp', label: '11 Domain Experts', sub: 'Click to see all 11',
              color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Domain Experts',
              title: '11 Domain-Expert Agents',
              summary: 'Specialists covering Product, Design, Delivery, Architecture, Development, Quality, AWS, DevSecOps, Compliance, Deploy, and Ops.',
              why: 'Brings deep trade knowledge to every station in the lifecycle.',
              children: AGENTS.filter(a => a[1] === 'Expert').map(([name, , desc], idx) => ({
                id: `age-${idx}`, label: name, sub: 'Domain Expert', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Domain Expert', title: name, summary: desc, why: 'Loads both framework methodology knowledge and your team’s custom knowledge for this role.'
              }))
            },
            {
              id: 'ag-rev', label: '2 Read-Only Reviewers', sub: 'Product Lead · Arch Reviewer',
              color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Reviewers',
              title: '2 Adversarial Read-Only Reviewers',
              summary: 'Dedicated quality-gate personas that challenge artifacts without editing them.',
              why: 'Fresh, independent critique catches blind spots the builder missed.',
              children: AGENTS.filter(a => a[1] === 'Reviewer').map(([name, , desc], idx) => ({
                id: `agr-${idx}`, label: name, sub: 'Read-Only Reviewer', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Reviewer', title: name, summary: desc, why: 'Issues READY / NOT-READY receipts bound to artifact fingerprints.'
              }))
            },
            {
              id: 'ag-comp', label: 'Composer Agent', sub: 'Adaptive Workflows',
              color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Composer',
              title: 'aidlc-composer-agent',
              summary: 'Estimates implementation entropy (intent ambiguity, codebase uncertainty, verification entropy, risk) to compose custom adaptive workflow plans.',
              why: 'Handles novel tasks that don’t fit a single stock scope cleanly.'
            }
          ]
        },
        {
          id: 'm-tools', label: 'Skills, Tools & MCP', sub: '5 Skills · 132 Tools · 5 MCPs',
          color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Tooling',
          title: 'Utility Skills, 132 Engine Tools & 5 MCP Servers',
          summary: 'Supporting CLI tools, read-only utility skills, and optional AWS/docs MCP servers.',
          why: 'Gives both the engine and agents reliable, inspectable capabilities.',
          children: [
            { id: 'mt-skills', label: '5 Utility Skills', sub: 'knowledge, cost, replay...', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'core/skills/', title: '5 Built-in Utility Skills', summary: 'aidlc-knowledge, aidlc-issue-report, aidlc-session-cost, aidlc-replay, aidlc-outcomes-pack.', why: 'Provides safe, read-only introspection and reporting outside workflow runs.' },
            { id: 'mt-cli', label: '132 Engine Tools', sub: 'core/tools/aidlc-*.ts', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'core/tools/', title: '132 Deterministic TypeScript Tools', summary: 'Compiled into the native aidlc CLI: orchestration, state, graph, bolts, guards, sensors, audit (134 events), doctor, plugins, and onboarding.', why: 'Runs identically on macOS, Linux, and Windows/WSL without Bun/Node for end users.' },
            { id: 'mt-mcp', label: '5 Optional MCP Servers', sub: 'context7 + 4 AWS servers', color: 'var(--chart-4)', pill: 'pill-c4', badge: '.mcp.json', title: '5 Shipped MCP Servers', summary: 'context7 (library docs), aws-mcp, aws-pricing, aws-iac, and aws-serverless.', why: 'Supplies live documentation and AWS pricing/IaC tooling — gracefully skipped if credentials aren’t present.' }
          ]
        }
      ]
    },

    // -------- BRANCH 7: HARNESSES, PLUGINS & BUILD --------
    {
      id: 'dist', label: 'Harnesses, Plugins & Build', sub: '7 Tools · Plugins · ~1,300 Tests',
      color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Distribution',
      title: 'One Core, Many Harnesses + Plugins + Testing',
      summary: 'How core/ compiles into 7 native AI coding tools, supports modular plugins, and is verified by ~1,300 automated tests.',
      why: 'Teams can use whatever AI coding tool they prefer without fragmenting methodology or audit trails.',
      children: [
        {
          id: 'd-harnesses', label: '7 AI Harnesses', sub: 'Click to see all 7',
          color: 'var(--chart-2)', pill: 'pill-c2', badge: 'harness/',
          title: 'All 7 Supported AI Coding Harnesses',
          summary: 'Each harness has a thin manifest.ts that projects core/ into that tool’s native folder and hook format.',
          why: 'Write the methodology once; run it natively everywhere.',
          children: [
            { id: 'h-claude', label: 'Claude Code', sub: '--harness claude · /aidlc', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Harness', title: 'Claude Code', summary: 'Projects into .claude/ with CLAUDE.md, native hooks, settings.json, and token-usage folding.', why: 'Full native hook and subagent integration.' },
            { id: 'h-kiro-ide', label: 'Kiro IDE / CLI v3', sub: '--harness kiro · /aidlc', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Harness', title: 'Kiro IDE & Kiro CLI v3', summary: 'Projects into .kiro/ with steering docs, hooks, and the "aidlc" agent picker.', why: 'First-class AWS Kiro support with built-in model access.' },
            { id: 'h-kiro-v2', label: 'Kiro CLI (V2)', sub: '--harness kiro-v2 · /aidlc', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Harness', title: 'Kiro CLI (V2)', summary: 'Legacy Kiro CLI v2 distribution with agent resources and hooks.', why: 'Maintains smooth compatibility for existing Kiro v2 users.' },
            { id: 'h-codex', label: 'OpenAI Codex CLI', sub: '--harness codex · $aidlc', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Harness', title: 'OpenAI Codex CLI', summary: 'Uses .agents/skills/, custom emit.ts, trusted project hooks, and $aidlc trigger.', why: 'Brings deterministic AI-DLC workflows to Codex CLI.' },
            { id: 'h-cursor', label: 'Cursor (IDE & CLI)', sub: '--harness cursor · /aidlc', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Harness', title: 'Cursor', summary: 'Single tree serving Cursor IDE and agent CLI: .cursor/ subagents, skills, phase .mdc rules, and hooks.json.', why: 'Works seamlessly with Cursor’s native rule and hook system.' },
            { id: 'h-opencode', label: 'opencode', sub: '--harness opencode · /aidlc', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Harness', title: 'opencode', summary: 'Engine in .aidlc/, shell in .opencode/, method loaded via opencode.json instructions glob.', why: 'Avoids auto-importing engine tools as custom opencode tools.' },
            { id: 'h-copilot', label: 'GitHub Copilot', sub: '--harness copilot · /aidlc', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Harness', title: 'GitHub Copilot (CLI & VS Code)', summary: 'Engine in .aidlc/, merges aidlc-named agents/hooks into .github/, reads rules via AGENTS.md.', why: 'One install serves both Copilot CLI and VS Code agent mode.' }
          ]
        },
        {
          id: 'd-build', label: 'Plugins & Build Pipeline', sub: 'package.ts → dist/ & binary',
          color: 'var(--chart-2)', pill: 'pill-c2', badge: 'scripts/ & plugins/',
          title: 'Modular Plugins, Packager & Native Binary',
          summary: 'Deterministic packaging from core/ + harness/ + plugins/ into dist/ and standalone executables.',
          why: 'End users get a zero-dependency native install; contributors get byte-identical builds.',
          children: [
            { id: 'db-plug', label: 'plugins/ (test-pro)', sub: 'Strictly additive', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Plugins', title: 'Additive Plugin Mechanism', summary: 'Adds custom stages, agents, sensors, scopes, and tools via .aidlc-plugin/plugin.json without editing core. Toggleable per install.', why: 'Lets teams extend AI-DLC cleanly while staying upgradeable.' },
            { id: 'db-pkg', label: 'scripts/package.ts', sub: 'Determinism guard (--check)', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Packager', title: 'Deterministic Packager', summary: 'Substitutes {{HARNESS_DIR}} and materializes dist/<harness>/; `--check` builds twice in isolated temp dirs and byte-compares.', why: 'Eliminates "works on my machine" packaging drift.' },
            { id: 'db-chan', label: 'Native vs Copy Channel', sub: 'Zero-dep binary vs Bun', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Install', title: 'Native vs Copy Installation Channels', summary: 'Native channel ships a compiled `aidlc` binary + runtimes (no Bun/Node needed). Copy channel lets you copy runtime/<harness>/ manually (requires Bun).', why: 'Supports both effortless one-line installs and air-gapped/manual repo setups.' }
          ]
        },
        {
          id: 'd-tests', label: '4-Tier Test Suite', sub: '~1,300 TypeScript Tests',
          color: 'var(--chart-2)', pill: 'pill-c2', badge: 'tests/',
          title: '4-Tier Automated Test Suite (~1,300 Files)',
          summary: 'Bun-powered TypeScript test suite run via `bun tests/run-tests.ts --ci`.',
          why: 'Verifies every parser, guard, hook, packager, plugin, and full harness run before release.',
          children: [
            { id: 'dt-smoke', label: '15 Smoke Tests', sub: 'tests/smoke/', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Tier 1', title: 'Smoke Tests (15 files)', summary: 'Fast sanity checks catching broken builds or entrypoints immediately.', why: 'Seconds-fast feedback loop.' },
            { id: 'dt-unit', label: '920 Unit Tests', sub: 'tests/unit/', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Tier 2', title: 'Unit Tests (920 files)', summary: 'Fine-grained tests for tools, hooks, state machine, sensors, parsers, and rules.', why: 'Pins every deterministic invariant.' },
            { id: 'dt-int', label: '270 Integration Tests', sub: 'tests/integration/', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Tier 3', title: 'Integration Tests (270 files)', summary: 'Multi-component tests for packaging, plugin composition, and workflow transitions.', why: 'Verifies components compose cleanly.' },
            { id: 'dt-e2e', label: '91 E2E Tests', sub: 'tests/e2e/', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Tier 4', title: 'End-to-End Tests (91 files)', summary: 'Full end-to-end runs across real harnesses and release checks.', why: 'Proves the real user experience works across platforms.' }
          ]
        }
      ]
    }
  ]
};

// Build fast lookup maps (id -> node, id -> parentId)
const NODE_MAP = {};
const PARENT_MAP = {};
(function indexTree(node, parentId = null) {
  NODE_MAP[node.id] = node;
  if (parentId) PARENT_MAP[node.id] = parentId;
  (node.children || []).forEach(c => indexTree(c, node.id));
})(MINDMAP_TREE);

// =========================================================================
// DYNAMIC HORIZONTAL TREE MIND MAP ENGINE
// =========================================================================
let selectedId = 'root';
let mmZoom = 1.0;
const expandedIds = new Set(['root']); // Start clean: root expanded showing all 7 pillars

const NODE_W = 196;
const NODE_H = 44;
const H_GAP = 56;
const V_GAP = 12;
const PAD_X = 24;
const PAD_Y = 24;

function layoutMindMap() {
  const positioned = [];
  const edges = [];
  let maxDepth = 0;

  function place(node, depth, topY) {
    if (depth > maxDepth) maxDepth = depth;
    const kids = node.children || [];
    const isOpen = kids.length > 0 && expandedIds.has(node.id);
    const x = PAD_X + depth * (NODE_W + H_GAP);

    if (!isOpen) {
      const y = topY + NODE_H / 2;
      positioned.push({ node, x, y, depth, isOpen: false, childCount: kids.length });
      return { y, height: NODE_H + V_GAP };
    }

    let curY = topY;
    const childCenters = [];
    kids.forEach(c => {
      const res = place(c, depth + 1, curY);
      childCenters.push({ child: c, y: res.y });
      curY += res.height;
    });

    const firstY = childCenters[0].y;
    const lastY = childCenters[childCenters.length - 1].y;
    const y = (firstY + lastY) / 2;
    positioned.push({ node, x, y, depth, isOpen: true, childCount: kids.length });

    childCenters.forEach(({ child, y: cy }) => {
      edges.push({
        x1: x + NODE_W,
        y1: y,
        x2: x + NODE_W + H_GAP,
        y2: cy,
        color: child.color,
        parentId: node.id,
        childId: child.id
      });
    });

    return { y, height: curY - topY };
  }

  const total = place(MINDMAP_TREE, 0, PAD_Y);
  const width = PAD_X * 2 + (maxDepth + 1) * NODE_W + maxDepth * H_GAP + 20;
  const height = Math.max(460, total.height + PAD_Y * 2);
  return { positioned, edges, width, height };
}

function getAncestors(id) {
  const chain = [];
  let cur = id;
  while (cur) {
    chain.unshift(cur);
    cur = PARENT_MAP[cur];
  }
  return chain;
}

function renderMindMap() {
  const { positioned, edges, width, height } = layoutMindMap();
  const svg = document.getElementById('mindmap-svg');
  const linksG = document.getElementById('mm-links');
  const nodesG = document.getElementById('mm-nodes');

  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.setAttribute('width', Math.round(width * mmZoom));
  svg.setAttribute('height', Math.round(height * mmZoom));

  linksG.innerHTML = '';
  nodesG.innerHTML = '';

  const activeChain = new Set(getAncestors(selectedId));

  edges.forEach(e => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const mx = (e.x1 + e.x2) / 2;
    path.setAttribute('d', `M ${e.x1} ${e.y1} C ${mx} ${e.y1}, ${mx} ${e.y2}, ${e.x2} ${e.y2}`);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', e.color);
    const hot = activeChain.has(e.childId) || e.parentId === selectedId;
    path.setAttribute('stroke-width', hot ? '2.3' : '1.4');
    path.setAttribute('stroke-opacity', hot ? '0.9' : '0.42');
    linksG.appendChild(path);
  });

  positioned.forEach(({ node, x, y, isOpen, childCount }) => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'node-group');
    g.setAttribute('transform', `translate(${x}, ${y - NODE_H / 2})`);

    const sel = selectedId === node.id;
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('class', 'node-rect');
    rect.setAttribute('width', NODE_W);
    rect.setAttribute('height', NODE_H);
    rect.setAttribute('rx', node.id === 'root' ? '12' : '9');
    rect.setAttribute('fill', sel ? `color-mix(in srgb, ${node.color} 14%, var(--card))` : 'var(--card)');
    rect.setAttribute('stroke', node.color);
    rect.setAttribute('stroke-width', sel ? '2.5' : '1.4');
    g.appendChild(rect);

    const textMaxW = childCount > 0 ? NODE_W - 44 : NODE_W - 18;
    const labelText = node.label.length > 24 ? node.label.slice(0, 23) + '…' : node.label;
    const subText = (node.sub || '').length > 26 ? node.sub.slice(0, 25) + '…' : (node.sub || '');

    const t1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t1.setAttribute('x', 11);
    t1.setAttribute('y', 18);
    t1.setAttribute('fill', 'var(--foreground)');
    t1.setAttribute('font-size', node.id === 'root' ? '13' : '11.5');
    t1.setAttribute('font-weight', '600');
    t1.textContent = labelText;
    g.appendChild(t1);

    const t2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t2.setAttribute('x', 11);
    t2.setAttribute('y', 33);
    t2.setAttribute('fill', 'var(--muted-foreground)');
    t2.setAttribute('font-size', '10');
    t2.textContent = subText;
    g.appendChild(t2);

    // Click body: select + auto-expand if it has children and isn't open
    g.addEventListener('click', () => {
      if (childCount > 0 && !isOpen) {
        expandedIds.add(node.id);
      }
      selectNode(node.id);
    });

    // Dedicated +N / - badge on the right side of the node
    if (childCount > 0) {
      const pillG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      pillG.setAttribute('transform', `translate(${NODE_W - 32}, ${NODE_H / 2 - 10})`);
      pillG.addEventListener('click', (ev) => {
        ev.stopPropagation();
        if (expandedIds.has(node.id)) expandedIds.delete(node.id);
        else expandedIds.add(node.id);
        selectNode(node.id);
      });

      const pr = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      pr.setAttribute('width', 26);
      pr.setAttribute('height', 20);
      pr.setAttribute('rx', 10);
      pr.setAttribute('fill', isOpen ? 'var(--content)' : `color-mix(in srgb, ${node.color} 18%, var(--card))`);
      pr.setAttribute('stroke', node.color);
      pr.setAttribute('stroke-width', '1.2');
      pillG.appendChild(pr);

      const pt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      pt.setAttribute('x', 13);
      pt.setAttribute('y', 13.5);
      pt.setAttribute('text-anchor', 'middle');
      pt.setAttribute('fill', node.color);
      pt.setAttribute('font-size', '10');
      pt.setAttribute('font-weight', '700');
      pt.textContent = isOpen ? '−' : `+${childCount}`;
      pillG.appendChild(pt);

      g.appendChild(pillG);
    }

    nodesG.appendChild(g);
  });
}

function selectNode(id, ensureVisible = false) {
  const n = NODE_MAP[id];
  if (!n) return;
  selectedId = id;

  // Ensure all ancestors are expanded if jumping via search/breadcrumbs
  if (ensureVisible) {
    getAncestors(id).slice(0, -1).forEach(a => expandedIds.add(a));
  }

  // Breadcrumbs
  const crumbs = getAncestors(id);
  document.getElementById('insp-crumbs').innerHTML = crumbs.map((cid, idx) => {
    const cn = NODE_MAP[cid];
    if (idx === crumbs.length - 1) return `<span style="font-weight:600;color:var(--foreground);">${cn.label}</span>`;
    return `<button class="crumb-btn" onclick="selectNode('${cid}', true)">${cn.label}</button><span>›</span>`;
  }).join('');

  // Header & Summary
  const badge = document.getElementById('insp-badge');
  badge.className = `pill ${n.pill || 'pill-primary'}`;
  badge.textContent = n.badge || 'Concept';
  document.getElementById('insp-title').textContent = n.title || n.label;
  document.getElementById('insp-summary').textContent = n.summary || '';

  // Why box
  const whyBox = document.getElementById('insp-why-box');
  if (n.why) {
    whyBox.classList.remove('hidden');
    document.getElementById('insp-why').textContent = n.why;
  } else {
    whyBox.classList.add('hidden');
  }

  // Analogy box
  const anBox = document.getElementById('insp-analogy-box');
  if (n.analogy) {
    anBox.classList.remove('hidden');
    document.getElementById('insp-analogy').textContent = n.analogy;
  } else {
    anBox.classList.add('hidden');
  }

  // Clickable children chips
  const kids = n.children || [];
  const chBox = document.getElementById('insp-children-box');
  if (kids.length) {
    chBox.classList.remove('hidden');
    document.getElementById('insp-children').innerHTML = kids.map(c => `
      <button class="child-chip" onclick="drillToChild('${c.id}')">${c.label}${c.children?.length ? ` (+${c.children.length})` : ''}</button>
    `).join('');
  } else {
    chBox.classList.add('hidden');
  }

  // Extra facts
  const itBox = document.getElementById('insp-items-box');
  if (n.items && n.items.length) {
    itBox.classList.remove('hidden');
    document.getElementById('insp-items').innerHTML = n.items.map(i => `
      <li style="display:flex;align-items:flex-start;gap:8px;">
        <span style="margin-top:6px;width:6px;height:6px;border-radius:999px;flex-shrink:0;background:${n.color}"></span>
        <span>${i}</span>
      </li>
    `).join('');
  } else {
    itBox.classList.add('hidden');
  }

  renderMindMap();
}

function drillToChild(childId) {
  const n = NODE_MAP[childId];
  getAncestors(childId).forEach(a => expandedIds.add(a));
  if (n && n.children && n.children.length) expandedIds.add(childId);
  selectNode(childId, true);
}

function expandAllMindMap() {
  Object.values(NODE_MAP).forEach(n => {
    if (n.children && n.children.length) expandedIds.add(n.id);
  });
  renderMindMap();
}

function collapseMindMap() {
  expandedIds.clear();
  expandedIds.add('root');
  mmZoom = 1.0;
  document.getElementById('mm-zoom-label').textContent = '100%';
  selectNode('root');
}

function zoomMindMap(delta) {
  mmZoom = Math.min(1.5, Math.max(0.55, +(mmZoom + delta).toFixed(2)));
  document.getElementById('mm-zoom-label').textContent = `${Math.round(mmZoom * 100)}%`;
  renderMindMap();
}

// =========================================================================
// PHASES, NAVIGATION & GLOBAL SEARCH (SEARCHES EVERY MINDMAP NODE TOO!)
// =========================================================================
let activePhase = 2;
const SECTIONS = ['first-principles', 'mindmap', 'paper', 'lifecycle', 'practices', 'machinery', 'harnesses'];

function renderPhases() {
  document.getElementById('phase-list').innerHTML = PHASES.map((p, i) => `
    <button onclick="activePhase=${i};renderPhases()" class="phase-btn ${i === activePhase ? 'active' : ''}">
      <div style="display:flex;align-items:center;gap:10px;">
        <span class="pill ${p.pill}" style="padding:2px 8px;">${p.num}</span>
        <div>
          <div style="font-weight:600;font-size:13.5px;">${p.name}</div>
          <div class="xs muted">${p.paperTag}</div>
        </div>
      </div>
      <span class="xs mono muted">${p.stages.length} stages</span>
    </button>
  `).join('');

  const p = PHASES[activePhase];
  const badge = document.getElementById('ph-badge');
  badge.className = `pill ${p.pill}`;
  badge.textContent = `Phase ${p.num} of 5`;
  document.getElementById('ph-title').textContent = p.name;
  document.getElementById('ph-paper-tag').textContent = p.paperTag;
  document.getElementById('ph-desc').textContent = p.desc;
  document.getElementById('ph-stages').innerHTML = p.stages.map((s, idx) => `
    <div class="sub-box xs mono" style="padding:8px 11px;">
      <span class="muted">${idx + 1}.</span> ${s}
    </div>
  `).join('');
  document.getElementById('ph-agents').innerHTML = p.agents.map(a => `
    <span class="sub-box xs" style="padding:4px 9px;">${a}</span>
  `).join('');
}

function showSection(sec) {
  SECTIONS.forEach(s => {
    document.getElementById(`sec-${s}`).classList.toggle('hidden', s !== sec);
  });
  document.querySelectorAll('#side-nav button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sec === sec);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleSearch(q) {
  const clearBtn = document.getElementById('clear-search');
  const resBox = document.getElementById('search-results');
  const query = q.trim().toLowerCase();
  if (!query) {
    clearBtn.classList.add('hidden');
    resBox.classList.add('hidden');
    resBox.innerHTML = '';
    return;
  }
  clearBtn.classList.remove('hidden');
  const hits = Object.values(NODE_MAP).filter(n =>
    (n.label || '').toLowerCase().includes(query) ||
    (n.title || '').toLowerCase().includes(query) ||
    (n.summary || '').toLowerCase().includes(query) ||
    (n.sub || '').toLowerCase().includes(query)
  );
  resBox.classList.remove('hidden');
  if (!hits.length) {
    resBox.innerHTML = `<div class="xs muted" style="padding:6px;">No matches found.</div>`;
    return;
  }
  resBox.innerHTML = hits.slice(0, 10).map(h => `
    <button onclick="jumpToMindMapNode('${h.id}')" class="search-item">
      <div style="font-weight:600;">${h.label}</div>
      <div class="search-item-hint">${h.summary || h.sub || ''}</div>
    </button>
  `).join('');
}

function jumpToMindMapNode(nodeId) {
  showSection('mindmap');
  drillToChild(nodeId);
  clearSearch();
}

function clearSearch() {
  document.getElementById('global-search').value = '';
  handleSearch('');
}

// =========================================================================
// BOOTSTRAP STATIC GRIDS
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('principles-grid').innerHTML = PRINCIPLES.map(([t, d]) => `
    <div class="sub-box xs stack-sm" style="gap:4px;">
      <div style="font-weight:600;">${t}</div>
      <div class="muted">${d}</div>
    </div>
  `).join('');

  document.getElementById('scopes-grid').innerHTML = SCOPES.map(([name, depth, meta, desc]) => `
    <div class="sub-box xs stack-sm" style="gap:4px;">
      <div style="display:flex;justify-content:space-between;gap:8px;">
        <span class="mono" style="font-weight:600;">${name}</span>
        <span class="mono muted">${depth} · ${meta}</span>
      </div>
      <div class="muted">${desc}</div>
    </div>
  `).join('');

  document.getElementById('practices-grid').innerHTML = PRACTICES.map(([title, pill, desc]) => `
    <div class="card xs stack-sm">
      <div><span class="pill ${pill}">${title}</span></div>
      <div class="muted">${desc}</div>
    </div>
  `).join('');

  document.getElementById('fences-grid').innerHTML = FENCES.map(([name, desc, mode]) => `
    <div class="sub-box xs stack-sm" style="justify-content:space-between;">
      <div>
        <div style="font-weight:600;margin-bottom:4px;">${name}</div>
        <div class="muted">${desc}</div>
      </div>
      <div class="mono muted divider-top" style="padding-top:6px;margin-top:6px;">${mode}</div>
    </div>
  `).join('');

  document.getElementById('sensors-list').innerHTML = SENSORS.map(([id, desc]) => `
    <div class="sub-box xs" style="display:flex;gap:10px;align-items:flex-start;">
      <span class="mono" style="font-weight:600;color:var(--chart-2);min-width:130px;">${id}</span>
      <span class="muted">${desc}</span>
    </div>
  `).join('');

  document.getElementById('skills-list').innerHTML = SKILLS.map(([id, desc]) => `
    <div class="sub-box xs" style="display:flex;gap:10px;align-items:flex-start;">
      <span class="mono" style="font-weight:600;color:var(--chart-3);min-width:140px;">${id}</span>
      <span class="muted">${desc}</span>
    </div>
  `).join('');

  document.getElementById('agents-grid').innerHTML = AGENTS.map(([name, role, desc]) => {
    const pill = role === 'Reviewer' ? 'pill-c4' : role === 'Composer' ? 'pill-c6' : 'pill-c1';
    return `
      <div class="sub-box xs stack-sm" style="gap:4px;">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;">
          <span style="font-weight:600;">${name}</span>
          <span class="pill ${pill}">${role}</span>
        </div>
        <div class="muted">${desc}</div>
      </div>
    `;
  }).join('');

  selectNode('root');
  renderPhases();
});
