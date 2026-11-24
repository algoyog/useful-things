renderGuideApp({
  id: 'bmad',
  name: 'BMAD Method',
  shortName: 'BMAD',
  tagline: 'Scale-Adaptive Multi-Agent Agile Workflow',
  pill: 'pill-c5',
  color: 'var(--chart-5)',
  stats: [
    ['21+ Roles', 'AI Agent Personas'],
    ['Quick / Full', 'Adaptive Tracks'],
    ['Low–High', 'Scalable Ceremony'],
    ['Multi-IDE', 'Agnostic Setup']
  ],
  intro: 'BMAD (Breakthrough Method of Agile AI-Driven Development) brings familiar agile team structure into AI coding by organizing work across 21+ specialized AI personas (Analyst, PM, Architect, Scrum Master, Developer, QA) and scaling ceremony cleanly from quick fixes to full enterprise greenfield builds.',
  firstPrinciples: [
    { title: 'Specialized Personas Beat One Generic Prompt', tag: 'Role Separation', pill: 'pill-c5', problem: 'Asking a single generic AI chat to act as product manager, architect, coder, and QA at once produces shallow, unchallenged decisions.', solution: 'Splits responsibilities across distinct role personas (Analyst, PM, Architect, Dev, QA) that hand off structured artifacts and challenge each other.' },
    { title: 'Scale Ceremony to Task Size', tag: 'Adaptive Depth', pill: 'pill-c2', problem: 'Rigid methodologies force a 2-hour bug fix through the same bureaucracy as a 6-month platform build.', solution: 'Provides Quick Tracks for fast fixes/small features and Full Tracks for deep PRDs, architecture specs, and epic decomposition.' },
    { title: 'Structured Handoffs Keep Context Alive', tag: 'Living Hierarchy', pill: 'pill-c1', problem: 'Long AI sessions degrade as context windows fill up and earlier decisions get buried.', solution: 'Each persona produces crisp, self-contained artifacts (PRD → Architecture → Epics → Stories) plus `AGENTS.md` project context for brownfield repos.' },
    { title: 'Familiar Agile Rituals Accelerate Adoption', tag: 'Low Friction', pill: 'pill-c4', problem: 'Teams trained in Scrum/Agile struggle when forced into unfamiliar formal DDD modeling overnight.', solution: 'Retains familiar agile roles, PRDs, stories, and adversarial design reviews supercharged by AI agents.' }
  ],
  analogy: 'Like running a full virtual agile product studio where you can summon your Analyst, PM, Architect, Developer, or QA into the room on demand—or just grab the Developer alone for a quick fix.',
  pillars: [
    ['21+ Distinct Personas', 'Dedicated prompts and checklists for Analyst, PM, UX, Architect, Scrum Master, Developer, QA, and reviewers.'],
    ['Quick & Full Tracks', 'Scales smoothly from low-ceremony bug fixes to full greenfield PRD + architecture blueprints.'],
    ['Adversarial Design Reviews', 'Separate personas challenge requirements and architecture before code is written.']
  ],
  workflowIntro: 'BMAD adapts its workflow depth to the task—running a full multi-role agile lifecycle for greenfield/epics or a streamlined Quick Track for targeted changes.',
  workflowSteps: [
    { title: 'Track Selection', meta: 'Quick vs Full', desc: 'Pick Quick Track for small fixes/features or Full Track for complex greenfield systems and large epics.' },
    { title: 'Analysis & Brief', meta: 'Analyst Persona', desc: 'Explore the problem space, user needs, constraints, and existing repo context (`AGENTS.md`).' },
    { title: 'PRD & UX Spec', meta: 'PM + UX Personas', desc: 'Produce a structured Product Requirements Document, user journeys, and acceptance criteria.' },
    { title: 'System Architecture', meta: 'Architect Persona', desc: 'Design system components, data models, APIs, and technical decisions challenged by adversarial review.' },
    { title: 'Story Sharding', meta: 'Scrum Master', desc: 'Break epics into self-contained, context-rich developer stories so coding agents stay focused.' },
    { title: 'Build & QA Verification', meta: 'Dev + QA Personas', desc: 'Developer persona implements stories; QA persona validates tests, edge cases, and regressions.' }
  ],
  artifacts: [
    ['PRD.md', 'Product requirements, goals, non-goals, and user flows.', 'PM Persona + Human'],
    ['architecture.md', 'System design, module boundaries, tech stack, and trade-offs.', 'Architect Persona + Human'],
    ['epics/ & stories/', 'Sharded, self-contained implementation stories with acceptance criteria.', 'Scrum Master Persona'],
    ['AGENTS.md', 'Living project context file keeping brownfield conventions accurate.', 'Team + Agents']
  ],
  commands: [
    ['Analyst / PM', 'Run discovery, problem framing, and PRD drafting personas.'],
    ['Architect', 'Design technical architecture and run adversarial architecture checks.'],
    ['Scrum Master', 'Shard large PRDs/architecture into focused, bite-sized story files.'],
    ['Developer', 'Implement individual sharded stories cleanly within bounded context.'],
    ['QA Persona', 'Audit test coverage, edge cases, and story acceptance criteria.'],
    ['Quick Track', 'Bypass full PRD/epic ceremony for rapid fixes and small enhancements.']
  ],
  supportedTools: ['Claude Code', 'Cursor', 'Windsurf', 'Node.js CLI', 'IDE / Agent-Agnostic'],
  agentModel: 'Multi-agent role-based orchestration with 21+ distinct personas. Humans steer role handoffs across Analyst → PM → Architect → Dev → QA.',
  specDrift: 'Low to Moderate drift — sharded living ticket/spec hierarchy and `AGENTS.md` keep context aligned across stories.',
  strengths: [
    'Highly adaptive: scales from instant quick-builds to full multi-role enterprise PRDs.',
    'Distinct AI personas surface blind spots through adversarial design and QA reviews.',
    'IDE- and agent-agnostic (works across Claude Code, Cursor, Windsurf, and CLI).',
    'Familiar agile concepts (PRDs, epics, stories) make team onboarding natural.'
  ],
  weaknesses: [
    'Context and prompt overhead from managing 20+ agent personas and role-switching handoffs.',
    'Requires moderate human steering between role handoffs.',
    'Less deterministic enforcement than AWS AI-DLC’s compiled hooks and cryptographic approval fences.'
  ],
  vsAidlc: 'Both BMAD and AWS AI-DLC use multi-agent specialist personas. AWS AI-DLC leans on formal DDD and deterministic TypeScript hooks/fences; BMAD leans on familiar Agile/Scrum roles (PM, Architect, Scrum Master, QA) and scales down more fluidly via Quick Tracks.',
  mindMap: {
    id: 'bm-root', label: 'BMAD Method', sub: 'Multi-Agent Agile Workflow',
    color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Overview',
    title: 'BMAD Method',
    summary: 'Scale-adaptive multi-agent agile methodology with 21+ role personas and Quick vs Full execution tracks.',
    why: 'Combines familiar agile role separation with AI speed while adapting ceremony to task complexity.',
    children: [
      {
        id: 'bm-roles', label: '21+ Role Personas', sub: 'Specialized Agents',
        color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Personas',
        title: 'Specialized Agile AI Personas',
        summary: 'Separates discovery, product, architecture, story sharding, coding, and QA into distinct roles.',
        why: 'Prevents shallow single-prompt answers and enables adversarial review.',
        children: [
          { id: 'bm-r1', label: 'Analyst & PM', sub: 'Discovery & PRD', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Role', title: 'Analyst & Product Manager', summary: 'Frames the problem, gathers requirements, and authors the PRD.', why: 'Locks in business value before technical design.' },
          { id: 'bm-r2', label: 'Architect & UX', sub: 'Design & Trade-offs', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Role', title: 'Architect & UX Personas', summary: 'Defines system architecture, APIs, and UX flows with adversarial critique.', why: 'Catches architectural flaws before coding.' },
          { id: 'bm-r3', label: 'Scrum Master', sub: 'Story Sharding', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Role', title: 'Scrum Master (Story Sharding)', summary: 'Breaks big specs into small, self-contained developer stories.', why: 'Keeps coding agents inside a crisp, focused context window.' },
          { id: 'bm-r4', label: 'Developer & QA', sub: 'Build & Verify', color: 'var(--chart-5)', pill: 'pill-c5', badge: 'Role', title: 'Developer & QA Personas', summary: 'Developer builds story by story; QA independently validates tests and edge cases.', why: 'Separates writing code from verifying quality.' }
        ]
      },
      {
        id: 'bm-tracks', label: 'Adaptive Tracks', sub: 'Quick vs Full',
        color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Ceremony',
        title: 'Scale-Adaptive Tracks',
        summary: 'Match process weight to the size of the work.',
        why: 'Avoids heavy bureaucracy on simple fixes while protecting complex builds.',
        children: [
          { id: 'bm-tk1', label: 'Quick Track', sub: 'Bug fixes & small tasks', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Track', title: 'Quick Track', summary: 'Minimal ceremony for rapid fixes and well-understood enhancements.', why: 'Preserves speed on routine work.' },
          { id: 'bm-tk2', label: 'Full Track', sub: 'Greenfield & large epics', color: 'var(--chart-2)', pill: 'pill-c2', badge: 'Track', title: 'Full Agile Track', summary: 'Complete Analyst → PM → Architect → Sharded Stories → Dev → QA pipeline.', why: 'Prevents architectural drift on large projects.' }
        ]
      },
      {
        id: 'bm-trade', label: 'Trade-offs & Fit', sub: 'Agile Teams',
        color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Evaluation',
        title: 'Strengths & Costs',
        summary: 'Strong for agile teams wanting distinct AI roles; carries persona-switching overhead.',
        why: 'Helps decide between BMAD, AI-DLC, and lighter frameworks.',
        children: [
          { id: 'bm-t1', label: 'Strengths', sub: 'Personas + adaptive tracks', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Pros', title: 'Key Strengths', summary: 'Adversarial design reviews, story sharding, IDE-agnostic, familiar agile vocabulary.', why: 'High quality without strict DDD.' },
          { id: 'bm-t2', label: 'Main Weakness', sub: '20+ persona overhead', color: 'var(--chart-4)', pill: 'pill-c4', badge: 'Cons', title: 'Main Cost', summary: 'Managing 20+ personas and role-switching prompts adds context and steering overhead.', why: 'More roles = more handoffs to coordinate.' }
        ]
      }
    ]
  }
});
