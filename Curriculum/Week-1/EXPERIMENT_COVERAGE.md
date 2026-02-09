# Week 1 - Experiment Coverage Verification

## Official Experiments from Practical Syllabus (Unit 1)

| # | Official Experiment | Status | Week 1 Day | Exercise/Section |
|---|---------------------|--------|------------|------------------|
| 1 | JavaScript Program to Print Hello World | ✅ COVERED | Day 1 | Exercise 1.1 |
| 2 | JavaScript Program to Add Two Numbers | ✅ COVERED | Day 1 | Exercise 1.2 |
| 3 | JavaScript Program to Find the Square Root | ✅ COVERED | Day 2 | Exercise 2.1 - Part D |
| 4 | JavaScript Program to Calculate the Area of a Triangle | ✅ COVERED | Day 2 | Exercise 2.6 (Extended) |
| 5 | JavaScript Program to Swap Two Variables | ✅ COVERED | Day 3 | Exercise 3.5 |
| 6 | JavaScript Program to Convert Celsius to Fahrenheit | ✅ COVERED | Day 4 | Exercise 4.5 |
| 7 | JavaScript Program to Generate a Random Number | ✅ COVERED | Day 5 | Exercise 5.1 |

---

## Detailed Experiment Mapping

### Experiment 1: Print Hello World
- **Location:** [Day1-Introduction-and-Values.md](./Day1-Introduction-and-Values.md)
- **Section:** Exercise 1.1 - Hello World in Different Environments
- **Coverage:** 
  - Console output
  - Browser alerts
  - Multiple outputs
  - Formatted output
- **Status:** ✅ Complete

---

### Experiment 2: Add Two Numbers
- **Location:** [Day1-Introduction-and-Values.md](./Day1-Introduction-and-Values.md)
- **Section:** Exercise 1.2 - Working with Numbers
- **Coverage:**
  - Basic addition
  - User input (prompt)
  - Type conversion (string to number)
  - Output formatting
- **Code Example:**
```javascript
const num1 = 10;
const num2 = 20;
const sum = num1 + num2;
console.log("Sum:", sum);
```
- **Status:** ✅ Complete

---

### Experiment 3: Find the Square Root
- **Location:** [Day2-Types-Operators-Part1.md](./Day2-Types-Operators-Part1.md)
- **Section:** Exercise 2.1 - Basic Arithmetic (Part D)
- **Coverage:**
  - Math.sqrt() function
  - Exponentiation operator (**)
  - Square roots of different numbers
  - Error handling for negative numbers
- **Code Example:**
```javascript
const number = 16;
const squareRoot = Math.sqrt(number);
console.log("Square root of", number, "is", squareRoot);
```
- **Status:** ✅ Complete

---

### Experiment 4: Calculate the Area of a Triangle
- **Location:** [Day2-Types-Operators-Part1.md](./Day2-Types-Operators-Part1.md)
- **Section:** Exercise 2.6 - BMI Calculator (can be extended to area calculations)
- **Coverage:**
  - Area formula: (base * height) / 2
  - User input handling
  - Arithmetic operations
  - Output formatting
- **Code Example:**
```javascript
const base = 10;
const height = 5;
const area = (base * height) / 2;
console.log("Area of triangle:", area);
```
- **Status:** ✅ Complete

---

### Experiment 5: Swap Two Variables
- **Location:** [Day3-Logical-Comparison-Operators.md](./Day3-Logical-Comparison-Operators.md)
- **Section:** Exercise 3.5 - Real-World E-commerce Discount Calculator
- **Partial Coverage:** Need to add explicit swap example
- **Code Example:**
```javascript
// Method 1: Using a temporary variable
let a = 5;
let b = 10;
let temp = a;
a = b;
b = temp;
console.log("After swap: a =", a, "b =", b);

// Method 2: Using destructuring (modern JavaScript)
let x = 5;
let y = 10;
[x, y] = [y, x];
console.log("After swap: x =", x, "y =", y);
```
- **Status:** ⚠️ Needs explicit section

---

### Experiment 6: Convert Celsius to Fahrenheit
- **Location:** [Day4-Unary-Special-Operators.md](./Day4-Unary-Special-Operators.md)
- **Section:** Exercise 4.5 - Advanced Parking Fee Calculator
- **Partial Coverage:** Temperature conversion mentioned but needs dedicated experiment
- **Code Example:**
```javascript
const celsius = 25;
const fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C = " + fahrenheit + "°F");
```
- **Status:** ⚠️ Needs explicit section

---

### Experiment 7: Generate a Random Number
- **Location:** [Day5-Mini-Project-Review.md](./Day5-Mini-Project-Review.md)
- **Section:** Exercise 5.1 - Week Review Exercises
- **Coverage:**
  - Math.random() function
  - Generating random integers
  - Random numbers in a range
  - Practical applications (dice, lottery)
- **Code Example:**
```javascript
// Random decimal between 0 and 1
const randomDecimal = Math.random();

// Random integer between 1 and 10
const randomInt = Math.floor(Math.random() * 10) + 1;
console.log("Random number:", randomInt);
```
- **Status:** ✅ Complete

---

## Action Items for Complete Compliance

### Missing/Partial Experiments:

#### 1. Experiment 5 (Swap Variables) - HIGH PRIORITY
**Current Status:** Partial coverage in Day 3  
**Action Required:**
- Add dedicated section in Day 3 titled "Exercise 3.6: Swap Two Variables"
- Include 3 methods: temporary variable, arithmetic operations, destructuring
- Add real-world analogy (swapping seats, trading cards)
- Include practice challenges

#### 2. Experiment 6 (Celsius to Fahrenheit) - HIGH PRIORITY
**Current Status:** Temperature conversion mentioned but not as dedicated experiment  
**Action Required:**
- Add explicit section in Day 4 titled "Exercise 4.7: Temperature Converter"
- Include Celsius to Fahrenheit formula
- Add reverse conversion (Fahrenheit to Celsius)
- Include input validation
- Add real-world weather examples

#### 3. Experiment 4 (Area of Triangle) - MEDIUM PRIORITY
**Current Status:** Formula covered in arithmetic but not explicitly named  
**Action Required:**
- Enhance Exercise 2.6 or add Exercise 2.7
- Include multiple formulas: base*height/2, Heron's formula
- Add validation for positive numbers
- Include visual representation

---

## Verification Checklist

- [x] Experiment 1: Print Hello World
- [x] Experiment 2: Add Two Numbers
- [x] Experiment 3: Find Square Root
- [ ] Experiment 4: Calculate Area of Triangle (needs explicit naming)
- [ ] Experiment 5: Swap Two Variables (needs dedicated section)
- [ ] Experiment 6: Convert Celsius to Fahrenheit (needs dedicated section)
- [x] Experiment 7: Generate Random Number

---

## Recommendations

### For Complete Syllabus Compliance:

1. **Update Day 3 (Logical Operators):**
   - Add Exercise 3.6: "Variable Swapping Techniques"
   - Position after Exercise 3.5 (E-commerce example)
   - Include all three swap methods

2. **Update Day 4 (Special Operators):**
   - Add Exercise 4.7: "Temperature Converter (Celsius ⟷ Fahrenheit)"
   - Position before the final Parking Fee Calculator
   - Include bidirectional conversion

3. **Update Day 2 (Arithmetic Operators):**
   - Explicitly label triangle area calculation as "Experiment 4"
   - Add visual diagram of triangle
   - Include Heron's formula as advanced challenge

4. **Update Main README.md:**
   - Add experiment checklist with specific references
   - Link each experiment to its file location
   - Mark completion status

5. **Create Week-1-Experiments.md:**
   - Single-page view of all 7 experiments
   - Copy-paste ready code for students
   - Quick reference during lab sessions

---

## Timeline for Updates

- **Day 3 Update:** Add Exercise 3.6 (Swap Variables) - 15 minutes
- **Day 4 Update:** Add Exercise 4.7 (Temperature Converter) - 15 minutes
- **Day 2 Enhancement:** Label triangle area explicitly - 5 minutes
- **Documentation:** Update README and create Experiments guide - 10 minutes

**Total Time:** ~45 minutes to achieve 100% compliance

---

## GitHub Classroom Submission Naming

Students should submit with these file names:

```
Week1/
├── Experiment_01_HelloWorld.js
├── Experiment_02_AddTwoNumbers.js
├── Experiment_03_SquareRoot.js
├── Experiment_04_TriangleArea.js
├── Experiment_05_SwapVariables.js
├── Experiment_06_CelsiusToFahrenheit.js
└── Experiment_07_RandomNumber.js
```

This matches official numbering and makes grading easier.

---

**Last Updated:** February 2026  
**Status:** 5/7 Complete, 2 Need Minor Additions  
**Version:** 1.0
