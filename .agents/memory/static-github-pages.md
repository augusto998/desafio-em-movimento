---
name: Static GitHub Pages artifacts
description: Constraint for vanilla HTML/CSS/JavaScript apps previewed through the workspace Vite wrapper.
---

For a vanilla static app built through the workspace Vite wrapper, runtime files
must be Vite inputs or live under the public directory. A classic script linked
from the project root can work in development but be omitted from the
production output; using a module entry or copying assets into public keeps the
GitHub Pages build self-contained.

**Why:** Development preview and production build do not treat root-relative
classic script tags the same way, which can produce a published page without
the game logic.

**How to apply:** Before delivery, build the artifact and inspect the output
directory for the JavaScript runtime, stylesheet, HTML entry, and favicon.