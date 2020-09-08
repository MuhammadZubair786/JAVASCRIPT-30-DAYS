// EXERCISE LEVEL 1

// Task 1
// 1. Declare an empty array; 
// var arr=[]

// -------------------------------------------------------------------------


// Task 2
// Declare an array with more than 5 number of elements 
var arr=[5,10,15,20,25]

// -------------------------------------------------------------------------


// Task 3
// 3. Find the length of your array 
console.log(arr.length)

// -------------------------------------------------------------------------


// Task 4
// 4. Get the first item, the middle item and the last item of the array 
console.log(arr[0])  //For First element
md_ele=Math.floor(arr.length/2)
console.log(arr[md_ele])    
console.log(arr[arr.length-1]) //For Last element

// -------------------------------------------------------------------------


// Task 5
// 5. Declare an array called mixedDataTypes, put different data types in 
// the array and find the length of the array. The array size should be 
// greater than 5
var md_arr=[4,'Zubair',true,[2,4,6],{name:'Zubair',roll_no:84},89,7.9,'64']
console.log(md_arr)
console.log(md_arr.length)

// -------------------------------------------------------------------------


// Task 6
//Declare an array variable name itCompanies and assign initial values 
// Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon 
var itcomp=['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']

// -------------------------------------------------------------------------


// Task 7
// Print the array using console.log()
console.log(itcomp)

// -------------------------------------------------------------------------


// Task 8
// Print the number of companies in the array
console.log(`the number of companies is ${itcomp.length}`) 

// -------------------------------------------------------------------------


// Task 9
// Print the first company, middle and last company
console.log(`first company :${itcomp[0]}`) //For First Element
mid_element=Math.floor(itcomp.length/2)
console.log(`Middle company :${itcomp[mid_element]}`) //For Middle Element
console.log(`Last company :${itcomp[itcomp.length-1]}`) //For Last element

// -------------------------------------------------------------------------


// Task 10
// Print out each company 
console.log(itcomp)

// -------------------------------------------------------------------------


// Task 11
// Change each company name to uppercase one by one and print 
// them out 
console.log(itcomp[0].toUpperCase())
console.log(itcomp[1].toUpperCase())
console.log(itcomp[2].toUpperCase())
console.log(itcomp[3].toUpperCase())
console.log(itcomp[4].toUpperCase())
console.log(itcomp[5].toUpperCase())

// -------------------------------------------------------------------------


// Task 12
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, 
// IBM,Oracle and Amazon are big IT companies
console.log(`${itcomp.toString()} are big IT companies`)

// -------------------------------------------------------------------------


// Task 13
// Check if a certain company exists in the itCompanies array. If it exist 
// return the company else return a company is not found
var s_cmp=prompt("Search IT Companies :")
var index = itcomp.indexOf(s_cmp)
console.log(index)
if(index == -1){
    console.log(`${s_cmp} is not exit in IT companies`)
}
else{
    console.log(`${s_cmp} is exit in IT companies`)
}

// -------------------------------------------------------------------------


// Task 14
// 14. Filter out companies which have more than one 'o' without the filter 
// method 
// console.log(itcomp.filter('o'))?????????????????????????????????

// -------------------------------------------------------------------------


// Task 15
// Sort the array using sort() method 
console.log(itcomp.sort())

// -------------------------------------------------------------------------


// Task 16
// Reverse the array using reverse() method 
console.log(itcomp.reverse())

// -------------------------------------------------------------------------


// Task 17
// Slice out the first 3 companies from the array
console.log(itcomp.slice(0,3)) 

// -------------------------------------------------------------------------


// Task 18
// Slice out the last 3 companies from the array
console.log(itcomp.slice(3,6))

// -------------------------------------------------------------------------


// Task 19
// Slice out the middle IT company or companies from the array 
console.log(itcomp.slice(itcomp.length/2-1, itcomp.length/2))

// -------------------------------------------------------------------------


// Task 20
// Remove the first IT company from the array 
console.log(itcomp.shift())
console.log(itcomp)

// -------------------------------------------------------------------------


// Task 21
// Remove the middle IT company or companies from the array
itcomp.splice(itcomp.length/2-1, itcomp.length/2)
console.log(itcomp)

// -------------------------------------------------------------------------


// Task 22
// Remove the all company from the array 
console.log(itcomp.splice())




