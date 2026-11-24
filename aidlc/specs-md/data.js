renderGuideApp({
  id: 'specs-md',
  name: 'specs.md (FIRE / Simple)',
  shortName: 'specs.md',
  tagline: 'Lighter Adaptive Flows Built on AI-DLC Principles',
  pill: 'pill-c1',
  color: 'var(--chart-1)',
  stats: [
    ['0–2 Gates', 'FIRE Adaptive'],
    ['3 Phases', 'Simple Flow'],
    ['Low–Med', 'Ceremony Level'],
    ['VS Code UI', 'Visual Dashboard']
  ],
  intro: 'specs.md stays directly inside the AI-DLC ecosystem while solving its biggest complaint: checkpoint bloat. It offers two lighter flows built on AI-DLC principles — **FIRE Flow** (adaptive 0–2 checkpoints based on task complexity) and **Simple Flow** (a 3-phase spec generator stripping out execution tracking) — plus a dedicated VS Code visual dashboard extension.',
  firstPrinciples: [
    { title: 'Keep AI-DLC’s Spec Clarity, Cut the 10–26 Checkpoints', tag: 'Adaptive Ceremony', pill: 'pill-c1', problem: 'Full AWS AI-DLC’s 5 phases and 10–26 checkpoints can feel painfully heavy on everyday monorepo or brownfield tasks.', solution: 'Preserves AI-DLC’s structured spec discipline while trimming gates down to 0–2 adaptive checkpoints in FIRE Flow.' },
    { title: 'Escalate Human Review Only When Risk Spikes', tag: 'Risk-Based Gates', pill: 'pill-c2', problem: 'Low-risk tweaks and high-risk architectural changes shouldn’t require the same number of human sign-offs.', solution: 'FIRE Flow dynamically scales from 0 checkpoints (routine work) up to 2 checkpoints when complexity or risk spikes.' },
    { title: 'Separate Spec Generation from Execution Tracking When Needed', tag: 'Simple Flow', pill: 'pill-c4', problem: 'For rapid prototyping, tracking every execution step in state files adds overhead you don’t need.', solution: 'Simple Flow strips out execution tracking completely, giving you a clean 3-phase spec generator.' },
    { title: 'Visual Visibility Beats Digging Through Markdown Folders', tag: 'VS Code Dashboard', pill: 'pill-c5', problem: 'Navigating nested spec folders in raw text makes it harder to see overall progress at a glance.', solution: 'Ships a dedicated VS Code visual dashboard extension to inspect specs and flows visually.' }
  ],
  analogy: 'Think of AWS AI-DLC as the full commercial airplane cockpit, and specs.md as the sleek sport-edition cockpit built by the same family: same flight discipline, far fewer switches to flip before takeoff.',
  pillars: [
    ['FIRE Flow (Adaptive)', '0–2 checkpoints scaled dynamically to task complexity — fast for brownfield & monorepos.'],
    ['Simple Flow (3-Phase)', 'Strips out execution tracking for rapid prototyping and lightweight spec generation.'],
    ['VS Code Visual Dashboard', 'Dedicated extension providing visual visibility over specs alongside any IDE or AI agent.']
  ],
  workflowIntro: 'Pick between two built-in flows depending on whether you need adaptive brownfield delivery (FIRE) or fast prototyping specs (Simple).',
  workflowSteps: [
    { title: 'Choose Flow Mode', meta: 'FIRE vs Simple', desc: 'Select **FIRE Flow** for real brownfield/monorepo delivery or **Simple Flow** for rapid 3-phase prototyping.' },
    { title: 'Generate Structured Specs', meta: 'AI-DLC Aligned', desc: 'Produce clean, AI-DLC-inspired specifications without heavy upfront DDD ceremonies.' },
    { title: 'Adaptive Checkpoint (0–2)', meta: 'FIRE Only', desc: 'Automatically skip gates on low-risk tasks, or escalate to 1–2 human checkpoints when risk/complexity spikes.' },
    { title: 'Track Visually & Ship', meta: 'VS Code Dashboard', desc: 'Monitor spec state and progress cleanly in the VS Code visual dashboard extension.' }
  ],
  artifacts: [
    ['FIRE Flow Specs', 'Adaptive specs with 0–2 risk-triggered human checkpoints.', 'Dev + AI'],
    ['Simple Flow Specs', '3-phase lightweight spec docs with zero execution tracking overhead.', 'Dev + AI'],
    ['VS Code Dashboard View', 'Visual status view over workspace specs and flows.', 'VS Code Extension']
  ],
  commands: [
    ['FIRE Flow', 'Run adaptive 0–2 checkpoint workflow tuned for brownfield repos and monorepos.'],
    ['Simple Flow', 'Run 3-phase spec generator without execution tracking for quick prototypes.'],
    ['VS Code Dashboard', 'Inspect and navigate all project specs visually inside VS Code.']
  ],
  supportedTools: ['Any IDE / AI Coding Agent', 'Dedicated VS Code Visual Dashboard Extension', 'AI-DLC Ecosystem Compatible'],
  agentModel: 'Lightweight flow orchestration compatible with any AI coding assistant; escalates to human checkpoints only when complexity warrants.',
  specDrift: 'Moderate drift risk — lighter tracking means humans need to maintain long-term spec hygiene manually.',
  strengths: [
    'Direct bridge from AWS AI-DLC: keeps its core ideas while eliminating checkpoint bloat.',
    'FIRE Flow’s 0–2 adaptive gates work smoothly on brownfield codebases and monorepos.',
    'Simple Flow makes rapid prototyping fast and frictionless.',
    'Includes a dedicated VS Code visual dashboard extension.'
  ],
  weaknesses: [
    'Less rigorous architectural validation on large, multi-service greenfield builds.',
    'Moderate spec drift risk compared to OpenSpec’s delta-archiving or Tessl’s CI sync.',
    'Lighter governance than full AWS AI-DLC or Anthropic AI-Native SDLC for regulated audits.'
  ],
  vsAidlc: 'specs.md lives right inside the AI-DLC family as its lightweight sibling. If you love AI-DLC’s philosophy and structure but find 5 phases and 10–26 checkpoints too heavy for your monorepo or brownfield app, specs.md (FIRE Flow) is the most natural step down in ceremony.',
  mindMap: {
    id: 'sm-root', label: 'specs.md', sub: 'Lighter AI-DLC Flows',
    color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Overview',
    title: 'specs.md (FIRE & Simple Flows)',
    summary: 'Lighter adaptive workflows built directly on AI-DLC principles, plus a VS Code visual dashboard.',
    why: 'Eliminates checkpoint bloat while preserving AI-DLC’s structured spec clarity.',
    children: [
      {
        id: 'sm-flows', label: '2 Built-In Flows', sub: 'FIRE & Simple',
        color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Flows',
        title: 'FIRE Flow & Simple Flow',
        summary: 'Two lightweight alternatives to full 33-stage AI-DLC.',
        why: 'Matches ceremony to real-world monorepo and prototyping needs.',
        children: [
          { id: 'sm-f1', label: 'FIRE Flow', sub: '0–2 adaptive checkpoints', color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Flow', title: 'FIRE Flow', summary: 'Adapts checkpoints (0 to 2) dynamically based on task complexity and risk.', why: 'Ideal for brownfield codebases and monorepos.' },
          { id: 'sm-f2', label: 'Simple Flow', sub: '3-phase spec generator', color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Flow', title: 'Simple Flow', summary: 'Strips out execution tracking, leaving a clean 3-phase spec generator.', why: 'Ideal for rapid prototyping.' }
        ]
      },
      {
        id: 'sm-ux', label: 'VS Code Dashboard', sub: 'Visual Extension',
        color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Tooling',
        title: 'VS Code Visual Dashboard',
        summary: 'Dedicated extension giving visual visibility over specs alongside any AI agent.',
        why: 'Easier to track than raw nested Markdown files.'
      },
      {
        id: 'sm-trade', label: 'Trade-offs & Fit', sub: 'Monorepos & Brownfield',
        color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Evaluation',
        title: 'Strengths & Limits',
        summary: 'Great middle ground for AI-DLC fans on brownfield repos; lighter architectural rigor.',
        why: 'Trades formal multi-gate rigor for speed.',
        children: [
          { id: 'sm-t1', label: 'Best Fit', sub: 'AI-DLC fans on brownfield', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Fit', title: 'Best Use Case', summary: 'Teams that like AI-DLC’s structure but need faster execution on monorepos/brownfield.', why: 'Zero to two adaptive gates.' },
          { id: 'sm-t2', label: 'Main Limit', sub: 'Lighter greenfield rigor', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Limit', title: 'Main Weakness', summary: 'Less rigorous architectural validation on large multi-service greenfield builds; moderate spec drift.', why: 'Intentionally trimmed tracking.' }
        ]
      }
    ]
  }
});
