import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  const buttonIds = {
    7: "seven",
    8: "eight",
    9: "nine",
    "-": "subtract",
    4: "four",
    5: "five",
    6: "six",
    "+": "add",
    1: "one",
    2: "two",
    3: "three",
    0: "zero",
    "/": "divide",
    "*": "multiply",
    "=": "equals",
    ".": "decimal",
    AC: "clear",
  };

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
      setResult("");
      setIsCalculated(false);
    } else if (value === "=") {
      try {
        const evaluated = eval(input);
        setResult(evaluated);
        setInput(input + " = " + evaluated);
        setIsCalculated(true);
      } catch (error) {
        setResult("Error");
        setInput("Error");
      }
    } else {
      if (isCalculated) {
        setInput(result + (/[+\-*/]/.test(value) ? value : ""));
        setIsCalculated(false);
      } else {
        const newInput = processInput(input, value);
        setInput(newInput);
        setResult(newInput);
      }
    }
  };

  const processInput = (currentInput, value) => {
    if (/^0$/.test(currentInput) && /[0-9]/.test(value)) {
      return value; // Replace leading zero
    }

    const lastNumber = currentInput.split(/[-+*/]/).pop();
    if (value === "." && lastNumber.includes(".")) {
      return currentInput; // Prevent multiple decimals
    }

    if (/[-+*/]$/.test(currentInput) && /[-+*/]/.test(value)) {
      if (value !== "-") {
        return currentInput[0] + value; // Replace the operator
      }
    }

    return currentInput + value;
  };

  const renderButton = (value, styles = "") => (
    <div
      id={buttonIds[value]}
      className={`flex justify-center items-center transition-all duration-100 ease-in-out hover:text-slate-950 hover:border-[1px] hover:border-s-cyan-50 ${styles}`}
      onClick={() => handleClick(value)}
    >
      {value}
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-slate-300 flex flex-col justify-center items-center font-calc">
      <div className="w-[450px] h-[480px] bg-slate-900 flex flex-col p-2 gap-2">
        <div className="bg-slate-500 font-semibold w-full h-[80px] flex flex-col items-end justify-center pr-3 text-base">
          <div>{input}</div>

          <div id="display" className="text-xl text-emerald-400">
            {result || "0"}
          </div>
        </div>

        <div className="flex-grow text-white text-xl font-bold w-full grid grid-cols-4 gap-[3px] cursor-pointer">
          {renderButton("AC", "bg-rose-700 col-span-2")}
          {renderButton("/", "bg-gray-600")}
          {renderButton("*", "bg-gray-600")}
          {["7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3"].map((val) =>
            renderButton(
              val,
              val === "-" || val === "+" ? "bg-gray-600" : "bg-gray-500"
            )
          )}
          {renderButton("=", "row-span-2 bg-emerald-700")}
          {renderButton("0", "col-span-2 bg-gray-500")}
          {renderButton(".", "bg-gray-500")}
        </div>
      </div>

      <footer>
        <p className="text-md font-semibold mt-5 text-center">
          Designed and Coded by <br />
          <a
            href="https://www.linkedin.com/in/golamrabby-/"
            target="_blank"
            className="text-rose-700"
          >
            Golam Rabby
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
