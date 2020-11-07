var User = require('./User');

const testDates = [
new Date(1986, 0, 1),
new Date(1988, new Date().getMonth(), new Date().getDate()),
new Date(1990,11,30),]

console.log("===== ages ===== ");
testDates.forEach(element => {
    console.log(`#${element} => #${new User("Test",element).getAge()}`);
});

console.log("===== birthday ===== ");
testDates.forEach(element => {
    console.log(`#${element} => #${new User("Test",element).getNextBirthday()}`);
});

