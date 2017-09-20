# Arrays

![from f to a boom!](images/from-f-to-a-boom.jpg)

```javascript
function f1() { console.log(1) }
function f2() { console.log(2) }
function f3() { console.log(3) }

var a = [f1, f2, f3];

a.f1(); // err!

a[0].f1(); // err!

a[0](); // correct!

var b = [a];

b.length;

b[0][1](); // f2 in a from b

var c = [{ d: b }];

c.d[0][2](); // f3 in a from c --> but error!

c[0].d[0][2](); // good!

var f = { g: { h: c } };

f.g.h[0].d[0][0](); // f1 in a from f
```

