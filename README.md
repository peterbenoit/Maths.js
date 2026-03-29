# Maths.js

> Lightweight JavaScript math utilities — statistics, number theory, and numeric helpers in under 1 kb.

[![npm](https://img.shields.io/npm/v/@peterbenoit/mathsjs)](https://www.npmjs.com/package/@peterbenoit/mathsjs)
[![license](https://img.shields.io/github/license/peterbenoit/Maths.js)](LICENSE)
[![tests](https://img.shields.io/badge/tests-passing-brightgreen)](#running-tests)

---

## What is Maths.js?

**Maths.js** is a small, dependency-free JavaScript library that adds practical statistical and numeric helpers that the native `Math` object doesn't provide. It exposes a single global `Maths` object with clearly named, well-validated methods covering the operations that come up most often in real application work: computing averages, finding medians, calculating greatest common divisors, clamping values, and more.

It works without modification in both browser `<script>` tags and Node.js `require()` environments, with no build step required.

---

## Why I built it

The native `Math` object in JavaScript covers basic operations (rounding, trigonometry, powers) but leaves gaps that nearly every project eventually runs into — things like statistical aggregates, percentile lookups, or integer number theory basics like GCD and LCM. The common workarounds are to either write those helpers inline over and over, or pull in a large library like [math.js](https://github.com/josdejong/mathjs) that brings far more surface area than the project needs.

I built Maths.js to sit comfortably between those two options: small enough to drop into anything (under 1 kb gzipped), but complete enough to cover the methods I kept rewriting. It also enforces input validation consistently — throwing typed errors with clear messages rather than silently returning `NaN`, which makes bugs in data pipelines much easier to spot.

---

## Who it's for

Maths.js is aimed at:

- **Front-end developers** building dashboards, data visualizations, or any UI that needs statistical aggregates without importing a full charting utility's dependency tree.
- **Node.js developers** writing scripts or APIs that process numeric data — usage analytics, financial calculations, survey results, sensor readings.
- **Educators and students** who want a readable, self-contained reference implementation of common math algorithms in plain JavaScript.
- **Anyone who keeps writing `arr.reduce((s, v) => s + v, 0) / arr.length` by hand** and finally wants a stable, tested home for it.

It is _not_ intended for advanced symbolic math, matrix operations, complex numbers, or arbitrary precision arithmetic. For those use cases, [math.js](https://mathjs.org) or similar libraries are better fits.

---

## Installation

**npm**

```sh
npm install @peterbenoit/mathsjs
```

**Clone / manual**

```sh
git clone https://github.com/peterbenoit/Maths.js.git
```

---

## Usage

### Node.js

```javascript
const Maths = require('@peterbenoit/mathsjs');

console.log(Maths.avg(10, 20, 30));    // 20
console.log(Maths.median(7, 1, 4));    // 4
console.log(Maths.gcd(48, 18));        // 6
```

### Browser (script tag)

```html
<script src="/path/to/Maths.js"></script>
<script>
  console.log(Maths.sum(1, 2, 3));     // 6
  console.log(Maths.clamp(12, 0, 10)); // 10
</script>
```

The library attaches to `globalThis.Maths` in browser contexts and exports via `module.exports` in Node. No bundler or build step needed.

---

## API Reference

All methods live on the `Maths` object. No instantiation required.

### Method overview

| Category | Methods |
|---|---|
| Aggregation | `avg`, `sum` |
| Statistics | `median`, `mode`, `range`, `percentile` |
| Number theory | `factorial`, `gcd`, `lcm` |
| Utility | `clamp`, `distance` |

---

### `Maths.avg(...values)` — Arithmetic mean

Returns the average of all provided values.

| | |
|---|---|
| **Parameters** | `...values: number[]` — at least one finite number |
| **Returns** | `number` |
| **Throws** | `RangeError` if called with no arguments; `TypeError` if any value is not a finite number |

```javascript
Maths.avg(10, 20, 30); // 20
Maths.avg(1, 2, 3, 4); // 2.5
```

---

### `Maths.sum(...values)` — Sum

Returns the total of all provided values.

| | |
|---|---|
| **Parameters** | `...values: number[]` |
| **Returns** | `number` |
| **Throws** | `TypeError` if any value is not a finite number |

```javascript
Maths.sum(1, 2, 3, 4); // 10
Maths.sum();            // 0
```

---

### `Maths.median(...values)` — Median

Returns the middle value of a sorted dataset. For even-length inputs, returns the mean of the two middle values.

| | |
|---|---|
| **Parameters** | `...values: number[]` — at least one finite number |
| **Returns** | `number` |
| **Throws** | `RangeError` on empty input; `TypeError` on non-finite values |

```javascript
Maths.median(1, 3, 2);    // 2
Maths.median(1, 2, 3, 4); // 2.5
```

---

### `Maths.mode(...values)` — Mode

Returns an array of the most frequently occurring value(s). Returns `null` when all values appear with equal frequency (no distinct mode).

| | |
|---|---|
| **Parameters** | `...values: number[]` — at least one finite number |
| **Returns** | `number[] \| null` |
| **Throws** | `RangeError` on empty input; `TypeError` on non-finite values |

```javascript
Maths.mode(1, 2, 2, 3);    // [2]
Maths.mode(1, 1, 2, 3, 3); // [1, 3]
Maths.mode(1, 2, 3);       // null
```

---

### `Maths.range(...values)` — Range

Returns the difference between the maximum and minimum values.

| | |
|---|---|
| **Parameters** | `...values: number[]` — at least one finite number |
| **Returns** | `number` |
| **Throws** | `RangeError` on empty input; `TypeError` on non-finite values |

```javascript
Maths.range(1, 8, 3); // 7
```

---

### `Maths.factorial(n)` — Factorial

Returns the product of all positive integers from 1 to `n`. `0!` and `1!` both return `1`.

| | |
|---|---|
| **Parameters** | `n: number` — non-negative integer |
| **Returns** | `number` |
| **Throws** | `TypeError` if `n` is not an integer; `RangeError` if `n < 0` |

```javascript
Maths.factorial(5); // 120
Maths.factorial(0); // 1
```

---

### `Maths.gcd(a, b)` — Greatest Common Divisor

Returns the largest integer that divides both `a` and `b` evenly. Sign is ignored.

| | |
|---|---|
| **Parameters** | `a, b: number` — integers |
| **Returns** | `number` |
| **Throws** | `TypeError` if either argument is not a finite integer |

```javascript
Maths.gcd(48, 18);  // 6
Maths.gcd(100, 75); // 25
```

---

### `Maths.lcm(a, b)` — Least Common Multiple

Returns the smallest positive integer divisible by both `a` and `b`. Returns `0` if either argument is `0`.

| | |
|---|---|
| **Parameters** | `a, b: number` — integers |
| **Returns** | `number` |
| **Throws** | `TypeError` if either argument is not a finite integer |

```javascript
Maths.lcm(4, 6); // 12
Maths.lcm(7, 0); // 0
```

---

### `Maths.clamp(value, min, max)` — Clamp

Constrains `value` to the range `[min, max]`.

| | |
|---|---|
| **Parameters** | `value, min, max: number` — finite numbers; `min ≤ max` |
| **Returns** | `number` |
| **Throws** | `TypeError` on non-finite inputs; `RangeError` if `min > max` |

```javascript
Maths.clamp(12, 0, 10);  // 10
Maths.clamp(-5, 0, 10);  // 0
Maths.clamp(7, 0, 10);   // 7
```

---

### `Maths.percentile(values, p)` — Percentile

Returns the value at the `p`th percentile of a dataset. The input array is not mutated.

| | |
|---|---|
| **Parameters** | `values: number[]` — non-empty array of finite numbers; `p: number` — 0–100 inclusive |
| **Returns** | `number` |
| **Throws** | `TypeError` if `values` is not an array or contains non-finite numbers; `RangeError` if `values` is empty or `p` is out of range |

```javascript
Maths.percentile([1, 2, 3, 4, 5], 90); // 5
Maths.percentile([10, 20, 30, 40], 50); // 30
```

---

### `Maths.distance(x1, y1, x2, y2)` — Euclidean Distance

Returns the straight-line distance between two 2D points.

| | |
|---|---|
| **Parameters** | `x1, y1, x2, y2: number` — finite numbers |
| **Returns** | `number` |
| **Throws** | `TypeError` on non-finite inputs |

```javascript
Maths.distance(0, 0, 3, 4); // 5
Maths.distance(1, 1, 4, 5); // 5
```

---

## Error handling

Maths.js validates all inputs and throws typed errors with descriptive messages instead of silently returning `NaN` or `undefined`.

| Error type | When it is thrown |
|---|---|
| `TypeError` | Non-numeric input, non-finite number, non-integer where integer required, or wrong argument type |
| `RangeError` | Empty input where values are required, `p` outside `[0, 100]`, `n < 0` for factorial, or `min > max` for clamp |

```javascript
try {
  Maths.avg();
} catch (e) {
  console.error(e instanceof RangeError, e.message);
  // true  "avg requires at least one numeric value."
}

try {
  Maths.factorial(-1);
} catch (e) {
  console.error(e instanceof RangeError, e.message);
  // true  "n must be a non-negative integer."
}
```

---

## Running tests

```sh
node --test Maths.test.js
```

Uses Node's built-in `node:test` runner — no additional dependencies required.

---

## Roadmap

Potential additions being considered:

| Method | Description |
|---|---|
| `variance(values)` | Population or sample variance |
| `stdDev(values)` | Standard deviation |
| `iqr(values)` | Interquartile range (Q3 − Q1) |
| `mad(values)` | Median absolute deviation |
| `nCr(n, r)` | Combinations (binomial coefficient) |
| `nPr(n, r)` | Permutations |
| `roundTo(value, decimals)` | Precision-safe rounding |
| `zScore(value, mean, stdDev)` | Standard score |
| `normalize(values)` | Min-max or z-score normalization |

Suggestions and contributions welcome — open an issue or PR on GitHub.

---

## Contributing

1. Fork the repository.
2. Make your changes in a feature branch.
3. Ensure `node --test Maths.test.js` passes.
4. Open a pull request with a clear description.

---

## License

MIT — see [LICENSE](LICENSE).

---

## Author

**Peter Benoit** — [peterbenoit.com](https://peterbenoit.com) · [GitHub](https://github.com/peterbenoit)

