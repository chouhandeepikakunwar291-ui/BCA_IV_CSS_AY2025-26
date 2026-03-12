// reduce array
const number = [1,2,3,4,5,6,7,8,9,10];
console.log("even number:"+ number);

const even =number.filter(num => num % 2==0);
console.log("even number:" + even);

const odds = number.filter(num => num % 2 != 0);
console.log("odd number: "+ odds);

const greaterThan5 = number.filter(num => 3 && num <= 7);
console.log("Number grater thaazn 5:" + greaterThan5);

const numberbetween3and7 = number.filter(num => num>= 3 && num <= 7);
console.log("Number between 3 and 7 are:" + numberbetween3and7);

const divisible = number.filter(num => num% 3 == 0);
console.log("Number divisible by 3 are:" + divisible);

//execise to use /combine filter() and reduce()

const maximum = number.reduce((acc,num) => acc >num ? acc :num);
console.log("maximum number in array is :" + maximum);

const transactions= [
    {type:"deposits",amount: 1000},
    {type:"withdraw",amount: 300},
    {type:"deposits",amount: 700},
    {type:"withdraw",amount: 100},
    {type:"deposits",amount: 2000},
    {type:"withdraw",amount: 1000},
    {type:"deposits",amount: 500},
];

const deposits = transactions.filter((transaction) => transaction.type==="deposits");
const total = deposits.reduce((acc,d) => acc + d.amount ,0);

const withdrawals = transactions.filter((t) => t.type==="deposits").reduce((sum,t) => sum + t.amount ,0);

console.log("total deposits = " + total);
console.log("total withdrawals = " + withdrawals);

// net balance......
const net = total - withdrawals;
console.log("net balance = " + net)

//cont the transactions by type

const transactioncounts = transactions.reduce((acc,t) => {
    acc[t.type] = (acc[t.type] || 0) +1; // acc["deposit"]=(acc["deposit"] ? acc["deposit"] :0) +1;
    return acc;
},{} );
console.log(transactioncounts);