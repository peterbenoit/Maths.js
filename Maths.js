// Maths.js Library
const Maths = (function () {
	function assertAtLeastOne(values, fnName) {
		if (values.length === 0) {
			throw new RangeError(`${fnName} requires at least one numeric value.`);
		}
	}

	function assertAllFiniteNumbers(values, fnName) {
		if (!values.every(value => Number.isFinite(value))) {
			throw new TypeError(`${fnName} accepts only finite numbers.`);
		}
	}

	function assertFiniteNumber(value, name) {
		if (!Number.isFinite(value)) {
			throw new TypeError(`${name} must be a finite number.`);
		}
	}

	function assertInteger(value, name) {
		if (!Number.isInteger(value)) {
			throw new TypeError(`${name} must be an integer.`);
		}
	}

	// Average of numbers
	function avg(...values) {
		assertAtLeastOne(values, "avg");
		assertAllFiniteNumbers(values, "avg");
		return values.reduce((sum, value) => sum + value, 0) / values.length;
	}

	// Sum of numbers
	function sum(...values) {
		assertAllFiniteNumbers(values, "sum");
		return values.reduce((sum, value) => sum + value, 0);
	}

	// Median of numbers
	function median(...values) {
		assertAtLeastOne(values, "median");
		assertAllFiniteNumbers(values, "median");
		const sortedValues = [...values].sort((a, b) => a - b);
		const middle = Math.floor(sortedValues.length / 2);
		return sortedValues.length % 2 !== 0
			? sortedValues[middle]
			: (sortedValues[middle - 1] + sortedValues[middle]) / 2;
	}

	// Mode of numbers
	function mode(...values) {
		assertAtLeastOne(values, "mode");
		assertAllFiniteNumbers(values, "mode");
		const frequency = {};
		values.forEach(value => (frequency[value] = (frequency[value] || 0) + 1));
		const counts = Object.values(frequency);
		if (new Set(counts).size === 1) {
			return null;
		}
		let maxFreq = 0;
		let modeValues = [];
		for (let key in frequency) {
			if (frequency[key] > maxFreq) {
				modeValues = [Number(key)];
				maxFreq = frequency[key];
			} else if (frequency[key] === maxFreq) {
				modeValues.push(Number(key));
			}
		}
		return modeValues;
	}

	// Range of numbers
	function range(...values) {
		assertAtLeastOne(values, "range");
		assertAllFiniteNumbers(values, "range");
		return Math.max(...values) - Math.min(...values);
	}

	// Factorial of a number
	function factorial(n) {
		assertFiniteNumber(n, "n");
		assertInteger(n, "n");
		if (n < 0) {
			throw new RangeError("n must be a non-negative integer.");
		}
		if (n === 0 || n === 1) return 1;
		let result = 1;
		for (let i = 2; i <= n; i++) {
			result *= i;
		}
		return result;
	}

	// Greatest Common Divisor
	function gcd(a, b) {
		assertFiniteNumber(a, "a");
		assertFiniteNumber(b, "b");
		assertInteger(a, "a");
		assertInteger(b, "b");
		a = Math.abs(a);
		b = Math.abs(b);
		while (b !== 0) {
			[a, b] = [b, a % b];
		}
		return a;
	}

	// Least Common Multiple
	function lcm(a, b) {
		assertFiniteNumber(a, "a");
		assertFiniteNumber(b, "b");
		assertInteger(a, "a");
		assertInteger(b, "b");
		if (a === 0 || b === 0) {
			return 0;
		}
		return Math.abs(a * b) / gcd(a, b);
	}

	// Clamp a value between min and max
	function clamp(value, min, max) {
		assertFiniteNumber(value, "value");
		assertFiniteNumber(min, "min");
		assertFiniteNumber(max, "max");
		if (min > max) {
			throw new RangeError("min must be less than or equal to max.");
		}
		return Math.max(min, Math.min(max, value));
	}

	// Percentile of a sorted array
	function percentile(values, p) {
		if (!Array.isArray(values)) {
			throw new TypeError("values must be an array of finite numbers.");
		}
		assertAtLeastOne(values, "percentile");
		assertAllFiniteNumbers(values, "percentile");
		assertFiniteNumber(p, "p");
		if (p < 0 || p > 100) {
			throw new RangeError("p must be between 0 and 100 (inclusive).");
		}
		const sortedValues = [...values].sort((a, b) => a - b);
		if (p === 0) {
			return sortedValues[0];
		}
		const index = Math.ceil((p / 100) * sortedValues.length) - 1;
		return sortedValues[index];
	}

	// Distance between two points (2D)
	function distance(x1, y1, x2, y2) {
		assertFiniteNumber(x1, "x1");
		assertFiniteNumber(y1, "y1");
		assertFiniteNumber(x2, "x2");
		assertFiniteNumber(y2, "y2");
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
		distance
	};
})();
