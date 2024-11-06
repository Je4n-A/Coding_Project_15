import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Display the total portfolio value
const totalValue = calculatePortfolioValue();
console.log(`Total Portfolio Value: $${totalValue}`);

// Display the portfolio allocation percentages
const portfolioAllocation = getPortfolioAllocation();
console.log('Portfolio Allocation:');
portfolioAllocation.forEach(asset => {
    console.log(`${asset.name} (${asset.type}): ${asset.allocation}%`);
});

// Create a few Transaction instances for different assets
try {
    const buyTransaction1 = new Transaction(1, 'buy', 10);
    console.log('Buy Transaction 1:', buyTransaction1);

    const sellTransaction1 = new Transaction(2, 'sell', 5);
    console.log('Sell Transaction 1:', sellTransaction1);

    const buyTransaction2 = new Transaction(3, 'buy', 1);
    console.log('Buy Transaction 2:', buyTransaction2);

    // This will throw an error if quantity is insufficient
    const sellTransaction2 = new Transaction(4, 'sell', 10);
    console.log('Sell Transaction 2:', sellTransaction2);
} catch (error) {
    console.error(error.message);
}

// Display the updated portfolio value after transactions
const updatedTotalValue = calculatePortfolioValue();
console.log(`Updated Total Portfolio Value: $${updatedTotalValue}`);

// Display the updated portfolio allocation percentages
const updatedPortfolioAllocation = getPortfolioAllocation();
console.log('Updated Portfolio Allocation:');
updatedPortfolioAllocation.forEach(asset => {
    console.log(`${asset.name} (${asset.type}): ${asset.allocation}%`);
});