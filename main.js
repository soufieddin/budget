'use strict';
let money = +prompt("What's your budget for the month?", ''),
    date = prompt("Enter the date in format YYYY-MM-DD", '');

let appData = {
    budget: money,
    expenses: {},
    income: [],
    timeData: date,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let q = prompt("Please enter a required expense item this month", ''),
        a = prompt("Please enter the needed amount of money for this item");

    if ((typeof (q)) === 'string' && (typeof (q)) != null && (typeof (a)) != null && q != '' && a != '' && q.length < 50) {
        console.log("done");
        appData.expenses[q] = a;
    } else {
        i = i - 1;
    }
}

appData.moneyPerDay = appData.budget / 30;




alert("Daily budget: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Minimum level");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 300) {
    console.log("Middle level");
} else if (appData.moneyPerDay > 300) {
    console.log("High level");
} else {
    console.log("fault");
}