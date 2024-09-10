/*Q.1
 let string = "sourceandcode";
 let vowels = "aeiou";
 let count = 0;

 for (let char of string) {
  if (vowels.includes(char)) {
     count++;
   }
 }

 console.log(count);*/


//Q.2

let String = 'dddjjjjjqawjjkmmaak';
let duplicates = {};

for (let char of String) {
  if (duplicates[char]) {
    duplicates[char]++;
  } else {
    duplicates[char] = 1;
  }
}

for (let char in duplicates) {
  if (duplicates[char] > 1) {
    console.log(char, duplicates[char]);
  }
}


let str = "sourceandcode"
let Count = 0;
const vowel = ['a','e','i','o','u']
for(let s of str.toLowerCase()){
    if(vowel.includes(s))
        {Count++}
}
console.log(Count)
