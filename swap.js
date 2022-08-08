/// swapping 


let n1 = 30, n2 = 53;

console.log(n1, n2);

let t1 = n1;
n1 = n2;
n2 = t1;

console.log(n1, n2);


/// Other Method destructing 

[n1, n2] = [n2, n1];
console.log(n1, n2);