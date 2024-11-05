// Get input elements
const energyConsumptionInput = document.getElementById("energy-consumption");
const transportationTypeSelect = document.getElementById("transportation-type");
const wasteManagementTypeSelect = document.getElementById("waste-management-type");
const calculateBtn = document.getElementById("calculate-btn");
const resultElement = document.getElementById("total-footprint");

// Add event listener to calculate button
calculateBtn.addEventListener("click", calculateCarbonFootprint);

// Calculate carbon footprint function
function calculateCarbonFootprint() {
  // Get user input values
  const energyConsumption = parseFloat(energyConsumptionInput.value);
  const transportationType = transportationTypeSelect.value;
  const wasteManagementType = wasteManagementTypeSelect.value;

  // Validate input values
  if (isNaN(energyConsumption) || energyConsumption <= 0) {
    alert("Please enter a valid energy consumption value.");
    return;
  }

  // Calculate carbon footprint
  let energyFootprint = energyConsumption * 0.527; // kg CO2e per kWh
  let transportationFootprint = getTransportationFootprint(transportationType);
  let wasteFootprint = getWasteFootprint(wasteManagementType);
  let totalFootprint = energyFootprint + transportationFootprint + wasteFootprint;

  // Display result
  resultElement.textContent = `Your total carbon footprint is: ${totalFootprint.toFixed(2)} kg CO2e per month`;
}

// Helper functions to get transportation and waste footprints
function getTransportationFootprint(type) {
  switch (type) {
    case "car":
      return 150; // kg CO2e per month
    case "bus":
      return 50; // kg CO2e per month
    case "train":
      return 20; // kg CO2e per month
    default:
      return 0;
  }
}

function getWasteFootprint(type) {
  switch (type) {
    case "recycle":
      return 10; // kg CO2e per month
    case "compost":
      return 5; // kg CO2e per month
    case "landfill":
      return 50; // kg CO2e per month
    default:
      return 0;
  }
}

// Offset calculation
const calculateBtn1 = document.getElementById("calculate-btn1");
const resultElement1 = document.getElementById("offset-result");
const footprintInput = document.getElementById("footprint-input");
const offsetTypeSelect = document.getElementById("offset-type-select");

calculateBtn1.addEventListener("click", calculateOffset);

function calculateOffset() {
  const footprint = parseFloat(footprintInput.value);
  const offsetType = offsetTypeSelect.value;

  // Validate input values
  if (isNaN(footprint) || footprint <= 0) {
    alert("Please enter a valid footprint value.");
    return;
  }

  let offsetAmount;
  switch (offsetType) {
    case "trees":
      offsetAmount = footprint * 10; // assume 10 trees offset 1 ton CO2
      break;
    case "renewable-energy":
      offsetAmount = footprint * 0.5; // assume 0.5 MWh renewable energy offsets 1 ton CO2
      break;
    case "energy-efficiency":
      offsetAmount = footprint * 0.2; // assume 0.2 MWh energy efficiency offsets 1 ton CO2
      break;
    default:
      offsetAmount = 0;
  }

  resultElement1.textContent = `You need to offset ${offsetAmount} ${offsetType} to neutralize your carbon footprint.`;
}

// Carbon emissions calculation
const calculatorForm2 = document.getElementById("calculator-form2");
const resultElement2 = document.getElementById("result2");

calculatorForm2.addEventListener("submit", calculateCarbonEmissions);

function calculateCarbonEmissions(event) {
  event.preventDefault();
  const coalProduced = parseFloat(document.getElementById("coal-produced").value);
  const carbonContent = parseFloat(document.getElementById("carbon-content").value);
  const emissionFactor = parseFloat(document.getElementById("emission-factor").value);

  const carbonEmissions = (coalProduced * carbonContent / 100) * emissionFactor;

  resultElement2.textContent = `Carbon Emissions: ${carbonEmissions} tons CO2e`;
}
