---
title: Node Usage
description: Use Maths.js in Node.js via npm.
---

## Install

```bash
npm install @peterbenoit/mathsjs
```

## Import in CommonJS

```js
const Maths = require('@peterbenoit/mathsjs');

const stats = {
  sum: Maths.sum(1, 2, 3, 4),
  median: Maths.median(9, 2, 7, 4),
  gcd: Maths.gcd(48, 18)
};

console.log(stats);
```

## Error handling example

```js
try {
  Maths.factorial(-1);
} catch (error) {
  console.error(error.message);
}
```
