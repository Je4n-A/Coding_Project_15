// Define an array of financial assets
export const assets = [
    {
        id: 1,
        name: "Apple Inc.",
        type: "stock",
        price: 150.00,
        quantity: 5,
        lastUpdated: new Date()
    },
    {
        id: 2,
        name: "Vanguard S&P 500 ETF",
        type: "etf",
        price: 380.00,
        quantity: 10,
        lastUpdated: new Date()
    },
    {
        id: 3,
        name: "US Treasury Bond 2025",
        type: "bond",
        price: 1000.00,
        quantity: 2,
        lastUpdated: new Date()
    },
    {
        id: 4,
        name: "Microsoft Corp.",
        type: "stock",
        price: 280.00,
        quantity: 3,
        lastUpdated: new Date()
    },
    {
        id: 5,
        name: "Fidelity 500 Index Fund",
        type: "mutual_fund",
        price: 145.00,
        quantity: 25,
        lastUpdated: new Date()
    },
    {
        id: 6,
        name: "Tesla Inc.",
        type: "stock",
        price: 190.00,
        quantity: 4,
        lastUpdated: new Date()
    },
    {
        id: 7,
        name: "Corporate Bond Fund",
        type: "bond_fund",
        price: 50.00,
        quantity: 40,
        lastUpdated: new Date()
    },
    {
        id: 8,
        name: "Amazon.com Inc.",
        type: "stock",
        price: 130.00,
        quantity: 3,
        lastUpdated: new Date()
    }
];

export function getAssetById(id) {
    return(
        typeof assets.id === 'number' &&
        typeof assets.name === 'string' &&
        ['stock', 'etf', 'bond', 'mutual_fund'].includes(assets.type) &&
        typeof assets.price === 'number' &&
        typeof assets.quantity === 'number' &&
        assets.price > 0 &&
        assets.quantity >= 0
    );
};
