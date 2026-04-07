const pages = [
  { label:"Home",      href:"index.html" },
  { label:"Variables", href:"variables.html" },
  { label:"Loops",     href:"loops.html" },
  { label:"Functions", href:"functions.html" },
  { label:"DOM",       href:"dom.html" },
  { label:"Events",    href:"events.html" },
  { label:"Objects",   href:"objects.html" },
  { label:"Forms",     href:"forms.html" },
  { label:"API",       href:"api.html" },
];

const current = window.location.pathname.split("/").pop() || "index.html";

const navEl = document.getElementById("nav");
if (navEl) {
  navEl.innerHTML = `
    <nav>
      <div class="logo">Code<span>Viz</span></div>
      <div class="nav-links">
        ${pages.map(p => `<a href="${p.href}" class="${current === p.href ? "active" : ""}">${p.label}</a>`).join("")}
      </div>
    </nav>`;
}

const footerEl = document.getElementById("footer");
if (footerEl) {
  footerEl.innerHTML = `<footer><p>CodeViz &mdash; Multi-Language Coding Concepts Visualizer &nbsp;·&nbsp; Code Visualizer</p></footer>`;
}
