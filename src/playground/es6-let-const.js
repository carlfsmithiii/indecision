var nameVar = 'Andrew';
var nameVar = 'Carl';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Hal';
    return petName;
}

getPetName();

var fullName = 'Carl Smith';

if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}