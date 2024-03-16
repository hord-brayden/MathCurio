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

function checkResidueClass(numbers, modulus, modifiers) {
    let classes = generateResidueClasses(modulus);
    numbers.forEach(number => {
        let residue = number % modulus;
        if (!classes[residue]) {
            classes[residue] = [];
        }
        if (isPrime(number)) {
            if (digitSum == true && modifiers[2] == true) {
                classes[residue].push(digitSum(number) + 'p');
            }
            else if (modifiers[2] == true) {
                classes[residue].push(number + 'p');
            }
            else {
                classes[residue].push(number);
            }
        } else if (modifiers[1] !== null){
            if (digitSum == true) {
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
// accepts a starting mod to begin checking, and a modStop with which to stop checking.
function autoRunResidueClass(startMod, stopMod) {
// change array value for what numbers are run against primes to build out prime veins. 6 is set as the starting value.
    let numbersSeq =  [...Array(10000).keys()].slice(6);
    let primeDisplayCompoundArray = [true,null,true];
    let finalCounts = [];
    for (i = startMod;i < stopMod;i++){
        let modCheck = checkResidueClass(numbersSeq, i, primeDisplayCompoundArray);
        let count = 0;
        for (let key in modCheck) {
            if (Array.isArray(modCheck[key]) && modCheck[key].length > 0) {
                count++;
            }
        }
        console.log('Prime Veins for ', i, ' is :', count);
        console.log('Prime Vein efficacy is ', (count/i)*100,'%');
        // currently just inserts prime efficiencies into an empty array, then sorts them in ascending order to demonstrate the highest prime vein efficiency possibile given the mod range, and prime vein contents.
        finalCounts.push(count/i);
        finalCounts.sort();
    }
    return finalCounts
}

let finalAnswer = autoRunResidueClass(15,1500);
console.log(finalAnswer);
