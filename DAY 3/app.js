// DAY 3 EXERCISE
// EXERCISE LEVEL 1

// Task 1
/*1. Declare firstName, lastName, country, city, age, isMarried, year
variable and assign value to it and use the typeof operator to check
different data types.*/
var firstName = 'Muhammad';
var lastName = 'Zubair';
var country = 'Pakistan';
var city = 'Hyderabad';
var age = 20;
var isMarried = false;
var year = 1999;
console.log(typeof(firstName),typeof(lastName),typeof(country),typeof(city),typeof(age),typeof(isMarried),typeof(year))

// -----------------------------------------------------------------------------


// Task 2
// 2. Check if type of '10' is equal to 10
console.log('10'===10)

// -----------------------------------------------------------------------------

// Task 3
// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8')===10)

// -----------------------------------------------------------------------------


// Task 4
// 4. Boolean value is either true or false.
// i. Write three JavaScript statement which provide truthy value.
// ii. Write three JavaScript statement which provide falsy value.
console.log(0 == false)
console.log(1 != true)

// -----------------------------------------------------------------------------


// 5. Figure out the result of the following comparison expression first
// without using console.log(). After you decide the result confirm it
// using console.log()
// i. 4 > 3    
// ii. 4 >= 3
// iii. 4 < 3
// iv. 4 <= 3
// v. 4 == 4
// vi. 4 === 4
// vii. 4 != 4
// viii. 4 !== 4
// ix. 4 != '4'
// x. 4 == '4'
// xi. 4 === '4'
// xii. Find the length of python and jargon and make a falsy
// comparison statement.

//i. 4 > 3  
//true
console.log(4>3)

//ii. 4 >= 3  
//true
console.log(4>=3)

//iii. 4 < 3  
//false
console.log(4<3)

//iv. 4 <= 3  
//false
console.log(4<=3)

//v. 4 == 4  
//true
console.log(4==4)

//vi. 4 === 4  
//true
console.log(4===4)

//vii. 4 != 4  
//false
console.log(4 != 4)

//viii. 4 !== 4  
//false
console.log(4 !== 4)

// ix. 4 != '4'
//false
console.log(4 != '4')


// x. 4 == '4'
//true
console.log(4 == '4')

// xi. 4 === '4'
//false
console.log(4 === '4')

// xii. Find the length of python and jargon and make a falsy
// comparison statement.
console.log('python'.length != 'jargon'.length)

// -----------------------------------------------------------------------------

// Task 6
/*6. Figure out the result of the following expressions first without using 
console.log(). After you decide the result confirm it by using 
console.log() */
//i. 4 > 3 && 10 < 12 
// true
console.log(4 > 3 && 10 < 12 )


// ii. 4 > 3 && 10 > 12 
// false
console.log( 4 > 3 && 10 > 12)


// iii. 4 > 3 || 10 < 12 
// true
console.log(4 > 3 || 10 < 12 )

// iv.4 > 3 || 10 > 12 
// true
console.log(4 > 3 || 10 > 12 )

// v . !(4 > 3)
// false
console.log(!(4 > 3)) 

// vi . !(4 < 3) 
// true
console.log(!(4 < 3) )

// vii. !(false) 
// true
console.log(!(false) )

// viii. !(4 > 3 && 10 < 12) 
// false
console.log(!(4 > 3 && 10 < 12) )

// ix .!(4 > 3 && 10 > 12)
// true
console.log(!(4 > 3 && 10 > 12))

// x .!(4 === '4')
// true
console.log(!(4 === '4') ) 

// xi. There is no 'on' in both dragon and python 
// false
console.log('dragon'.includes('on') != 'python'.includes("on"))

// -----------------------------------------------------------------------------


// Task 7
// 7. Use the Date object to do the following activities 
// i. What is the year today?
var date=new Date()
console.log(date.getFullYear()) 

// ii. What is the month today as a number? 
console.log(date.getMonth())

// iii. What is the date today? 
console.log(date.getDate())

// iv. What is the day today as a number? 
console.log(date.getDay())

// v. What is the hours now? 
console.log(date.getHours())

// vi. What is the minutes now? 
console.log(date.getMinutes())

// vii. Find out the numbers of seconds elapsed from January 1, 
// 1970 to now.
console.log(date.getTime())

// -----------------------------------------------------------------------------


// EXERCISE LEVEL 2
// Task 1
// 1. Write a script that prompt the user to enter base and height of the 
// triangle and calculate an area of a triangle (area = 0.5 x b x h). 
// Enter base: 20 
// Enter height: 10 
// The area of the triangle is 50
var b =+prompt("Enter Base :")
var h =+prompt("Enter Height :")
area=0.5*(b*h)
console.log("The Area of Triangle is ",area)

// -----------------------------------------------------------------------------

// Task 2
// 2. Write a script that prompt the user to enter side a, side b, and side c 
// of the triangle and and calculate the perimeter of triangle (perimeter 
// = a + b + c) 
//  Enter side a: 5 
//  Enter side b: 4 
//  Enter side c: 3 
// The perimeter of the triangle is 12
var a =+prompt("Enter side a :")
var b =+prompt("Enter side b :")
var c =+prompt("Enter side c :")
per=a+b+c
console.log('The perimeter of the triangle is ',per)

// -----------------------------------------------------------------------------

// Task 3
// Get length and width using prompt and calculate an area of rectangle 
// (area = length x width and the perimeter of rectangle (perimeter = 2 x 
// (length + width)) 

var l =+prompt("Enter length :")
var w =+prompt("Enter width :")
var ar=l*w
var pere=2*(l+w)
console.log("Area Of Rectangle : ",ar,"Perimeter Of Rectangle : ",pere)

// -----------------------------------------------------------------------------


// Task 4
// 4. Get radius using prompt and calculate the area of a circle (area = pi x 
//  r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14. 
var rad=+prompt("Enter Radius :")
const pi=3.14
area=pi*rad*rad
console.log("Area Of Circle :",area)
circum=2*pi*rad
console.log('circumference of a circle :',circum)

// -----------------------------------------------------------------------------


// Task 5
// Write a script that prompt a user to enters hours and rate per hour. 
// Calculate pay of the person? 
// 15. Enter hours: 40 
// 16. Enter rate per hour: 28 
// Your weekly earning is 1120
var hr=+prompt("Enter Hours : ")
var rat=+prompt("Enter Rate Per Hour : ")
console.log(`YOUR Earning is ${hr*rat}`)

// -----------------------------------------------------------------------------


// Task 6
// . If the length of your name is greater than 7 say, your name is long 
// else say your name is short. 
var user_name=prompt("Enter Your Name :")
if(user_name.length>7){
    console.log(`Your Name Is Long`)
}
else{
    console.log(`Your Name Is Short`) 
}

// -----------------------------------------------------------------------------


// Task 7
// Compare your first name length and your family name length and 
// you should get this output. 
var first_name=prompt("Enter First Name  :")
var family_name=prompt("Enter Family Name :")
console.log(first_name.length,family_name.length)
if(first_name.length>family_name.length){
    console.log(`Your Name ${first_name} is longer Than Family Name ${family_name}`)
}
else if(first_name.length<family_name.length){
    console.log(`Your Name ${first_name} is Shorter Than Family Name ${family_name}`)
}
else if(first_name.length=family_name.length){
    console.log(`Your Name ${first_name} is Equal Than Family Name ${family_name}`)
}
else{
    console.log("Please Enter Correct Data")
}

// -----------------------------------------------------------------------------

// Task 8
// Declare two variables myAge and yourAge and assign them initial 
// values and myAge and yourAge. 
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

// -----------------------------------------------------------------------------


// Task 9
// Using prompt get the year the user was born and if the user is 18 or 
// above allow the user to drive if not tell the user to wait a certain 
// amount of years. 
var b_year=+prompt("Enter birth year :")
var date = new Date()
var c_year=date.getFullYear()
age=c_year-b_year
age>=18
? console.log(`you are ${age} you are young enough to drive`)
: console.log(`you are ${age} you will be allowed to drive after ${18-age} years`)

// -----------------------------------------------------------------------------


// Task 10
// Write a script that prompt the user to enter number of years. 
// Calculate the number of seconds a person can live. Assume some one 
// lives just hundred years 
var your_age = prompt("enter your age")
var age_sec = your_age*60*60*24*364.25
console.log(`you lived ${age_sec} seconds`)

// -----------------------------------------------------------------------------


// Task 11
// Create a human readable time format using the Date time object 
// i. YYYY-MM-DD HH:mm 
// ii. DD-MM-YYYY HH:mm 
// iii. DD/MM/YYYY HH:mm
var yr = new Date().getFullYear()
var mth = new Date().getMonth()
var date = new Date().getDate()
console.log(`${yr}-${mth}-${date}:mm`)
console.log(`${date}-${mth}-${yr}:mm`)
console.log(`${date}/${mth}/${yr}:mm`) 

// -----------------------------------------------------------------------------


// Execise Level 3
var y = new Date().getFullYear()
var mon = new Date().getMonth()
var da = new Date().getDate()
var hrs = new Date().getHours()
var mint = new Date().getMinutes()
mon<=9 || da<=9 || hrs<=9 || mint<=9
? console.log(`${y}-0${mon}-0${da} 0${hrs}:0${mint}`)
: console.log(`${y}-${mon}-${da} ${hrs}:${mint}`)

