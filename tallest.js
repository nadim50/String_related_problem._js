
////  Tallest nuber check


function tallest_check(number) {
    let largest = number[0];

    for (let i = 0; i <= number.length; i++) {


        const element = number[i];

        if (element > largest) {
            largest = element;
        }

    }

    return largest;
}


const tall = [34, 44, 31, 278, 23, 98, 30];
let tallest = tallest_check(tall);

console.log('Largest num is : ', tallest);
