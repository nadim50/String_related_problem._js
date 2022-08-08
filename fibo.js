
// declare 1st and 2nd vlaue 
const a = [0, 1];

for (let i = 2; i <= 12; i++) {
    a[i] = a[i - 1] + a[i - 2];

}

console.log(a);