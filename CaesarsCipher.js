function rot13(str) {
  var arr1 = [];
  var arr2 = [];
  for (let i = 0; i < str.length; i++) {
    arr1.push(str.charCodeAt(i));
  }
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] > 77 && arr1[j] < 91) {
      arr2.push(String.fromCharCode(arr1[j] - 13));
    } else if (arr1[j] > 64 && arr1[j] < 78) {
      arr2.push(String.fromCharCode(arr1[j] + 13));
    } else {
      arr2.push(String.fromCharCode(arr1[j]));
    }
  }

  return arr2.join("");
}

let result = rot13("SERR PBQR PNZC");
console.log(result);
