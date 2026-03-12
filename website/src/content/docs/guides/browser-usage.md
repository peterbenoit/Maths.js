---
title: Browser Usage
description: Use Maths.js in browser apps with a script tag.
---

## Add the script

```html
<script src="/path/to/Maths.js"></script>
```

## Use the global `Maths` object

```html
<script>
  console.log(Maths.avg(12, 18, 24)); // 18
  console.log(Maths.clamp(42, 0, 10)); // 10
  console.log(Maths.distance(0, 0, 3, 4)); // 5
</script>
```

## Notes

- Load `Maths.js` before your app script.
- Methods throw errors for invalid input; use `try/catch` if inputs are untrusted.
