
class User {

    constructor(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.JS_MONTH_OFFSET = 1; // Date.getMonth() ranges from (0-11), offset takes this into consideration
    }
    getAge() {
        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth() + this.JS_MONTH_OFFSET;
        let userBornYear = this.dateOfBirth.getFullYear();
        let userBornMonth = this.dateOfBirth.getMonth() + this.JS_MONTH_OFFSET;

        if (currentYear > userBornYear && userBornMonth > currentMonth) {
            return currentYear - userBornYear - this.JS_MONTH_OFFSET;
        }
        return currentYear - userBornYear;
    }
    getNextBirthday() {
        
        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth() + this.JS_MONTH_OFFSET;
        let currentDay = new Date().getDate();
        let userBornMonth = this.dateOfBirth.getMonth() + this.JS_MONTH_OFFSET;
        let userBornDay = this.dateOfBirth.getDate();

        if (userBornMonth >= currentMonth && currentDay < userBornDay) {
            return new Date(`${currentYear}-${userBornMonth}-${userBornDay}`);
        }
        return new Date(`${currentYear + 1}-${userBornMonth}-${userBornDay}`);     
    }

}

module.exports = User;
