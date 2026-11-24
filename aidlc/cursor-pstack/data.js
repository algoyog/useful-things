renderGuideApp({
  id: 'cursor-pstack',
  name: 'Cursor pstack',
  shortName: 'pstack',
  tagline: 'High-Speed Parallel Agent Skill Plugin · Cursor IDE',
  pill: 'pill-c3',
  color: 'var(--chart-3)',
  stats: [
    ['Parallel', 'Agent Swarms'],
    ['Verifiers', 'Automated QA'],
    ['Low–Med', 'Ceremony Level'],
    ['Cursor IDE', 'Primary Target']
  ],
  intro: 'Cursor pstack is a parallel agent skill plugin built for senior engineers who want maximum shipping velocity. Instead of rigid multi-stage human approval gates, it uses specialized slash-command playbooks (`/tdd`, `/swarm`, `/code-review`) and automated verifier agents to execute and check concurrent work at high speed.',
  firstPrinciples: [
    { title: 'Replace Manual Gate Bottlenecks with Automated Verifiers', tag: 'Max Autonomy', pill: 'pill-c3', problem: 'Stopping every 10 minutes to approve intermediate Markdown specs kills momentum for experienced engineers.', solution: 'Pairs autonomous worker agents with separate **automated verifier agents** and TDD loops that catch bugs without manual phase sign-offs.' },
    { title: 'Parallel Swarms Multiply Throughput', tag: '/swarm', pill: 'pill-c1', problem: 'Single-threaded chat agents can only touch one task at a time while independent work waits.', solution: 'Fans out concurrent sub-agents via `/swarm` to build, refactor, and test multiple independent tasks in parallel.' },
    { title: 'Working Prototypes & Tests Settle Questions Faster Than Docs', tag: 'Code-First', pill: 'pill-c2', problem: 'Endless upfront specification debates often dissolve the moment you see a working prototype and failing/passing tests.', solution: 'Uses `/tdd` and rapid iteration so executable tests and live diffs answer design questions directly.' },
    { title: 'Composable Playbooks Over Monolithic Lifecycles', tag: 'Skill Plugins', pill: 'pill-c4', problem: 'One-size-fits-all 30-stage pipelines add friction to routine refactors and bug fixes.', solution: 'Offers sharp, composable slash-command playbooks (`/tdd`, `/swarm`, `/code-review`) you invoke on demand.' }
  ],
  analogy: 'Like an F1 pit crew where multiple mechanics (swarm agents) work on all four wheels simultaneously while sensors and pit-lane inspectors (verifier agents) check every bolt—no stopping to fill out paperwork between turns.',
  pillars: [
    ['Max Speed, Very Low Bottleneck', 'Skips upfront phase gates so senior engineers stay in high-velocity flow.'],
    ['Automated Verifier Agents', 'Independent verification agents check outputs and run `/code-review` automatically.'],
    ['Brownfield & Refactor Friendly', 'Built for rapid iteration, refactoring, and parallel feature work in live repos.']
  ],
  workflowIntro: 'Cursor pstack replaces linear phase checklists with on-demand parallel playbooks and automated verification loops.',
  workflowSteps: [
    { title: 'Pick Playbook', meta: 'Slash Command', desc: 'Invoke the exact playbook you need: `/tdd`, `/swarm`, or `/code-review` directly in Cursor.' },
    { title: 'Parallel Swarm Dispatch', meta: '/swarm', desc: 'Fan out concurrent worker agents across independent tasks, files, or refactors.' },
    { title: 'Test-Driven Loop', meta: '/tdd', desc: 'Write failing tests first and iterate rapidly until all checks pass.' },
    { title: 'Automated Verifier Pass', meta: 'Verifier Agents', desc: 'Separate verifier agents inspect diffs, run tests, and execute `/code-review` before human merge.' }
  ],
  artifacts: [
    ['Tests & Executable Diffs', '"Code is the spec" — live tests and PR diffs serve as primary truth.', 'Worker + Verifier Agents'],
    ['Playbook Skills', 'Reusable slash-command playbooks (`/tdd`, `/swarm`, `/code-review`).', 'Cursor Plugin'],
    ['Verifier Reports', 'Automated review and verification findings before final merge.', 'Verifier Agents']
  ],
  commands: [
    ['/swarm', 'Launch parallel worker agents to execute independent tasks concurrently.'],
    ['/arena', 'Spawn multiple competitive candidate agents simultaneously and graft the best solution pieces together.'],
    ['blast-radius', 'Run live code-execution impact & benchmark-checklist checks instead of static design docs.'],
    ['/tdd', 'Run disciplined test-driven development loops (red → green → refactor).'],
    ['/code-review', 'Trigger automated multi-angle code review via separate verifier agents (architect, poteto-agent, verifiers).']
  ],
  supportedTools: ['Cursor IDE (Primary)', 'Cursor Agent CLI'],
  agentModel: 'High-autonomy parallel agent swarms paired with separate automated verifier agents.',
  specDrift: 'Higher drift risk — because "code is the spec," architectural intent is not automatically preserved in long-lived Markdown documents.',
  strengths: [
    'Maximum execution speed and parallel throughput for senior engineers.',
    'Very low human bottleneck: automated verifier agents handle routine quality checks.',
    'Great fit for brownfield repos, refactors, and parallel feature sprints.',
    'Composable playbooks let you use only the exact tool you need.'
  ],
  weaknesses: [
    'High compute and token consumption from running parallel agent swarms.',
    'Weak auditability and compliance trail for regulated enterprise teams.',
    'Tied primarily to Cursor IDE rather than harness-neutral across 15+ tools.',
    'Higher architectural spec drift because intent isn’t persisted in formal spec docs.'
  ],
  vsAidlc: 'Cursor pstack optimizes for raw throughput and autonomy, whereas AWS AI-DLC optimizes for formal DDD, human checkpoints, and full auditability. Choose pstack when human review gates are your bottleneck and you have senior engineers steering high-speed parallel coding in Cursor.',
  mindMap: {
    id: 'cp-root', label: 'Cursor pstack', sub: 'Parallel Agent Swarms',
    color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Overview',
    title: 'Cursor pstack',
    summary: 'High-speed parallel agent skill plugin for Cursor IDE using composable playbooks and automated verifier agents.',
    why: 'Eliminates manual phase-gate bottlenecks so senior engineers can ship at maximum parallel throughput.',
    children: [
      {
        id: 'cp-play', label: 'Core Playbooks', sub: '/tdd · /swarm · /code-review',
        color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Playbooks',
        title: 'Slash-Command Playbooks',
        summary: 'On-demand skills replacing rigid multi-phase workflows.',
        why: 'Invoke only what the task demands.',
        children: [
          { id: 'cp-p1', label: '/swarm', sub: 'Parallel agent workers', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Playbook', title: '/swarm', summary: 'Dispatches concurrent agents across independent tasks.', why: 'Multiplies throughput.' },
          { id: 'cp-p2', label: '/tdd', sub: 'Test-first loops', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Playbook', title: '/tdd', summary: 'Drives implementation via executable red/green test loops.', why: 'Verifies behavior continuously without manual spec gates.' },
          { id: 'cp-p3', label: '/code-review', sub: 'Verifier agents', color: 'var(--chart-3)', pill: 'pill-c3', badge: 'Playbook', title: '/code-review', summary: 'Runs automated verifier agents over diffs before merge.', why: 'Replaces slow manual gatekeeping with automated critique.' }
        ]
      },
      {
        id: 'cp-trade', label: 'Trade-offs & Fit', sub: 'Max Speed · Higher Tokens',
        color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Evaluation',
        title: 'Strengths & Costs',
        summary: 'Unmatched speed in Cursor; trades away formal audit trails and burns more tokens.',
        why: 'Best for senior engineers in non-regulated, fast-moving codebases.',
        children: [
          { id: 'cp-t1', label: 'Best Fit', sub: 'Senior devs in Cursor', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Fit', title: 'Best Use Case', summary: 'High-velocity parallel development, brownfield refactors, and rapid prototyping.', why: 'Zero manual phase-gate friction.' },
          { id: 'cp-t2', label: 'Main Costs', sub: 'Token burn + weak audit', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Limit', title: 'Main Weakness', summary: 'High compute/token usage, Cursor-centric, higher spec drift, weak regulatory auditability.', why: 'Speed-first design skips formal spec docs.' }
        ]
      }
    ]
  }
});
