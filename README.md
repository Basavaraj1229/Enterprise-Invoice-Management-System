# Enterprise Invoice Management System

![CI](https://github.com/Basavaraj1229/Enterprise-Invoice-Management-System/actions/workflows/ci.yml/badge.svg)

A small React app to create itemized invoices, configure quantities/prices/taxes/discounts, preview invoices in a modal, and export them as PDF.

Live demo: https://invoice-generator-react.netlify.app/ (original demo)

## 📋 Quick start

Prereqs: Node 18.x and npm

```bash
git clone https://github.com/Basavaraj1229/Enterprise-Invoice-Management-System.git
cd Enterprise-Invoice-Management-System
npm install
npm start
# or build for production
npm run build
```

Open the app at http://localhost:3000

## 🔧 What this repo contains

- `src/components/InvoiceForm.js` — invoice logic, currency options, calculations
- `src/components/InvoiceModal.js` — preview and PDF export
- `public/` and `src/` — React app sources
- `package.json` — scripts and Node engine requirement (Node >= 18)

## ✅ CI & Deployment

This repository includes GitHub Actions workflows:

- **CI**: `.github/workflows/ci.yml` — runs on push and PR to `main`, installs deps, runs tests (if present) and builds the app.
- **Deploy**: `.github/workflows/deploy.yml` — builds and deploys the `build/` output to **GitHub Pages** on push to `main` (ensure Pages is enabled in repo settings).

Badges will appear above once workflows have run.

## Currency (default: INR)

- The app defaults to Indian Rupee (INR) with symbol ₹ and locale `en-IN`.
- Currency settings are defined in `src/components/InvoiceForm.js` as a structured `currencyOptions` object.

## Contributing

- Create a branch for your change: `git checkout -b feat/some-feature`
- Commit changes and open a PR against `main`

## License & Author

 

This repository maintained by Basavaraj Kokane.
