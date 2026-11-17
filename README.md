# Personal Profile — Nuxt + Tailwind CSS

A two-page personal profile site: a homepage and a profile page, linked by a
shared nav bar, styled with Tailwind CSS.

## Structure

```
app/
  pages/
    index.vue      → homepage (name, intro, avatar, welcome message)
    profile.vue    → profile (personal info, education, skills, hobbies)
  components/
    NavBar.vue      → shared nav, used by the layout
  layouts/
    default.vue     → wraps every page with NavBar + footer
  assets/css/
    tailwind.css    → Tailwind directives + small base styles
public/
  avatar.svg         → placeholder avatar — swap for your own photo
  favicon.svg
nuxt.config.ts
tailwind.config.js
tsconfig.json        → lets the editor recognize Nuxt's auto-imports (e.g. useSeoMeta)
```

## Run it

```bash
npm install
npm run dev
```

Wait until the terminal shows all of: `Vite client built`, `Vite server
built`, `Nuxt Nitro server built`, `Vite server warmed up`, `Vite client
warmed up` — then open **http://localhost:3000 in a real browser window**
(Chrome, Edge, Firefox). The homepage is at `/`, the profile page at
`/profile`.

> Important: open the link in an actual browser, not VS Code's built-in
> "Simple Browser" preview tab. That embedded preview can fail to load
> images from the `public/` folder correctly and throw a misleading
> `ENOENT` file-not-found error that has nothing to do with your code.

## Add your own photo

1. Copy your photo into `public/` — e.g. `public/avatar.jpg`.
2. In `app/pages/index.vue`, find the `<img>` tag near the bottom and
   change `src="/avatar.svg"` to `src="/avatar.jpg"` (match your file name
   and extension exactly, including capitalization).
3. Save the file — the page reloads automatically.

## Customize

Every spot you need to fill in is written as ALL-CAPS placeholder text
(e.g. `YOUR NAME`, `YOUR_EMAIL@example.com`, `SKILL 1`) with a `NOTE:`
comment right above it, so just search for those and replace them:

- `app/pages/index.vue` — your name, intro paragraph, email, avatar.
- `app/pages/profile.vue` — the `personalInfo`, `education`, `skills`,
  `interests`, and `hobbies` arrays near the top of the file. The template
  below just renders those lists, so you only ever need to edit the data,
  not the HTML.
- `app/components/NavBar.vue` and `app/layouts/default.vue` — the name shown
  in the top nav and the footer.
- `nuxt.config.ts` — the browser-tab title.
- Colors and fonts live in `tailwind.config.js` (`paper`, `ink`, `pine`,
  `rust`, `sand`; `font-display` / `font-body`).

## If the editor shows a red squiggle under useSeoMeta

That's expected the very first time, before `npm install` has generated
Nuxt's type files. It's cosmetic — it doesn't stop the site from running.
It should clear up on its own once `.nuxt/` exists; if it lingers, run
"Developer: Reload Window" from the Command Palette (Ctrl+Shift+P).
