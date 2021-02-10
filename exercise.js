let numbers = document.getElementById("numbers");
let btn = document.getElementById("btn");
let header = document.getElementById("header");
let singleDigetNumbers = [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let twoDigitNumbers1 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
let twoDigitNumbers2 = [" ", " ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

let emptyArr = [];



function seperateNumber(num) {
    emptyArr = [];
    let rez = 0;
    while (num != 0) {
        rez = num % 10;
        emptyArr.push(rez);
        num = Math.trunc(num / 10);
    }
    emptyArr.reverse();
    console.log(emptyArr);
    return emptyArr;
}



function singleDigitCheck(emptyArr, singleDigetNumbers) {
    for (let i = 0; i < emptyArr.length; i++) {
        for (let j = 0; j < singleDigetNumbers.length; j++) {
            if (i < emptyArr.length) {
                if (emptyArr[i] === j && i < 1) {
                    header.innerHTML = ` ${singleDigetNumbers[j]}`;
                    break;
                }
            }
            else if (emptyArr.length >= 3) {
                if (emptyArr[i] === j) {
                    header.innerHTML = ` ${singleDigetNumbers[j]} hundred`;
                    break;
                }
            }
        }
        break;
    }
}


function fourDigits(emptyArr, singleDigetNumbers) {
    for (let i = 0; i < emptyArr.length; i++) {
        for (let j = 0; j < singleDigetNumbers.length; j++) {
            if (emptyArr[i] === j && i < 1) {
                header.innerHTML = ` ${singleDigetNumbers[j]} thousand`;
                break;
            }
            else if (emptyArr[i] === j && i < 2) {
                header.innerHTML += ` ${singleDigetNumbers[j]} hundred`;
                break;
            }
        }

    }
}

function fiveDigits(emptyArr, singleDigetNumbers,twoDigitNumbers1, twoDigitNumbers2){
    for(let i = 0; i < emptyArr.length; i++){
        for(let j = 0; singleDigetNumbers.length; j++){
            if(i < 1){
                header.innerHTML = ` ${twoDigitCheck(emptyArr, twoDigitNumbers1, twoDigitNumbers2, singleDigetNumbers)}`;
                break;
            }
        }
    }
}
function twoDigitCheckOverFiveNumbers(emptyArr, twoDigitNumbers1, twoDigitNumbers2, singleDigetNumbers) {
    if (emptyArr[0] === 0) {
        for (let j = 0; j < singleDigetNumbers.length; j++) {
            if (emptyArr[1] === j) {
                header.innerHTML += ` ${singleDigetNumbers[j]}`;
            }
        }
    }
    else if (emptyArr[0] === 1) {
        for (let j = 0; j < twoDigitNumbers1.length; j++) {
            if (emptyArr[1] === j) {
                header.innerHTML += ` ${twoDigitNumbers1[j]} thousand`;
            }
        }
    }
    else if (emptyArr[0] != 1) {
        for (let j = 0; j < twoDigitNumbers2.length; j++) {
            if (emptyArr[0] === j) {
                for (let i = 0; i < singleDigetNumbers.length; i++) {
                    if (emptyArr[1] === i) {
                        header.innerHTML += ` ${twoDigitNumbers2[j]} ${singleDigetNumbers[i]}`;
                    }
                }
            }
        }
    }
}







function twoDigitCheck(emptyArr, twoDigitNumbers1, twoDigitNumbers2, singleDigetNumbers) {
    let check = emptyArr.length - 2;
    let checkLast = emptyArr.length - 1;
    if (emptyArr[check] === 0) {
        for (let j = 0; j < singleDigetNumbers.length; j++) {
            if (emptyArr[checkLast] === j) {
                header.innerHTML += ` ${singleDigetNumbers[j]}`;
            }
        }
    }
    else if (emptyArr[check] === 1) {
        for (let j = 0; j < twoDigitNumbers1.length; j++) {
            if (emptyArr[checkLast] === j) {
                header.innerHTML += ` ${twoDigitNumbers1[j]}`;
            }
        }
    }
    else if (emptyArr[check] != 1) {
        for (let j = 0; j < twoDigitNumbers2.length; j++) {
            if (emptyArr[check] === j) {
                for (let i = 0; i < singleDigetNumbers.length; i++) {
                    if (emptyArr[checkLast] === i) {
                        header.innerHTML += ` ${twoDigitNumbers2[j]} ${singleDigetNumbers[i]}`;
                    }
                }
            }
        }
    }
}




function print(emptyArr, singleDigetNumbers, twoDigitNumbers1, twoDigitNumbers2) {
    if (emptyArr.length === 1) {
        singleDigitCheck(emptyArr, singleDigetNumbers);
    }
    else if (emptyArr.length === 2) {
        twoDigitCheck(emptyArr, twoDigitNumbers1, twoDigitNumbers2, singleDigetNumbers);
    }
    else if (emptyArr.length === 3) {
        singleDigitCheck(emptyArr, singleDigetNumbers), twoDigitCheck(emptyArr, twoDigitNumbers1, twoDigitNumbers2, singleDigetNumbers);
    }
    else if (emptyArr.length === 4) {
        fourDigits(emptyArr, singleDigetNumbers), twoDigitCheck(emptyArr, twoDigitNumbers1, twoDigitNumbers2, singleDigetNumbers);
    }
    else if(emptyArr.length === 5){
        twoDigitCheckOverFiveNumbers(emptyArr, twoDigitNumbers1, twoDigitNumbers2, singleDigetNumbers);
    }



}

// BRUTE FORCE


function convertToText(emptyArr, singleDigetNumbers) {
    if (emptyArr.length === 1) {
        for (let i = 0; i < emptyArr.length; i++) {
            for (let j = 1; j < singleDigetNumbers.length; j++) {
                if (emptyArr[i] === j) {
                    header.innerHTML = `${singleDigetNumbers[j]}`;
                    break;
                }
            }
        }
    }
    else if (emptyArr.length === 2) {
        if (emptyArr[0] === 1) {
            for (let i = 1; i < twoDigitNumbers1.length; i++) {
                if (emptyArr[1] === i) {
                    header.innerHTML = `${twoDigitNumbers1[i]}`;
                    break;
                }

            }
        }
        else if (emptyArr[0] != 1) {
            for (let i = 0; i < twoDigitNumbers2.length; i++) {
                if (emptyArr[0] === i) {
                    for (let j = 0; j < singleDigetNumbers.length; j++) {
                        if (emptyArr[1] === j) {
                            header.innerHTML = `${twoDigitNumbers2[i]} ${singleDigetNumbers[j]}`;
                            break;
                        }
                    }
                }
            }
        }
    }
    else if (emptyArr.length === 3) {
        for (let i = 1; i < singleDigetNumbers.length; i++) {
            if (emptyArr[0] === i) {
                for (let j = 0; j < singleDigetNumbers.length; j++) {
                    if (emptyArr[2] === j) {
                        header.innerHTML = `${singleDigetNumbers[i]} hundred  ${singleDigetNumbers[j]}`;
                        break;
                    }
                }
            }
        }
        for (let i = 1; i < singleDigetNumbers.length; i++) {
            if (emptyArr[0] === i) {
                for (let j = 0; j < twoDigitNumbers1.length; j++) {
                    if (emptyArr[2] === j) {
                        header.innerHTML = `${singleDigetNumbers[i]} hundred  ${twoDigitNumbers1[j]}`;
                        break;
                    }
                }
            }
        }
        for (let i = 1; i < singleDigetNumbers.length; i++) {
            if (emptyArr[0] === i) {
                if (emptyArr[1] != 1) {
                    for (let j = 0; j < twoDigitNumbers2.length; j++) {
                        if (emptyArr[1] === j) {
                            for (let k = 0; k < singleDigetNumbers.length; k++) {
                                if (emptyArr[2] === k) {
                                    header.innerHTML = `${singleDigetNumbers[i]} hundred  ${twoDigitNumbers2[j]} ${singleDigetNumbers[k]}`;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }

    }
    else if (emptyArr.length === 4) {
        for (let i = 0; i < singleDigetNumbers.length; i++) {
            if (emptyArr[0] === i) {
                for (let j = 0; j < singleDigetNumbers.length; j++) {
                    if (emptyArr[3] === j) {
                        header.innerHTML = `${singleDigetNumbers[i]} thousand  ${singleDigetNumbers[j]}`;
                        break;
                    }
                }
            }
            if (emptyArr[0] === i) {
                if (emptyArr[2] === 1) {
                    for (let j = 0; j < twoDigitNumbers1.length; j++) {
                        if (emptyArr[3] === j) {
                            header.innerHTML = `${singleDigetNumbers[i]} thousand and ${twoDigitNumbers1[j]}`;
                            break;
                        }
                    }
                    break;
                }
            }
            if (emptyArr[0] === i) {
                if (emptyArr[2] != 0) {
                    for (let j = 0; j < twoDigitNumbers2.length; j++) {
                        if (emptyArr[2] === j) {
                            for (let k = 0; k < singleDigetNumbers.length; k++) {
                                if (emptyArr[3] === k) {
                                    header.innerHTML = `${singleDigetNumbers[i]} thousand ${twoDigitNumbers2[j]} ${singleDigetNumbers[k]}`;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            if (emptyArr[0] === i) {
                if (emptyArr[1] != 0) {
                    for (let j = 0; j < singleDigetNumbers.length; j++) {
                        if (emptyArr[1] === j) {
                            for (let k = 0; k < singleDigetNumbers.length; k++) {
                                if (emptyArr[3] === k) {
                                    header.innerHTML = `${singleDigetNumbers[i]} thousand ${singleDigetNumbers[j]} hundred ${singleDigetNumbers[k]}`;
                                    break;
                                }
                            }
                        }
                        if (emptyArr[1] === j) {
                            if (emptyArr[2] === 1) {
                                for (let j = 0; j < twoDigitNumbers1.length; j++) {
                                    if (emptyArr[3] === j) {
                                        header.innerHTML = `${singleDigetNumbers[i]} thousand ${singleDigetNumbers[j]} ${twoDigitNumbers1[j]}`;
                                        break;
                                    }
                                }
                            }
                        }
                        if (emptyArr[1] === j) {
                            if (emptyArr[2] != 0) {
                                for (let j = 0; j < twoDigitNumbers2.length; j++) {
                                    if (emptyArr[2] === j) {
                                        for (let k = 0; k < singleDigetNumbers.length; k++) {
                                            if (emptyArr[3] === k) {
                                                header.innerHTML = `${singleDigetNumbers[i]} thousand ${singleDigetNumbers[j]} hundred ${twoDigitNumbers2[j]} ${singleDigetNumbers[k]}`;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


btn.addEventListener("click", function () {
    let strToNumber = parseInt(numbers.value);
    seperateNumber(strToNumber);

    // convertToText(emptyArr, singleDigetNumbers);
    print(emptyArr, singleDigetNumbers, twoDigitNumbers1, twoDigitNumbers2);

    console.log(emptyArr.length - 2);
    console.log(typeof emptyArr.length - 2);
    let num = emptyArr.length - 2;
    console.log(num);
    console.log(typeof strToNumber);
    console.log(strToNumber);
    console.log(typeof emptyArr[0]);

});


