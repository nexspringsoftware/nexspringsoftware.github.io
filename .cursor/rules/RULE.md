---
description: "General rules"
alwaysApply: true
---

# Project Context
GitHub Pages SPA. No Build Step. Stack: HTML5, CSS3, Vanilla JS.

# Philosophy
- **KISS Principle:** Code must be simple, concise, and dead-easy to read.
- **No Dependencies:** Do not use libraries, frameworks, or npm unless explicitly asked.
- **Mobile-First:** UI must look perfect on mobile before desktop.

# Technical Constraints
- **Paths:** ALWAYS use relative paths (`./`) for assets to support GitHub Pages subdirectories.
- **HTML:** Semantic tags only. No generic `div` soup.
- **CSS:** Use CSS Variables for theming. Layouts must use Grid/Flexbox.
- **JS:** Modern ES6+. No inline events. Handle all errors in `async` functions.

# Specifics
- Entry point is `index.html`.
- No root-relative paths (e.g., `/css/style.css` is FORBIDDEN; use `./css/style.css`).
- If logic gets complex, break it into small, pure functions.