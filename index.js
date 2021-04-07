// ***** Question 1 *****
// *** Uncomment the lines below to test
// console.log("%cQuestion 1", "color: red") 

// console.log(counter) 
// // => 2
// console.log("%c----------", "color: red") 


// ***** Question 2 *****
// *** Uncomment the lines below to test
// *** after testing, comment the line causing the error back in 
// *** otherwise, the error will stop the rest of your code from running
// console.log("%cQuestion 2", "color: red") 

// console.log(name)
// => "Raffy"
// name = "Not Raffy" 
// => TypeError
// console.log("%c----------", "color: red") 


// ***** Question 1 *****
// *** Uncomment the lines below to test
console.log("%cQuestion 1", "color: red") 
let counter  = 1;
  counter = 2

console.log(counter) 
// => 2
console.log("%c----------", "color: red") 


// ***** Question 2 *****
// *** Uncomment the lines below to test
// *** after testing, comment the line causing the error back in 
// *** otherwise, the error will stop the rest of your code from running
 console.log("%cQuestion 2", "color: red") 
  const name = "Bin";
// name = "Not Bin"

// console.log(name)
// => "Raffy"
// name = "Not Raffy" 
// => TypeError
console.log("%c----------", "color: red") 



// ***** Question 3 *****
// *** Uncomment the lines below to test
console.log("%cQuestion 3", "color: red") 
function drinkWater(level) {
  console.log("Man I sure am thirsty");
  level--;
  console.log("Ahh that hits the spot");
  return level;
}

  console.log(drinkWater(12))
// => "Man I sure am thirsty"
// => "Ahh that hits the spot"
 // => 11
 console.log("%c----------", "color: red") 
  function sameSameButDifferent(num, maybeNum) {
    if(num === maybeNum) {
      return "same same";
    }else if (num == maybeNum) {
      return "same same (but different)"
    }else {
      return "different"
    }
  }

// ***** Question 4 *****
// *** Uncomment the lines below to test
console.log("%cQuestion 4", "color: red") 


console.log(sameSameButDifferent(5, 5)) 
// // => "same same"

 console.log(sameSameButDifferent(123, "123")) 
// // => "same same (but different)"

 console.log(sameSameButDifferent(5, 7)) 
// // => "different"

 console.log(sameSameButDifferent(123, "122")) 
// // => "different"
 console.log("%c----------", "color: red") 



// ***** Question 5 *****
// *** Uncomment the lines below to test
console.log("%cQuestion 5", "color: red");
const student1 = { name: "Duane", grade: 88 };

function updateGrade(student, grade){
  let obj = Object.assign(student,{["grade"]: grade})
  return obj;
}

updateGrade(student1, 92);
console.log(student1);
// => { name: "Duane", grade: 92 }
console.log("%c----------", "color: red")



// ***** Question 6 *****
// *** Uncomment the lines below to test
console.log("%cQuestion 6", "color: red")

const users = [ 
{ 
   name: "Duane", phones: { cell: "555-123-4567", office: "555-456-7890" }
  },
  { 
     name: "Liza", phones: { cell: "555-234-5678", office: "555-567-1234" }
   }
 ]

function printNameAndPhones(users) {
  users.forEach(function(){})
  console.log(users);
}

printNameAndPhones(users)
// => "Duane"
// => "Cell: 555-123-4567"
// => "Office: 555-456-7890"
// => "Liza"
// => "Cell: 555-234-5678"
// => "Office: 555-567-1234"
console.log("%c----------", "color: red") 


// ***** Callbacks *****

function myMap(array, callback) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const value = callback(element)
    result.push(value)
  }
  return result
}

// ***** Callbacks - Question 1 *****

// *** Uncomment the lines below to test
console.log("%cCallbacks - Question 1", "color: red")

function triple(num) {
    return num * 3;
}

console.log(myMap([1,2,3,4,5], triple)) 
// => [3,6,9,12,15]

console.log(myMap([2,4,6,8], triple))   
// => [6,12,18,24]
console.log("%c----------", "color: red") 


// ***** Callbacks - Question 2 *****
// *** Uncomment the lines below to test
console.log("%cCallbacks - Question 2", "color: red")

function greet(name) {
  return `Hi ${name}!`
}

console.log(myMap(["Raffy", "Chase"], greet)) 
// => ["Hi, Raffy!", "Hi, Chase!"]
console.log("%c----------", "color: red") 



// ***** Scope & Closures *****

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

const line = []

// ***** Scope & Closures - Question 1 *****


// *** Uncomment the lines below to test
 console.log("%cScope & Closures - Question 1", "color: red")

function takeATicketNumber(line) {
    if(line.length == 0) {
      line.push(1)
      return `Welcome. You are ticket number ${line.length}`;
    }else {
      for(let i = 0; i < line.length; i++) {
            line.push(line.length + 1);
            i++;
            return `Welcome. You are ticket number ${line.length}`;
       }
    }
  }

console.log(takeATicketNumber(line));
// => `Welcome. You are ticket number 1`

console.log(takeATicketNumber(line))
// => `Welcome. You are ticket number 2`

function nowServing(line) {
    let count = 0;
    while(count >= 0){
      count++;
      return`Currently serving ${line[count - 1]}.`
    }
   }

console.log(nowServing(line))
// => `Currently serving 1.`

console.log(nowServing(line))
// => `Currently serving 2.`

console.log(takeATicketNumber(line))
// => `Welcome. You are ticket number 3`

console.log("%c----------", "color: red") 

// ***** Scope & Closures - Question 2 *****
// *** Uncomment the lines below to test
console.log("%cScope & Closures - Question 2", "color: red")

const newLine = []
const takeATicketNumberFunc = ticketNumberGeneratorFunc()
console.log(takeATicketNumberFunc(newLine))
// => `Welcome. You are ticket number 1`

console.log(takeATicketNumberFunc(newLine))
// => `Welcome. You are ticket number 2`

console.log(nowServing(newLine))
// => `Currently serving 1.`

console.log(nowServing(newLine))
// => `Currently serving 2.`

console.log(takeATicketNumberFunc(newLine))
// => `Welcome. You are ticket number 3`

console.log("%c----------", "color: red") 