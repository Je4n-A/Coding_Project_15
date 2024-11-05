// Define an array of financial assets
const assets = [
    {
        id: 1,
        name: "Apple Inc.",
        type: "stock",
        price: 150.00,
        quantity: 5
    },
    {
        id: 2,
        name: "Vanguard S&P 500 ETF",
        type: "etf",
        price: 380.00,
        quantity: 10
    },
    {
        id: 3,
        name: "US Treasury Bond 2025",
        type: "bond",
        price: 1000.00,
        quantity: 2
    },
    {
        id: 4,
        name: "Microsoft Corp.",
        type: "stock",
        price: 280.00,
        quantity: 3
    },
    {
        id: 5,
        name: "Fidelity 500 Index Fund",
        type: "mutual_fund",
        price: 145.00,
        quantity: 25
    },
    {
        id: 6,
        name: "Tesla Inc.",
        type: "stock",
        price: 190.00,
        quantity: 4
    },
    {
        id: 7,
        name: "Corporate Bond Fund",
        type: "bond_fund",
        price: 50.00,
        quantity: 40
    },
    {
        id: 8,
        name: "Amazon.com Inc.",
        type: "stock",
        price: 130.00,
        quantity: 3
    }
];

export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
};
