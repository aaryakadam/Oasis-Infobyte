function convertTemp() {

  const input = document.getElementById("tempInput").value.trim();
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const errorDiv = document.getElementById("error");
  const resultDiv = document.getElementById("result");


  errorDiv.textContent = "";
  resultDiv.textContent = "";

  const value = Number(input);

  // Validation
  if (input === "" || isNaN(value)) {
    errorDiv.textContent = "Please enter a valid numeric temperature.";
    return;
  }

  // If same unit selected
  if (from === to) {
    resultDiv.textContent = value.toFixed(2) + " " + unitLabel(to);
    return;
  }

  let celsius;

  // Step 1: Convert input to Celsius
  if (from === "C") {
    celsius = value;
  } else if (from === "F") {
    celsius = (value - 32) * 5 / 9;
  } else {
    celsius = value - 273.15;
  }

  let finalValue;

  // Step 2: Convert Celsius to target unit
  if (to === "C") {
    finalValue = celsius;
  } else if (to === "F") {
    finalValue = celsius * 9 / 5 + 32;
  } else {
    finalValue = celsius + 273.15;
  }


  resultDiv.textContent =
    finalValue.toFixed(2) + " " + unitLabel(to);
}


function unitLabel(unit) {
  if (unit === "C") return "°C";
  if (unit === "F") return "°F";
  return "K";
}
