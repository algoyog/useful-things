renderGuideApp({
  id: 'openspec',
  name: 'OpenSpec',
  shortName: 'OpenSpec',
  tagline: 'Fluid, Brownfield-First Delta Spec Workflow',
  pill: 'pill-c2',
  color: 'var(--chart-2)',
  stats: [
    ['Delta Specs', 'Added/Mod/Del'],
    ['25–30+ Tools', 'Broadest Reach'],
    ['Low', 'Ceremony Level'],
    ['Very Low', 'Spec Drift']
  ],
  intro: 'OpenSpec is a minimalist, brownfield-first spec-driven workflow built for real, living codebases. Instead of forcing full spec rewrites or heavy multi-gate ceremonies, it tracks compact change proposals using delta markers (`added`, `modified`, `removed`) and merges completed deltas back into a single living source-of-truth spec.',
  firstPrinciples: [
    { title: 'Most Real Engineering Is Brownfield, Not Greenfield', tag: 'Brownfield-First', pill: 'pill-c2', problem: 'Heavy frameworks assume you are designing a brand-new system from scratch, making small changes on an existing repo painfully slow.', solution: 'Models every change as a compact **delta proposal** against what already exists, keeping review time to minutes.' },
    { title: 'Specs Go Stale Unless Deltas Merge Back', tag: 'Zero Stale Docs', pill: 'pill-c1', problem: 'In per-feature spec tools, once a feature ships, its spec sits frozen in a folder while later PRs silently change the behavior.', solution: 'Archives completed change proposals by merging their `added`/`modified`/`removed` deltas directly back into the canonical living spec.' },
    { title: 'Minimum Viable Structure Beats Vibe Coding', tag: 'Low Friction', pill: 'pill-c4', problem: 'Solo devs and small teams abandon heavy 30-stage frameworks and fall back to unstructured vibe coding.', solution: 'Strips ceremony down to a crisp proposal → review → apply → archive loop with near-zero setup.' },
    { title: 'Universal Agent Compatibility', tag: '25–30+ Tools', pill: 'pill-c5', problem: 'Different developers on the same team use Claude Code, Cursor, Copilot, Gemini CLI, Kiro, or Codex.', solution: 'Supports 25–30+ AI coding tools through clean, lightweight conventions.' }
  ],
  analogy: 'Like `git diff` for specifications: instead of rewriting the whole encyclopedia every time you edit one feature, you write a tiny patch note (`added` / `modified` / `removed`), review it fast, build it, and fold it back into the master book.',
  pillars: [
    ['Delta Markers', 'Explicitly labels only what is `ADDED`, `MODIFIED`, or `REMOVED`—zero bloat.'],
    ['Living Source of Truth', 'Archiving a completed change updates the canonical spec automatically so docs never rot.'],
    ['Max Speed, Low Bottleneck', 'Compact proposals let humans review intent in seconds before AI applies tasks.']
  ],
  workflowIntro: 'OpenSpec uses a fast, fluid 4-step loop designed for continuous iteration on live codebases.',
  workflowSteps: [
    { title: 'Propose Change', meta: 'Delta Proposal', desc: 'Draft a compact change proposal describing the motivation, scope, and delta spec markers (`added`, `modified`, `removed`).' },
    { title: 'Quick Human Review', meta: 'Low Bottleneck', desc: 'Review the small diff-style spec and task list—takes minutes instead of hours of multi-gate sign-offs.' },
    { title: 'Apply Tasks', meta: 'Build & Test', desc: 'AI coding agent implements the proposed tasks against the existing codebase cleanly.' },
    { title: 'Archive & Merge Spec', meta: 'Living Truth', desc: 'Archive the completed change, folding the delta back into the master living specification to prevent spec drift.' }
  ],
  artifacts: [
    ['specs/<domain>/spec.md', 'Canonical living specification representing current system behavior.', 'Living Source of Truth'],
    ['changes/<id>/proposal.md', 'Why this change is needed and what behavior changes.', 'Dev + AI'],
    ['changes/<id>/specs/*.md', 'Compact delta markers (`ADDED`, `MODIFIED`, `REMOVED`).', 'AI drafts; Human reviews'],
    ['changes/<id>/tasks.md', 'Short checklist of concrete implementation steps.', 'AI executes']
  ],
  commands: [
    ['Propose', 'Generate a compact change proposal with delta markers and task list.'],
    ['Review', 'Human reviews only the changed behavior (diff-level clarity).'],
    ['Apply', 'Execute the approved tasks on the live codebase.'],
    ['Archive', 'Merge completed deltas back into the living spec so documentation stays current.']
  ],
  supportedTools: ['Claude Code', 'Cursor', 'GitHub Copilot', 'Gemini CLI', 'Kiro', 'Codex', '25–30+ AI Tools'],
  agentModel: 'Lightweight, single-agent fluid workflow. Works inside whatever AI coding assistant you already use without heavy persona machinery.',
  specDrift: 'Very Low drift — archiving completed deltas directly back into the living spec keeps specs synchronized post-launch.',
  strengths: [
    'Max shipping speed with minimal setup and near-zero ceremony overhead.',
    'Best-in-class for brownfield codebases via compact delta markers.',
    'Very low spec drift post-launch because deltas merge back into a living spec.',
    'Broadest tool compatibility (25–30+ AI assistants).'
  ],
  weaknesses: [
    'Too lightweight for complex greenfield system architecture or formal DDD.',
    'Lacks strict enterprise governance, separation of duties, or cryptographic audit trails.',
    'No built-in multi-agent swarm or adversarial reviewer architecture.'
  ],
  vsAidlc: 'OpenSpec sits at the opposite end of the speed-vs-governance spectrum from AWS AI-DLC. If AI-DLC’s 5 phases and multi-gate reviews feel heavy on your existing repo, OpenSpec gives you clean spec alignment and near-zero drift at maximum iteration speed.',
  mindMap: {
    id: 'os-root', label: 'OpenSpec', sub: 'Brownfield Delta Specs',
    color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Overview',
    title: 'OpenSpec',
    summary: 'Minimalist, brownfield-first spec workflow using compact delta markers across 25–30+ AI tools.',
    why: 'Delivers spec discipline and living docs without slowing down day-to-day shipping.',
    children: [
      {
        id: 'os-core', label: 'Core Mechanism', sub: 'Delta Specs + Archive',
        color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Mechanism',
        title: 'Delta-Driven Living Specs',
        summary: 'Tracks only what changes (`added`, `modified`, `removed`) and merges back on completion.',
        why: 'Solves both slow brownfield ceremony and post-launch spec rot.',
        children: [
          { id: 'os-c1', label: 'Delta Markers', sub: 'Added / Modified / Removed', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Technique', title: 'Delta Markers', summary: 'Expresses only behavioral diffs instead of rewriting entire specs.', why: 'Makes human review fast and surgical.' },
          { id: 'os-c2', label: 'Archive-to-Living Spec', sub: 'Very low drift', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Technique', title: 'Archive & Merge', summary: 'Folds completed deltas back into the canonical spec.', why: 'Keeps specs accurate long after launch.' }
        ]
      },
      {
        id: 'os-loop', label: '4-Step Fluid Loop', sub: 'Propose → Archive',
        color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Workflow',
        title: 'Fast 4-Step Loop',
        summary: 'Propose → Quick Review → Apply → Archive.',
        why: 'Low human bottleneck while eliminating pure vibe coding.',
        children: [
          { id: 'os-l1', label: '1. Propose', sub: 'proposal.md + deltas', color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Step 1', title: 'Propose Change', summary: 'Draft compact delta spec and task list.', why: 'Aligns intent before touching code.' },
          { id: 'os-l2', label: '2. Quick Review', sub: 'Minutes, not hours', color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Step 2', title: 'Quick Human Review', summary: 'Verify only the behavioral diff.', why: 'Removes review bottlenecks.' },
          { id: 'os-l3', label: '3. Apply', sub: 'Execute tasks', color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Step 3', title: 'Apply Tasks', summary: 'AI implements the approved diff on the live repo.', why: 'Focused execution.' },
          { id: 'os-l4', label: '4. Archive', sub: 'Update living spec', color: 'var(--chart-1)', pill: 'pill-c1', badge: 'Step 4', title: 'Archive & Merge', summary: 'Updates canonical spec with completed changes.', why: 'Prevents documentation rot.' }
        ]
      },
      {
        id: 'os-fit', label: 'Trade-offs & Fit', sub: 'Max Speed · Brownfield',
        color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Evaluation',
        title: 'When to Choose OpenSpec',
        summary: 'Ideal for solo devs, small teams, and live brownfield repos; too light for regulated enterprise DDD.',
        why: 'Know its sweet spot vs AWS AI-DLC and Anthropic SDLC.',
        children: [
          { id: 'os-f1', label: 'Best Fit', sub: 'Brownfield & small teams', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Fit', title: 'Best Use Case', summary: 'Existing codebases and fast-moving teams moving away from vibe coding.', why: 'High velocity with living specs.' },
          { id: 'os-f2', label: 'Main Limit', sub: 'Light governance', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Limit', title: 'Main Weakness', summary: 'Not built for heavy greenfield architecture or strict compliance audits.', why: 'Trades formal governance for speed.' }
        ]
      }
    ]
  }
});
