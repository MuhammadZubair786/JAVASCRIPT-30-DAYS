// EXERCISE LEVEL 1 


// 1. Iterate 0 to 10 using for loop, do the same using while and do while  loop 
const countries = [ 'Albania','Bolivia', 'Canada', 'Denmark', 'Ethiopia','Finland','Germany','Hungary', 'Ireland', 'Japan', 'Kenya'] 
//FOR LOOP
console.log("FOR LOOP ==========")
for (var i=0;i<=10;i++){
    console.log(countries[i])
}

//WHILE LOOP
var j=0;
console.log("WHILE LOOP ==========")
while(j<=10){
    console.log(countries[j])
    j++;
}


// Do WHILE LOOP
var j=0;
console.log("Do WHILE LOOP ==========")
do{
    console.log(countries[j])
    j++;
}while(j<=10);

// -------------------------------------------------------------------------------


// Task 2
// 2. Iterate 10 to 0 using for loop, do the same using while and do while  loop 
//FOR LOOP
console.log("FOR LOOP ==========")
for (var i=10;i>=0;i--){
    console.log(countries[i])
}

//WHILE LOOP
var j=10;
console.log("WHILE LOOP ==========")
while(j>=0){
    console.log(countries[j])
    j--;
}


// Do WHILE LOOP
var j=10;
console.log("Do WHILE LOOP ==========")
do{
    console.log(countries[j])
    j--;
}while(j>=0);

// -------------------------------------------------------------------------------


// Task 3
// Iterate 0 to n using for loop 
var n=4
//FOR LOOP
console.log("FOR LOOP ==========")
for (var i=0;i<=4;i++){
    console.log(countries[i])
}

// -------------------------------------------------------------------------------


// Task 4
// Write a loop that makes the following pattern using console.log(): 
// # 
//  ## 
//  ### 
//  #### 
//  ##### 
//  ###### 
//  #######
for (var i=0;i<7;i++){
    for(var j=0;j<=i;j++){
        document.write(`# `)
       
    }
    document.write("<br>")
}

// -------------------------------------------------------------------------------


// Task 5
// Use loop to print the following pattern: 
// 0 x 0 = 0 
//  1 x 1 = 1 
//  2 x 2 = 4 
//  3 x 3 = 9 
//  4 x 4 = 16 
//  5 x 5 = 25 
//  6 x 6 = 36 
//  7 x 7 = 49 
// 8 x 8 = 64 
//  9 x 9 = 81 
// 10 x 10 = 100
for(i=0;i<=10;i++){
    document.write(`${i} x ${i}  = ${i*i}`)
    document.write("<br>")
    console.log(`${i} x ${i}  = ${i*i}`)
}

// -------------------------------------------------------------------------------


// Task 6
// Use loop to print the following pattern: 
//  i i^2 i^3 
//  0 0 0 
//  1 1 1 
//  2 4 8 
//  3 9 27 
//  4 16 64 
//  5 25 125 
//  6 36 216 
//  7 49 343 
//  8 64 512 
//  9 81 729 
//  10 100 1000
for(i=0;i<=10;i++){
    document.write(`${i}   ${i*i}   ${i*i*i}`)
    document.write("<br>")
    console.log(`${i}   ${i*i}   ${i*i*i}`)
}

// -------------------------------------------------------------------------------


// Task 7
// Use for loop to iterate from 0 to 100 and print only even numbers 
console.log("Even Number Between 0 to 100")
for(var j=0;j<=100;j++){
    if(j%2==0){
        console.log(`${j},`)
    }
}

// -------------------------------------------------------------------------------


// Task 8
// Use for loop to iterate from 0 to 100 and print only odd numbers 
console.log("Odd Number Between 0 to 100")
for(var j=0;j<=100;j++){
    if(j%2!=0){
        console.log(`${j},`)
    }
}

// -------------------------------------------------------------------------------



// Task 9



