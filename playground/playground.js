const john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],

    calcTips: function() {
        let tips = [];
        let totals = [];
        for (let i = 0; i < this.bills.length; ++i) {
            const bill = this.bills[i];
            switch(true) {
                case bill < 50:
                    tips.push(bill * 0.2);
                    break;
                case bill < 200:
                    tips.push(bill * 0.15);
                    break;
                default:
                    tips.push(bill * 0.1);
            }

            totals.push(bill + tips[i]);
        }

        this.tips = tips;
        this.totals = totals;
    }
}

john.calcTips();
console.log(john);

const mark = {
    fullName: 'Mark Miller',
    bills: [77, 375, 110, 45],

    calcTips: function() {
        let tips = [];
        let totals = [];
        for (let i = 0; i < this.bills.length; ++i) {
            const bill = this.bills[i];
            switch(true) {
                case bill < 100:
                    tips.push(bill * 0.2);
                    break;
                case bill < 300:
                    tips.push(bill * 0.1);
                    break;
                default:
                    tips.push(bill * 0.25);
            }

            totals.push(bill + tips[i]);
        }

        this.tips = tips;
        this.totals = totals;
    }
}

mark.calcTips();
console.log(mark);

const avgTips = tips => tips.reduce((sum, val) => sum + val, 0) / tips.length;

console.log(avgTips(john.tips));
console.log(avgTips(mark.tips));
