renderGuideApp({
  id: 'kiro-specs',
  name: 'Kiro Native Specs (EARS)',
  shortName: 'Kiro Specs',
  tagline: 'IDE-Native 3-File Spec Workflow + EARS Notation + Steering · AWS',
  pill: 'pill-c5',
  color: 'var(--chart-5)',
  stats: [
    ['3 Files', 'Req → Design → Tasks'],
    ['EARS', 'Formal Req Syntax'],
    ['Steering', 'Persistent Rules'],
    ['Kiro IDE', 'Native Built-In']
  ],
  intro: 'Built directly into AWS’s Kiro IDE (distinct from the full 33-stage `aidlc-workflows` framework), Kiro Native Specs is a streamlined, IDE-native Spec-Driven Development flow. Every feature produces exactly 3 clean Markdown files (`requirements.md` using formal **EARS** notation, `design.md`, and `tasks.md`) backed by persistent Steering Docs and event-driven Agent Hooks.',
  firstPrinciples: [
    { title: 'EARS Notation Eliminates Requirement Ambiguity', tag: 'Formal Syntax', pill: 'pill-c5', problem: 'Freeform prose requirements ("the system should handle errors nicely") leave huge room for AI guesswork.', solution: 'Uses **EARS** (Easy Approach to Requirements Syntax: `WHEN <trigger> THE SYSTEM SHALL <response>`) so every requirement is crisp and directly testable.' },
    { title: 'Three Files Are Enough for Most Features', tag: 'Minimalist SDD', pill: 'pill-c1', problem: '30+ lifecycle stages overwhelm day-to-day feature work inside an IDE.', solution: 'Distills SDD to three clean artifacts: `requirements.md` (WHAT), `design.md` (HOW), and `tasks.md` (STEP-BY-STEP).' },
    { title: 'Steering Docs Separate Project Context from Feature Specs', tag: 'Steering', pill: 'pill-c2', problem: 'Repeating tech stack, folder layout, and coding standards in every feature spec bloats context.', solution: 'Stores standing repo knowledge in `.kiro/steering/` (`product.md`, `tech.md`, `structure.md`) loaded automatically.' },
    { title: 'Event Hooks Automate Background Hygiene', tag: 'Agent Hooks', pill: 'pill-c4', problem: 'Developers forget to update tests, docs, or translations after editing code.', solution: 'IDE-native Agent Hooks automatically fire on file save or commit to sync tests, docs, and checks.' }
  ],
  analogy: 'Think of a built-in architectural notepad right inside your IDE: 3 clean tabs (Requirements in EARS → Design → Clickable Tasks) plus automatic background assistants whenever you hit Save.',
  pillars: [
    ['EARS Requirements', '`WHEN / IF / WHILE ... THE SYSTEM SHALL ...` makes every acceptance criterion unambiguous.'],
    ['3-File Feature Simplicity', 'Every feature lives cleanly inside `.kiro/specs/<feature>/` as 3 readable files.'],
    ['Steering + Agent Hooks', 'Standing repo context paired with save-triggered automated agent hooks.']
  ],
  workflowIntro: 'Kiro Native Specs runs a clean 3-artifact loop directly inside Kiro IDE without external CLI setup.',
  workflowSteps: [
    { title: 'Steering Setup', meta: '.kiro/steering/', desc: 'Auto-generate or curate `product.md`, `tech.md`, and `structure.md` once for the repo.' },
    { title: 'Requirements (EARS)', meta: 'requirements.md', desc: 'Kiro drafts user stories and formal EARS acceptance criteria (`WHEN ... THE SYSTEM SHALL ...`).' },
    { title: 'Technical Design', meta: 'design.md', desc: 'Generates architecture, sequence diagrams, data models, interfaces, and error-handling strategy.' },
    { title: 'Executable Task List', meta: 'tasks.md', desc: 'Produces a clickable checklist of incremental coding & testing tasks executed one by one.' }
  ],
  artifacts: [
    ['requirements.md', 'User stories + testable EARS-syntax acceptance criteria.', 'Dev + Kiro'],
    ['design.md', 'Architecture, component interfaces, data models, and test plan.', 'Dev + Kiro'],
    ['tasks.md', 'Granular, clickable implementation checklist tied back to requirements.', 'Kiro executes'],
    ['.kiro/steering/*.md', 'Persistent product, tech-stack, and repo-structure guidance.', 'Team']
  ],
  commands: [
    ['Spec Mode', 'Switch Kiro chat from Vibe Mode to Spec Mode to generate the 3-file spec.'],
    ['Run Task', 'Click individual tasks in `tasks.md` to implement and verify incrementally.'],
    ['Agent Hooks', 'Configure event-driven triggers (e.g., on file save) for automated test/doc updates.'],
    ['Steering Docs', 'Define always-included or file-matched repo rules in `.kiro/steering/`.']
  ],
  supportedTools: ['Kiro IDE (Native)', 'Kiro CLI'],
  agentModel: 'IDE-native single-agent spec workflow augmented by background event-driven Agent Hooks.',
  specDrift: 'Low to Moderate — requirements trace to tasks during build; Agent Hooks can help keep docs/tests synced on save.',
  strengths: [
    'Zero setup friction — built natively into Kiro IDE with clickable task UI.',
    'EARS notation produces remarkably crisp, testable requirements.',
    'Clean 3-file structure is far lighter than full 33-stage AWS AI-DLC.',
    'Event-driven Agent Hooks automate repetitive hygiene on file save.'
  ],
  weaknesses: [
    'Tied to the Kiro IDE/CLI ecosystem rather than portable across 15+ IDEs.',
    'No built-in multi-agent swarm, adversarial reviewers, or formal DDD ceremony.',
    'Lighter enterprise audit trail than full AWS AI-DLC or Anthropic AI-Native SDLC.'
  ],
  vsAidlc: 'Both come from AWS, but serve different altitudes: Kiro Native Specs is a lightweight, built-in 3-file IDE feature flow; full AWS AI-DLC (`aidlc-workflows`) is a harness-neutral 5-phase, 33-stage, 14-agent enterprise factory.',
  mindMap: {
    id: 'ks-root', label: 'Kiro Native Specs', sub: '3-File IDE SDD + EARS',
    color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Overview',
    title: 'Kiro Native Specs (EARS)',
    summary: 'Built-in Kiro IDE spec workflow using 3 clean files (`requirements.md`, `design.md`, `tasks.md`), EARS syntax, Steering Docs, and Agent Hooks.',
    why: 'Delivers crisp spec-driven coding right inside the IDE with zero setup overhead.',
    children: [
      {
        id: 'ks-files', label: '3 Spec Artifacts', sub: 'Req → Design → Tasks',
        color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Artifacts',
        title: 'The 3-File Feature Spec',
        summary: 'Every feature stays clean and readable in 3 Markdown files.',
        why: 'Avoids multi-folder ceremony bloat.',
        children: [
          { id: 'ks-f1', label: 'requirements.md (EARS)', sub: 'WHEN ... SHALL ...', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'File 1', title: 'EARS Requirements', summary: 'Formal testable requirements using Easy Approach to Requirements Syntax.', why: 'Eliminates vague prose.' },
          { id: 'ks-f2', label: 'design.md', sub: 'Architecture & schemas', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'File 2', title: 'Technical Design', summary: 'Components, interfaces, data models, and testing strategy.', why: 'Locks technical design before coding.' },
          { id: 'ks-f3', label: 'tasks.md', sub: 'Clickable task list', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'File 3', title: 'Executable Tasks', summary: 'Granular coding tasks clickable directly in Kiro IDE.', why: 'Incremental, verifiable execution.' }
        ]
      },
      {
        id: 'ks-env', label: 'Steering & Hooks', sub: 'Context + Automation',
        color: 'var(--chart-2)', pill: 'pill-c2', badge: 'IDE Features',
        title: 'Steering Docs & Agent Hooks',
        summary: 'Persistent repo guidance + save-triggered automated agent actions.',
        why: 'Keeps context fresh and automates repetitive checks.',
        children: [
          { id: 'ks-e1', label: 'Steering Docs', sub: '.kiro/steering/*.md', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Context', title: 'Steering Documents', summary: 'Standing product, tech, and structure docs loaded automatically.', why: 'Prevents repeating repo context.' },
          { id: 'ks-e2', label: 'Agent Hooks', sub: 'Event-driven triggers', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Automation', title: 'Event-Driven Agent Hooks', summary: 'Automatically run tests, linting, or doc syncs on file save.', why: 'Catches drift automatically.' }
        ]
      }
    ]
  }
});
