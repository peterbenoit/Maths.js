const test = require("node:test");
const assert = require("node:assert/strict");
const Maths = require("./Maths.js");

test("sum computes totals", () => {
	assert.equal(Maths.sum(1, 2, 3, 4), 10);
	assert.equal(Maths.sum(), 0);
});

test("avg computes mean and rejects empty input", () => {
	assert.equal(Maths.avg(2, 4, 6), 4);
	assert.throws(() => Maths.avg(), /at least one numeric value/);
});

test("median computes odd/even medians and rejects empty input", () => {
	assert.equal(Maths.median(3, 1, 2), 2);
	assert.equal(Maths.median(1, 2, 3, 4), 2.5);
	assert.throws(() => Maths.median(), /at least one numeric value/);
});

test("mode returns values or null for no distinct mode", () => {
	assert.deepEqual(Array.from(Maths.mode(1, 2, 2, 3)), [2]);
	assert.equal(Maths.mode(1, 1, 2, 2), null);
	assert.throws(() => Maths.mode(), /at least one numeric value/);
});

test("range computes spread and rejects empty input", () => {
	assert.equal(Maths.range(5, 10, 2), 8);
	assert.throws(() => Maths.range(), /at least one numeric value/);
});

test("factorial validates input and computes correctly", () => {
	assert.equal(Maths.factorial(0), 1);
	assert.equal(Maths.factorial(5), 120);
	assert.throws(() => Maths.factorial(-1), /non-negative integer/);
	assert.throws(() => Maths.factorial(2.5), /must be an integer/);
});

test("gcd handles signs and integer validation", () => {
	assert.equal(Maths.gcd(-4, 6), 2);
	assert.equal(Maths.gcd(0, 0), 0);
	assert.throws(() => Maths.gcd(4.2, 6), /must be an integer/);
});

test("lcm handles zeros, signs, and validation", () => {
	assert.equal(Maths.lcm(0, 0), 0);
	assert.equal(Maths.lcm(-4, 6), 12);
	assert.equal(Maths.lcm(4, 6), 12);
	assert.throws(() => Maths.lcm(4, 2.5), /must be an integer/);
});

test("clamp enforces bounds and numeric input", () => {
	assert.equal(Maths.clamp(10, 0, 5), 5);
	assert.equal(Maths.clamp(-2, 0, 5), 0);
	assert.equal(Maths.clamp(3, 0, 5), 3);
	assert.throws(() => Maths.clamp(3, 5, 0), /min must be less than or equal to max/);
});

test("percentile validates p and avoids mutating source array", () => {
	const values = [3, 1, 2];
	assert.equal(Maths.percentile(values, 0), 1);
	assert.equal(Maths.percentile(values, 50), 2);
	assert.equal(Maths.percentile(values, 100), 3);
	assert.deepEqual(values, [3, 1, 2]);
	assert.throws(() => Maths.percentile(values, -1), /between 0 and 100/);
	assert.throws(() => Maths.percentile(values, 101), /between 0 and 100/);
});

test("distance computes euclidean distance", () => {
	assert.equal(Maths.distance(0, 0, 3, 4), 5);
	assert.throws(() => Maths.distance(0, 0, Infinity, 1), /must be a finite number/);
});
