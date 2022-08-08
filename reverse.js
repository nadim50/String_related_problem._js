
function reverse_string(st) {

    let reverse = ' ';

    for (let i = st.length - 1; i >= 0; i--) {
        const element = st[i];
        reverse = reverse + element;
    }

    return reverse;

}

let string = 'I am a good boy';

console.log(reverse_string(string));