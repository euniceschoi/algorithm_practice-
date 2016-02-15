// Write a function that takes an array of integers and returns an array of the products besides integer at that index

function getProduct(array){
  var productArray = [];

  for (var i = 0 ; i < array.length; i ++ ){
    var product = 1
      for (var j = 0; j < array.length; j ++){
        if (j != i){
          product = (product * array[j])
          console.log(product)
        }
      }
    productArray.push(product);
  }
  console.log(productArray);
}

getProduct([1, 7, 3, 4]);


// implement an algorithm to determine if a string has all unique characters.what if you cannot use additional data structures?

function hasUnique(string) {
  var stringArray = string.split("").sort();
  var uniqueCounter = 1;
  for(var i=1;i<string.length;i++){
    if (stringArray[i] != stringArray[i-1]){
      uniqueCounter ++
    }
  }
  if (uniqueCounter === stringArray.length){
    console.log("Unique!")
  }
  else {
    console.log("not unique!")
  }
}

hasUnique("bank")


//O(n) : create array of all characters where indices are indices in alphabet; turn to true, if already true, return false!
// my way: O(nlog(n)) because of sorting



// Given two strings, write a method to decide if one is a permutation of the other

function isPermutation(string1, string2){
  var string1Array = string1.split("").sort()
  var string2Array = string2.split("").sort()

  if (string1Array.join(",") === string2Array.join(",")){
    console.log("is permutation!")

  }else {
    console.log("not!")
  }
}

isPermutation("dog","fod")



// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string


function URLify(string,length){
  var stringArray = string.split("");
  for(var i = 0 ; i < length; i ++){
    if (stringArray[i] == " "){
      console.log(stringArray[i])
      stringArray[i] = "%20"
    }

  }
  console.log(stringArray.join(""))

}

URLify("hello eunice   ",12)




// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words

function isPalindrome(string){
  var str = string.split(" ").join("")
  var stringArray = str.split("")
  var stringHash = []
  for (var i = 0; i <stringArray.length;i++){
    if (stringHash[stringArray[i]]){
      stringHash[stringArray[i]] +=1
    }
    else {
      stringHash[stringArray[i]] = 1
    }
  }
  console.log(stringHash)
  if (str.length % 2 == 0){
    for (var letter in stringHash) {
    if (stringHash[letter] % 2 !=0 ){
      console.log("not a palindrome")
      }
    }
    console.log("a palindrome!")
  }
  else {
    var counter = 0
    for (var letter in stringHash) {
      if (stringHash[letter] % 2 !=0){
        counter ++
      }

    }
    if (counter != 1){
      console.log("not a palindrome!")
    }else {
      console.log("a palindrome!")
    }
  }

}

isPalindrome("hello eunice")