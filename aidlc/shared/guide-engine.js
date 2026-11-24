// =========================================================================
// SHARED VISUAL GUIDE ENGINE — Renders any framework's data object into a
// full 5-section interactive light-theme guide with deep expandable Mind Map,
// collapsible left sidebar, collapsible right inspector, and live search.
// =========================================================================

const ALL_FRAMEWORKS_NAV = [
  { id: 'aws', name: 'AWS AI-DLC (Baseline)', href: '../aws/' },
  { id: 'spec-kit', name: 'GitHub Spec Kit', href: '../spec-kit/' },
  { id: 'bmad', name: 'BMAD Method', href: '../bmad/' },
  { id: 'openspec', name: 'OpenSpec', href: '../openspec/' },
  { id: 'anthropic-sdlc', name: 'Anthropic AI-Native SDLC', href: '../anthropic-sdlc/' },
  { id: 'cursor-pstack', name: 'Cursor pstack', href: '../cursor-pstack/' },
  { id: 'tessl', name: 'Tessl', href: '../tessl/' },
  { id: 'specs-md', name: 'specs.md (FIRE / Simple)', href: '../specs-md/' },
  { id: 'kiro-specs', name: 'Kiro Native Specs (EARS)', href: '../kiro-specs/' },
  { id: 'superpowers', name: 'Superpowers (Obra)', href: '../superpowers/' }
];

function renderGuideApp(G) {
  document.title = `${G.name} — Visual Understander & First-Principles Guide`;

  const optionsHtml = ALL_FRAMEWORKS_NAV.map(f =>
    `<option value="${f.href}" ${f.id === G.id ? 'selected' : ''}>${f.name}</option>`
  ).join('');

  const statsHtml = (G.stats || []).map(([val, lbl]) =>
    `<div class="stat-box"><div class="stat-val">${val}</div><div class="stat-lbl">${lbl}</div></div>`
  ).join('');

  document.body.innerHTML = `
    <header class="topbar">
      <div class="topbar-left">
        <a href="../" class="topbar-brand">← AI SDLC Visual Hub</a>
        <div class="topbar-links">
          <a href="../comparison/" class="topbar-link">Total Comparison</a>
          <a href="../evaluation/" class="topbar-link">Evaluation &amp; Recommender</a>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <span class="xs muted">Jump to guide:</span>
        <select class="topbar-select" onchange="if(this.value) location.href=this.value">
          ${optionsHtml}
        </select>
      </div>
    </header>

    <div id="app-layout" class="layout">
      <aside class="sidebar">
        <div>
          <div class="brand-row">
            <span class="brand-title">${G.name}</span>
            <button class="sidebar-toggle-btn" onclick="toggleSidebar()" title="Collapse sidebar">«</button>
          </div>
          <div class="brand-sub">${G.tagline}</div>
        </div>

        <div class="search-wrap">
          <input id="global-search" class="search-input" type="text" placeholder="Search concepts in ${G.shortName}..." oninput="handleSearch(this.value)" />
          <button id="clear-search" class="clear-btn hidden" onclick="clearSearch()">✕</button>
        </div>
        <div id="search-results" class="search-results hidden"></div>

        <nav id="side-nav" class="nav">
          <button data-sec="fp" onclick="showSection('fp')" class="nav-btn active">1. First Principles &amp; Philosophy</button>
          <button data-sec="mindmap" onclick="showSection('mindmap')" class="nav-btn">2. Deep Interactive Mind Map</button>
          <button data-sec="workflow" onclick="showSection('workflow')" class="nav-btn">3. Workflow, Artifacts &amp; Rituals</button>
          <button data-sec="tooling" onclick="showSection('tooling')" class="nav-btn">4. Tools, Commands &amp; Ecosystem</button>
          <button data-sec="tradeoffs" onclick="showSection('tradeoffs')" class="nav-btn">5. Strengths, Trade-offs &amp; Fit</button>
        </nav>

        <div class="stats-grid">${statsHtml}</div>
      </aside>

      <main class="main">
        <div id="reopen-sidebar-bar" class="reopen-bar hidden">
          <button class="reopen-btn" onclick="toggleSidebar()">☰ Show Menu</button>
        </div>

        <!-- SECTION 1: FIRST PRINCIPLES -->
        <section id="sec-fp" class="section">
          <header class="sec-header">
            <span class="pill ${G.pill}">Part 1 · First Principles</span>
            <h1>${G.name} — From First Principles</h1>
            <p>${G.intro}</p>
          </header>

          <div class="grid-2">
            ${G.firstPrinciples.map((p, idx) => `
              <div class="card xs stack-sm">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span class="pill ${p.pill || G.pill}">First Principle #${idx + 1}</span>
                  <span class="muted">${p.tag || ''}</span>
                </div>
                <h2 class="card-title">${p.title}</h2>
                <div class="muted"><strong>Root Problem:</strong> ${p.problem}</div>
                <div class="divider-top"><strong>How ${G.shortName} Solves It:</strong> ${p.solution}</div>
              </div>
            `).join('')}
          </div>

          <div class="card stack-md">
            <h2 class="card-title">Mental Model &amp; Simple Analogy</h2>
            <div class="sub-box xs">
              <strong>Analogy:</strong> ${G.analogy}
            </div>
            <div class="grid-3 xs">
              ${G.pillars.map(([t, d]) => `
                <div class="sub-box stack-sm" style="gap:4px;">
                  <div style="font-weight:600;">${t}</div>
                  <div class="muted">${d}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- SECTION 2: DEEP INTERACTIVE MIND MAP -->
        <section id="sec-mindmap" class="section hidden">
          <header class="sec-header">
            <span class="pill ${G.pill}">Part 2 · Deep Mind Map</span>
            <h1>${G.name} — Interactive Concept Tree</h1>
            <p>Click any node with <strong>+N</strong> to expand all the way down to individual concepts and read its full explanation on the right.</p>
          </header>

          <div id="mm-grid" class="grid-12">
            <div id="mm-canvas-col" class="col-8 card card-flush">
              <div class="card-header xs">
                <span class="muted">Click node to inspect &amp; expand · Click <strong>−</strong> to collapse</span>
                <div class="mm-toolbar">
                  <button class="btn-sm" onclick="zoomMindMap(-0.15)">− Zoom</button>
                  <span id="mm-zoom-label" class="mono muted">100%</span>
                  <button class="btn-sm" onclick="zoomMindMap(0.15)">+ Zoom</button>
                  <button class="btn-sm" onclick="expandAllMindMap()">Expand All</button>
                  <button class="btn-sm" onclick="collapseMindMap()">Reset</button>
                  <button id="reopen-insp-btn" class="btn-sm hidden" onclick="toggleInspector()">« Show Details</button>
                </div>
              </div>
              <div class="svg-wrap">
                <svg id="mindmap-svg" style="display:block;user-select:none;">
                  <g id="mm-links"></g>
                  <g id="mm-nodes"></g>
                </svg>
              </div>
            </div>

            <aside id="mm-insp-col" class="col-4 card stack-md insp-sticky">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
                <div id="insp-crumbs" class="crumb-bar"></div>
                <button class="sidebar-toggle-btn" onclick="toggleInspector()" title="Collapse details panel">»</button>
              </div>
              <div>
                <span id="insp-badge" class="pill ${G.pill}">Overview</span>
                <h2 id="insp-title" class="card-title" style="margin-top:8px;font-size:16px;">${G.name}</h2>
              </div>
              <div id="insp-summary" class="xs"></div>
              <div id="insp-why-box" class="sub-box xs stack-sm" style="gap:4px;">
                <div class="muted" style="font-weight:600;text-transform:uppercase;font-size:11px;">First-Principles "Why"</div>
                <div id="insp-why"></div>
              </div>
              <div id="insp-children-box" class="stack-sm xs">
                <div class="muted" style="font-weight:600;text-transform:uppercase;font-size:11px;">Drill Down Into Children</div>
                <div id="insp-children" class="flex-wrap"></div>
              </div>
            </aside>
          </div>
        </section>

        <!-- SECTION 3: WORKFLOW, ARTIFACTS & RITUALS -->
        <section id="sec-workflow" class="section hidden">
          <header class="sec-header">
            <span class="pill ${G.pill}">Part 3 · Workflow &amp; Artifacts</span>
            <h1>How ${G.name} Runs Step-by-Step</h1>
            <p>${G.workflowIntro}</p>
          </header>

          <div class="card stack-md">
            <h2 class="card-title">Step-by-Step Execution Flow</h2>
            <div class="grid-3 xs">
              ${G.workflowSteps.map((s, i) => `
                <div class="sub-box stack-sm" style="gap:5px;">
                  <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span class="pill ${G.pill}">Step ${i + 1}</span>
                    <span class="mono muted">${s.meta || ''}</span>
                  </div>
                  <div style="font-weight:600;font-size:13px;">${s.title}</div>
                  <div class="muted">${s.desc}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="card card-flush">
            <div class="card-header"><h2 class="card-title">Core Artifacts &amp; Living Documents</h2></div>
            <div class="table-wrap">
              <table>
                <thead><tr><th>Artifact / File</th><th>Purpose</th><th>Who Owns / Validates</th></tr></thead>
                <tbody>
                  ${G.artifacts.map(([name, purpose, owner]) => `
                    <tr><td class="mono" style="font-weight:600;">${name}</td><td>${purpose}</td><td class="muted">${owner}</td></tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- SECTION 4: TOOLS, COMMANDS & ECOSYSTEM -->
        <section id="sec-tooling" class="section hidden">
          <header class="sec-header">
            <span class="pill ${G.pill}">Part 4 · Tools &amp; Ecosystem</span>
            <h1>Commands, Techniques &amp; Supported AI Tools</h1>
            <p>Concrete commands, agent personas, and IDE/CLI integrations.</p>
          </header>

          <div class="grid-2 xs">
            <div class="card stack-md">
              <h2 class="card-title">Key Commands / Playbooks / Techniques</h2>
              <div class="stack-sm">
                ${G.commands.map(([cmd, desc]) => `
                  <div class="sub-box" style="display:flex;gap:10px;align-items:flex-start;">
                    <span class="mono" style="font-weight:600;color:var(--primary);min-width:135px;">${cmd}</span>
                    <span class="muted">${desc}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="card stack-md">
              <h2 class="card-title">Supported Harnesses / IDEs / Agents</h2>
              <div class="flex-wrap">
                ${G.supportedTools.map(t => `<span class="pill ${G.pill}">${t}</span>`).join('')}
              </div>
              <div class="divider-top stack-sm">
                <div style="font-weight:600;">Roles / Agent Model</div>
                <div class="muted">${G.agentModel}</div>
              </div>
              <div class="divider-top stack-sm">
                <div style="font-weight:600;">How It Handles Spec Drift</div>
                <div class="muted">${G.specDrift}</div>
              </div>
            </div>
          </div>
        </section>

        <!-- SECTION 5: STRENGTHS, TRADE-OFFS & FIT -->
        <section id="sec-tradeoffs" class="section hidden">
          <header class="sec-header">
            <span class="pill ${G.pill}">Part 5 · Evaluation &amp; Trade-offs</span>
            <h1>Strengths, Weaknesses &amp; When to Choose ${G.name}</h1>
            <p>Honest engineering trade-offs compared to AWS AI-DLC and peer frameworks.</p>
          </header>

          <div class="grid-2 xs">
            <div class="card stack-sm">
              <h2 class="card-title" style="color:var(--chart-2);">Where ${G.shortName} Shines</h2>
              <ul style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:6px;">
                ${G.strengths.map(s => `<li>${s}</li>`).join('')}
              </ul>
            </div>
            <div class="card stack-sm">
              <h2 class="card-title" style="color:var(--chart-6);">Main Weaknesses &amp; Costs</h2>
              <ul style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:6px;">
                ${G.weaknesses.map(w => `<li>${w}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div class="card stack-md xs">
            <h2 class="card-title">How ${G.shortName} Compares to AWS AI-DLC</h2>
            <div class="sub-box">${G.vsAidlc}</div>
            <div style="display:flex;gap:10px;flex-wrap:wrap;padding-top:4px;">
              <a href="../comparison/" class="btn-primary">Open Full 8-Way Comparison Table →</a>
              <a href="../evaluation/" class="btn-sm" style="padding:7px 14px;">Run Interactive Fit Evaluator →</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;

  // ---------- MIND MAP RUNTIME ----------
  const NODE_MAP = {};
  const PARENT_MAP = {};
  (function idx(node, pid = null) {
    NODE_MAP[node.id] = node;
    if (pid) PARENT_MAP[node.id] = pid;
    (node.children || []).forEach(c => idx(c, node.id));
  })(G.mindMap);

  let selectedId = G.mindMap.id;
  let mmZoom = 1.0;
  const expandedIds = new Set([G.mindMap.id]);
  const NODE_W = 196, NODE_H = 44, H_GAP = 54, V_GAP = 12, PAD_X = 22, PAD_Y = 22;

  function getAncestors(id) {
    const chain = [];
    let cur = id;
    while (cur) { chain.unshift(cur); cur = PARENT_MAP[cur]; }
    return chain;
  }

  function layoutTree() {
    const positioned = [], edges = [];
    let maxDepth = 0;
    function place(node, depth, topY) {
      if (depth > maxDepth) maxDepth = depth;
      const kids = node.children || [];
      const isOpen = kids.length > 0 && expandedIds.has(node.id);
      const x = PAD_X + depth * (NODE_W + H_GAP);
      if (!isOpen) {
        const y = topY + NODE_H / 2;
        positioned.push({ node, x, y, isOpen: false, childCount: kids.length });
        return { y, height: NODE_H + V_GAP };
      }
      let curY = topY;
      const centers = [];
      kids.forEach(c => {
        const res = place(c, depth + 1, curY);
        centers.push({ child: c, y: res.y });
        curY += res.height;
      });
      const y = (centers[0].y + centers[centers.length - 1].y) / 2;
      positioned.push({ node, x, y, isOpen: true, childCount: kids.length });
      centers.forEach(({ child, y: cy }) => {
        edges.push({ x1: x + NODE_W, y1: y, x2: x + NODE_W + H_GAP, y2: cy, color: child.color || G.color, parentId: node.id, childId: child.id });
      });
      return { y, height: curY - topY };
    }
    const total = place(G.mindMap, 0, PAD_Y);
    return {
      positioned, edges,
      width: PAD_X * 2 + (maxDepth + 1) * NODE_W + maxDepth * H_GAP + 20,
      height: Math.max(440, total.height + PAD_Y * 2)
    };
  }

  function renderMindMap() {
    const { positioned, edges, width, height } = layoutTree();
    const svg = document.getElementById('mindmap-svg');
    const linksG = document.getElementById('mm-links');
    const nodesG = document.getElementById('mm-nodes');
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.setAttribute('width', Math.round(width * mmZoom));
    svg.setAttribute('height', Math.round(height * mmZoom));
    linksG.innerHTML = '';
    nodesG.innerHTML = '';

    const activeChain = new Set(getAncestors(selectedId));
    edges.forEach(e => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const mx = (e.x1 + e.x2) / 2;
      path.setAttribute('d', `M ${e.x1} ${e.y1} C ${mx} ${e.y1}, ${mx} ${e.y2}, ${e.x2} ${e.y2}`);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', e.color);
      const hot = activeChain.has(e.childId) || e.parentId === selectedId;
      path.setAttribute('stroke-width', hot ? '2.3' : '1.4');
      path.setAttribute('stroke-opacity', hot ? '0.9' : '0.42');
      linksG.appendChild(path);
    });

    positioned.forEach(({ node, x, y, isOpen, childCount }) => {
      const col = node.color || G.color;
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'node-group');
      g.setAttribute('transform', `translate(${x}, ${y - NODE_H / 2})`);

      const sel = selectedId === node.id;
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('class', 'node-rect');
      rect.setAttribute('width', NODE_W);
      rect.setAttribute('height', NODE_H);
      rect.setAttribute('rx', node.id === G.mindMap.id ? '12' : '9');
      rect.setAttribute('fill', sel ? `color-mix(in srgb, ${col} 14%, var(--card))` : 'var(--card)');
      rect.setAttribute('stroke', col);
      rect.setAttribute('stroke-width', sel ? '2.5' : '1.4');
      g.appendChild(rect);

      const lbl = node.label.length > 24 ? node.label.slice(0, 23) + '…' : node.label;
      const sub = (node.sub || '').length > 26 ? node.sub.slice(0, 25) + '…' : (node.sub || '');

      const t1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      t1.setAttribute('x', 11); t1.setAttribute('y', 18); t1.setAttribute('fill', 'var(--foreground)');
      t1.setAttribute('font-size', node.id === G.mindMap.id ? '13' : '11.5'); t1.setAttribute('font-weight', '600');
      t1.textContent = lbl;
      g.appendChild(t1);

      const t2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      t2.setAttribute('x', 11); t2.setAttribute('y', 33); t2.setAttribute('fill', 'var(--muted-foreground)');
      t2.setAttribute('font-size', '10');
      t2.textContent = sub;
      g.appendChild(t2);

      g.addEventListener('click', () => {
        if (childCount > 0 && !isOpen) expandedIds.add(node.id);
        window.selectNode(node.id);
      });

      if (childCount > 0) {
        const pillG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        pillG.setAttribute('transform', `translate(${NODE_W - 32}, ${NODE_H / 2 - 10})`);
        pillG.addEventListener('click', (ev) => {
          ev.stopPropagation();
          if (expandedIds.has(node.id)) expandedIds.delete(node.id);
          else expandedIds.add(node.id);
          window.selectNode(node.id);
        });
        const pr = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        pr.setAttribute('width', 26); pr.setAttribute('height', 20); pr.setAttribute('rx', 10);
        pr.setAttribute('fill', isOpen ? 'var(--content)' : `color-mix(in srgb, ${col} 18%, var(--card))`);
        pr.setAttribute('stroke', col); pr.setAttribute('stroke-width', '1.2');
        pillG.appendChild(pr);

        const pt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        pt.setAttribute('x', 13); pt.setAttribute('y', 13.5); pt.setAttribute('text-anchor', 'middle');
        pt.setAttribute('fill', col); pt.setAttribute('font-size', '10'); pt.setAttribute('font-weight', '700');
        pt.textContent = isOpen ? '−' : `+${childCount}`;
        pillG.appendChild(pt);
        g.appendChild(pillG);
      }
      nodesG.appendChild(g);
    });
  }

  window.selectNode = function (id, ensureVisible = false) {
    const n = NODE_MAP[id];
    if (!n) return;
    selectedId = id;
    if (ensureVisible) getAncestors(id).slice(0, -1).forEach(a => expandedIds.add(a));

    const crumbs = getAncestors(id);
    document.getElementById('insp-crumbs').innerHTML = crumbs.map((cid, idx) => {
      const cn = NODE_MAP[cid];
      if (idx === crumbs.length - 1) return `<span style="font-weight:600;color:var(--foreground);">${cn.label}</span>`;
      return `<button class="crumb-btn" onclick="selectNode('${cid}', true)">${cn.label}</button><span>›</span>`;
    }).join('');

    const badge = document.getElementById('insp-badge');
    badge.className = `pill ${n.pill || G.pill}`;
    badge.textContent = n.badge || G.shortName;
    document.getElementById('insp-title').textContent = n.title || n.label;
    document.getElementById('insp-summary').textContent = n.summary || '';

    const whyBox = document.getElementById('insp-why-box');
    if (n.why) { whyBox.classList.remove('hidden'); document.getElementById('insp-why').textContent = n.why; }
    else whyBox.classList.add('hidden');

    const kids = n.children || [];
    const chBox = document.getElementById('insp-children-box');
    if (kids.length) {
      chBox.classList.remove('hidden');
      document.getElementById('insp-children').innerHTML = kids.map(c =>
        `<button class="child-chip" onclick="drillToChild('${c.id}')">${c.label}${c.children?.length ? ` (+${c.children.length})` : ''}</button>`
      ).join('');
    } else chBox.classList.add('hidden');

    renderMindMap();
  };

  window.drillToChild = function (cid) {
    const n = NODE_MAP[cid];
    getAncestors(cid).forEach(a => expandedIds.add(a));
    if (n && n.children && n.children.length) expandedIds.add(cid);
    window.selectNode(cid, true);
  };

  window.expandAllMindMap = function () {
    Object.values(NODE_MAP).forEach(n => { if (n.children && n.children.length) expandedIds.add(n.id); });
    renderMindMap();
  };

  window.collapseMindMap = function () {
    expandedIds.clear();
    expandedIds.add(G.mindMap.id);
    mmZoom = 1.0;
    document.getElementById('mm-zoom-label').textContent = '100%';
    window.selectNode(G.mindMap.id);
  };

  window.zoomMindMap = function (delta) {
    mmZoom = Math.min(1.5, Math.max(0.55, +(mmZoom + delta).toFixed(2)));
    document.getElementById('mm-zoom-label').textContent = `${Math.round(mmZoom * 100)}%`;
    renderMindMap();
  };

  const SECS = ['fp', 'mindmap', 'workflow', 'tooling', 'tradeoffs'];
  window.showSection = function (sec) {
    SECS.forEach(s => document.getElementById(`sec-${s}`).classList.toggle('hidden', s !== sec));
    document.querySelectorAll('#side-nav button').forEach(b => b.classList.toggle('active', b.dataset.sec === sec));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.toggleSidebar = function () {
    const l = document.getElementById('app-layout');
    const c = l.classList.toggle('sidebar-collapsed');
    document.getElementById('reopen-sidebar-bar').classList.toggle('hidden', !c);
  };

  window.toggleInspector = function () {
    const g = document.getElementById('mm-grid');
    const c = g.classList.toggle('mm-insp-collapsed');
    document.getElementById('reopen-insp-btn').classList.toggle('hidden', !c);
  };

  window.handleSearch = function (q) {
    const cb = document.getElementById('clear-search');
    const rb = document.getElementById('search-results');
    const query = q.trim().toLowerCase();
    if (!query) { cb.classList.add('hidden'); rb.classList.add('hidden'); rb.innerHTML = ''; return; }
    cb.classList.remove('hidden');
    const hits = Object.values(NODE_MAP).filter(n =>
      (n.label || '').toLowerCase().includes(query) ||
      (n.title || '').toLowerCase().includes(query) ||
      (n.summary || '').toLowerCase().includes(query)
    );
    rb.classList.remove('hidden');
    if (!hits.length) { rb.innerHTML = `<div class="xs muted" style="padding:6px;">No matches found.</div>`; return; }
    rb.innerHTML = hits.slice(0, 8).map(h => `
      <button onclick="showSection('mindmap');drillToChild('${h.id}');clearSearch();" class="search-item">
        <div style="font-weight:600;">${h.label}</div>
        <div class="search-item-hint">${h.summary || h.sub || ''}</div>
      </button>
    `).join('');
  };

  window.clearSearch = function () {
    document.getElementById('global-search').value = '';
    window.handleSearch('');
  };

  window.selectNode(G.mindMap.id);
}
