// Iteration 1: Names and Input
const hacker1 = "Nicholas";
const hacker2 = "Brandon";

console.log (`The driver's name is ${hacker1}`);
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
  else if (hacker1.length < hacker2.length){
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
  else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }


// Iteration 3: Loops

//3.1) Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N"

let driverNameFormatted = "";

for (i = 0; i < hacker1.length; i++){
  let char = hacker1[i];
  driverNameFormatted += char + " ";
}

console.log(driverNameFormatted.toUpperCase());

//3.2) Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".

let navigatorNameReversed = "";

for (i = hacker2.length -1; i >= 0; i--){
  let char2 = hacker2[i];
  navigatorNameReversed += char2;
  
}
console.log(navigatorNameReversed);

//3.3 Depending on the lexicographic order of the strings, print:


if (hacker1.localeCompare(hacker2) > 0){
  console.log ("The driver's name goes first.");
}
else if (hacker1.localeCompare(hacker2) < 0){
console.log ("Yo, the navigator goes first definitely.")
}
else if (hacker1.localeCompare(hacker2) === 0){
  console.log ("What?! You both have the same name?")
}