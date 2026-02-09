# Quick Reference Guide - JavaScript Syntax Cheat Sheet

## 📋 Table of Contents
1. Variables & Types
2. Operators
3. Functions
4. Control Flow
5. Objects & Arrays
6. Useful Methods
7. Common Patterns

---

## 1️⃣ Variables & Types

```javascript
// Declaring variables
const name = "Priya";           // Constant (can't change)
let age = 20;                   // Variable (can change)
var oldWay = "Avoid this";      // Old style (avoid!)

// Check type
typeof name;                    // "string"
typeof age;                     // "number"
typeof true;                    // "boolean"

// Data types
let num = 42;                   // Number
let str = "Hello";              // String
let bool = true;                // Boolean
let empty = undefined;          // Undefined
let nothing = null;             // Null
let symbol = Symbol();          // Symbol
let big = 123n;                 // BigInt

// Type conversion
String(42);                     // "42"
Number("42");                   // 42
Boolean(0);                     // false
parseInt("42");                 // 42
parseFloat("3.14");             // 3.14
```

---

## 2️⃣ Operators

### Arithmetic
```javascript
10 + 5;          // 15 (addition)
10 - 5;          // 5 (subtraction)
10 * 5;          // 50 (multiplication)
10 / 5;          // 2 (division)
10 % 3;          // 1 (modulo - remainder)
2 ** 3;          // 8 (exponent - 2^3)
```

### Comparison
```javascript
5 === 5;         // true (strict equality)
5 == "5";        // true (loose equality - converts type)
5 !== "5";       // true (strict inequality)
5 > 3;           // true
5 >= 5;          // true
3 < 5;           // true
3 <= 5;          // true
```

### Logical
```javascript
true && true;    // true (AND - both true)
true || false;   // true (OR - at least one true)
!true;           // false (NOT - reverses)

// Short-circuit evaluation
false && alert("Won't run");
true || alert("Won't run");
```

### Assignment
```javascript
let x = 5;
x += 3;          // x = 8 (add and assign)
x -= 2;          // x = 6 (subtract and assign)
x *= 2;          // x = 12
x /= 3;          // x = 4
x %= 3;          // x = 1

// Increment/Decrement
x++;             // x = 2 (post-increment)
++x;             // x = 3 (pre-increment)
x--;             // x = 2
--x;             // x = 1
```

### Special
```javascript
typeof 5;        // "number"
null ?? "default";  // "default" (nullish coalescing)
obj?.prop;       // undefined if obj is null (optional chaining)
true ? "yes" : "no";  // "yes" (ternary conditional)
```

---

## 3️⃣ Functions

### Declaration
```javascript
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function (modern)
const multiply = (a, b) => {
    return a * b;
};

// Arrow function (short form)
const square = x => x * x;

// Calling functions
add(5, 3);       // 8
multiply(5, 3);  // 15
```

### Parameters & Arguments
```javascript
// Default parameters
function greet(name = "Guest") {
    return "Hello, " + name;
}
greet();         // "Hello, Guest"
greet("Priya");  // "Hello, Priya"

// Rest parameters
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
sum(1, 2, 3);    // 6
```

### Scope
```javascript
const global = "I'm global";

function test() {
    const local = "I'm local";
    console.log(global);  // ✓ Can access global
}

console.log(local);       // ✗ Error - local doesn't exist outside function
```

### Closures
```javascript
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
counter();       // 1
counter();       // 2
counter();       // 3
```

---

## 4️⃣ Control Flow

### if/else
```javascript
const age = 20;

if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teen");
} else {
    console.log("Child");
}
```

### switch
```javascript
const day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Other day");
}
```

### Loops

**for loop:**
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}
```

**while loop:**
```javascript
let i = 0;
while (i < 5) {
    console.log(i);  // 0, 1, 2, 3, 4
    i++;
}
```

**do-while loop:**
```javascript
let i = 0;
do {
    console.log(i);  // 0, 1, 2, 3, 4
    i++;
} while (i < 5);
```

**for-of loop (modern):**
```javascript
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit);
}
```

**forEach (with function):**
```javascript
const numbers = [1, 2, 3];
numbers.forEach(function(num) {
    console.log(num * 2);  // 2, 4, 6
});
```

---

## 5️⃣ Objects & Arrays

### Objects
```javascript
// Creating objects
const person = {
    name: "Priya",
    age: 20,
    city: "Indore"
};

// Accessing properties
person.name;         // "Priya" (dot notation)
person["age"];       // 20 (bracket notation)

// Modifying properties
person.age = 21;

// Adding properties
person.email = "priya@email.com";

// Removing properties
delete person.city;

// Methods (functions in objects)
const student = {
    name: "Rohan",
    greet: function() {
        return "Hello, " + this.name;
    }
};

student.greet();     // "Hello, Rohan"
```

### Arrays
```javascript
// Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "two", true, {name: "obj"}];

// Accessing elements
fruits[0];           // "apple"
fruits[1];           // "banana"
fruits.length;       // 3

// Modifying arrays
fruits[0] = "apricot";
fruits.push("grape");        // Add to end
fruits.pop();                // Remove from end
fruits.shift();              // Remove from start
fruits.unshift("papaya");    // Add to start

// Finding elements
fruits.includes("apple");    // true
fruits.indexOf("banana");    // 1

// Slicing arrays
fruits.slice(0, 2);          // First 2 elements
fruits.splice(1, 1);         // Remove 1 at index 1
```

### Array Methods (Higher-Order Functions)
```javascript
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
numbers.map(x => x * 2);     // [2, 4, 6, 8, 10]

// filter - keep elements that match condition
numbers.filter(x => x > 2);  // [3, 4, 5]

// reduce - combine into single value
numbers.reduce((sum, x) => sum + x, 0);  // 15

// find - get first matching element
numbers.find(x => x > 3);    // 4

// some - check if any match condition
numbers.some(x => x > 4);    // true

// every - check if all match condition
numbers.every(x => x > 0);   // true
```

---

## 6️⃣ Useful Methods

### String Methods
```javascript
const text = "JavaScript";

text.length;                 // 10
text.charAt(0);              // "J"
text.toUpperCase();          // "JAVASCRIPT"
text.toLowerCase();          // "javascript"
text.includes("Script");     // true
text.startsWith("Java");     // true
text.endsWith("Script");     // true
text.indexOf("Script");      // 4
text.substring(0, 4);        // "Java"
text.slice(4);               // "Script"
text.replace("Java", "Type"); // "TypeScript"
text.trim();                 // Remove whitespace
text.split("");              // ["J","a","v","a",...] (array of chars)
```

### Number Methods
```javascript
const num = 3.14159;

num.toFixed(2);              // "3.14"
num.toString();              // "3.14159"
Number.isInteger(3);         // true
Number.isNaN(NaN);           // true
Math.round(3.6);             // 4
Math.floor(3.9);             // 3
Math.ceil(3.1);              // 4
Math.abs(-5);                // 5
Math.min(1, 2, 3);           // 1
Math.max(1, 2, 3);           // 3
Math.random();               // 0.123... (random between 0-1)
Math.pow(2, 3);              // 8 (2^3)
Math.sqrt(9);                // 3
```

### Array Methods
```javascript
const arr = [1, 2, 3];

arr.length;                  // 3
arr.push(4);                 // [1,2,3,4] - add to end
arr.pop();                   // [1,2,3] - remove from end
arr.shift();                 // [2,3] - remove from start
arr.unshift(1);              // [1,2,3] - add to start
arr.includes(2);             // true
arr.indexOf(2);              // 1
arr.join("-");               // "1-2-3"
```

---

## 7️⃣ Common Patterns

### Validating Input
```javascript
function processAge(age) {
    // Check if empty
    if (!age) {
        console.log("Age is required");
        return;
    }
    
    // Check if valid number
    if (typeof age !== "number" || age < 0) {
        console.log("Age must be a positive number");
        return;
    }
    
    // Process
    console.log("Age is valid: " + age);
}
```

### Checking Multiple Conditions
```javascript
const canVote = age >= 18 && isCitizen && registered;
const needsHelp = isDisabled || isElderly || hasInjury;
const isSummer = month >= 6 && month <= 9;
```

### Default Values
```javascript
const name = userInput ?? "Guest";
const timeout = settings?.delay ?? 3000;
```

### Creating Objects with Loop
```javascript
const users = [];
for (let i = 1; i <= 3; i++) {
    users.push({
        id: i,
        name: "User" + i,
        active: true
    });
}
```

### Conditional Object Properties
```javascript
const status = isActive ? "online" : "offline";
const user = {
    name: "Priya",
    ...(isAdmin && { role: "admin" })
};
```

### Error Handling (Basic)
```javascript
try {
    // Code that might error
    const result = riskyFunction();
} catch (error) {
    console.log("Error: " + error.message);
} finally {
    console.log("Always runs");
}
```

---

## 🎯 Practice Exercises

### Exercise 1: Sum Array
```javascript
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// OR using reduce:
const sumArray = arr => arr.reduce((a, b) => a + b, 0);
```

### Exercise 2: Find Max
```javascript
function findMax(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
// OR using Math.max:
const findMax = arr => Math.max(...arr);
```

### Exercise 3: Count Occurrences
```javascript
function countOccurrences(arr, value) {
    let count = 0;
    for (const item of arr) {
        if (item === value) count++;
    }
    return count;
}
// OR using filter:
const countOccurrences = (arr, val) => 
    arr.filter(item => item === val).length;
```

### Exercise 4: Reverse String
```javascript
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
// OR using built-in methods:
const reverseString = str => str.split('').reverse().join('');
```

---

## 📌 Remember These!

| Rule | Example |
|------|---------|
| Use `===` not `==` | `5 === "5"` is false |
| Variables: `const > let > var` | Prefer `const` always |
| Comments explain "why" | `// Check if adult (age >= 18)` |
| Name variables clearly | `userData` not `x` |
| Test edge cases | `0, -1, "", null, undefined` |
| One function = one job | Split complex logic |
| DRY: Don't Repeat Yourself | Use loops and functions |

---

**Bookmark this! Reference it constantly while learning! 📚**
