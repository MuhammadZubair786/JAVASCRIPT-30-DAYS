
// EXERCISE LEVEL 1 
// Task 1
// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , 
// give feedback:You are old enough to drive but if not 18 give feedback 
// to wait for the years he supposed to wait for.
var b_year=+prompt("Enter birth year :")
var date = new Date()
var c_year=date.getFullYear()
age=c_year-b_year
if(age>=18){
 console.log(`you are ${age} you are young enough to drive`)
}
else{
 console.log(`you are ${age} you will be allowed to drive after ${18-age} years`)
}

// -----------------------------------------------------------------------------------------------


// Task 2
// Compare the values of myAge and yourAge using if … else. Based on 
// the comparison log to console who is older (me or you). Use 
// prompt(“Enter your age:”) to get the age as input. 
var my_Age=+prompt("MY AGE : ")
var your_Age=+prompt("Your AGE : ")
if(my_Age>your_Age){
    console.log(`I am ${my_Age-your_Age} Year older Than You`)
}
else if(my_Age>your_Age){
    console.log(`I am ${your_Age-my_Age} Year Younger Than You`)
}
else if(my_Age=your_Age){
    console.log(`Both Are Same Age`)
}
else{
    console.log("Please provide Correct data ")
}

// -----------------------------------------------------------------------------------------------


// Task 3
// If a is greater than b return 'a is greater than b' else 'a is less than b'. 
// Try to implement in to ways 
// o using if else 
let a=+prompt("Enter Value Of a :")
let b=+prompt("Enter Value Of b :")
if(a>b){
    console.log(`${a} is greater Than ${b}`)
}
else if(a<b){
    console.log(`${b} is greater Than ${a}`)
}
else if(a==b){
    console.log(`${a} is Equal  Than  ${b}`)
}
else{
    console.log("Please Enter Correct Data")
}

// o ternary operator. 
let a1=+prompt("Enter Value Of a :")
let b1=+prompt("Enter Value Of b :")
a>b
? console.log(`${a1} is greater Than ${b1}`)
: console.log(`${b1} is greater Than ${a1}`)

// -----------------------------------------------------------------------------------------------


// Task 4
// Even numbers are divisible by 2 and the remainder is zero. How do 
// you check if a number is even or not using JavaScript? 
var numb=+prompt("Enter Number : ")
if(numb%2==0){
    console.log(`${numb} is Even Number`)
}
else{
    console.log(`${numb} is Odd] Number`)
}

// -----------------------------------------------------------------------------------------------

// EXERCISE LEVEL 2
// Task 5
// 1. Write a code which can give grade to students according to theirs 
// scores: 
// o 80-100, A 
// o 70-89, B 
// o 60-69, C 
// o 50-59, D 
// o 0-49, F 

var Per=+prompt("Enter Percentage: ")
if(Per>=80){
    console.log('Grade  : A')
}
else if(Per>=70 && Per<=79){
    console.log('Grade  : B')
}
else if(Per>=60 && Per<=69){
    console.log('Grade  : C')
}
else if(Per>=50 && Per<=59){
    console.log('Grade  : D')
}
else{
    console.log('Grade  : F')
}

// -----------------------------------------------------------------------------------------------


// Task 6
// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user 
// input is: 
// o September, October or November, the season is Autumn. 
// o December, January or February, the season is Winter. 
// o March, April or May, the season is Spring 
// o June, July or August, the season is Summer 

var mon=prompt("Enter First 3 Letter of Month")
mon=mon.toLowerCase()
if( mon=='sep' || mon=='september' || mon=='oct' || mon=='nov' ||  mon=='oct' || mon=='november'){
    console.log("the season is Autumn")
    
}

else if( mon=='dec' || mon=='december' || mon=='jan' || mon=='january' ||  mon=='feb' || mon=='february'){
    console.log("the season is Winter")

}

 else if(mon=='mar' || mon=='march' || mon=='apr' || mon=='april' ||   mon=='may'){
    console.log("the season is Spring")
    
 }

 else if(mon=='jun' || mon=='june' || mon=='jul' || mon=='july' ||  mon=='aug' || mon=='august'){
    console.log("the season is Summer")
   
 }

 else{
    console.log("PLease Enter Correct Data")
 }

// -----------------------------------------------------------------------------------------------



 //Task 7
//  Check if a day is weekend day or a working day. Your script will take 
//  day as an input. 
//   What is the day today? Saturday 
//   Saturday is a weekend. 
//   What is the day today? saturDaY 
//   Saturday is a weekend. 
//   What is the day today? Friday 
//   Friday is a working day. 
//   What is the day today? FrIDAy 
//   Friday is a working day.
 
let day = prompt("enter day")
let today = day.toLowerCase()
if(today==='monday' || today==="tuesday" || today==="wednesday" ||day==="thursday" || day==='friday'){
    console.log(`${day} is a working day`)
}
else{
console.log(`${day} is a weekend`)
}

// -----------------------------------------------------------------------------------------------


// EXERCISE LEVEL 1 
// 1. Write a program which tells the number of days in a month. 
//  Enter a month: January 
//  January has 31 days. 
//  Enter a month: JANUARY 
//  January has 31 day 
//  Enter a month: February 
//  February has 28 days. 
var month = prompt('enter a month')
month = month.toLowerCase()
if(month==="january" || month==="march" || month==="may" || month==="july" || month==="august" ||month==="october" ||month==="december"){
    console.log(`${month} has 31 days`)
}
else if(month==="april" || month==="june" || month==="september" || month==="november"){
    console.log(`${month} has 30 days`)
}
else if(month==="february"){
    console.log(`${month} has 28 days`)

}
   
// -----------------------------------------------------------------------------------------------


