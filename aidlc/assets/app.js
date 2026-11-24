// =========================================================================
// DATA DEFINITIONS — AI-DLC Method Paper (Raja SP, AWS) + Repo v2.11.4
// =========================================================================
const NODES = {
  root: {
    id: 'root', label: 'AI-DLC', sub: 'Paper + Repo v2.11.4',
    x: 470, y: 300, w: 156, h: 56, color: 'var(--primary)', pill: 'pill-primary',
    badge: 'Big Picture', title: 'AI-DLC: Theory + Software Factory',
    summary: 'Combines Raja SP’s AI-native methodology paper with a deterministic, multi-harness software factory that runs in 7 AI coding tools.',
    analogy: 'The Paper is the philosophy ("automobiles, not faster horse chariots"); this Repo is the actual factory.',
    items: ['4 Golden Tenets & 3-Plane Architecture', '10 Paper Principles + Mob Rituals', '5 Phases / 33 Stages / 14 Agents / 11 Scopes', '6 Sensors / 17 Hooks / 5 Fences / 132 Engine Tools']
  },
  paper: {
    id: 'paper', parent: 'root', label: 'Method Paper', sub: 'Raja SP (AWS) · 10 Principles',
    x: 470, y: 80, w: 174, h: 44, color: 'var(--chart-6)', pill: 'pill-c6',
    badge: 'Theory', title: 'AI-DLC Method Definition Paper',
    summary: 'Reimagines SDLC for hours/days cycles (Bolts) with AI proposing plans, DDD built into the core, and human gates acting as a "loss function" against "quick-cement" code.',
    analogy: 'Google Maps for engineering: you set the destination (Intent), AI proposes routes, you steer.',
    items: ['Intent → Units → Bolts → Deployment Units', 'Mob Elaboration, Mob Programming, Mob Testing', 'Persistent Context Memory with traceability', '3 Core Phases: Inception, Construction, Operations']
  },
  core: {
    id: 'core', parent: 'root', label: 'core/', sub: 'Single Source of Truth',
    x: 245, y: 235, w: 148, h: 44, color: 'var(--chart-1)', pill: 'pill-c1',
    badge: 'core/', title: 'core/ — Methodology & Engine',
    summary: 'Tool-neutral source of truth projected into every harness. Never edit dist/ — edit core/.',
    analogy: 'The master blueprint and machinery of the factory.',
    items: ['aidlc-common/ (conductor, protocols, 33 stages)', 'agents/ (14) + knowledge/ + skills/ (5)', 'scopes/ (11) + memory/ (5-layer rules)', 'sensors/ (6) + hooks/ (17) + tools/ (132)']
  },
  stages: {
    id: 'stages', parent: 'core', label: '33 Stages + Protocols', sub: 'core/aidlc-common/',
    x: 84, y: 120, w: 148, h: 38, color: 'var(--chart-1)', pill: 'pill-c1',
    badge: 'aidlc-common/', title: 'Conductor, 18 Protocols & 33 Stages',
    summary: 'Defines all 33 stations across 5 phases plus protocols for checkpoints, swarming, waves, mob, pipeline, and adversarial reviews.',
    analogy: 'The assembly line stations and the conductor’s musical score.',
    items: ['3 Init, 7 Ideation, 9 Inception, 7 Construction, 7 Operation', 'conductor.md coordinates work without deciding routing']
  },
  agents: {
    id: 'agents', parent: 'core', label: '14 Agents + Knowledge', sub: 'core/agents/',
    x: 84, y: 185, w: 148, h: 38, color: 'var(--chart-1)', pill: 'pill-c1',
    badge: 'agents/', title: '14 Specialist Personas',
    summary: '11 domain experts, 2 read-only adversarial reviewers (Product Lead, Architecture Reviewer), and 1 adaptive workflow Composer.',
    analogy: 'Your cross-functional engineering team, each with a trade handbook.',
    items: ['Agents never call each other directly', 'Knowledge is customizable per team in aidlc/spaces/']
  },
  scopes: {
    id: 'scopes', parent: 'core', label: '11 Scopes + Memory', sub: 'core/scopes/ & memory/',
    x: 84, y: 250, w: 148, h: 38, color: 'var(--chart-1)', pill: 'pill-c1',
    badge: 'scopes/ & memory/', title: 'Workflow Presets & 5-Layer Rules',
    summary: 'Scopes pick the stage route and depth (bugfix vs enterprise). Memory layers rules from org → team → project → phase → stage.',
    analogy: 'Express vs full-service lanes, plus a learning notebook.',
    items: ['Learning loop turns your corrections into standing rules', 'Defaults can always be overridden by the human']
  },
  guards: {
    id: 'guards', parent: 'core', label: '6 Sensors + 17 Hooks', sub: 'core/sensors/ & hooks/',
    x: 84, y: 315, w: 148, h: 38, color: 'var(--chart-1)', pill: 'pill-c1',
    badge: 'sensors/ & hooks/', title: 'Deterministic Checks & 5 Fences',
    summary: 'Sensors check lint, types, traceability, and claim sources. Hooks enforce plan approval, review freeze, state integrity, and audit logging.',
    analogy: 'Quality inspectors and safety rails serving the human.',
    items: ['Guard Policy: strict, relaxed, or off', '5 Fences (4 switchable per intent by plain request)']
  },
  tools: {
    id: 'tools', parent: 'core', label: '132 Engine Tools', sub: 'core/tools/ & skills/',
    x: 84, y: 380, w: 148, h: 38, color: 'var(--chart-1)', pill: 'pill-c1',
    badge: 'tools/ & skills/', title: 'Deterministic TypeScript Engine',
    summary: 'Compiles into the native aidlc CLI. Owns orchestration, state, stage graphs, bolts, audit logs, doctor diagnostics, and plugins.',
    analogy: 'The factory’s mechanical control panel.',
    items: ['6 orchestrate subcommands: next, continue, report, park, team-board, wait', '5 utility skills: knowledge, issue-report, session-cost, replay, outcomes-pack']
  },
  plugins: {
    id: 'plugins', parent: 'root', label: 'plugins/', sub: 'Additive Add-ons',
    x: 245, y: 455, w: 148, h: 44, color: 'var(--chart-3)', pill: 'pill-c3',
    badge: 'plugins/', title: 'Modular Plugin Mechanism',
    summary: 'Adds custom stages, agents, sensors, and tools without editing core. Toggleable per install.',
    analogy: 'Snap-on factory modules you can unplug anytime.',
    items: ['plugins/test-pro/ reference plugin', 'Emitted per harness at dist/plugins/<name>/']
  },
  harness: {
    id: 'harness', parent: 'root', label: 'harness/', sub: '7 AI Coding Tools',
    x: 700, y: 215, w: 152, h: 44, color: 'var(--chart-2)', pill: 'pill-c2',
    badge: 'harness/', title: '7 Native AI Harness Adapters',
    summary: 'Thin manifests projecting core/ into Claude Code, Kiro CLI v2, Kiro IDE/v3, Codex CLI, Cursor, opencode, and GitHub Copilot.',
    analogy: '7 power adapters for the exact same factory.',
    items: ['Each has manifest.ts + orchestrator SKILL.md', 'Configure any project via `aidlc config --harness <name>`']
  },
  scripts: {
    id: 'scripts', parent: 'root', label: 'scripts/ → dist/', sub: 'Packager & Native CLI',
    x: 700, y: 345, w: 152, h: 44, color: 'var(--chart-4)', pill: 'pill-c4',
    badge: 'scripts/', title: 'Build, Native Binaries & CI',
    summary: 'Generates deterministic dist/ trees, compiles standalone aidlc executables, and ships install.sh / install.ps1.',
    analogy: 'The packaging & shipping department.',
    items: ['bun scripts/package.ts --check (determinism guard)', '18 GitHub Actions workflows in .github/workflows/']
  },
  tests: {
    id: 'tests', parent: 'root', label: 'tests/ & docs/', sub: '~1,300 Tests + 3 Guides',
    x: 560, y: 495, w: 168, h: 44, color: 'var(--chart-5)', pill: 'pill-c5',
    badge: 'tests/ & docs/', title: '4-Tier Tests & Documentation',
    summary: '15 smoke, 920 unit, 270 integration, and 91 e2e tests plus User Guide, Harness Engineer Guide, Developer Reference, and 2.0 Spec PDF.',
    analogy: 'Automated crash-test facility + 3 owner manuals.',
    items: ['bun tests/run-tests.ts --ci', 'assets/AI-DLC-Workflows-2.0-Specification.pdf']
  }
};

const PRINCIPLES = [
  ['1. Reimagine, Don’t Retrofit', 'Build from first principles for hours/days AI cycles ("automobiles, not faster horse chariots").'],
  ['2. Reverse Conversation Direction', 'AI initiates plans, asks clarifying questions & proposes trade-offs; humans approve (Google Maps model).'],
  ['3. Bake Design into the Core', 'Embed DDD (or BDD/TDD) directly into workflow stages to prevent quality debt ($2.41T US cost cited).'],
  ['4. Align with AI Capability', 'Neither mere autocomplete nor unsupervised autonomy — AI-Driven collaboration with human accountability.'],
  ['5. Built for Complex Systems', 'Targeted at scalable, regulated, multi-team systems needing real architectural trade-offs.'],
  ['6. Retain Human Symbiosis', 'Keep proven alignment tools like User Stories (human–AI contracts) and Risk Registers.'],
  ['7. Transition via Familiarity', 'Learn in 1 day via clear mappings: Epics → Units, Sprints → Bolts.'],
  ['8. Streamline Responsibilities', 'AI bridges FE/BE/Infra/DevOps/Security silos; Product Owners & Developers anchor oversight.'],
  ['9. Minimize Stages, Maximize Flow', 'Minimal handoffs with sharp human gates acting as a "loss function" to stop "quick-cement" errors.'],
  ['10. No Hard-Wired Workflows', 'AI proposes a dynamic Level 1 Plan for your Intent, humans refine it, then AI decomposes Level 2 subtasks.']
];

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

const SEARCH_INDEX = [
  { term: 'Quick-Cement & Loss Function', sec: 'first-principles', hint: 'Human gates catch AI errors before code hardens' },
  { term: 'Google Maps Model (Reverse Conversation)', sec: 'first-principles', hint: 'Human sets Intent, AI proposes routes' },
  { term: '4 Golden Tenets', sec: 'first-principles', hint: 'Human drives → Tools → LLM → Human judgement' },
  { term: '3-Plane Architecture (Control / Data / Management)', sec: 'first-principles', hint: 'Borrowed from networking' },
  { term: 'Control Loop & Learning Loop', sec: 'first-principles', hint: 'Feedforward Rules + Feedback Sensors' },
  { term: 'Master Mind Map (SVG)', sec: 'mindmap', hint: 'Interactive map of Paper + Repo' },
  { term: 'Intent, Unit, Bolt, Deployment Unit', sec: 'paper', hint: 'Agile/Scrum to AI-DLC translator' },
  { term: 'Mob Elaboration & Mob Construction', sec: 'paper', hint: 'Real-time team + AI rituals' },
  { term: '10 Principles (Raja SP Paper)', sec: 'paper', hint: 'DDD core, no rigid workflows, hours/days Bolts' },
  { term: 'Static & Dynamic Models (Brown-field)', sec: 'paper', hint: 'Reverse-engineering existing code' },
  { term: '5 Phases & 33 Stages', sec: 'lifecycle', hint: 'Init, Ideation, Inception, Construction, Operation' },
  { term: '11 Workflow Scopes (classic, feature, bugfix, enterprise...)', sec: 'lifecycle', hint: 'Presets for route & depth' },
  { term: '4 Execution Modes (Inline, Subagent, Pipeline, Mob)', sec: 'practices', hint: 'How agents collaborate' },
  { term: 'Walking Skeleton & Walk Order', sec: 'practices', hint: 'Build smallest working slice first' },
  { term: 'Swarm, Parallel Batches & Git Worktrees', sec: 'practices', hint: 'Isolated parallel Unit execution' },
  { term: 'Tri-Mode Questions & 3-Strike Escape Hatch', sec: 'practices', hint: 'Guide Me, Edit File, Chat' },
  { term: 'Autonomy Modes & Ladder Prompt', sec: 'practices', hint: 'gated vs autonomous checkpoints' },
  { term: 'Adversarial Reviewers & Fingerprints', sec: 'practices', hint: 'Product Lead & Architecture Reviewer' },
  { term: 'Spaces, Intents & 6-State Checkboxes', sec: 'practices', hint: 'aidlc/spaces/ & aidlc-state.md' },
  { term: '5-Layer Additive Rules Chain', sec: 'practices', hint: 'org → team → project → phase → stage' },
  { term: 'Conductor ↔ Engine Directive Loop', sec: 'machinery', hint: 'aidlc-orchestrate.ts (6 subcommands)' },
  { term: 'Guard Policy & 5 Fences', sec: 'machinery', hint: 'strict/relaxed/off, plan approval, review freeze...' },
  { term: '6 Deterministic Sensors', sec: 'machinery', hint: 'linter, type-check, traceability, claim-sources...' },
  { term: '17 Framework Hooks', sec: 'machinery', hint: 'Guards, workflow spine & telemetry' },
  { term: '14 Specialist Agents', sec: 'machinery', hint: '11 experts, 2 reviewers, 1 composer' },
  { term: '5 Utility Skills & 5 MCP Servers', sec: 'machinery', hint: 'context7, aws-mcp, session-cost, doctor...' },
  { term: '132 Engine Tools', sec: 'machinery', hint: 'core/tools/ TypeScript CLIs' },
  { term: '7 Harnesses (Claude, Kiro, Codex, Cursor, opencode, Copilot)', sec: 'harnesses', hint: 'Native adapters & triggers' },
  { term: '4 Meanings of Harness', sec: 'harnesses', hint: 'AI tool, harness engineering, folder, test harness' },
  { term: 'Plugins, Build Pipeline & ~1,300 Tests', sec: 'harnesses', hint: 'package.ts, native binary, 4 test tiers' }
];

// =========================================================================
// STATE & RENDERING
// =========================================================================
let selectedId = 'root';
let activePhase = 2;
const SECTIONS = ['first-principles', 'mindmap', 'paper', 'lifecycle', 'practices', 'machinery', 'harnesses'];

function renderMindMap() {
  const linksG = document.getElementById('mm-links');
  const nodesG = document.getElementById('mm-nodes');
  linksG.innerHTML = '';
  nodesG.innerHTML = '';

  Object.values(NODES).forEach(n => {
    if (!n.parent) return;
    const p = NODES[n.parent];
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const midX = (p.x + n.x) / 2;
    const midY = (p.y + n.y) / 2;
    const vertical = Math.abs(p.x - n.x) < 40;
    path.setAttribute('d', vertical
      ? `M ${p.x} ${p.y} C ${p.x} ${midY}, ${n.x} ${midY}, ${n.x} ${n.y}`
      : `M ${p.x} ${p.y} C ${midX} ${p.y}, ${midX} ${n.y}, ${n.x} ${n.y}`);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', n.color);
    const rel = (selectedId === n.id || selectedId === n.parent || selectedId === 'root');
    path.setAttribute('stroke-width', rel ? '2.2' : '1.3');
    path.setAttribute('stroke-opacity', rel ? '0.8' : '0.24');
    linksG.appendChild(path);
  });

  Object.values(NODES).forEach(n => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'node-group');
    g.setAttribute('transform', `translate(${n.x - n.w / 2}, ${n.y - n.h / 2})`);
    g.addEventListener('click', () => selectNode(n.id));

    const sel = selectedId === n.id;
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('class', 'node-rect');
    rect.setAttribute('width', n.w);
    rect.setAttribute('height', n.h);
    rect.setAttribute('rx', n.id === 'root' ? '14' : '10');
    rect.setAttribute('fill', sel ? `color-mix(in srgb, ${n.color} 18%, var(--card))` : 'var(--card)');
    rect.setAttribute('stroke', n.color);
    rect.setAttribute('stroke-width', sel ? '2.6' : '1.5');
    g.appendChild(rect);

    const t1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t1.setAttribute('x', n.w / 2); t1.setAttribute('y', n.h / 2 - 4);
    t1.setAttribute('text-anchor', 'middle'); t1.setAttribute('fill', 'var(--foreground)');
    t1.setAttribute('font-size', n.id === 'root' ? '14' : '12'); t1.setAttribute('font-weight', '600');
    t1.textContent = n.label;
    g.appendChild(t1);

    const t2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t2.setAttribute('x', n.w / 2); t2.setAttribute('y', n.h / 2 + 12);
    t2.setAttribute('text-anchor', 'middle'); t2.setAttribute('fill', 'var(--muted-foreground)');
    t2.setAttribute('font-size', '10.5');
    t2.textContent = n.sub;
    g.appendChild(t2);

    nodesG.appendChild(g);
  });
}

function selectNode(id) {
  selectedId = id;
  const n = NODES[id];
  const badge = document.getElementById('insp-badge');
  badge.className = `pill ${n.pill}`;
  badge.textContent = n.badge;
  document.getElementById('insp-title').textContent = n.title;
  document.getElementById('insp-summary').textContent = n.summary;
  document.getElementById('insp-analogy').textContent = n.analogy;
  document.getElementById('insp-items').innerHTML = n.items.map(i => `
    <li style="display:flex;align-items:flex-start;gap:8px;">
      <span style="margin-top:6px;width:6px;height:6px;border-radius:999px;flex-shrink:0;background:${n.color}"></span>
      <span>${i}</span>
    </li>
  `).join('');
  renderMindMap();
}

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
  const hits = SEARCH_INDEX.filter(item =>
    item.term.toLowerCase().includes(query) || item.hint.toLowerCase().includes(query)
  );
  resBox.classList.remove('hidden');
  if (!hits.length) {
    resBox.innerHTML = `<div class="xs muted" style="padding:6px;">No matches found.</div>`;
    return;
  }
  resBox.innerHTML = hits.slice(0, 8).map(h => `
    <button onclick="jumpSearch('${h.sec}')" class="search-item">
      <div style="font-weight:600;">${h.term}</div>
      <div class="search-item-hint">${h.hint}</div>
    </button>
  `).join('');
}

function jumpSearch(sec) {
  showSection(sec);
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
