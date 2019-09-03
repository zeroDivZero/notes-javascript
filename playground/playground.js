function calcBMI() {
    const bmi = this.mass / (this.height * this.height);
    this.bmi = bmi;
    return bmi;
}

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: calcBMI
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: calcBMI
}

if (mark.calcBMI() < john.calcBMI()) {
    console.log(mark.fullName + '\'s BMI (' + mark.bmi + ') is lower than ' + john.fullName + '\'s BMI (' + john.bmi + ').');
} else if (john.bmi < mark.bmi) {
    console.log(john.fullName + '\'s BMI (' + john.bmi + ') is lower than ' + mark.fullName + '\'s BMI (' + mark.bmi + ').');
} else {
    console.log(mark.fullName + ' and ' + john.fullName + ' both have the same BMI (' + mark.bmi + ').');
}
