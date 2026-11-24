renderGuideApp({
  id: 'anthropic-sdlc',
  name: 'Anthropic AI-Native SDLC',
  shortName: 'Anthropic SDLC',
  tagline: 'Enterprise Governance & Separation-of-Duties Playbook',
  pill: 'pill-c6',
  color: 'var(--chart-6)',
  stats: [
    ['6 Stages', 'Plan → Maintain'],
    ['intent.md', 'Git Audit Trail'],
    ['Med–High', 'Governance'],
    ['Claude Code', 'Primary Focus']
  ],
  intro: 'Anthropic’s AI-Native SDLC is an enterprise governance playbook built primarily around Claude Code and skill-based workflows. It emphasizes artifact-driven accountability, Git-committed `intent.md` files, and strict **separation of duties** — the agent that writes code is never allowed to approve it.',
  firstPrinciples: [
    { title: 'Strict Separation of Duties', tag: 'Zero Self-Approval', pill: 'pill-c6', problem: 'An AI agent that writes code and then grades its own work shares the exact same blind spots and confirmation bias.', solution: 'Enforces hard role separation: the coding agent can never approve its own output; independent reviewer roles and accountable humans sign off.' },
    { title: 'Git-Committed Intent as the Audit Trail', tag: 'intent.md', pill: 'pill-c1', problem: 'Regulated organizations must prove *why* a code change was authorized, not just *what* lines changed in a diff.', solution: 'Commits human-readable `intent.md` files directly into Git alongside code changes, creating an immutable, auditable link between intent and implementation.' },
    { title: 'Clear 6-Stage Lifecycle Without 33-Stage Bloat', tag: 'Focused Governance', pill: 'pill-c2', problem: 'Enterprises need real compliance controls and sign-offs, but 30+ granular stages can feel overwhelming to roll out.', solution: 'Organizes governance cleanly into 6 recognizable stages: `Plan → Design → Build → Test → Deploy → Maintain`.' },
    { title: 'Human Accountability Remains Non-Negotiable', tag: 'Compliance Ready', pill: 'pill-c4', problem: 'AI cannot bear legal, security, or production accountability.', solution: 'Every critical transition requires explicit, role-separated human sign-off backed by Git history.' }
  ],
  analogy: 'Like a bank vault dual-key system: one key (coding agent) prepares the transaction, a second independent key (reviewer + human) verifies it against the written authorization (`intent.md`), and Git records the permanent ledger.',
  pillars: [
    ['Separation of Duties', 'Builder agent ≠ Approver agent; mandatory human sign-offs at governance boundaries.'],
    ['Git-Native Auditability', 'Every code change ties directly to a committed `intent.md` artifact in version control.'],
    ['Greenfield & Brownfield', 'Works cleanly across both brand-new services and legacy regulated repositories.']
  ],
  workflowIntro: 'Anthropic’s playbook maps enterprise governance across 6 end-to-end SDLC stages anchored by `intent.md` and role-separated sign-offs.',
  workflowSteps: [
    { title: 'Plan', meta: 'intent.md', desc: 'Author and commit a human-readable `intent.md` capturing business purpose, constraints, and risk boundaries.' },
    { title: 'Design', meta: 'Architecture Sign-Off', desc: 'Produce technical design artifacts reviewed independently before implementation begins.' },
    { title: 'Build', meta: 'Isolated Coder', desc: 'Claude Code / builder agent implements code strictly against the approved `intent.md` and design.' },
    { title: 'Test', meta: 'Independent Verification', desc: 'Separate testing/review agent (never the coder) and automated suites verify behavior and security.' },
    { title: 'Deploy', meta: 'Human Gate', desc: 'Role-separated human sign-off authorizes release with full Git-committed provenance.' },
    { title: 'Maintain', meta: '2σ / 3σ Control-Band Loop', desc: 'Production telemetry deviations (2σ/3σ) automatically generate a fresh `intent.md` to restart the auditable SDLC loop.' }
  ],
  artifacts: [
    ['intent.md', 'Human-readable statement of authorized intent committed directly into Git.', 'Product / Eng Lead'],
    ['Design & Security Review', 'Independent technical and risk assessment before coding.', 'Reviewer Role + Human'],
    ['Verification Evidence', 'Test outputs and independent review sign-off separate from the builder.', 'Verifier Role'],
    ['Git Provenance History', 'Immutable link tying every PR/commit back to approved `intent.md`.', 'Git / Audit Trail']
  ],
  commands: [
    ['intent.md Commit', 'Anchor every feature or fix with an explicit Git-tracked intent document (Originator → PO → Engineer → Code Owner → Release Manager).'],
    ['PreToolUse Hooks & REVIEW.md', 'Deterministic Claude Code hooks and REVIEW.md policies blocking unauthorized transitions or self-approval.'],
    ['2σ / 3σ Control-Band Loop', 'Automated Maintain-phase telemetry triggers generating a fresh `intent.md` on production anomalies.'],
    ['Separated Review', 'Invoke an independent review context that cannot be the same agent that wrote the code.']
  ],
  supportedTools: ['Claude Code (Primary)', 'Skill-Based Workflows', 'Git / Enterprise CI'],
  agentModel: 'Role-separated multi-step workflow: builder agent is strictly isolated from review/approval authority, with mandatory human accountability.',
  specDrift: 'Low drift — Git history ties every code change directly to its approved `intent.md` record.',
  strengths: [
    'Enterprise-grade governance and strict separation of duties without 33 stages of ceremony.',
    'Immutable Git-committed `intent.md` audit trail loved by compliance and security teams.',
    'Works equally well on greenfield services and legacy brownfield repositories.',
    'Deeply aligned with Claude Code’s native skills and review capabilities.'
  ],
  weaknesses: [
    'High human bottleneck slows day-to-day shipping velocity on routine changes.',
    'Tailored primarily around Claude Code rather than 20+ diverse IDEs.',
    'Less formal DDD modeling out of the box than AWS AI-DLC.'
  ],
  vsAidlc: 'Both Anthropic AI-Native SDLC and AWS AI-DLC target regulated enterprise governance. Choose Anthropic’s playbook if you run primarily on Claude Code and want strict separation of duties + Git `intent.md` audit trails without AWS AI-DLC’s 33 stages and formal DDD ceremony.',
  mindMap: {
    id: 'an-root', label: 'Anthropic AI-Native SDLC', sub: 'Enterprise Governance Playbook',
    color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Overview',
    title: 'Anthropic AI-Native SDLC',
    summary: 'Artifact-driven enterprise governance playbook built around Claude Code, `intent.md`, and strict separation of duties.',
    why: 'Gives regulated organizations auditable AI delivery with clear human accountability.',
    children: [
      {
        id: 'an-gov', label: 'Governance Pillars', sub: 'Separation of Duties + Git',
        color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Governance',
        title: 'Core Governance Pillars',
        summary: 'Prevents self-approval and preserves immutable Git intent records.',
        why: 'Meets strict audit, security, and regulatory requirements.',
        children: [
          { id: 'an-g1', label: 'Separation of Duties', sub: 'Coder ≠ Approver', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Control', title: 'Strict Separation of Duties', summary: 'The agent that writes code can never approve its own output.', why: 'Eliminates single-agent blind spots and satisfies audit controls.' },
          { id: 'an-g2', label: 'intent.md in Git', sub: 'Auditable provenance', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Artifact', title: 'Git-Committed intent.md', summary: 'Human-readable intent files committed alongside code in Git.', why: 'Creates a permanent, low-drift link between authorization and code.' },
          { id: 'an-g3', label: 'Human Accountability', sub: 'Role-based sign-off', color: 'var(--chart-6)', pill: 'pill-c6', badge: 'Control', title: 'Mandatory Human Sign-Off', summary: 'Accountable engineers explicitly approve key lifecycle transitions.', why: 'Humans retain legal and operational ownership.' }
        ]
      },
      {
        id: 'an-stages', label: '6 SDLC Stages', sub: 'Plan → Maintain',
        color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Lifecycle',
        title: '6-Stage Governance Lifecycle',
        summary: 'Plan → Design → Build → Test → Deploy → Maintain.',
        why: 'Covers full enterprise delivery without 30+ granular stations.',
        children: [
          { id: 'an-s1', label: '1. Plan', sub: 'Author intent.md', color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Stage 1', title: 'Plan', summary: 'Capture and commit `intent.md` with scope and risk boundaries.', why: 'Establishes auditable intent.' },
          { id: 'an-s2', label: '2. Design', sub: 'Independent review', color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Stage 2', title: 'Design', summary: 'Technical design reviewed before coding.', why: 'Catches architecture issues early.' },
          { id: 'an-s3', label: '3. Build', sub: 'Claude Code builder', color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Stage 3', title: 'Build', summary: 'Builder agent implements against approved intent.', why: 'Scoped, traceable implementation.' },
          { id: 'an-s4', label: '4. Test', sub: 'Independent verifier', color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Stage 4', title: 'Test', summary: 'Separate verifier agent & tests validate code.', why: 'Enforces separation of duties.' },
          { id: 'an-s5', label: '5. Deploy', sub: 'Human sign-off', color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Stage 5', title: 'Deploy', summary: 'Authorized release backed by Git provenance.', why: 'Audit-ready deployments.' },
          { id: 'an-s6', label: '6. Maintain', sub: 'Ongoing intent loop', color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Stage 6', title: 'Maintain', summary: 'Post-launch fixes keep `intent.md` trails intact.', why: 'Prevents post-launch drift.' }
        ]
      },
      {
        id: 'an-fit', label: 'Trade-offs & Fit', sub: 'Regulated Claude Teams',
        color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Evaluation',
        title: 'Strengths & Limits',
        summary: 'Max governance for regulated teams; slower velocity and Claude-centric.',
        why: 'Helps weigh against AWS AI-DLC and faster alternatives.',
        children: [
          { id: 'an-f1', label: 'Best Fit', sub: 'Compliance & audit orgs', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Fit', title: 'Best Use Case', summary: 'Regulated orgs on Claude Code needing strict separation of duties and Git audit trails.', why: 'Strong compliance without 33 stages.' },
          { id: 'an-f2', label: 'Main Limit', sub: 'Speed & tool focus', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Limit', title: 'Main Weakness', summary: 'Slower day-to-day shipping speed; primarily tailored to Claude Code.', why: 'Governance intentionally trades off raw speed.' }
        ]
      }
    ]
  }
});
