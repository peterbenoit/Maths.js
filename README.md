# Maths.js Documentation

## Introduction to Maths.js

**Maths.js** is a lightweight JavaScript library that extends the basic mathematical capabilities of JavaScript by adding a variety of statistical and utility functions. It is designed for developers who need more convenient and specialized math functions that are not available in the native `Math` object. The library is focused on simplicity and efficiency, providing frequently needed operations like calculating averages, medians, modes, and more.

Unlike other libraries such as **Math.js**, which is very feature-rich and aimed at advanced mathematical operations, **Maths.js** focuses on being lightweight and providing just enough functionality to enhance the built-in `Math` object without adding unnecessary complexity or overhead. It is ideal for applications that need common mathematical operations without the bloat of a larger library.

### Why use Maths.js?

-   **Lightweight**: Focuses on the most commonly needed mathematical functions, making it ideal for projects where performance and simplicity are key.
-   **Extend Native Math**: Extends the `Math` object in a non-invasive way, offering functions like average, median, factorial, etc., which are surprisingly missing from JavaScript's native offerings.
-   **Simple API**: Provides a straightforward and clean API without the need to learn a complex library structure.
-   **Focused on Essentials**: Offers just enough to cover gaps in the native `Math` object without overwhelming the developer.

If your project doesn't require the advanced capabilities provided by comprehensive libraries like **Math.js**, but you still need a more complete set of basic math utilities, then **Maths.js** is a great fit. The methods provided here cover most of the common requirements in everyday development, such as statistical calculations and value transformations.

## Installation

To use Maths.js in your project, simply add it via npm or yarn:

```sh
npm install maths-js
```

or

```sh
yarn add maths-js
```

Alternatively, you can include it via a CDN in your HTML file:

```html
<script src="https://your-cdn-link/maths.js"></script>
```

## Usage

Here is how you can start using Maths.js in your project:

```javascript
import Maths from 'maths-js';

const average = Maths.avg(10, 20, 30);
console.log(average); // Output: 20
```

## Methods

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

**Example:**

```javascript
const fact = Maths.factorial(5);
console.log(fact); // Output: 120
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request on GitHub. Make sure to follow the project's code of conduct.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

-   **Your Name** - _Initial work_ - [Your GitHub Profile](https://github.com/yourusername)

## Acknowledgments

-   Hat tip to anyone whose code or suggestions were used.
-   Inspiration from existing math libraries like **Math.js**.

## Issues & Support

If you encounter any problems, please feel free to open an issue on GitHub. We are also open to suggestions for additional features or improvements.

## Stay Updated

To stay updated with new features and releases, please star the repository on GitHub!

Happy coding!
