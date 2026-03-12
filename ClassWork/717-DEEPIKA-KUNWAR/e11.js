// Program to check leap year

function isleapyear(year){
    if (year % 400 === 0){
        return true;
    }
    else if(year % 100 === 0){
        return false;
    }else if(year % 4 === 0){
        return true;
    }else
        return false;
}

console.log("year 2000 a leap year ? " + isleapyear(2000));
console.log("year 2000 a leap year ? " + isleapyear(2025));