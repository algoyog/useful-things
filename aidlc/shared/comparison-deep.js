// =========================================================================
// DEEP COMPARISON DATA:
// 1. UNIQUE CONCEPTS & CROSS-FRAMEWORK COMPATIBILITY (18 Concepts × 10 Frameworks)
// 2. ROLES, TEAM ORGANIZATION, TEAM SIZE & ROLE/PHASE HANDSHAKES (10 Frameworks)
// =========================================================================

// Compatibility status codes:
// 'native'       = Originating / core native concept
// 'compatible'   = Works cleanly alongside or directly supported
// 'partial'      = Solves the same problem differently / partial overlap
// 'neutral'      = Agnostic / leaves it up to the team
// 'incompatible' = Conflicts philosophically or structurally (explains WHY)

const FW_SHORT = {
  'aws': 'AWS AI-DLC',
  'spec-kit': 'Spec Kit',
  'bmad': 'BMAD',
  'openspec': 'OpenSpec',
  'anthropic-sdlc': 'Anthropic',
  'cursor-pstack': 'pstack',
  'tessl': 'Tessl',
  'specs-md': 'specs.md',
  'kiro-specs': 'Kiro Specs',
  'superpowers': 'Superpowers'
};

const UNIQUE_CONCEPTS = [
  {
    id: 'uc-bolts-units',
    origin: 'aws',
    concept: 'Bolts (Hours/Days) & DDD Units of Work',
    desc: 'Replaces 2–6 week Scrum Sprints with rapid hours/days Bolts executing loosely coupled DDD Units from a dependency DAG.',
    responses: {
      'aws': ['native', 'Core vocabulary & runtime DAG execution model.'],
      'spec-kit': ['partial', 'Uses per-feature task lists, but lacks formal DDD Unit decomposition or Bolt DAGs.'],
      'bmad': ['compatible', 'Maps closely to BMAD Epics & sharded Stories; teams can adopt Bolt cadence easily.'],
      'openspec': ['partial', 'Naturally runs in hours/days via small delta proposals, but without formal DDD Units.'],
      'anthropic-sdlc': ['compatible', 'Can scope each Git intent.md to a Unit/Bolt cleanly.'],
      'cursor-pstack': ['compatible', '/swarm naturally executes independent Units in parallel at Bolt speed.'],
      'tessl': ['compatible', 'Aligns strongly with Tessl’s modular component boundaries.'],
      'specs-md': ['compatible', 'Directly inherits AI-DLC’s Bolt/Unit philosophy in a lighter shell.'],
      'kiro-specs': ['partial', 'Features in .kiro/specs/ resemble Units, but without formal Bolt planning or DDD DAGs.'],
      'superpowers': ['compatible', 'Bite-sized 2–5 min plan tasks in worktrees pair naturally with Bolt cadence.']
    }
  },
  {
    id: 'uc-fences-hooks',
    origin: 'aws',
    concept: '5 Deterministic Fences & Compiled Guard Hooks',
    desc: 'TypeScript hooks & cryptographic fingerprints (Plan Approval, Review Freeze, State Transition, Reviewer Scope, Human Presence) enforced mechanically outside the LLM.',
    responses: {
      'aws': ['native', 'Core deterministic safety spine (17 hooks, 5 switchable fences).'],
      'spec-kit': ['neutral', 'Relies on prompt discipline & /speckit.converge; no compiled hook runtime.'],
      'bmad': ['neutral', 'Prompt-driven persona handoffs; compatible if wrapped with external hooks.'],
      'openspec': ['incompatible', 'Conflicts with OpenSpec’s ultra-lightweight, zero-runtime philosophy (adds heavy setup & friction).'],
      'anthropic-sdlc': ['compatible', 'Strongly aligned with Anthropic’s separation-of-duties governance goals.'],
      'cursor-pstack': ['incompatible', 'Conflicts with pstack’s skip-manual-gates philosophy; Plan Approval fences slow autonomous swarms.'],
      'tessl': ['partial', 'Replaces manual approval fences with automated CI/CD spec & test evals.'],
      'specs-md': ['partial', 'Intentionally strips out heavy hook/checkpoint machinery for 0–2 adaptive gates.'],
      'kiro-specs': ['partial', 'Has save-triggered Agent Hooks, but for automation/sync rather than cryptographic approval fences.'],
      'superpowers': ['partial', 'Enforces verification-before-completion via skill rules rather than compiled OS/hook guards.']
    }
  },
  {
    id: 'uc-3plane-learning',
    origin: 'aws',
    concept: '3-Plane Architecture + 5-Layer Additive Learning Loop',
    desc: 'Separates Control/Data/Management planes; every human correction can be promoted into org → team → project → phase → stage rules automatically.',
    responses: {
      'aws': ['native', 'Compiled stage graph + runtime graph + automatic "Keep for next time?" loop.'],
      'spec-kit': ['partial', 'Has constitution.md for standing rules, but no 5-layer chain or automatic learning loop.'],
      'bmad': ['partial', 'Uses AGENTS.md for project memory, but without compiled planes or layered rule promotion.'],
      'openspec': ['neutral', 'Focused on behavioral delta specs rather than multi-layer org/team rule inheritance.'],
      'anthropic-sdlc': ['compatible', 'Pairs well with enterprise org/team governance policies in Git.'],
      'cursor-pstack': ['neutral', 'Focused on execution playbooks; relies on Cursor rules manually.'],
      'tessl': ['partial', 'Encodes lessons into living specs & skill evals rather than 5-layer Markdown memory.'],
      'specs-md': ['compatible', 'Shares AI-DLC lineage and can coexist with layered memory rules.'],
      'kiro-specs': ['partial', 'Steering docs (.kiro/steering/) provide persistent context, though not a 5-layer learning loop.'],
      'superpowers': ['partial', 'Authors custom skills to capture lessons, rather than a compiled 5-layer rule chain.']
    }
  },
  {
    id: 'uc-constitution',
    origin: 'spec-kit',
    concept: 'Project Constitution (constitution.md)',
    desc: 'A single, plain-English founding document of non-negotiable engineering principles inherited by every feature spec.',
    responses: {
      'aws': ['compatible', 'Maps directly to project.md / team.md in AI-DLC’s 5-layer memory.'],
      'spec-kit': ['native', 'Step 1 anchor for every Spec Kit repository.'],
      'bmad': ['compatible', 'Complements AGENTS.md and Architect persona standards seamlessly.'],
      'openspec': ['compatible', 'Works cleanly as a lightweight top-level constraint file alongside delta specs.'],
      'anthropic-sdlc': ['compatible', 'Fits naturally as a Git-committed baseline governance charter.'],
      'cursor-pstack': ['compatible', 'Can be loaded as a Cursor rule to steer /swarm and /tdd agents.'],
      'tessl': ['compatible', 'Useful as global constraints across modular component specs.'],
      'specs-md': ['compatible', 'Easy drop-in context document for both FIRE and Simple flows.'],
      'kiro-specs': ['partial', 'Already covered natively by .kiro/steering/tech.md and product.md.'],
      'superpowers': ['compatible', 'Cleanly informs the brainstorming and writing-plans skills.']
    }
  },
  {
    id: 'uc-bmad-personas',
    origin: 'bmad',
    concept: '21+ Specialized Agile Personas & Story Sharding',
    desc: 'Explicit AI role personas (Analyst, PM, UX, Architect, Scrum Master, Dev, QA) with Scrum Master sharding large specs into small self-contained stories.',
    responses: {
      'aws': ['partial', 'Has 14 domain-expert agents & Units, but prefers DDD Units + streamlined PO/Dev oversight over 21+ Scrum roles.'],
      'spec-kit': ['incompatible', 'Conflicts with Spec Kit’s intentional single-agent linear simplicity (adds persona-switching overhead).'],
      'bmad': ['native', 'Core signature mechanism of BMAD.'],
      'openspec': ['incompatible', 'Conflicts with OpenSpec’s minimalist, low-ceremony delta workflow.'],
      'anthropic-sdlc': ['partial', 'Uses role separation for Builder vs Approver, but avoids 20+ heavyweight agile personas.'],
      'cursor-pstack': ['partial', 'Uses parallel workers + verifiers by task/skill rather than traditional Scrum job titles.'],
      'tessl': ['neutral', 'Focuses on spec-to-code compilation & tests rather than human agile role simulation.'],
      'specs-md': ['incompatible', 'Conflicts with specs.md’s goal of stripping ceremony down to minimal flows.'],
      'kiro-specs': ['neutral', 'Uses one IDE agent across 3 files; no multi-persona switching.'],
      'superpowers': ['partial', 'Uses fresh task subagents + 2-stage reviewers (Spec + Quality) instead of 21 agile titles.']
    }
  },
  {
    id: 'uc-delta-specs',
    origin: 'openspec',
    concept: 'Delta Spec Markers (added/modified/removed) & Archive-to-Living-Spec',
    desc: 'Every change is proposed as a tiny behavioral diff (`ADDED`/`MODIFIED`/`REMOVED`) and archived back into the canonical living spec upon completion.',
    responses: {
      'aws': ['partial', 'AI-DLC tracks per-intent record dirs & phase traceability, but doesn’t auto-merge delta diffs into one living spec.'],
      'spec-kit': ['partial', 'Spec Kit creates per-feature specs; adding delta archiving would directly improve its post-launch drift.'],
      'bmad': ['compatible', 'Can be adopted for brownfield stories to keep PRD/architecture docs fresh.'],
      'openspec': ['native', 'Signature superpower for brownfield repos & near-zero spec drift.'],
      'anthropic-sdlc': ['compatible', 'Pairs nicely with Git-committed intent.md to show exact behavioral deltas.'],
      'cursor-pstack': ['incompatible', 'Conflicts with pstack’s "code is the spec" speed-first approach (adds doc-archiving step).'],
      'tessl': ['partial', 'Tessl edits the living spec directly as source code rather than via separate change-proposal deltas.'],
      'specs-md': ['compatible', 'Highly compatible with FIRE Flow for brownfield monorepos.'],
      'kiro-specs': ['compatible', 'Could extend .kiro/specs/ so completed features fold back into steering/master specs.'],
      'superpowers': ['compatible', 'Fits cleanly at the "finish branch" skill to keep design docs updated.']
    }
  },
  {
    id: 'uc-sep-duties',
    origin: 'anthropic-sdlc',
    concept: 'Strict Separation of Duties (Coder Agent Cannot Approve Code)',
    desc: 'Hard governance rule ensuring the agent/role that writes code can never approve it, backed by Git-committed `intent.md` audit trails.',
    responses: {
      'aws': ['compatible', 'Natively echoed by read-only adversarial reviewers (Product Lead, Arch Reviewer) & Human Presence fence.'],
      'spec-kit': ['partial', 'Human reviews spec/plan, but same agent typically implements and runs /speckit.converge.'],
      'bmad': ['compatible', 'QA & Reviewer personas naturally separate implementation from verification.'],
      'openspec': ['neutral', 'Leaves approval controls to normal Git PR reviews rather than enforced agent separation.'],
      'anthropic-sdlc': ['native', 'Foundational enterprise governance pillar.'],
      'cursor-pstack': ['partial', 'Separates worker agents from automated verifier agents, but skips mandatory human sign-off gates.'],
      'tessl': ['partial', 'Separates code generation from deterministic CI test/eval harnesses rather than human role sign-offs.'],
      'specs-md': ['neutral', 'Optional in FIRE Flow; intentionally omitted in Simple Flow.'],
      'kiro-specs': ['neutral', 'Single IDE agent executes tasks; relies on developer review in IDE/Git.'],
      'superpowers': ['compatible', 'Fresh subagents implement while separate 2-stage reviewers check spec compliance & code quality.']
    }
  },
  {
    id: 'uc-auto-verifiers',
    origin: 'cursor-pstack',
    concept: 'Automated Verifier Agents Replacing Manual Phase Gates',
    desc: 'Skips human sign-off checkpoints between stages; autonomous parallel `/swarm` workers are checked by automated verifier agents and `/tdd` loops.',
    responses: {
      'aws': ['incompatible', 'Conflicts with AWS AI-DLC Tenet #1/#4 & mandatory Plan Approval / Skeleton human gates (though autonomous mode reduces ordinary checkpoints).'],
      'spec-kit': ['incompatible', 'Conflicts with Spec Kit’s explicit human review of spec, plan, and tasks before coding.'],
      'bmad': ['partial', 'Quick Track reduces gates, but Full Track still relies on human-steered role handoffs.'],
      'openspec': ['partial', 'OpenSpec still prefers a quick human review of the compact delta proposal before applying.'],
      'anthropic-sdlc': ['incompatible', 'Directly violates Anthropic SDLC’s mandatory human accountability & compliance sign-offs.'],
      'cursor-pstack': ['native', 'Core velocity engine of pstack.'],
      'tessl': ['compatible', 'Strongly aligned: Tessl also replaces manual build gates with automated CI evals.'],
      'specs-md': ['partial', 'FIRE Flow allows 0 checkpoints on low-risk tasks, escalating to human gates only on high risk.'],
      'kiro-specs': ['partial', 'Agent Hooks automate post-save checks, though humans still review the 3 spec files.'],
      'superpowers': ['compatible', 'Two-stage automated reviews + verification-before-completion align closely (after upfront plan approval).']
    }
  },
  {
    id: 'uc-spec-as-source',
    origin: 'tessl',
    concept: 'Spec-as-Source (Continuous Code Regeneration from Specs)',
    desc: 'Treats specs as literal source code ("compiled" into implementation via AI) continuously synced and validated by automated test suites.',
    responses: {
      'aws': ['partial', 'Specs drive code generation & traceability, but generated code is still edited and owned directly as source.'],
      'spec-kit': ['partial', 'Says "code serves specs," yet developers still maintain code directly after /speckit.implement.'],
      'bmad': ['partial', 'Specs guide coding stories, not continuous full-module regeneration.'],
      'openspec': ['partial', 'Keeps living specs synced with code via deltas, rather than regenerating code from specs.'],
      'anthropic-sdlc': ['neutral', 'Audits code against intent.md; doesn’t require regenerating code from specs.'],
      'cursor-pstack': ['incompatible', 'Opposite polarity: pstack treats "code as the spec" and skips heavy upfront spec authoring.'],
      'tessl': ['native', 'Core defining paradigm of Tessl.'],
      'specs-md': ['neutral', 'Generates specs to guide coding, not to compile/regenerate code continuously.'],
      'kiro-specs': ['partial', 'Specs drive initial tasks, but ongoing maintenance is normal code editing.'],
      'superpowers': ['incompatible', 'Built around hand-crafted TDD code & incremental diffs rather than regenerating modules from specs.']
    }
  },
  {
    id: 'uc-fire-adaptive',
    origin: 'specs-md',
    concept: 'FIRE Adaptive 0–2 Checkpoints + VS Code Visual Dashboard',
    desc: 'Dynamically scales from 0 human checkpoints (low risk) up to 2 checkpoints (high risk/complexity) with a dedicated VS Code visual dashboard.',
    responses: {
      'aws': ['partial', 'AI-DLC has 11 scopes + autonomous mode, but still carries heavier baseline ceremony than 0–2 gates.'],
      'spec-kit': ['compatible', 'A visual dashboard and adaptive clarify gate complement Spec Kit nicely.'],
      'bmad': ['partial', 'BMAD achieves similar adaptability via Quick Track vs Full Track.'],
      'openspec': ['compatible', 'Very aligned on keeping brownfield checkpoints minimal.'],
      'anthropic-sdlc': ['incompatible', '0 checkpoints conflicts with mandatory regulated sign-off requirements.'],
      'cursor-pstack': ['compatible', '0-checkpoint low-risk mode matches pstack’s speed bias.'],
      'tessl': ['neutral', 'Tessl uses CI automation rather than 0–2 manual checkpoints.'],
      'specs-md': ['native', 'Core innovation of specs.md FIRE Flow.'],
      'kiro-specs': ['compatible', 'Kiro IDE already provides native visual UI over its 3 spec files.'],
      'superpowers': ['compatible', 'Lightweight enough to pair with adaptive checkpointing.']
    }
  },
  {
    id: 'uc-ears-syntax',
    origin: 'kiro-specs',
    concept: 'Formal EARS Requirements Syntax (WHEN ... THE SYSTEM SHALL ...)',
    desc: 'Structured, unambiguous requirement phrasing (Ubiquitous, Event-driven, State-driven, Unwanted behavior) that makes every clause directly testable.',
    responses: {
      'aws': ['compatible', 'Drop-in upgrade for requirements-analysis & user-stories acceptance criteria!'],
      'spec-kit': ['compatible', 'Can be mandated directly inside constitution.md for all spec.md files.'],
      'bmad': ['compatible', 'Works cleanly inside BMAD PRD & sharded story acceptance criteria.'],
      'openspec': ['compatible', 'Sharpens delta markers (ADDED/MODIFIED behaviors) with zero extra overhead.'],
      'anthropic-sdlc': ['compatible', 'Makes intent.md auditable requirements even more precise.'],
      'cursor-pstack': ['neutral', 'pstack skips formal requirement docs in favor of executable TDD tests.'],
      'tessl': ['compatible', 'Highly compatible — formal unambiguous specs improve Tessl code regeneration.'],
      'specs-md': ['compatible', 'Drops straight into FIRE or Simple spec templates.'],
      'kiro-specs': ['native', 'Built-in standard for requirements.md in Kiro IDE.'],
      'superpowers': ['compatible', 'Pairs cleanly with brainstorming & spec-compliance reviews.']
    }
  },
  {
    id: 'uc-fresh-subagent-tdd',
    origin: 'superpowers',
    concept: 'Fresh Subagent Per Task + Verification-Before-Completion',
    desc: 'Dispatches a brand-new clean subagent for every 2–5 min task with strict Red-Green-Refactor TDD and forbids claiming "done" without fresh passing command output.',
    responses: {
      'aws': ['compatible', 'Very aligned! AI-DLC uses isolated worktree subagents & a human-authorized Construction Verification Command.'],
      'spec-kit': ['compatible', 'Can be used during /speckit.implement to execute tasks.md cleanly.'],
      'bmad': ['compatible', 'Pairs wonderfully with BMAD’s Scrum Master sharded stories.'],
      'openspec': ['compatible', 'Great execution engine for OpenSpec’s `Apply` phase.'],
      'anthropic-sdlc': ['compatible', 'Fresh command evidence directly strengthens audit verification.'],
      'cursor-pstack': ['compatible', 'Closely mirrors pstack’s /tdd + /swarm + verifier model.'],
      'tessl': ['compatible', 'Deterministic test execution aligns with Tessl’s test-verified loop.'],
      'specs-md': ['compatible', 'Works cleanly as the execution layer behind FIRE Flow specs.'],
      'kiro-specs': ['compatible', 'Can be used when executing clickable tasks in tasks.md.'],
      'superpowers': ['native', 'Signature engineering discipline of Superpowers.']
    }
  }
];

// =========================================================================
// ROLES, TEAM ORGANIZATION, TEAM SIZE & HANDSHAKES MATRIX (ALL 10 FRAMEWORKS)
// =========================================================================
const ORG_MATRIX = [
  {
    id: 'aws',
    name: 'AWS AI-DLC',
    href: '../aws/',
    pill: 'pill-primary',
    teamSize: '3–50+ (Squads to Multi-Team Enterprise)',
    teamOrg: 'Cross-functional Mob + Streamlined Silos (breaks down rigid FE/BE/Infra/Sec walls; Spaces isolate teams)',
    roles: 'Human: Product Owner + Full-Stack Developers + Facilitator. AI: 14 specialist agents (11 Experts, 2 Read-Only Reviewers, 1 Composer).',
    roleHandshakes: 'Collocated single-room Mob Elaboration & Mob Construction; agents NEVER call each other directly — Conductor mediates all handoffs; adversarial reviewers write read-only READY/NOT-READY receipts.',
    phaseHandshakes: 'Strict formal gates + Phase Boundary Verification (traceability check at end of Ideation, Inception, Construction) + cryptographic Plan Approval & Review Freeze fences + 134-event audit trail.'
  },
  {
    id: 'spec-kit',
    name: 'GitHub Spec Kit',
    href: '../spec-kit/',
    pill: 'pill-c1',
    teamSize: '1–15 (Solo Devs to Standard Feature Teams)',
    teamOrg: 'Flat feature-oriented teams sharing one repo Constitution; no special org restructuring required.',
    roles: 'Human: Tech Lead/Team (owns Constitution) + Developer/PM (reviews specs). AI: Single general coding agent stepping through templates.',
    roleHandshakes: 'Lightweight Git-based handoffs: PM/Lead reviews `spec.md` & `plan.md` via PR or chat before developer runs `/speckit.implement`.',
    phaseHandshakes: 'Explicit linear Markdown handoffs (`constitution.md` → `spec.md` → `Clarify Q&A` → `plan.md` → `tasks.md` → `/speckit.converge` check at feature end).'
  },
  {
    id: 'bmad',
    name: 'BMAD Method',
    href: '../bmad/',
    pill: 'pill-c5',
    teamSize: '2–20 (Agile Product Squads)',
    teamOrg: 'Mirrors a classic Agile/Scrum product studio (Product, UX, Architecture, Delivery, Engineering, QA) simulated via AI personas.',
    roles: 'Human: Product Owner / Tech Lead steering personas. AI: 21+ distinct role personas (Analyst, PM, UX, Architect, Scrum Master, Dev, QA).',
    roleHandshakes: 'Explicit persona-to-persona artifact handoffs: Analyst → PM (`PRD.md`) → Architect (`architecture.md`) → Scrum Master (shards into `stories/`) → Dev → QA.',
    phaseHandshakes: 'Document-gated Agile transitions (adversarial design review before story sharding; QA persona sign-off per story; Quick Track collapses handoffs for small fixes).'
  },
  {
    id: 'openspec',
    name: 'OpenSpec',
    href: '../openspec/',
    pill: 'pill-c2',
    teamSize: '1–8 (Solo Devs & Small Fast Teams)',
    teamOrg: 'Flat, high-trust engineering teams working continuously on live brownfield repositories.',
    roles: 'Human: Developer (author & reviewer of compact proposals). AI: Any of 25–30+ coding assistants executing delta proposals.',
    roleHandshakes: 'Minimalist PR-style handshake: review a compact `proposal.md` + delta diff in minutes; standard Git PR review for code.',
    phaseHandshakes: 'Fluid 4-step loop (`Propose` → `Quick Review` → `Apply` → `Archive`). Archiving atomically merges completed deltas back into the living spec.'
  },
  {
    id: 'anthropic-sdlc',
    name: 'Anthropic AI-Native SDLC',
    href: '../anthropic-sdlc/',
    pill: 'pill-c6',
    teamSize: '5–100+ (Regulated Enterprise Engineering Orgs)',
    teamOrg: 'Governance-structured orgs with clear compliance boundaries and explicit separation between authoring and approving roles.',
    roles: 'Human: Accountable Product/Eng Owners + Independent Reviewers/Approvers. AI: Isolated Builder agent (Claude Code) + separate Verifier/Reviewer agent.',
    roleHandshakes: 'Hard Separation of Duties: coder agent can NEVER approve its own code; independent reviewer + accountable human must sign off before progression.',
    phaseHandshakes: 'Git-committed `intent.md` anchors all 6 stages (`Plan → Design → Build → Test → Deploy → Maintain`) with immutable version-controlled sign-off provenance.'
  },
  {
    id: 'cursor-pstack',
    name: 'Cursor pstack',
    href: '../cursor-pstack/',
    pill: 'pill-c3',
    teamSize: '1–10 (Senior / Staff High-Velocity Engineers)',
    teamOrg: 'Autonomous senior-engineer pods optimizing for raw shipping throughput rather than formal process roles.',
    roles: 'Human: Senior Engineer directing playbooks & merging final PRs. AI: Parallel `/swarm` worker agents + automated `/code-review` verifier agents.',
    roleHandshakes: 'Agent-to-agent automated handshakes: swarm workers produce diffs & tests → automated verifier agents critique & verify → human reviews final merged PR.',
    phaseHandshakes: 'No manual phase gates! Playbooks (`/tdd`, `/swarm`, `/code-review`) run on demand; passing tests and verifier sign-off act as the handshake.'
  },
  {
    id: 'tessl',
    name: 'Tessl',
    href: '../tessl/',
    pill: 'pill-c4',
    teamSize: '3–30 (Platform, Modular & CI-Mature Teams)',
    teamOrg: 'Component-owned modular teams with strong platform/CI-CD engineering culture.',
    roles: 'Human: Spec Architects & Test/Eval Engineers (heavy upfront design). AI: Continuous code-generation agents bound to CI/CD.',
    roleHandshakes: 'Contract-based handshakes: teams agree on modular living specs and automated eval suites; AI regenerates implementations behind the contract.',
    phaseHandshakes: 'Automated CI/CD handshake: spec edits trigger regeneration + deterministic test/eval pipelines; green CI = synchronized phase completion.'
  },
  {
    id: 'specs-md',
    name: 'specs.md (FIRE / Simple)',
    href: '../specs-md/',
    pill: 'pill-c1',
    teamSize: '1–15 (Monorepo & Brownfield Teams)',
    teamOrg: 'Pragmatic teams that like AI-DLC’s structure without wanting dedicated process facilitators or heavy multi-gate ceremonies.',
    roles: 'Human: Developer / Tech Lead reviewing risk-triggered checkpoints via VS Code dashboard. AI: Any coding agent running FIRE or Simple flow.',
    roleHandshakes: 'Lightweight visual handoffs through the VS Code Spec Dashboard + standard Git PRs.',
    phaseHandshakes: 'Risk-adaptive handshakes: Simple Flow has 0 execution tracking; FIRE Flow uses 0 checkpoints for routine tasks and escalates to 1–2 human gates when risk spikes.'
  },
  {
    id: 'kiro-specs',
    name: 'Kiro Native Specs (EARS)',
    href: '../kiro-specs/',
    pill: 'pill-c5',
    teamSize: '1–12 (Individual Devs to Feature Squads on Kiro)',
    teamOrg: 'IDE-centric feature developers sharing repo-level `.kiro/steering/` context.',
    roles: 'Human: Developer driving Spec Mode in Kiro IDE. AI: Kiro IDE agent + save-triggered background Agent Hooks.',
    roleHandshakes: 'Repo-shared Steering Docs align team standards; developers share `.kiro/specs/<feature>/` 3-file folders in Git PRs.',
    phaseHandshakes: 'Clean 3-file IDE progression: approve `requirements.md` (EARS) → approve `design.md` → click through `tasks.md` with save-triggered Agent Hooks.'
  },
  {
    id: 'superpowers',
    name: 'Superpowers (Obra)',
    href: '../superpowers/',
    pill: 'pill-c3',
    teamSize: '1–12 (Craft-Focused / XP / TDD Engineering Teams)',
    teamOrg: 'Extreme-Programming / TDD-minded developers valuing clean git hygiene, root-cause rigor, and peer review.',
    roles: 'Human: Developer pairing via Socratic brainstorming & final branch merge. AI: Planner + fresh per-task Subagent + 2-Stage Reviewers (Spec Compliance & Code Quality).',
    roleHandshakes: 'Two-stage automated subagent review handshake per task: Task Subagent → Spec Compliance Reviewer → Code Quality Reviewer → Human finishes branch.',
    phaseHandshakes: 'Skill-chained handshakes: Approved Design Doc → Clean Git Worktree Baseline → Bite-Sized Plan → Strict TDD + Fresh Command Evidence (`verification-before-completion`).'
  }
];

// =========================================================================
// SWOT ANALYSIS FOR ALL 10 FRAMEWORKS
// =========================================================================
const SWOT_MATRIX = {
  'aws': {
    S: ['Deterministic TypeScript engine, 17 hooks & 5 cryptographic fences', 'Formal DDD + 134-event audit trail across 7 native AI harnesses', 'Built-in 5-layer Learning Loop & modular additive plugin system'],
    W: ['High upfront ceremony & token burn on small routine bug fixes', 'Steeper onboarding curve across 5 phases & 33 stages', 'Post-launch spec maintenance is heavier than delta-based tools'],
    O: ['Enterprise standard for regulated finance, healthcare & government AI delivery', 'Ecosystem growth via custom team plugins & multi-harness portability', 'Autonomous swarm + Walking Skeleton narrowing the speed gap'],
    T: ['Teams abandoning heavy ceremony for lighter flows (OpenSpec, specs.md FIRE)', 'IDE vendors baking lighter native SDD flows directly into editors']
  },
  'spec-kit': {
    S: ['Clean, intuitive 6-step linear pipeline (`Constitution → Implement`)', 'Broad portability across 15+ AI coding tools with zero vendor lock-in', 'Lightweight Markdown artifacts easy to adopt in minutes'],
    W: ['No multi-agent specialist roles or cross-feature orchestration', 'Per-feature cycle resets rather than maintaining a living delta spec', 'Moderate post-launch spec drift relying on manual `/speckit.converge`'],
    O: ['Becoming the de facto baseline SDD standard via GitHub’s ecosystem reach', 'Pairing cleanly with EARS syntax, Superpowers TDD, or OpenSpec deltas'],
    T: ['Outgrown by complex enterprise orgs needing formal governance/hooks', 'Squeezed from below by faster brownfield tools like OpenSpec']
  },
  'bmad': {
    S: ['21+ specialized agile personas surface blind spots via adversarial reviews', 'Scale-adaptive Quick vs Full tracks fit both small fixes and large epics', 'Scrum Master story sharding keeps coding agent contexts crisp'],
    W: ['High context/prompt overhead switching across 20+ persona definitions', 'Prompt-enforced rather than compiled deterministic guardrails', 'Requires active human steering across multi-role handoffs'],
    O: ['Natural bridge for traditional Scrum/Agile orgs transitioning to AI-native work', 'Strong community momentum adding domain-specific persona packs'],
    T: ['Persona fatigue as stronger models need fewer simulated job titles', 'Competition from automated verifier swarms & deterministic engines']
  },
  'openspec': {
    S: ['Best-in-class brownfield workflow using compact delta markers', 'Archive-to-living-spec keeps post-launch spec drift near zero', 'Broadest compatibility (25–30+ AI tools) with minimal ceremony'],
    W: ['Too lightweight for complex greenfield DDD or multi-service architecture', 'No built-in compliance audit trails, hooks, or separation of duties', 'No native multi-agent swarm or adversarial reviewer mesh'],
    O: ['Dominant daily driver for startups, solo devs & living brownfield repos', 'Composable spec layer that pairs cleanly with TDD/swarm runners'],
    T: ['Enterprises rejecting it for regulated workloads due to light governance', 'Competitors (Spec Kit, specs.md) adopting delta-archiving patterns']
  },
  'anthropic-sdlc': {
    S: ['Strict separation of duties (coder agent can never approve its own code)', 'Immutable Git-committed `intent.md` audit trails for compliance', 'Clean 6-stage enterprise lifecycle without 33-stage complexity'],
    W: ['High human sign-off bottleneck slows routine shipping speed', 'Tailored primarily around Claude Code rather than 20+ mixed IDEs', 'Less formal DDD modeling out of the box than AWS AI-DLC'],
    O: ['Fast adoption in regulated enterprises already standardized on Claude Code', 'Easy integration into existing Git PR & compliance approval workflows'],
    T: ['Multi-model/multi-IDE teams preferring harness-neutral frameworks', 'Autonomous verifier automation reducing appetite for manual gates']
  },
  'cursor-pstack': {
    S: ['Maximum shipping speed & parallel throughput via `/swarm` playbooks', 'Automated verifier agents eliminate manual phase-gate bottlenecks', 'Great fit for senior engineers doing rapid brownfield refactoring'],
    W: ['High token and compute burn from parallel agent swarms', 'Weak regulatory auditability & higher spec drift ("code is the spec")', 'Tied primarily to Cursor IDE ecosystem'],
    O: ['Leading pattern for high-autonomy senior engineering pods', 'Compounding speed gains as faster, cheaper reasoning models arrive'],
    T: ['Cursor IDE lock-in if teams diversify to Claude Code, Codex, or Kiro', 'Enterprise security/compliance teams blocking un-audited autonomous swarms']
  },
  'tessl': {
    S: ['Near-zero spec drift: specs are literal source code synced via CI/CD', 'Governance via deterministic automated evals instead of manual paperwork', 'Safe, repeatable module regeneration when contracts change'],
    W: ['Steep learning curve and heavy upfront investment in specs & tests', 'Awkward fit for tangled legacy monoliths lacking strong test suites', 'Requires cultural shift away from hand-editing implementation code'],
    O: ['Long-term endgame for AI software engineering as model reliability climbs', 'Ideal for platform teams owning clean, modular microservices & SDKs'],
    T: ['High adoption barrier slows rollout on messy real-world codebases', 'Spec-to-code regeneration brittleness when edge cases aren’t fully tested']
  },
  'specs-md': {
    S: ['Keeps AI-DLC’s clarity while cutting 10–26 gates down to 0–2 (FIRE)', 'Simple Flow strips execution tracking for fast 3-phase prototyping', 'Dedicated VS Code visual dashboard gives clear visual visibility'],
    W: ['Less rigorous architectural validation on huge greenfield builds', 'Moderate long-term spec drift without delta-archiving or CI evals', 'Lighter compliance posture than full AWS AI-DLC or Anthropic SDLC'],
    O: ['Go-to pragmatic middle ground for AI-DLC teams working on monorepos', 'Visual dashboard UX differentiating it from raw-Markdown-only tools'],
    T: ['Caught between full AWS AI-DLC (governance) and OpenSpec (speed/drift)', 'AWS AI-DLC adding lighter scopes & autonomous modes natively']
  },
  'kiro-specs': {
    S: ['Zero setup friction — built natively into Kiro IDE with clickable tasks', 'Formal EARS syntax produces crisp, unambiguous, testable requirements', 'Steering Docs + save-triggered Agent Hooks automate daily repo hygiene'],
    W: ['Locked into Kiro IDE / CLI rather than portable across 15+ tools', 'No built-in multi-agent swarm, adversarial reviewers, or DDD engine', 'Lighter enterprise audit trail than full AWS AI-DLC'],
    O: ['Effortless entry ramp introducing thousands of developers to SDD', 'Natural stepping stone up to full AWS AI-DLC for larger initiatives'],
    T: ['Developers unwilling to switch away from VS Code, Cursor, or terminal CLIs', 'Rival IDEs shipping similar built-in 3-file spec modes']
  },
  'superpowers': {
    S: ['Encodes real senior-engineer craft (strict TDD, root-cause debugging)', 'Fresh subagent per task + 2-stage review eliminates context rot', 'Portable skill plugin across Claude Code, Codex, Cursor, and OpenCode'],
    W: ['Prompt/skill-enforced rather than compiled deterministic hooks/fences', 'No formal enterprise compliance audit log or multi-team Spaces', 'Strict TDD & 2-stage reviews add token overhead on trivial edits'],
    O: ['Beloved by XP/TDD developers wanting high code quality without red tape', 'Composable skills can layer cleanly on top of Spec Kit or OpenSpec'],
    T: ['LLM prompt-adherence drift compared to deterministic hook enforcement', 'Native harness features absorbing worktree & subagent verification flows']
  }
};
