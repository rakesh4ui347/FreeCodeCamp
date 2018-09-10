let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  // loops one too many times at the end
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  // loops one too few times and misses the first character at index 0
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  // Goldilocks approves - this is just right
  console.log(alphabet[k]);
}

///
function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Fix the line below
    for (let i = 0; i < len; i++) {
    // Do not alter code below this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();