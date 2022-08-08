
// Math function related problem

//// Use the absolute value  using math function

let num1 = 50, num2 = 59;

let dif = Math.abs(num1 - num2);


if (dif < 5) {
    console.log('You are firiends');

}

else {
    console.log('Yor are stay separate');
}

// find pow (x,y)


let x = Math.pow(4, 2);
console.log(x);


//// number round , cell , floor , random check

const n1 = Math.round(2.733);
console.log(n1);
const n2 = Math.ceil(3.333);
console.log(n2);
const n3 = Math.floor(5.3333);
console.log(n3);


// random 

console.log(Math.round((Math.random() * 6)));