renderGuideApp({
  id: 'spec-kit',
  name: 'GitHub Spec Kit',
  shortName: 'Spec Kit',
  tagline: 'Open-Source SDD CLI Toolkit · GitHub',
  pill: 'pill-c1',
  color: 'var(--chart-1)',
  stats: [
    ['6 Steps', 'Linear Pipeline'],
    ['15+ Tools', 'Agent Support'],
    ['Medium', 'Ceremony Level'],
    ['Portable', 'Markdown Specs']
  ],
  intro: 'GitHub Spec Kit is an open-source Spec-Driven Development (SDD) CLI toolkit built around one simple idea: "code serves specifications." It enforces a clean, linear feature pipeline with lightweight Markdown artifacts across 15+ AI coding tools without heavy DDD ceremony.',
  firstPrinciples: [
    { title: 'Code Serves Specifications, Not Vice Versa', tag: 'Spec-First', pill: 'pill-c1', problem: 'When developers jump straight into prompting code ("vibe coding"), architecture decisions hide inside chat logs and code becomes hard to verify or regenerate.', solution: 'Makes Markdown specifications the explicit contract every plan, task list, and code implementation must follow.' },
    { title: 'A Project Constitution Anchors Every Feature', tag: 'Shared Guardrails', pill: 'pill-c2', problem: 'Without standing engineering principles, every new feature chat invents different tech choices, testing habits, and style conventions.', solution: 'Starts with a permanent `constitution.md` defining non-negotiable engineering standards that every downstream spec inherits.' },
    { title: 'Clarify Ambiguity Before Generating Tasks', tag: 'Prevent Drift', pill: 'pill-c4', problem: 'Ambiguous specs cause AI agents to silently guess edge cases during implementation.', solution: 'Inserts a dedicated `Clarify` step between `Specify` and `Plan` so open questions are resolved while changes are still one line of Markdown.' },
    { title: 'Tool-Agnostic Portability Over Vendor Lock-In', tag: 'Open Standard', pill: 'pill-c5', problem: 'Locking workflows to one IDE or proprietary runner breaks teams using mixed tools (Copilot, Claude Code, Gemini CLI, Cursor).', solution: 'Uses plain Markdown templates and slash commands that work uniformly across 15+ AI coding tools.' }
  ],
  analogy: 'Think of a clean architectural blueprint checklist for each room you renovate: establish house rules once (Constitution), sketch the room (Specify), answer open questions (Clarify), pick materials (Plan), list work items (Tasks), build it (Implement), and inspect (Converge).',
  pillars: [
    ['Linear & Predictable', 'Every feature follows the exact same 6-step rhythm with minimal cognitive overhead.'],
    ['Lightweight Markdown', 'All specs, plans, and task lists live as readable files right in your git repository.'],
    ['Broad Ecosystem', 'Works out of the box with GitHub Copilot, Claude Code, Gemini CLI, Cursor, Windsurf, and more.']
  ],
  workflowIntro: 'GitHub Spec Kit runs a disciplined, repeatable per-feature pipeline from project constitution through verified implementation.',
  workflowSteps: [
    { title: 'Constitution', meta: 'Project-wide', desc: 'Define permanent engineering principles, tech constraints, quality bars, and testing rules once for the repo.' },
    { title: 'Specify', meta: 'WHAT & WHY', desc: 'Capture the feature requirements, user journeys, and acceptance criteria without leaking premature implementation details.' },
    { title: 'Clarify', meta: 'Resolve Gaps', desc: 'AI surfaces ambiguities and edge cases so you resolve open questions before architecture or code begins.' },
    { title: 'Plan', meta: 'HOW', desc: 'Translate the clarified spec into concrete technical architecture, data models, contracts, and file layout.' },
    { title: 'Tasks', meta: 'Execution List', desc: 'Break the technical plan into small, ordered, testable implementation tasks ready for AI execution.' },
    { title: 'Implement & Converge', meta: 'Build + Verify', desc: 'Execute tasks step by step, then run `/speckit.converge` to verify code matches the spec and artifacts.' }
  ],
  artifacts: [
    ['constitution.md', 'Standing project principles, architecture standards, and non-negotiable rules.', 'Team / Tech Lead'],
    ['spec.md', 'Feature requirements, user flows, edge cases, and acceptance criteria.', 'Product / Dev + AI'],
    ['plan.md', 'Technical design, stack decisions, data schemas, and integration points.', 'Engineer + AI'],
    ['tasks.md', 'Ordered, granular checklist of implementation and test tasks.', 'AI generates; Human approves']
  ],
  commands: [
    ['/speckit.constitution', 'Create or update the project-wide engineering constitution.'],
    ['/speckit.specify', 'Draft a structured feature specification from your prompt.'],
    ['/speckit.clarify', 'Identify and resolve ambiguities and missing edge cases in the spec.'],
    ['/speckit.plan', 'Generate the technical implementation plan from the clarified spec.'],
    ['/speckit.tasks', 'Decompose the plan into an ordered, actionable task checklist.'],
    ['/speckit.implement', 'Execute the approved tasks to write code and tests.'],
    ['/speckit.converge', 'Check final code against spec artifacts to catch and close spec drift.']
  ],
  supportedTools: ['GitHub Copilot', 'Claude Code', 'Gemini CLI', 'Cursor', 'Windsurf', '15+ AI Coding Agents'],
  agentModel: 'Single-agent / linear workflow per feature. No heavy multi-agent persona choreography or swarm orchestration—keeps prompting simple and predictable.',
  specDrift: 'Moderate drift risk over time; mitigated at feature end via `/speckit.converge` to verify code aligns with spec artifacts.',
  strengths: [
    'Clean, intuitive 6-step linear flow that teams understand in minutes.',
    'Broad portability across 15+ AI tools with zero vendor or IDE lock-in.',
    'Balanced governance: project constitution + clarify gate without enterprise red tape.',
    'Works for both greenfield projects and new features in existing apps.'
  ],
  weaknesses: [
    'Linear per-feature pipeline lacks cross-feature orchestration or multi-agent specialist roles.',
    'Each new feature essentially resets the spec cycle rather than maintaining a continuous delta spec.',
    'Less suited for strict regulated compliance audits or complex multi-service DDD architecture.'
  ],
  vsAidlc: 'Compared to AWS AI-DLC (5 phases, 33 stages, 14 agents, formal DDD, 17 hooks), GitHub Spec Kit is dramatically lighter and faster to adopt. Choose Spec Kit when you want a clean, portable "plan before coding" guardrail without DDD ceremony or multi-agent overhead.',
  mindMap: {
    id: 'sk-root', label: 'GitHub Spec Kit', sub: 'Open-Source SDD CLI',
    color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Overview',
    title: 'GitHub Spec Kit',
    summary: 'Open-source Spec-Driven Development CLI toolkit enforcing a clean linear workflow across 15+ AI coding agents.',
    why: 'Gives teams structured spec-first engineering without the heavy ceremony of full DDD or 30+ lifecycle stages.',
    children: [
      {
        id: 'sk-phil', label: 'Core Philosophy', sub: 'Code Serves Specs',
        color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Philosophy',
        title: 'Spec-First Philosophy',
        summary: 'Specifications are the durable contract; code is the derived implementation.',
        why: 'Prevents "vibe coding" drift while keeping ceremony approachable.',
        children: [
          { id: 'sk-p1', label: 'Constitution Anchor', sub: 'Standing repo rules', color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Principle', title: 'Project Constitution', summary: 'Non-negotiable standards inherited by every feature spec.', why: 'Keeps architecture consistent across features.' },
          { id: 'sk-p2', label: 'Clarify Before Plan', sub: 'Resolve ambiguity early', color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Principle', title: 'Explicit Clarify Gate', summary: 'Surfaces hidden edge cases before design or code begins.', why: 'Prevents silent AI assumptions.' },
          { id: 'sk-p3', label: 'Portable Markdown', sub: '15+ AI tools', color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Principle', title: 'Zero Vendor Lock-In', summary: 'Plain Markdown artifacts work in Copilot, Claude Code, Gemini CLI, Cursor, Windsurf.', why: 'Teams can switch AI tools without rewriting workflows.' }
        ]
      },
      {
        id: 'sk-flow', label: '6-Step Linear Pipeline', sub: 'Constitution → Implement',
        color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Workflow',
        title: 'Linear Feature Pipeline',
        summary: 'Six clear stages from project rules to verified implementation.',
        why: 'Predictable, repeatable structure for every feature.',
        children: [
          { id: 'sk-f1', label: '1. Constitution', sub: 'constitution.md', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Step 1', title: 'Constitution', summary: 'Project-wide principles, tech stack rules, and quality bars.', why: 'Set once, reused everywhere.' },
          { id: 'sk-f2', label: '2. Specify', sub: 'spec.md', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Step 2', title: 'Specify', summary: 'Defines WHAT to build and WHY, independent of code.', why: 'Aligns humans and AI on user outcomes.' },
          { id: 'sk-f3', label: '3. Clarify', sub: 'Open Q&A', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Step 3', title: 'Clarify', summary: 'Resolves ambiguities and edge cases before planning.', why: 'Eliminates guesswork early.' },
          { id: 'sk-f4', label: '4. Plan', sub: 'plan.md', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Step 4', title: 'Plan', summary: 'Technical architecture, models, and contracts.', why: 'Separates design decisions from code generation.' },
          { id: 'sk-f5', label: '5. Tasks', sub: 'tasks.md', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Step 5', title: 'Tasks', summary: 'Ordered checklist of small, testable implementation items.', why: 'Makes execution verifiable step by step.' },
          { id: 'sk-f6', label: '6. Implement & Converge', sub: '/speckit.converge', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Step 6', title: 'Implement & Converge', summary: 'Builds code and runs converge check against spec artifacts.', why: 'Catches drift before merging.' }
        ]
      },
      {
        id: 'sk-trade', label: 'Trade-offs & Fit', sub: 'Balanced & Portable',
        color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Evaluation',
        title: 'Strengths & Limits',
        summary: 'Balanced speed vs governance; best for standard feature delivery without heavy multi-agent overhead.',
        why: 'Know when to choose Spec Kit vs heavier (AI-DLC) or lighter (OpenSpec) tools.',
        children: [
          { id: 'sk-t1', label: 'Best Fit', sub: 'Portable SDD teams', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Fit', title: 'Best Use Case', summary: 'Teams wanting a clean, standard spec workflow across Copilot, Claude, Gemini, or Cursor.', why: 'Low learning curve, high clarity.' },
          { id: 'sk-t2', label: 'Main Limit', sub: 'No multi-agent roles', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Limit', title: 'Main Weakness', summary: 'Linear per-feature cycle lacks cross-feature orchestration, specialist personas, or formal audit hooks.', why: 'Intentionally kept simple.' }
        ]
      }
    ]
  }
});
