// Maths.js Library
const Maths = (function () {
  // Average of numbers
  function avg(...values) {
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  }

  // Sum of numbers
  function sum(...values) {
    return values.reduce((sum, value) => sum + value, 0);
  }

  // Median of numbers
  function median(...values) {
    values.sort((a, b) => a - b);
    const middle = Math.floor(values.length / 2);
    return values.length % 2 !== 0
      ? values[middle]
      : (values[middle - 1] + values[middle]) / 2;
  }

  // Mode of numbers
  function mode(...values) {
    const frequency = {};
    values.forEach((value) => (frequency[value] = (frequency[value] || 0) + 1));
    let maxFreq = 0;
    let mode = [];
    for (let key in frequency) {
      if (frequency[key] > maxFreq) {
        mode = [Number(key)];
        maxFreq = frequency[key];
      } else if (frequency[key] === maxFreq) {
        mode.push(Number(key));
      }
    }
    return mode.length === values.length ? null : mode; // Return null if no mode
  }

  // Range of numbers
  function range(...values) {
    return Math.max(...values) - Math.min(...values);
  }

  // Factorial of a number
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  // Greatest Common Divisor
  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  // Least Common Multiple
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // Clamp a value between min and max
  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  // Percentile of a sorted array
  function percentile(values, p) {
    values.sort((a, b) => a - b);
    const index = Math.ceil((p / 100) * values.length) - 1;
    return values[index];
  }

  // Distance between two points (2D)
  function distance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
  }

  // Return all functions in the Maths object
  return {
    avg,
    sum,
    median,
    mode,
    range,
    factorial,
    gcd,
    lcm,
    clamp,
    percentile,
    distance,
  };
})();
