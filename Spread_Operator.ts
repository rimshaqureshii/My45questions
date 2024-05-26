//Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
// Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let pricesSet1 = [1500 , 2000 , 1600]
 let pricesSet2 = [1200 , 1400 , 1000]
 let combinePrices  = [...pricesSet1, ...pricesSet2].sort((a , b) => a - b);
  console.log(combinePrices);
  


