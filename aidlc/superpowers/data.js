renderGuideApp({
  id: 'superpowers',
  name: 'Superpowers (Obra)',
  shortName: 'Superpowers',
  tagline: 'Composable Agentic Engineering Skills & TDD SDLC · Jesse Vincent',
  pill: 'pill-c3',
  color: 'var(--chart-3)',
  stats: [
    ['Skills', 'Composable Flows'],
    ['Strict TDD', 'Red-Green-Refactor'],
    ['Worktrees', 'Isolated Branches'],
    ['Multi-Tool', 'Claude/Codex/Cursor']
  ],
  intro: 'Superpowers (by Jesse Vincent / Obra) is an open-source, skills-based agentic engineering workflow for Claude Code, Codex, Cursor, and OpenCode. Instead of heavy enterprise phases, it embeds disciplined senior-engineer habits directly into composable skills: **Brainstorming → Writing Plans → Git Worktrees → Subagent-Driven TDD → Two-Stage Review → Verification Before Completion**.',
  firstPrinciples: [
    { title: 'Encode Senior Engineering Habits as Mandatory Skills', tag: 'Skill Discipline', pill: 'pill-c3', problem: 'LLMs naturally cut corners — skipping tests, guessing root causes, or claiming "done" without running verification.', solution: 'Turns engineering rigor (TDD, root-cause debugging, verification-before-completion) into explicit skills the agent must follow.' },
    { title: 'Fresh Subagent Per Task Prevents Context Rot', tag: 'Subagent-Driven', pill: 'pill-c1', problem: 'Long coding chats accumulate stale context and degrade code quality halfway through a multi-step plan.', solution: 'Dispatches a fresh subagent for each bite-sized task in the plan, followed by a two-stage review (spec compliance + code quality).' },
    { title: 'Never Claim Done Without Fresh Command Evidence', tag: 'Evidence Gate', pill: 'pill-c2', problem: 'Agents frequently declare "all tests pass" from memory without actually running the test suite after the last edit.', solution: '`verification-before-completion` forbids claiming success until the actual test/build command is run and observed passing.' },
    { title: 'Isolate Every Feature in a Git Worktree', tag: 'Clean Git', pill: 'pill-c4', problem: 'Experimenting or running subagents directly on `main` creates messy partial diffs.', solution: 'Automatically sets up clean Git worktrees and verifies a passing test baseline before touching code.' }
  ],
  analogy: 'Like giving your AI coding agent a strict staff-engineer mentor sitting beside it: "Brainstorm first, write a bite-sized plan, open a clean worktree, write the failing test first, pass two reviews, and show me the green test output before saying you’re done."',
  pillars: [
    ['Strict TDD & Root-Cause Debugging', 'Enforces red-green-refactor and forbids shotgun guessing when bugs appear.'],
    ['Subagent-Driven Execution', 'Fresh subagent per task + two-stage review (Spec Compliance → Code Quality).'],
    ['Portable Skill Plugin', 'Installs cleanly into Claude Code, Codex CLI, Cursor, and OpenCode.']
  ],
  workflowIntro: 'Superpowers chains composable engineering skills from Socratic design refinement through verified branch completion.',
  workflowSteps: [
    { title: 'Brainstorming', meta: 'Socratic Design', desc: 'Refines your raw idea through focused questions, explores trade-offs, and saves an approved design doc.' },
    { title: 'Git Worktree Setup', meta: 'Isolated Branch', desc: 'Creates an isolated git worktree and confirms a clean passing test baseline before coding.' },
    { title: 'Writing Plans', meta: '2–5 Min Tasks', desc: 'Breaks design into bite-sized, exact-file implementation tasks with explicit verification commands.' },
    { title: 'Subagent-Driven TDD', meta: 'Fresh Context', desc: 'Dispatches a fresh subagent per task enforcing strict Red-Green-Refactor TDD.' },
    { title: 'Two-Stage Review', meta: 'Spec + Quality', desc: 'Each completed task passes two independent checks: (1) Spec Compliance, then (2) Code Quality.' },
    { title: 'Verify & Finish Branch', meta: 'Evidence Required', desc: 'Runs final verification commands with fresh output, then merges, opens a PR, or cleans up the worktree.' }
  ],
  artifacts: [
    ['Design Doc (docs/plans/)', 'Approved architecture and trade-offs produced during brainstorming.', 'Human + Agent'],
    ['Implementation Plan', 'Bite-sized 2–5 minute tasks with exact file paths and test commands.', 'Agent drafts; Human approves'],
    ['Git Worktree', 'Isolated working branch keeping main clean during execution.', 'Automated Skill'],
    ['Verification Evidence', 'Observed passing command output required before declaring completion.', 'Verification Skill']
  ],
  commands: [
    ['brainstorming', 'Socratic design refinement before any code is written.'],
    ['writing-plans', 'Generate bite-sized, executable implementation plans.'],
    ['subagent-driven-development', 'Execute plan tasks with fresh subagents + two-stage reviews.'],
    ['test-driven-development', 'Enforce strict Red-Green-Refactor discipline.'],
    ['systematic-debugging', '4-phase root-cause investigation (no random trial-and-error fixes).'],
    ['verification-before-completion', 'Require fresh passing test/build output before claiming done.']
  ],
  supportedTools: ['Claude Code', 'OpenAI Codex CLI', 'Cursor', 'OpenCode'],
  agentModel: 'Composable skill-driven subagent orchestration: fresh subagent per task + two-stage reviewer checks (Spec Compliance & Code Quality).',
  specDrift: 'Low during build (plan + spec-compliance reviewer per task); moderate post-launch unless design docs are actively maintained.',
  strengths: [
    'Instills genuine senior-engineer craft (TDD, systematic debugging, evidence-based verification).',
    'Fresh subagent per task eliminates long-session context degradation.',
    'Works cleanly across Claude Code, Codex, Cursor, and OpenCode.',
    'Low setup overhead — installs as a lightweight skill plugin with no heavy runtime.'
  ],
  weaknesses: [
    'Enforced by prompt/skill discipline rather than compiled deterministic hooks/fences.',
    'Less formal enterprise governance, compliance auditing, or DDD modeling than AWS AI-DLC.',
    'Strict TDD and two-stage reviews add token usage on trivial edits.'
  ],
  vsAidlc: 'Superpowers shares AWS AI-DLC’s love for git worktrees, subagents, and independent reviews, but strips away the 5-phase enterprise DDD lifecycle and 132 compiled TypeScript tools in favor of lightweight, developer-centric engineering skills.',
  mindMap: {
    id: 'sp-root', label: 'Superpowers (Obra)', sub: 'Agentic Engineering Skills',
    color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Overview',
    title: 'Superpowers (Obra)',
    summary: 'Open-source composable skill workflow embedding TDD, systematic debugging, git worktrees, and two-stage subagent reviews into AI coding tools.',
    why: 'Turns best-practice senior engineering habits into repeatable agent workflows.',
    children: [
      {
        id: 'sp-skills', label: 'Core Skill Chain', sub: 'Brainstorm → Verify',
        color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Skills',
        title: 'Composable Engineering Skills',
        summary: 'Six core skills chaining design, planning, isolated execution, and verification.',
        why: 'Prevents agents from cutting corners.',
        children: [
          { id: 'sp-s1', label: 'brainstorming', sub: 'Socratic design', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Skill', title: 'Brainstorming', summary: 'Clarifies goals and trade-offs into an approved design doc before coding.', why: 'Stops premature coding.' },
          { id: 'sp-s2', label: 'writing-plans', sub: 'Bite-sized tasks', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Skill', title: 'Writing Plans', summary: 'Produces 2–5 minute tasks with exact file paths and test commands.', why: 'Makes every task cleanly verifiable.' },
          { id: 'sp-s3', label: 'subagent-driven-dev', sub: 'Fresh subagent + 2 reviews', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Skill', title: 'Subagent-Driven Development', summary: 'Runs a fresh subagent per task followed by Spec Compliance and Code Quality reviews.', why: 'Prevents context rot.' },
          { id: 'sp-s4', label: 'test-driven-dev', sub: 'Red → Green → Refactor', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Skill', title: 'Strict TDD', summary: 'Requires a failing test before writing production code.', why: 'Proves tests actually catch bugs.' },
          { id: 'sp-s5', label: 'systematic-debugging', sub: 'Root-cause first', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Skill', title: 'Systematic Debugging', summary: '4-phase root-cause analysis prohibiting shotgun fixes.', why: 'Eliminates flaky band-aid patches.' },
          { id: 'sp-s6', label: 'verification-before-done', sub: 'Fresh command proof', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Skill', title: 'Verification Before Completion', summary: 'Forbids claiming success without observing fresh passing command output.', why: 'Stops hallucinated "tests pass" claims.' }
        ]
      },
      {
        id: 'sp-trade', label: 'Trade-offs & Fit', sub: 'Craft-Focused Devs',
        color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Evaluation',
        title: 'Strengths & Limits',
        summary: 'Best for developers who want strict TDD, debugging rigor, and clean worktrees without enterprise ceremony.',
        why: 'Lightweight skill plugin vs compiled governance engine.',
        children: [
          { id: 'sp-t1', label: 'Best Fit', sub: 'TDD & craft teams', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Fit', title: 'Best Use Case', summary: 'Engineers on Claude Code, Codex, Cursor, or OpenCode who want disciplined TDD and fresh subagent execution.', why: 'High code quality with low setup.' },
          { id: 'sp-t2', label: 'Main Limit', sub: 'Prompt-enforced skills', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Limit', title: 'Main Weakness', summary: 'Relies on skill/prompt adherence rather than compiled deterministic hooks or enterprise audit logs.', why: 'Not designed for regulated compliance audits.' }
        ]
      }
    ]
  }
});
