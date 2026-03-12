# Maths.js Documentation

## Introduction to Maths.js

**Maths.js** is a lightweight JavaScript library that adds a variety of statistical and utility functions. It is designed for developers who need convenient math helpers that are not available in the native `Math` object. The library is focused on simplicity and efficiency, providing frequently needed operations like calculating averages, medians, modes, and more.

Unlike other libraries such as [Math.js](https://github.com/josdejong/mathjs), which is very feature-rich and aimed at advanced mathematical operations, **Maths.js** focuses on being lightweight and providing just enough functionality through a standalone `Maths` object without adding unnecessary complexity or overhead. It is ideal for applications that need common mathematical operations without the bloat of a larger library.

### Why use Maths.js?
- **Lightweight**: Under 1kb compressed. Focuses on the most commonly needed mathematical functions, making it ideal for projects where performance and simplicity are key.
- **Simple Drop-In Object**: Exposes a standalone `Maths` object with helpers like average, median, factorial, and more.
- **Simple API**: Provides a straightforward and clean API without the need to learn a complex library structure.
- **Focused on Essentials**: Offers just enough to cover gaps in the native `Math` object without overwhelming the developer.

If your project doesn't require the advanced capabilities provided by comprehensive libraries like **Math.js**, but you still need a more complete set of basic math utilities, then **Maths.js** is a great fit. The methods provided here cover most of the common requirements in everyday development, such as statistical calculations and value transformations.

## Installation
Use npm:

```sh
npm install @peterbenoit/mathsjs
```

Then import it in Node/CommonJS:

```javascript
const Maths = require("@peterbenoit/mathsjs");
const average = Maths.avg(10, 20, 30);
console.log(average); // Output: 20
```

You can also clone or download it directly from GitHub:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/peterbenoit/Maths.js.git
   ```

2. **Include `Maths.js` in your project** and use the global `Maths` object:
   ```html
   <script src="path/to/Maths.js"></script>
   <script>
     const average = Maths.avg(10, 20, 30);
     console.log(average); // Output: 20
   </script>
   ```

## Methods

### Input Validation

Most methods validate inputs and throw helpful errors:

- `TypeError`: Non-numeric inputs, non-finite numbers, or non-integer values where integers are required.
- `RangeError`: Empty input for methods that require values, invalid bounds, or out-of-range parameters.

### 1. Average (`Maths.avg()`)
Calculates the **average** of the provided values. This is useful in many scenarios like statistical analysis, getting the center of data, etc.

**Example:**
```javascript
const average = Maths.avg(10, 20, 30);
console.log(average); // Output: 20
```

### 2. Sum (`Maths.sum()`)
Returns the **sum** of all provided values. Summation is a basic mathematical operation that's widely useful in calculations, whether it's financial sums or aggregating data.

**Example:**
```javascript
const total = Maths.sum(10, 20, 30);
console.log(total); // Output: 60
```

### 3. Median (`Maths.median()`)
Returns the **median** value of the provided set of numbers. The median is particularly useful in understanding central tendency when dealing with skewed data.

**Example:**
```javascript
const med = Maths.median(1, 3, 4, 2);
console.log(med); // Output: 3 (after sorting: 1, 2, 3, 4)
```

### 4. Mode (`Maths.mode()`)
Returns the **mode**, which is the most frequently occurring value(s) in a dataset. Useful for identifying commonalities in data or analyzing patterns.

**Examples:**
```javascript
const modeValue = Maths.mode(1, 2, 2, 3);
console.log(modeValue); // Output: [2]

const noMode = Maths.mode(1, 1, 2, 2);
console.log(noMode); // Output: null (no distinct mode)
```

### 5. Range (`Maths.range()`)
Returns the **range** of the provided values. The range helps understand the spread of the dataset by calculating the difference between the maximum and minimum values.

**Example:**
```javascript
const dataRange = Maths.range(1, 8, 3);
console.log(dataRange); // Output: 7 (8 - 1)
```

### 6. Factorial (`Maths.factorial()`)
Calculates the **factorial** of a number, which is the product of all positive integers up to that number. It is commonly used in permutations, combinations, and probability.

`n` must be a non-negative integer.

**Example:**
```javascript
const fact = Maths.factorial(5);
console.log(fact); // Output: 120
```

### 7. Greatest Common Divisor (`Maths.gcd()`)
Returns the **greatest common divisor** of two integers.

**Example:**
```javascript
const divisor = Maths.gcd(48, 18);
console.log(divisor); // Output: 6
```

### 8. Least Common Multiple (`Maths.lcm()`)
Returns the **least common multiple** of two integers.

If either input is `0`, the result is `0`.

**Example:**
```javascript
const multiple = Maths.lcm(4, 6);
console.log(multiple); // Output: 12
```

### 9. Clamp (`Maths.clamp()`)
Clamps a value between `min` and `max`.

`min` must be less than or equal to `max`.

**Example:**
```javascript
const clamped = Maths.clamp(12, 0, 10);
console.log(clamped); // Output: 10
```

### 10. Percentile (`Maths.percentile()`)
Returns the percentile value from an array of numbers.

- `values` must be a non-empty array of finite numbers.
- `p` must be between `0` and `100` (inclusive).
- The input array is not mutated.

**Example:**
```javascript
const p90 = Maths.percentile([1, 2, 3, 4, 5], 90);
console.log(p90); // Output: 5
```

### 11. Distance (`Maths.distance()`)
Returns the Euclidean distance between two 2D points.

**Example:**
```javascript
const d = Maths.distance(0, 0, 3, 4);
console.log(d); // Output: 5
```

## Future TODOs

Potential next functions to add to Maths.js:

- `variance(values, options)` - Population/sample variance.
- `stdDev(values, options)` - Standard deviation built on variance.
- `quantile(values, q)` - Generalized percentile for quartiles and custom quantiles.
- `iqr(values)` - Interquartile range (`Q3 - Q1`).
- `mad(values)` - Median absolute deviation for robust spread analysis.
- `nCr(n, r)` - Combinations (binomial coefficient).
- `nPr(n, r)` - Permutations.
- `roundTo(value, decimals)` - Precision-safe rounding helper.
- `zScore(value, mean, stdDev)` - Standard score.
- `normalize(values, options)` - Common normalization strategies (min-max or z-score).

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request on GitHub. Make sure to follow the project's code of conduct.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors
- **Peter Benoit** - _Creator of Maths.js library_ - [GitHub Profile](https://github.com/peterbenoit)

## Acknowledgments
- Hat tip to anyone whose code or suggestions were used.
- Inspiration from existing math libraries like **Math.js**.

## Issues & Support
If you encounter any problems, please feel free to open an issue on GitHub. We are also open to suggestions for additional features or improvements.

## Stay Updated
To stay updated with new features and releases, please star the repository on GitHub!

Happy coding!

