function checkPalindrome() {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    const inputString = numberInput.replace(/\s/g, '');

    if (inputString === '') {
        resultElement.innerText = 'Please enter a series of numbers.';
        return;
    }
    if (isPalindrome(inputString)) {
        resultElement.innerText = `${numberInput} is a palindrome.`;
    } else {
        resultElement.innerText = `${numberInput} is not a palindrome.`;
    }
}

function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
