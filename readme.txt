# WarpAI Tracker X

WarpAI Tracker X är en enkel onchain activity tracker byggd för Warpcast/Farcaster Mini App-sektionen. Appen visar användarens onchain-aktiviteter, som totala intäkter, kostnader, senaste transaktioner, NFT- och DeFi-aktivitet, med mera. Detta är en ooptimerad version som använder mockad data för att visa funktionalitet.

## Funktioner
- **Onchain Activity Tracking:** Spårar totala intäkter, kostnader, gasförbrukning, NFT- och DeFi-aktivitet, airdrops, token-transaktioner och smarta kontraktsinteraktioner.
- **Simulerad plånboksanslutning:** Klick på "Connect Wallet" fyller UI:n med mockad data.
- **Responsiv design:** Fungerar på både desktop och mobil.
- **Warpcast/Farcaster-kompatibel:** Inkluderar ett farcaster.json-manifest för Mini App-integration.

## Projektstruktur
warpai-tracker-X/
├── public/
│   ├── assets/            # Statiska resurser som bilder
│   │   ├── logo.png
│   │   └── placeholder.png
├── scripts/
│   ├── main.js            # JavaScript för funktionalitet
├── styles/
│   ├── main.css           # CSS för styling
├── index.html             # Huvud-HTML-fil
├── farcaster.json         # Manifest för Warpcast/Farcaster Mini App
├── vercel.json            # Konfiguration för Vercel-deployment
└── README.md              # Denna fil

## Installation
1. Klona eller ladda ner detta projekt till din lokala maskin.
2. Om du har egna bilder för logga eller andra resurser, placera dem i `public/assets/` och uppdatera `index.html` och `farcaster.json` med korrekta sökvägar.
3. Öppna `index.html` i en webbläsare för att testa appen lokalt.

## Användning
1. Öppna appen i en webbläsare.
2. Klicka på "Connect Wallet"-knappen för att simulera en plånboksanslutning.
3. UI:n uppdateras med mockad data som visar olika onchain-aktiviteter, såsom totala intäkter, gasförbrukning och NFT-transaktioner.

## Deployment på Vercel
1. Skapa ett nytt projekt på Vercel.
2. Ladda upp denna mapp (`warpai-tracker-X`) via GitHub eller Vercel CLI.
3. Vercel kommer automatiskt att använda `vercel.json` för att konfigurera appen som en Single Page Application (SPA).
4. Uppdatera `farcaster.json` med den URL som Vercel genererar för din app (t.ex. `https://your-vercel-app.vercel.app/`).

## Att göra
- Integrera verklig onchain-data via API:er (t.ex. Etherscan eller Alchemy).
- Lägg till fler funktioner som notifikationer och social delning på Warpcast.
- Polera UI/UX med diagram och interaktiva element.
- Implementera säkerhetsåtgärder för plånboksintegration.

## Kontakt
- **Skapare:** Spawniz
- **GitHub:** [gascheckking](https://github.com/gascheckking)
- **Email:** warpaiactivity1@gmail.com
- **Warpcast:** @warpaiapp

© 2025 WarpAI. Alla rättigheter förbehållna.

