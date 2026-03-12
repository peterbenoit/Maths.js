---
title: Getting Started
description: Install Maths.js and run your first calculations.
---

Maths.js gives you practical statistics and numeric helpers without a heavyweight dependency.

## Install

```bash
npm install @peterbenoit/mathsjs
```

## Use in Node

```js
const Maths = require('@peterbenoit/mathsjs');

console.log(Maths.avg(10, 20, 30)); // 20
console.log(Maths.median(1, 3, 2)); // 2
```

## Use in Browser

```html
<script src="/path/to/Maths.js"></script>
<script>
	console.log(Maths.sum(1, 2, 3)); // 6
</script>
```

## Next Steps

- Continue with Browser Usage for script-tag patterns.
- Continue with Node Usage for package-based usage.
- Check API Reference for all methods and signatures.
