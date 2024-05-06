function addElement(veinInput, efficacyInput, modCheck = null) {
    const newDiv = document.createElement("p");
    const modDiv = document.createElement("div");
    modDiv.className = 'mod-check';
    const veinContents = document.createTextNode(veinInput + ": ");
    const efficacyContents = document.createTextNode(efficacyInput);
    newDiv.appendChild(veinContents);
    newDiv.appendChild(efficacyContents);
    if (modCheck !== null && typeof modCheck === "object") {
        createCollapsibleElement(modDiv, "Mod Check", modCheck);
    } else {
        const modCheckContents = document.createTextNode(modCheck || "No additional data");
        modDiv.appendChild(modCheckContents);
    }

    const currentDiv = document.getElementById("output-div");
    currentDiv.appendChild(newDiv);
    currentDiv.appendChild(modDiv);
}

function createCollapsibleElement(container, key, value) {
    let button = document.createElement("button");
    button.innerHTML = key;
    button.className = "collapsible";

    let contentDiv = document.createElement("div");
    contentDiv.className = "content";

    if (typeof value === "object" && value !== null && !(value instanceof Array)) {
        let index = 0;
        for (let [subKey, subValue] of Object.entries(value)) {
            let line = document.createElement("div");
            if (Array.isArray(subValue)) {
                line.textContent = `${index}: (${subValue.length}) [${subValue.join(', ')}]`;
            } else {
                line.textContent = `${index}: ${subValue}`;
            }
            contentDiv.appendChild(line);
            index++;
        }
    } else {
        contentDiv.textContent = JSON.stringify(value, null, 2);
    }

    container.appendChild(button);
    container.appendChild(contentDiv);

    button.addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}



function generateResidueClasses(modulus) {
    let classes = {};
    for (let i = 0; i < modulus; i++) {
        classes[i] = [];
    }
    return classes;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function digitSum(value) {
sum = 0;
while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}
return sum;
}

function checkResidueClass(numbers, modulus, modifiers, digitSummer) {
    let classes = generateResidueClasses(modulus);
    numbers.forEach(number => {
        let residue = number % modulus;
        if (!classes[residue]) {
            classes[residue] = [];
        }
        if (isPrime(number)) {
            if (digitSummer == true && modifiers[2] == true) {
                classes[residue].push(digitSum(number) + 'p');
            }
            else if (modifiers[2] == true) {
                classes[residue].push(number + 'p');
            }
            else {
                classes[residue].push(number);
            }
        } else if (modifiers[1] !== null){
            if (digitSummer == true) {
                if (modifiers[0] == true) {
                    classes[residue].push(modifiers[1]);
                }
                else {
                    classes[residue].push(digitSum(number));
                }
            }
            else {
                if (modifiers[0] == true) {
                    classes[residue].push(modifiers[1]);
                }
                else {
                    classes[residue].push(number);
                }
            }
        } else{

        }
    });
    
    return classes;
}
// accepts a starting mod to begin checking, and a modStop with which to stop checking, as well as how long to run the number sequence.
function autoRunResidueClass(startMod, stopMod, primeLength) {
    let numbersSeq = [...Array(primeLength).keys()].slice(6);
    let primeDisplayCompoundArray = [true, null, true];
    let digitSum = false;
    let results = [];  // Store results before sorting and appending

    for (let i = startMod; i < stopMod; i++) {
        let modCheck = checkResidueClass(numbersSeq, i, primeDisplayCompoundArray, digitSum);
        let count = 0;
        for (let key in modCheck) {
            if (Array.isArray(modCheck[key]) && modCheck[key].length > 0) {
                count++;
            }
        }

        let lowGranVeinCount = 'Prime Veins for ' + i + ' is: ' + count;
        let efficacy = (count / i) * 100;
        let veinEfficacy = 'Prime Vein efficacy is ' + efficacy + '%';
        
        // make a new object of the entire result object for sorting and later processing
        results.push({
            modCheck: modCheck,
            lowGranVeinCount: lowGranVeinCount,
            veinEfficacy: veinEfficacy,
            efficacy: efficacy  // for sorting
        });
    }

    // currently just inserts prime efficiencies into an empty array, then sorts them in ascending order to demonstrate the highest prime vein efficiency possibile given the mod range, and prime vein contents.
    // also sorts ascending
    results.sort((a, b) => a.efficacy - b.efficacy);

    // Now append sorted results to the DOM
    results.forEach(result => {
        addElement(result.lowGranVeinCount, result.veinEfficacy, result.modCheck);
    });

    // Return the sorted efficacy messages for logging or other purposes
    return results.map(item => `Modulus ${item.modCheck.modulus}, Efficacy: ${item.efficacy.toFixed(2)}%`);
}

let finalAnswer = autoRunResidueClass(4, 150, 10000);
console.log(finalAnswer);