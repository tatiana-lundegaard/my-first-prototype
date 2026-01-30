# Car insurance prototype (Next.js)

B2C car insurance client zone – see repo root `helper-docs/01-context.md` and `02-structure.md`.

**Implemented:** Lunde-poj–inspired design, mock login (password: `demo`), multi-step onboarding (vehicle → driver → coverage → summary), camera/file upload, contract view (KZ/IPID), dashboard (protected), payment page with GoPay placeholder, send-quote/send-contract API mocks, back-office and demo pages.

## Startup (from helper-docs/03-startup.md)

1. **Node.js LTS** (20.x or 22.x)  
   - macOS: [nodejs.org](https://nodejs.org) LTS or `brew install node@20`  
   - Check: `node -v` and `npm -v`

2. **Open this repo** in Cursor (File → Open Folder → repo root).

3. **Install dependencies** (from repo root or from `prototype/`):
   ```bash
   cd prototype
   npm install
   ```
   Or from `prototype/`: `npm run setup`

4. **Start dev server:**
   ```bash
   cd prototype
   npm run dev
   ```
   Then open [http://localhost:3000](http://localhost:3000).

**Optional:** Netlify CLI for deploy from your machine: `npm install -g netlify-cli` then `netlify login`.

**If something fails:** Restart terminal/Cursor after installing Node; avoid `sudo npm`. See `helper-docs/03-startup.md` for troubleshooting.
