
function reverse_word(st) {


    let split1 = st.split(' ');


    let concating = [];

    for (let i = split1.length - 1; i >= 0; i--) {
        let element = split1[i];
        concating.push(element);


    }

    const reverse = concating.join(' ');
    return reverse;

}

let string = 'Nadim is bad boy';
let reverse1 = reverse_word(string);

console.log(reverse1);