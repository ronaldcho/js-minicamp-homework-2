// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if ( ( x > y ) || ( x === y ) ){
  return x; 
 } else {
  return y;
  }
}


function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
    var greeting;
  switch(language){
    case 'German':
        greeting = 'Guten Tag!';
        break;
    case 'English':
        greeting = 'Hello!';
        break;
    case 'Spanish':
        greeting = 'Hola!';
        break;
    default:
        greeting = 'Hello!'; 
  }
  return greeting;
}


function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  //var remainder = num % 2; 
 // if ( (num % 2 === 0) || (num % 5 === 0) ) { 
  if ( (num /10 === 1 ) || (num / 5 === 1) ) {
    return true;
  /*if ( (num % 2 != 0) || (num % 5 != 0) ) { 
    return false;
    */
  } else 
     { return false;}
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
 return num < 50 && num > 20; 
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  //return Number.isInteger(Math.floor(num));
  //return Number.isInteger(Math.ceil(num));
  //return Number.isInteger(Math.round(num));
  return Number.isInteger(num);
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if ( ( num % 3 === 0 ) && ( num % 5 === 0 ) ){
    return 'fizzbuzz';
  } else if ( num % 3 === 0 ) {
      return 'fizz';
  }  else if ( num % 5 === 0 ) {
       return 'buzz';
  }   else { 
       return num;
  }
  
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  for ( var i = 2; i < num; i++ ) {
    if ( num % i === 0 ) {
      return false;
    }
  }
  return num > 1;

}

function returnFirst(arr) {
  // return the first item from the array
  return arr[arr.length - arr.length];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length - 1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for ( var i = 0; i < arr.length; i++ ){
    arr[i] += 1;
  }
  return arr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
 return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  var newWords = '';
  for ( var i = 0; i < words.length; i++ ){
      newWords += words[i] + ' ' ;
      //newWords = newWords.join(' ');
      //newWords += words[i].join(' '); //+ ' ';
      //newWords += words[words.length];
    //return newWords;
  }
  //newWords = words.pop(newWords);
  return newWords;

}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false

  //arr.find( p => p.item === arr.item); //retrun true;
  for ( var i = 0; i < arr.length; i++ ) {
    if ( arr.includes('item', i) ){ return true;} }
  /*  { return true;
      } else { return false;}
      

     if (( arr[i] === item )  || ( arr[i] === '' ) ){
       return true;
       } else { return false;}
*/
}


function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  var value = 0;
  for ( var i = 0; i < numbers.length; i++ ){
      value += numbers[i];
  }
  return value;
}


function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  var average = 0;
  //for ( var i = 0; i < testScores.length; i++ ){
      //average += testScores[i];
      average = addNumbers(testScores) / testScores.length;
  
  return average;
}


function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  var largest = numbers[0];
  for ( var i = 1; i < numbers.length; i++ ){
    if ( numbers[i] > largest ){
       largest = numbers[i];
       return largest;
    }
  // return largest;
  }
  
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
