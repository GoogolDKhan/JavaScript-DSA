function palindrome(str) {
    const a = str.toLowerCase().match(/[0-9a-z]/g);
    return a.join("") === a.reverse().join("");
}

let result = palindrome("A man, a plan, a canal. Panama");
console.log(result);