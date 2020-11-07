var User = require('./User');

var testUser1 = new User("Jimmy", new Date("1994-09/19"))
var testUser2 = new User("Dipo", new Date("2000/3/2"))
var testUser3 = new User("Lope", new Date("1990/12/30"))

test('getAge() returns correct age', () => {
  expect(testUser1.getAge()).toBe(26);
  expect(testUser2.getAge()).toBe(20);
  expect(testUser3.getAge()).toBe(29);
});

test('getNextBirthday() returns correct date ', () => {
  expect(testUser1.getNextBirthday().toDateString()).toBe("Sun Sep 19 2021");
  expect(testUser2.getNextBirthday().toDateString()).toBe("Tue Mar 02 2021");
  expect(testUser3.getNextBirthday().toDateString()).toBe("Wed Dec 30 2020");
});

