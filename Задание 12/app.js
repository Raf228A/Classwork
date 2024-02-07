class Asset { 
    constructor(name, cost) { 
        this.name = name; 
        this.cost = cost; 
    } 
} 
 
 
class FinancialAsset extends Asset { 
    constructor(name, cost, yieldRate, investmentType) { 
        super(name, cost); 
        this.yieldRate = yieldRate;
        this.investmentType = investmentType; 
    } 
} 

class RealAsset extends Asset {
    constructor(name, cost, address, assetType) {
        super(name, cost);
        this.address = address;
        this.assetType = assetType;
    }
}

const financialAsset = new FinancialAsset("Stocks", 10000, 0.05, "Equitilies");
const realAsset = new RealAsset("Property", 500000, "34 Pushkina-Kolotushkina St.", "Residental");
console.log(financialAsset);
console.log(realAsset);
 
 
