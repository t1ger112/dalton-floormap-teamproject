// const ground = ["G.20", "G.21", "G.22", "G.24", "G.26", "G.26B", "G.30", "G.34", "G.37", "G.39", "G.39A", "G.39B", "G.40", "G.41", "G.42", "G.44","1.01", "1.04", "1.05", "1.06", "1.07", "1.08", "1.10", "1.11", "1.12", "1.15", "1.17", "1.18", "1.19", "1.20", "1.21", "1.22", "1.23","1.26", "1.29", "1.30", "1.32", "1.34", "1.35", "1.36", "1.37", "1.38", "1.39", "2.01", "2.04", "2.07", "2.08", "2.11", "2.11a", "2.12","2.13", "2.14", "2.15", "2.16", "2.22", "2.25", "2.30", "C2.31", "C2.32", "C2.33", "C2.34", "C2.35", "C2.37"];

const ground = [
    // [IDENT,NAME,CONNECTS,KEYWORDS]
    ["E001", "G.20", "L002", ""],
    ["E002", "G.21", "L004", ""],
    ["E003", "G.22", "L005", ""],
    ["EL004", "West Stairs", "L006", "WEST STAIRS"],
    ["EL005", "West Lift", "L006", "WEST LIFT"],
    ["E006", "Canteen", "L012", "CANTEEN"],
    ["EL007", "Main Stairs", "L018", "MAIN STAIRS"],
    ["EL008", "Main Lifts", "L016", "MAIN LIFTS"],
    ["E009", "Reception", "L015", "RECEPTION"],
    ["E010", "Main Enterance", "L015", "MAIN ENTERANCE"],
    ["E011", "G.34", "L019", ""],
    ["EL012", "Tower Lifts/Stairs", "L019", "TOWER LIFTS/STAIRS"],
    ["EL013", "G.26a", "L021", ""],
    ["E014", "G.26b", "EL013", ""],
    ["E015", "G.26", "EL013", ""],
    ["E016", "G.37 Lecture Theatre", "L024", "G.37 LECTURE THEATRE"],
    ["E017", "G.30", "L031", ""],
    ["EL018", "G.39", "L028", ""],
    ["EL019", "C-Block Lift", "L029", "C-BLOCK LIFT"],
    ["EL020", "C-Block West-Stairs", "L033", "C-BLOCK WEST-STAIRS"],
    ["E021", "Computer Area", "L029", "COMPUTER AREA"],
    ["E022", "G.40", "EL018", ""],
    ["E023", "G.39a", "EL018", ""],
    ["E024", "G.39b", "EL018", ""],
    ["E025", "G.41", "L035", ""],
    ["E026", "G.44", "L034", ""],
    ["E027", "G.42 Lecture Theatre", "L037", "G.42 LECTURE THEATRE"],
    ["EL028", "C-Block East-Stairs", "L037", "C-BLOCK EAST-STAIRS"],
    ["L002", "!NOSEARCH", "E001, L003", ""],
    ["L003", "!NOSEARCH", "L002, L004", ""],
    ["L004", "!NOSEARCH", "L003, L005, E002", ""],
    ["L005", "!NOSEARCH", "L004, L006, L007, E003", ""],
    ["L006", "!NOSEARCH", "L005, EL004, EL005", ""],
    ["L007", "!NOSEARCH", "L005, L008, L011", ""],
    ["L008", "!NOSEARCH", "L007, L009, L013", ""],
    ["L009", "!NOSEARCH", "L008, L010", ""],
    ["L010", "!NOSEARCH", "L009", ""],
    ["L011", "!NOSEARCH", "L007, L012", ""],
    ["L012", "!NOSEARCH", "L011, L013, E006", ""],
    ["L013", "!NOSEARCH", "L008, L012, L014", ""],
    ["L014", "!NOSEARCH", "L013, L015, L017", ""],
    ["L015", "!NOSEARCH", "L016, E009, E010", ""],
    ["L016", "!NOSEARCH", "L014, L015, L020, EL008", ""],
    ["L017", "!NOSEARCH", "L014, L018", ""],
    ["L018", "!NOSEARCH", "L017, L019, EL007", ""],
    ["L019", "!NOSEARCH", "L018, L020, L022, E011, E012", ""],
    ["L020", "!NOSEARCH", "L016, L019, L021", ""],
    ["L021", "!NOSEARCH", "L020, L022, L023, EL013", ""],
    ["L022", "!NOSEARCH", "L019, L021", ""],
    ["L023", "!NOSEARCH", "L021, L024, L025", ""],
    ["L024", "!NOSEARCH", "L023, E016", ""],
    ["L025", "!NOSEARCH", "L023, L026", ""],
    ["L026", "!NOSEARCH", "L025, L027, L028", ""],
    ["L027", "!NOSEARCH", "L026, L029, L030", ""],
    ["L028", "!NOSEARCH", "L026, L029, L035, EL018", ""],
    ["L029", "!NOSEARCH", "L027, L028, L032, E021, EL019", ""],
    ["L030", "!NOSEARCH", "L027, L031", ""],
    ["L031", "!NOSEARCH", "L030, E017", ""],
    ["L032", "!NOSEARCH", "L029, L033, L034", ""],
    ["L033", "!NOSEARCH", "L032, EL020", ""],
    ["L034", "!NOSEARCH", "L032, E026", ""],
    ["L035", "!NOSEARCH", "L028, L036, E025", ""],
    ["L036", "!NOSEARCH", "L035, L037", ""],
    ["L037", "!NOSEARCH", "L036, E027, EL028", ""]
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
        div.className = "aClass";
        div.innerHTML = item[1].toUpperCase();
        div.onclick = function() {
            document.getElementById(inputId).value = item[1];
        };
        listDiv.appendChild(div);
    });
}

function filterList(inputId) {
    let inputValue = document.getElementById(inputId).value.toUpperCase();
    let listDiv = document.getElementById(inputId + "List");
    
    listDiv.innerHTML = "";

    let filteredResults = ground.filter(item => item[1].toUpperCase().includes(inputValue));

    filteredResults.forEach(item => {
        let div = document.createElement("div");
        div.innerHTML = item[1];
        console.log(`The item is ${item}`);
        div.onclick = function() {
            document.getElementById(inputId).value = item[1];
        };
        listDiv.appendChild(div);
    });
}

function inputValidation() {
    let from = document.getElementById("from").value.toUpperCase();
    let to = document.getElementById("to").value.toUpperCase();
    // from = from.toUpperCase();
    // to = to.toUpperCase();
    
    let fromValid = ground.some(item => item[1].toUpperCase() === from);
    let toValid = ground.some(item => item[1].toUpperCase() === to);

    if (!fromValid || !toValid) {
        alert("Invalid selection. Please select from the list.");
        return;
    }

    alert(`From: ${from} | To: ${to}`);
}


// Add event listener to search button
document.getElementById("searchButton").addEventListener("click", inputValidation);