# freechud

Website for the FreeChud movement. Built with Vite + React + TypeScript.

Live site: https://freechud.vercel.app

If you want to help improve this site, you're in the right place. The guide below is written for people who have never opened a pull request before. Take it one step at a time.

---

## How to contribute (the easy version)

You do not need to be a developer. If you can copy and paste a few commands and ask an AI assistant for help, you can contribute.

### What you'll need

1. **A free GitHub account.** Sign up at https://github.com/signup if you don't have one.
2. **Git installed.** Download from https://git-scm.com/downloads and run the installer. On Windows just keep the defaults.
3. **Node.js (LTS).** Download from https://nodejs.org and install. This lets you run the website on your own computer.
4. **A code editor.** [VS Code](https://code.visualstudio.com/) is free and works on Mac, Windows, and Linux.
5. **An AI coding assistant.** This is the part that does most of the work for you. Any of these work:
   - [Claude Code](https://www.anthropic.com/claude-code) (terminal based)
   - [Cursor](https://cursor.com) (VS Code with AI built in)
   - [GitHub Copilot](https://github.com/features/copilot) inside VS Code

### Step 1: Fork the repo

A "fork" is your own personal copy of the project that you can change without affecting the main site.

1. Go to https://github.com/dgavriloff/freechud
2. Click the **Fork** button in the top right
3. Confirm. You now own a copy at `https://github.com/YOUR-USERNAME/freechud`

### Step 2: Clone your fork

"Clone" means downloading your fork to your own computer.

Open a terminal (on Windows: open the Start menu and type "Git Bash"; on Mac: open the Terminal app) and paste this, replacing `YOUR-USERNAME`:

```bash
git clone https://github.com/YOUR-USERNAME/freechud.git
cd freechud
```

### Step 3: Install and run

Still in the terminal:

```bash
npm install
npm run dev
```

When it prints `Local: http://localhost:5173`, open that link in your browser. You'll see the site running on your own machine. Any change you save shows up here instantly.

### Step 4: Make your change

Open the `freechud` folder in VS Code. Now talk to your AI assistant. You don't need to know the code. Tell it what you want, plainly, for example:

- "Add a new clip to the clips page called 'Crosswalk 2' that points to public/clips/crosswalk2.mp4"
- "Change the support page wording so the donation paragraph is shorter"
- "The mobile video is too small, can you make it bigger"
- "Fix the typo in the timeline on May 13"

The assistant will edit the files for you. Watch the browser refresh and confirm it looks right.

A few tips:

- Refresh the browser if something looks stuck.
- If the AI suggests installing new packages or changing build config, ask it to explain why first.
- Keep changes focused. One pull request, one improvement.

### Step 5: Save your work (commit and push)

Once you're happy with the change, save it back to your GitHub fork.

In the terminal:

```bash
git add -A
git commit -m "Short description of what you changed"
git push
```

If git asks you to log in, follow the prompts. The first time you push, GitHub may ask you to authenticate in your browser.

### Step 6: Open a pull request

A pull request is how you ask the maintainers to merge your changes into the main site.

1. Go to your fork on GitHub: `https://github.com/YOUR-USERNAME/freechud`
2. You should see a yellow banner that says "Compare & pull request." Click it.
3. Write a short title and a sentence or two about what you changed and why.
4. Click **Create pull request**.

That's it. We'll review it, and if it looks good we'll merge it and the live site updates automatically.

---

## What kinds of contributions are welcome

- Fixing typos, broken links, or wrong information
- Better wording on any page
- New clips for the Clips page (drop the file in `public/clips/` and add an entry to `src/data/clips.ts`)
- Visual or layout improvements
- Mobile fixes
- New pages or sections that help Dalton's case

If you're not sure whether something is a good idea, open an issue first and ask.

---

## For developers

Standard Vite project layout.

```bash
npm install     # install dependencies
npm run dev     # start the dev server on :5173
npm run build   # type check and build for production
npm run preview # preview the production build locally
npm run lint    # run eslint
```

Pages live in `src/pages/`, shared styles in `src/styles/wordpress.css`, the clip list in `src/data/clips.ts`, and the layout shell in `src/components/Layout.tsx`. The site deploys to Vercel from `main` on every push.

---

## Reporting bugs or ideas

If you don't want to write code, you can still help. Open an issue on GitHub describing what's wrong or what you'd like to see:

https://github.com/dgavriloff/freechud/issues/new

Be specific. "The donate button does nothing on iPhone Safari" is far more useful than "It's broken."
