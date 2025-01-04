# 🧮 Calculator Web App

A simple and responsive calculator built with **React** and **Tailwind CSS**. This app supports basic arithmetic operations, handles decimal values, and ensures precision for all calculations. It adheres to strict user stories, making it a functional and user-friendly calculator.

---

## 🚀 Live Demo  

Check out the live version of the Calculator:  
🔗 [Calculator Web App](https://golam-rabby-javascript-calculator.netlify.app/)

---

## 📸 Preview
![image](https://github.com/user-attachments/assets/5f4b9515-a41e-4ef4-82c8-b5e85350c6c1)


## 📝 Features  

- **Basic Arithmetic**: Add, subtract, multiply, and divide numbers.  
- **Decimal Support**: Perform calculations with decimal values, ensuring precision.  
- **Clear Functionality**: Resets the input and output, returning to its initialized state (`0` in the display).  
- **Input Validation**: Prevents multiple zeros and handles decimal points correctly.  
- **Chain Operations**: Perform multiple operations in a sequence and get the correct result after pressing the `=` button.  
- **Responsive Design**: Fully responsive layout designed with Tailwind CSS.  
- **Interactive UI**: Buttons for numbers, operators, and special functions are clearly labeled and easy to use.  
- **Rounding Precision**: Handles calculations with reasonable decimal precision (at least 4 decimal places).

---

## 📚 User Stories  

1. **Equals Button**: Contains a clickable `=` button with `id="equals"`.  
2. **Numbers Buttons**: 10 clickable elements for digits (0-9) with corresponding IDs:  
   `id="zero"`, `id="one"`, `id="two"`, `id="three"`, `id="four"`, `id="five"`, `id="six"`, `id="seven"`, `id="eight"`, `id="nine"`.  
3. **Operators Buttons**: 4 clickable elements for basic operations (add, subtract, multiply, divide) with IDs:  
   `id="add"`, `id="subtract"`, `id="multiply"`, `id="divide"`.  
4. **Decimal Button**: A clickable element for decimal input with `id="decimal"`.  
5. **Clear Button**: A clickable element to reset the calculator with `id="clear"`.  
6. **Display**: The `id="display"` element to show inputs and results.  
7. **Clear Functionality**: Pressing `clear` resets the display to `0`.  
8. **Input Functionality**: The display updates as numbers are input, and calculations appear in real-time.  
9. **Operation Chain**: Allows chaining operations and evaluates the correct result when `=` is clicked.  
10. **Validations**: Prevents entering multiple zeros and ensures only one decimal point per number.  
11. **Decimal Precision**: Handles decimal calculations accurately, rounding as necessary.  
12. **Operator Precedence**: Correctly handles operations following standard precedence rules.

---

## 🛠️ Technologies Used  

- **Frontend**:  
  - React  
  - Tailwind CSS  

- **Additional Libraries**:  
  - No external libraries beyond React and Tailwind were used.

---

## 🌟 Customizations  

- **Responsive Layout**: Optimized for mobile and desktop screens using Tailwind CSS.  
- **Interactive Buttons**: Buttons are visually highlighted when clicked or hovered for better user feedback.  
- **Advanced Validation**: Ensures that multiple zeros and invalid decimal inputs are blocked.

---

## 🔧 Setup and Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/Golam-Rabby821/javascript-calculator.git
   cd javascript-calculator
