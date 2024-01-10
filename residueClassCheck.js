function generateResidueClasses(modulus) {
    let classes = {};
    for (let i = 0; i < modulus; i++) {
        classes[i] = [];
    }
    return classes;
}

function checkResidueClass(numbers, modulus) {
    let classes = generateResidueClasses(modulus);
    numbers.forEach(number => {
        let residue = number % modulus;
        if (!classes[residue]) {
            classes[residue] = [];
        }
        classes[residue].push(number);
    });
    return classes;
}

// Example usage
let numbers = [28871271685163];
let modulus = 9;
let result = checkResidueClass(numbers, modulus);

console.log(result);
