---
title: Error Handling
description: Validation rules and thrown error types in Maths.js.
---

Maths.js validates inputs for safety and predictability.

## Error types

- `TypeError`: Thrown for invalid types, non-finite values, or non-integers where integers are required.
- `RangeError`: Thrown for empty collections where values are required, out-of-range parameters, or invalid bounds.

## Common cases

- `Maths.avg()` throws `RangeError` because at least one value is required.
- `Maths.factorial(2.5)` throws `TypeError` because `n` must be an integer.
- `Maths.factorial(-1)` throws `RangeError` because `n` must be non-negative.
- `Maths.percentile([1, 2, 3], 101)` throws `RangeError` because `p` must be between 0 and 100.
- `Maths.clamp(1, 10, 0)` throws `RangeError` because `min` must be less than or equal to `max`.
