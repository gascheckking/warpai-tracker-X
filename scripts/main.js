// Mockad data för att visa onchain-aktivitet
const mockData = {
  totalEarnings: 150.25,
  totalSpent: 42.30,
  lastTx: "Minted Token #1211 via Zora",
  gasSpentBase: 12.50,
  profitLoss: 107.95,
  nftActivity: "Bought NFT #456 on OpenSea",
  defiActivity: "Staked 1 ETH on Aave",
  airdropHistory: "Received 100 XYZ tokens",
  tokenTx: "Sold 500 WARP tokens",
  contractInteractions: "Interacted with Uniswap V3"
};

// Funktion för att uppdatera UI med mockad data
function updateTrackerUI() {
  document.getElementById("total-earnings").innerText = `$${mockData.totalEarnings.toFixed(2)}`;
  document.getElementById("total-spent").innerText = `$${mockData.totalSpent.toFixed(2)}`;
  document.getElementById("last-tx").innerText = mockData.lastTx;
  document.getElementById("gas-spent-base").innerText = `$${mockData.gasSpentBase.toFixed(2)}`;
  document.getElementById("profit-loss").innerText = `$${mockData.profitLoss.toFixed(2)}`;
  document.getElementById("nft-activity").innerText = mockData.nftActivity;
  document.getElementById("defi-activity").innerText = mockData.defiActivity;
  document.getElementById("airdrop-history").innerText = mockData.airdropHistory;
  document.getElementById("token-tx").innerText = mockData.tokenTx;
  document.getElementById("contract-interactions").innerText = mockData.contractInteractions;
}

// Simulera plånboksanslutning
document.getElementById("connect-wallet").addEventListener("click", () => {
  alert("Simulerar plånboksanslutning... Ansluten!");
  updateTrackerUI();
});