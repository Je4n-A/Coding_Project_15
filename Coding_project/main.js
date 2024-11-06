import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Display the total portfolio value
const totalValue = calculatePortfolioValue();
document.getElementById('total-value').innerText = `Total Portfolio Value: $${totalValue}`;

// Display the portfolio allocation percentages
const portfolioAllocation = getPortfolioAllocation();
const assetBreakdown = document.getElementById('asset-breakdown');
portfolioAllocation.forEach(asset => {
    const assetDiv = document.createElement('div');
    assetDiv.innerText = `${asset.name} (${asset.type}): ${asset.allocation}%`;
    assetBreakdown.appendChild(assetDiv);
});

// Display the asset list
const assetsTableBody = document.getElementById('assets-body');
portfolioAllocation.forEach(asset => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${asset.name}</td>
        <td>${asset.type}</td>
        <td>$${asset.price}</td>
        <td>${asset.quantity}</td>
        <td>$${(asset.price * asset.quantity).toFixed(2)}</td>
    `;
    assetsTableBody.appendChild(row);
});

// Create a few Transaction instances for different assets and display the transaction details
const transactionLog = document.getElementById('transactions');
function logTransaction(transaction) {
    const transactionDiv = document.createElement('div');
    transactionDiv.innerText = `${transaction.type.toUpperCase()} ${transaction.quantity} of ${transaction.asset.name}`;
    transactionLog.appendChild(transactionDiv);
}

try {
    const buyTransaction1 = new Transaction(1, 'buy', 10);
    logTransaction(buyTransaction1);

    const sellTransaction1 = new Transaction(2, 'sell', 5);
    logTransaction(sellTransaction1);

    const buyTransaction2 = new Transaction(3, 'buy', 1);
    logTransaction(buyTransaction2);

    // This will throw an error if quantity is insufficient
    const sellTransaction2 = new Transaction(4, 'sell', 10);
    logTransaction(sellTransaction2);
} catch (error) {
    console.error(error.message);
}

// Display the updated portfolio value after transactions
const updatedTotalValue = calculatePortfolioValue();
document.getElementById('total-value').innerText = `Updated Total Portfolio Value: $${updatedTotalValue}`;

// Display the updated portfolio allocation percentages
const updatedPortfolioAllocation = getPortfolioAllocation();
assetBreakdown.innerHTML = ''; // Clear previous allocation
updatedPortfolioAllocation.forEach(asset => {
    const assetDiv = document.createElement('div');
    assetDiv.innerText = `${asset.name} (${asset.type}): ${asset.allocation}%`;
    assetBreakdown.appendChild(assetDiv);
});