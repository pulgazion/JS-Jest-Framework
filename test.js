test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')
    
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 127.9 yen", function(){

    const { fromDollarToYen } = require('./app.js')
    
    expect(fromDollarToYen (3.5)).toBe(4.2); //3.5 dolares deberian ser = (3.5 * 1.2)
})

test("One dollar should be 127.9 yen", function(){

    const { fromYenToPound } = require('./app.js')
    
    expect(fromYenToPound (3.5)).toBe(0.0224); // 3.5 yen seria a libras = (3.5 * 0.0064)
})
