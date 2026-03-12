---
title: API Reference
description: Methods available in Maths.js and how to use them.
---

All methods are available on the `Maths` object.

## Quick Start

```js
const Maths = require('@peterbenoit/mathsjs');

console.log(Maths.avg(10, 20, 30)); // 20
```

## Method Index

| Category | Methods |
| --- | --- |
| Aggregation | `avg`, `sum` |
| Statistics | `median`, `mode`, `range`, `percentile` |
| Number Theory | `factorial`, `gcd`, `lcm` |
| Utility | `clamp`, `distance` |

## Aggregation

### `avg(...values)`

Returns the arithmetic mean of input values.

| Item | Details |
| --- | --- |
| Parameters | `...values: number[]` (at least one finite number) |
| Returns | `number` |
| Throws | `RangeError` on empty input, `TypeError` on non-finite values |

**Example**

```js
Maths.avg(1, 2, 3, 4); // 2.5
```

### `sum(...values)`

Returns the total sum of input values.

| Item | Details |
| --- | --- |
| Parameters | `...values: number[]` |
| Returns | `number` |
| Throws | `TypeError` on non-finite values |

**Example**

```js
Maths.sum(1, 2, 3, 4); // 10
```

## Statistics

### `median(...values)`

Returns the median value.

| Item | Details |
| --- | --- |
| Parameters | `...values: number[]` (at least one finite number) |
| Returns | `number` |
| Throws | `RangeError` on empty input, `TypeError` on non-finite values |

**Example**

```js
Maths.median(9, 2, 7, 4); // 5.5
```

### `mode(...values)`

Returns an array of most frequent values, or `null` if no distinct mode exists.

| Item | Details |
| --- | --- |
| Parameters | `...values: number[]` (at least one finite number) |
| Returns | `number[] \| null` |
| Throws | `RangeError` on empty input, `TypeError` on non-finite values |

**Example**

```js
Maths.mode(1, 2, 2, 3); // [2]
Maths.mode(1, 1, 2, 2); // null
```

### `range(...values)`

Returns `max - min`.

| Item | Details |
| --- | --- |
| Parameters | `...values: number[]` (at least one finite number) |
| Returns | `number` |
| Throws | `RangeError` on empty input, `TypeError` on non-finite values |

**Example**

```js
Maths.range(1, 8, 3); // 7
```

### `percentile(values, p)`

Returns the value at percentile `p` where `p` is in [0, 100].

| Item | Details |
| --- | --- |
| Parameters | `values: number[]`, `p: number` |
| Returns | `number` |
| Throws | `RangeError` for empty input or invalid `p`, `TypeError` for invalid values |

**Example**

```js
Maths.percentile([1, 2, 3, 4, 5], 90); // 5
```

## Number Theory

### `factorial(n)`

Returns `n!` for non-negative integers.

| Item | Details |
| --- | --- |
| Parameters | `n: number` (non-negative integer) |
| Returns | `number` |
| Throws | `TypeError` for non-integer/non-finite `n`, `RangeError` for `n < 0` |

**Example**

```js
Maths.factorial(5); // 120
```

### `gcd(a, b)`

Returns the greatest common divisor of two integers.

| Item | Details |
| --- | --- |
| Parameters | `a: number`, `b: number` (integers) |
| Returns | `number` |
| Throws | `TypeError` for non-integer/non-finite inputs |

**Example**

```js
Maths.gcd(48, 18); // 6
```

### `lcm(a, b)`

Returns the least common multiple of two integers. Returns `0` if either input is `0`.

| Item | Details |
| --- | --- |
| Parameters | `a: number`, `b: number` (integers) |
| Returns | `number` |
| Throws | `TypeError` for non-integer/non-finite inputs |

**Example**

```js
Maths.lcm(4, 6); // 12
Maths.lcm(0, 6); // 0
```

## Utility

### `clamp(value, min, max)`

Constrains `value` to the inclusive range `[min, max]`.

| Item | Details |
| --- | --- |
| Parameters | `value: number`, `min: number`, `max: number` |
| Returns | `number` |
| Throws | `RangeError` if `min > max`, `TypeError` for non-finite inputs |

**Example**

```js
Maths.clamp(12, 0, 10); // 10
```

### `distance(x1, y1, x2, y2)`

Returns Euclidean distance between two 2D points.

| Item | Details |
| --- | --- |
| Parameters | `x1: number`, `y1: number`, `x2: number`, `y2: number` |
| Returns | `number` |
| Throws | `TypeError` for non-finite inputs |

**Example**

```js
Maths.distance(0, 0, 3, 4); // 5
```
