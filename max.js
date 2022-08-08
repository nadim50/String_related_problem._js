//// Maximum number is find 


function cake_win(jim, dela, chinku) {
    if (jim > dela && jim > chinku) {
        console.log('Jim will topper her class . She will win cake.');
        return jim;
    }

    else if (dela > jim && dela > chinku) {
        console.log('Dela will topper her class . She will win cake.');
        return dela;
    }

    else {
        console.log('Chinku will topper her class . She will win cake.');
        return chinku;
    }

}

cake_win(65, 79, 99);
cake_win(98, 99, 78);
cake_win(87, 77, 86);
