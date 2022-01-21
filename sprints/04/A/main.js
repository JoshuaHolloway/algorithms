// You are given the prices of a stock, in the form of an array of integers, prices. Let's say that prices[i] is the price of the stock on the ith day (0-based index). Assuming that you are allowed to buy and sell the stock only once, your task is to find the maximum possible profit (the difference between the buy and sell prices).

// Note: You can assume there are no fees associated with buying or selling the stock.

// Example
// For prices = [6, 3, 1, 2, 5, 4], the output should be solution(prices) = 4.

// It would be most profitable to buy the stock on day 2 and sell it on day 4. Thus, the maximum profit is prices[4] - prices[2] = 5 - 1 = 4.

// For prices = [8, 5, 3, 1], the output should be solution(prices) = 0.

// Since the value of the stock drops each day, there's no way to make a profit from selling it. Hence, the maximum profit is 0.

// For prices = [3, 100, 1, 97], the output should be solution(prices) = 97.

// It would be most profitable to buy the stock on day 0 and sell it on day 1. Thus, the maximum profit is prices[1] - prices[0] = 100 - 3 = 97.

// Guaranteed constraints:
// 1 ≤ prices.length ≤ 10^5,
// 1 ≤ prices[i] ≤ 10^6.

// ==============================================

const f = (arr) => {
  let max_diff = 0;
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] > max_diff + arr[i]) {
        max_diff = arr[j] - arr[i];
      }
    }
  }
  return max_diff;
};

// ==============================================

let f2 = function (array) {
  // if undefined (no arg-passed) OR if array is shorter than 2
  if (!array || array.length < 2) {
    return;
  }

  let currentBuy = array[0];
  let globalSell = array[1];
  let globalProfit = globalSell - currentBuy;

  let currentProfit = 0;

  for (let i = 1; i < array.length; i++) {
    currentProfit = array[i] - currentBuy;

    if (currentProfit > globalProfit) {
      globalProfit = currentProfit;
      globalSell = array[i];
    }

    if (currentBuy > array[i]) {
      currentBuy = array[i];
    }
  }
  return [globalSell - globalProfit, globalSell];
};

// ==============================================

console.log(f([6, 3, 1, 2, 5, 4])); // 4

console.log(f([8, 5, 3, 1])); // 0;

console.log(f([3, 100, 1, 97])); // 97;

// ==============================================

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ==============================================

function create_rand_array(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; ++i) {
    arr.push(randomIntFromInterval(min, max));
  }
  return arr;
}

// ==============================================
const input = create_rand_array(1e5, 1, 1e6);
let tic = performance.now();
f(input);
let toc = performance.now(); //ms
let duration = toc - tic;
console.log(
  `duration: ${duration > 1e3 ? `${duration / 1e3} s.` : `${duration} ms.`}`
);

tic = performance.now();
f2(input);
toc = performance.now();
duration = toc - tic;
console.log(
  `duration: ${duration > 1e3 ? `${duration / 1e3} s.` : `${duration} ms.`}`
);
