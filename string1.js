

const string12 = 'rahaT blaO aso';
const string11 = 'raHat blao asO';

const string = string11.toUpperCase();
const string1 = string12.toUpperCase();

///// kono alphabet asay kina "R"
const s1 = string.includes('R');
console.log(s1);

/// index searching 
const s2 = string11.indexOf('as');
console.log(s2);

/// kono ki diya suru seta check korer jonno 
const s3 = string11.startsWith('ra');
console.log(s3);

/// Kono ki diya ses seta chech korer jonno 
const s4 = string12.endsWith('o');
console.log(s4);

// compare 2 string
if (string === string1) {
    console.log("name is equal");
}

else {
    console.log("Name is not equal");
}

