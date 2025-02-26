const ground = [
    "G.20", "G.21", "G.22", "G.24", "G.26", "G.26B", "G.30", "G.34", "G.37", "G.39", "G.39A", "G.39B", "G.40", "G.41", "G.42", "G.44",
    "1.01", "1.04", "1.05", "1.06", "1.07", "1.08", "1.10", "1.11", "1.12", "1.15", "1.17", "1.18", "1.19", "1.20", "1.21", "1.22", "1.23",
    "1.26", "1.29", "1.30", "1.32", "1.34", "1.35", "1.36", "1.37", "1.38", "1.39", "2.01", "2.04", "2.07", "2.08", "2.11", "2.11a", "2.12",
    "2.13", "2.14", "2.15", "2.16", "2.22", "2.25", "2.30", "C2.31", "C2.32", "C2.33", "C2.34", "C2.35", "C2.37"
];

// Display full list on page load
window.onload = function() {
    displayFullList("from");
    displayFullList("to");
};

function displayFullList(inputId) {
    let listDiv = document.getElementById(inputId + "List");
    listDiv.innerHTML = "";
    
    ground.forEach(item => {
        let div = document.createElement("div");
        div.innerHTML = item;
        div.onclick = function() {
            document.getElementById(inputId).value = item;
        };
        listDiv.appendChild(div);
    });
}

function filterList(inputId) {
    let inputValue = document.getElementById(inputId).value.toLowerCase();
    let listDiv = document.getElementById(inputId + "List");
    
    listDiv.innerHTML = "";

    let filteredResults = ground.filter(item => item.toLowerCase().includes(inputValue));

    filteredResults.forEach(item => {
        let div = document.createElement("div");
        div.innerHTML = item;
        div.onclick = function() {
            document.getElementById(inputId).value = item;
        };
        listDiv.appendChild(div);
    });
}

// Function to validate inputs when search button is clicked
function inputValidation() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if (!ground.includes(from) || !ground.includes(to)) {
        alert("Invalid selection. Please select from the list.");
        return;
    }

    alert(`From: ${from} | To: ${to}`);
}

// Add event listener to search button
document.getElementById("searchButton").addEventListener("click", inputValidation);