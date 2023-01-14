const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
console.log(sum(7,3))
return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 1.2;
console.log(sum(7,3))
return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0064;
console.log(sum(7,3))
return valueInPound;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }