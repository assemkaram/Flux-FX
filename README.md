# Flux FX – Money Converter

A simple, browser-based currency converter that uses **ECB reference exchange rates** from the European Central Bank.

**Live demo:** [assemkaram.github.io/Flux-FX](https://assemkaram.github.io/Flux-FX/)

## Overview

Flux FX lets you convert an amount from one currency to another using the reference rates published by the European Central Bank (ECB). The interface is a single page with two amount fields, "Amount To Transfer" and "Amount To Exchange," and a clean, minimal design.

## Features

- Currency conversion using ECB reference rates
- Two-field converter for quick calculations in either direction
- Responsive layout that works on desktop and mobile
- No sign-up, no backend, runs entirely in the browser

## Tech Stack

- **HTML5** for structure
- **CSS3** for styling and layout
- **JavaScript** for conversion logic and fetching exchange rates
- **GitHub Pages** for hosting

## Project Structure

```
Flux-FX/
├── index.html    # Main page and converter interface
├── style.css     # Styles and responsive layout
├── main.js       # Conversion logic and exchange rate handling
└── assets/       # Images, including the screenshot used on the live page
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/assemkaram/Flux-FX.git
   ```
2. Open the project folder:
   ```bash
   cd Flux-FX
   ```
3. Open `index.html` in your browser. No build step or dependencies are required.

## How the Rates Work

Exchange rates come from the European Central Bank. The ECB publishes **reference rates once per business day** (around 16:00 CET), so the rates shown are daily reference rates rather than live tick-by-tick market prices. Reference rates are provided for information only and are not used for transaction-level pricing, so check with your bank or provider for the rate they will apply.

## Deployment

The site is deployed with GitHub Pages from the `main` branch. To publish your own copy:

1. Go to **Settings → Pages** in your repository.
2. Under **Source**, select the `main` branch and the root folder.
3. Save. The site will be available at `https://<your-username>.github.io/<repo-name>/`.

## Disclaimer

Flux FX is provided for informational and educational purposes only. Exchange rates may be delayed and may not reflect the rate you would receive from a bank or currency provider. Do not rely on this tool for financial decisions.

## Contact

- GitHub: [assemkaram](https://github.com/assemkaram)
- LinkedIn: [assem-karam-79b28835b](https://www.linkedin.com/in/assem-karam-79b28835b)

## License

Add a license of your choice (for example, MIT) to allow others to use or modify this code.

---

© 2026 Assem Karam
