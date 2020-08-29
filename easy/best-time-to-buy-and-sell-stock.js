// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++){
            if ( prices[j] > prices[i]) {
                let profit = prices[j] - prices[i];
                if (profit > maxProfit) {
                    maxProfit = profit;
                }

            }
        }
    }

    return maxProfit;

};

let prices = [7,6,4,3,1];
console.log(maxProfit(prices))