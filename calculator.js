const numbuttons = [
"7","8","9","4","5","6","1","2","3",
"0"

]

let numEl = document.getElementById("num-el")

let oprEl = document.getElementById("opt-el")

for (let i = 0; i < numbuttons.length; i++){
let btn = document.createElement("button")
btn.textContent = numbuttons[i];
numEl.appendChild(btn)
}

const operators = [
    "+","-","/","*","c","="
]

for (let i = 0; i < operators.length; i++ ){
let btn = document.createElement("button")
btn.textContent = operators[i];
oprEl.appendChild(btn)

}