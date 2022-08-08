

const a = [23, 42, 45, 67, 32, 12, 97, 28, 92, 98, 38];
/// slice element
const b = a.splice(2, 3);

console.log(b);
console.log(a);
/// add element
const c = b.splice(2, 3, 999, 345, 333);

console.log(c);