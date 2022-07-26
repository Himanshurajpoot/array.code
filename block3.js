let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.push('papaya')
// Remove the last element from fruits array
fruits.pop()
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
delete(fruits[0])
console.log(fruits)
// Log the element on index 0 and 1
console.log(fruits[0],fruits[1])
// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits.shift()
console.log(fruits)
// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.splice(0,0,'Guava')
console.log(fruits)
// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.splice(0,0,"Dragon Fruit")
console.log(fruits)
// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
if(
fruits[0]==="Dragon Fruit"&&
fruits[1]==="Guava" 
){
    console.log(true);
}else{
    console.log(false);
}

// Update the value of index 1 to `Pears`
fruits[1]='pears'
console.log(fruits)
// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1,0,'kiwi','Lemon')
console.log(fruits)
// Remove (slice) all the element from index 5
console.log(fruits.slice(5))

// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits = ['Berries','Melons']
// Concat moreFruits into fruits array (re-assign so the value gets updated)
fruits=fruits.concat(moreFruits)

// Log the name of all fruit in console
fruits.forEach((fruit)=>console.log(fruit))
// Convert each fruit name to lowercase and log it
fruits.forEach((fruit)=>
console.log(fruit.toLowerCase()))

// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowercaseFruits=fruits.map(element => element.toLowerCase())
console.log(lowercaseFruits)
// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let uppercaseFruits = fruits.map(element => element.toUpperCase())
console.log(uppercaseFruits)






let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
console.log(numbers.flat(2))
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
// Convert the numbersThree array to one level element.
console.log(numbersThree.flat(4))
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
let flatArray = numbersThree.flat(4)
console.log(flatArray)
// Use forEach to log all the elements of numberThree array
flatArray.forEach(element =>{
    console.log(element)
})
// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
let doubleNumbers= flatArray.map(element => element*2)
console.log(doubleNumbers)
// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
let tripleNumbers=flatArray.map(element => element*3)
console.log(tripleNumbers)
// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
let halfNumbers=flatArray.map(element=>element/2)
console.log(halfNumbers)
// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
let oddNumbers=flatArray.filter(element => {if(element%2!==0)return element})
console.log(oddNumbers)

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let evenNumbers= flatArray.filter(element => {if(element%2===0) return element} )
console.log(evenNumbers)
// Find the index of 10 in numbersThree array
 let num=flatArray.indexOf(10)
 console.log(num)
// Reverse the values of numbersThree array
console.log(flatArray.reverse())
// Reverse the values of numbersTwo array
let fletNum=numbersTwo.flat(2)
console.log(fletNum)
console.log(fletNum.reverse())
// Join all fruits with '-', convert to uppercase and log it
console.log(fruits.join("-").toUpperCase())
// Join all fruits with '&', convert to lowercase and log it
console.log(fruits.join('&'))