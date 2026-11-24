renderGuideApp({
  id: 'tessl',
  name: 'Tessl',
  shortName: 'Tessl',
  tagline: 'Spec-as-Source Framework with Continuous CI/CD Sync',
  pill: 'pill-c4',
  color: 'var(--chart-4)',
  stats: [
    ['Spec=Source', 'Core Paradigm'],
    ['Near-Zero', 'Spec Drift'],
    ['Medium', 'Ceremony Level'],
    ['CI/CD Sync', 'Test-Driven']
  ],
  intro: 'Tessl takes Spec-Driven Development to its logical extreme: **Spec-as-Source**. Instead of treating specs as temporary planning docs that rot once code is written, Tessl treats living specifications as the primary source of truth — continuously regenerating and validating code against specs via deterministic automated tests and CI/CD evals.',
  firstPrinciples: [
    { title: 'Specs Are Source Code; Implementation Is Compiled Output', tag: 'Spec-as-Source', pill: 'pill-c4', problem: 'In almost every other workflow, code eventually diverges from specs because humans edit code directly after launch.', solution: 'Elevates structured specifications to the primary source of truth so code is continuously generated, regenerated, and synced from the spec.' },
    { title: 'Governance via Automated Evals, Not Manual Paperwork', tag: 'Automated Gates', pill: 'pill-c2', problem: 'Manual human gatekeeping slows teams down, yet skipping governance causes silent regressions.', solution: 'Replaces manual gatekeeping with automated spec/skill evaluations and deterministic test suites running in CI/CD.' },
    { title: 'Modular Boundaries Enable Safe Regeneration', tag: 'Component-Led', pill: 'pill-c1', problem: 'Regenerating a tangled legacy monolith is risky and unpredictable.', solution: 'Targets clean, modular components with explicit contracts and strong test coverage so modules can be safely regenerated or reverse-engineered.' },
    { title: 'Zero Spec Drift Is Only Possible with Continuous Verification', tag: 'Living Sync', pill: 'pill-c5', problem: 'Docs that aren’t executed by CI inevitably lie within weeks.', solution: 'Ties every spec directly to automated build and test suites so any drift fails CI immediately.' }
  ],
  analogy: 'Like a compiler for software requirements: just as you edit TypeScript instead of hand-patching compiled JavaScript, in Tessl you edit the living Spec and let AI + automated tests keep the generated code permanently in sync.',
  pillars: [
    ['Near-Zero Spec Drift', 'Specs and code stay continuously synchronized through automated test suites.'],
    ['Governance via Automation', 'Automated spec/skill evals replace repetitive manual sign-offs during build.'],
    ['Modular Component Focus', 'Shines when building isolated, well-tested modules in mature CI/CD pipelines.']
  ],
  workflowIntro: 'Tessl shifts human effort upfront into crisp specifications and strong test suites, then automates continuous code generation and verification.',
  workflowSteps: [
    { title: 'Author Living Spec', meta: 'Source of Truth', desc: 'Write structured, unambiguous component specifications defining exact behavior, interfaces, and constraints.' },
    { title: 'Bind Automated Tests & Evals', meta: 'Deterministic Guard', desc: 'Attach comprehensive automated test suites and spec/skill evaluations to verify compliance.' },
    { title: 'Generate / Regenerate Code', meta: 'AI Compilation', desc: 'AI agents generate or regenerate module implementations directly from the living specification.' },
    { title: 'Continuous CI/CD Sync', meta: 'Zero Drift', desc: 'CI continuously validates that code and specs remain in exact lockstep on every change.' }
  ],
  artifacts: [
    ['Living Specifications', 'Primary source of truth defining module behavior and contracts.', 'Engineers (Upfront)'],
    ['Spec / Skill Evals', 'Automated verification criteria checking AI outputs against specs.', 'CI/CD Pipeline'],
    ['Generated Code Modules', 'Derived, regeneratable implementations synced to the spec.', 'AI Agents'],
    ['Deterministic Test Suites', 'Automated tests proving code satisfies every spec clause.', 'CI/CD + QA']
  ],
  commands: [
    ['Spec Authoring', 'Define or update the living specification as the single source of truth.'],
    ['Regenerate', 'Re-synthesize implementation code cleanly from updated specifications.'],
    ['Automated Evals', 'Run deterministic CI/CD spec and skill evaluations to catch drift instantly.']
  ],
  supportedTools: ['Multi-Agent Compatible', 'CI/CD Pipeline Integrated', 'Automated Test Runners'],
  agentModel: 'Multi-agent / CI-CD integrated generation paired with automated spec/skill evaluation harnesses.',
  specDrift: 'Near-zero drift — specs are the primary source of truth and automated tests continuously enforce synchronization.',
  strengths: [
    'Near-zero spec drift: eliminates stale documentation permanently.',
    'Low human bottleneck during build once specs and automated tests are in place.',
    'Governance via deterministic automation rather than slow manual gatekeeping.',
    'Ideal for modular components and teams with mature CI/CD test suites.'
  ],
  weaknesses: [
    'Steep learning curve and high upfront investment in authoring rigorous specs and tests.',
    'Awkward fit for messy legacy monoliths that lack strong automated test coverage.',
    'Requires a mindset shift away from hand-editing implementation code directly.'
  ],
  vsAidlc: 'AWS AI-DLC uses human checkpoints and formal DDD across the full 5-phase lifecycle; Tessl goes further on spec-code synchronization by making the spec the literal source of truth enforced by CI/CD tests. Choose Tessl if spec rot is your #1 pain and you have strong automated test pipelines.',
  mindMap: {
    id: 'ts-root', label: 'Tessl', sub: 'Spec-as-Source Framework',
    color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Overview',
    title: 'Tessl',
    summary: 'Spec-as-source framework where living specs are the primary source of truth and code is continuously regenerated and verified via CI/CD tests.',
    why: 'Eliminates spec drift by binding specs directly to automated builds and tests.',
    children: [
      {
        id: 'ts-core', label: 'Spec-as-Source Model', sub: 'Compiler Analogy',
        color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Paradigm',
        title: 'Specs as Primary Source of Truth',
        summary: 'Edit the spec; regenerate and verify the implementation automatically.',
        why: 'Makes spec rot structurally impossible.',
        children: [
          { id: 'ts-c1', label: 'Living Specs', sub: 'Primary source', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Artifact', title: 'Living Specifications', summary: 'Structured specifications that drive code generation directly.', why: 'Single source of truth.' },
          { id: 'ts-c2', label: 'Automated Evals', sub: 'CI/CD governance', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Verification', title: 'Automated Spec & Skill Evals', summary: 'Continuous CI tests validating exact sync between specs and code.', why: 'Replaces manual gatekeeping with deterministic checks.' }
        ]
      },
      {
        id: 'ts-trade', label: 'Trade-offs & Fit', sub: 'Modular + Strong CI',
        color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Evaluation',
        title: 'Strengths & Costs',
        summary: 'Near-zero drift for modular systems; high upfront test/spec investment.',
        why: 'Requires mature CI/CD and clean module boundaries.',
        children: [
          { id: 'ts-t1', label: 'Best Fit', sub: 'Modular + deterministic CI', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Fit', title: 'Best Use Case', summary: 'Modular components and teams with mature, deterministic CI/CD pipelines.', why: 'Tests guarantee safe regeneration.' },
          { id: 'ts-t2', label: 'Main Limit', sub: 'Steep curve / monoliths', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Limit', title: 'Main Weakness', summary: 'Steep learning curve; awkward fit for messy legacy monoliths without strong tests.', why: 'Depends heavily on upfront test quality.' }
        ]
      }
    ]
  }
});
