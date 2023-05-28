let firstName = 'Valerii'
let lastName =  'Gromov'
let literalFullName = `${firstName} ${lastName}`
console.log(literalFullName)


let sideA = '6'
let sideB = '3'
let squareRectangle = sideA * sideB
console.log(squareRectangle)


Math.pow(10,6);
console.log(Math.pow(10, 6));

console.log(Math.floor(Math.random()*50));


let num = 3
num >=0 ? console.log('positive value'): console.log('negative value')


let text  = "it's may nov"
 if (text.length > 1) console.log(text.charAt(text.length-2))

 
let month = 3
switch (month) {
    case 1: console.log('January');
    break;
    case 2: console.log('Fabruary');
    break;
    case 3: console.log('March');
    break; 
    case 4: console.log('April');
    break;
    case 5: console.log('May');
    break;
    case 6: console.log('June');
    break;
    case 7: console.log('July');
    break;
    case 8: console.log('August');
    break;
    case 9: console.log('September');
    break;
    case 10: console.log('October');
    break;
    case 11: console.log('November');
    break;
    case 12: console.log('December');
    break;
    default: console.log('Don\'t exist');
}

 
let password = 'dfhh@hjjg'
if (password.length > 5)
if (password.includes('@') === true) console.log('this password is strong')
 

let numA = 3
let numB = 9
let sum = numA + numB
if (typeof sum === 'number') console.log(sum)
else console.log('Sum of those items cant\'t be counted')


let textOne= 'hello'
let textTwo= 'bye'
if (textOne.length === textTwo.length) console.log('those items are strings and they\'re equal')
else console.log('items are not compareble')


 