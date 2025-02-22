const ground = ["G.20","G.21","G.22","G.24","G.26","G.26B","G.30","G.34","G.37","G.39","G.39A","G.39B","G.40","G.41","G.42","G.44","1.01","1.04","1.05","1.06","1.07","1.08","1.10","1.11","1.12","1.15","1.17","1.18","1.19","1.20","1.21","1.22","1.23","1.26","1.29","1.30","1.32","1.34","1.35","1.36","1.37","1.38","1.39","2.01","2.04","2.07","2.08","2.11","2.11a","2.12","2.13","2.14","2.15","2.16","2.22","2.25","2.30","C2.31","C2.32","C2.33","C2.34","C2.35","C2.37"];
function helloWorld() {
       alert(ground);
}

function inputValidation() {
       // From input 
       let fromInput = document.getElementById("from");
       let from = fromInput.value;
       // To input
       let toInput = document.getElementById("to");
       let to = toInput.value;
       for (let i; i < ground.length;){
             
       }
       alert(`from: ${from} | to: ${to}`);
}

document.getElementById("searchButton").addEventListener("click",inputValidation);