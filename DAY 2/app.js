// EXERCISE LEVEL 1
console.log('EXERCISE LEVEL 1===')

// TASK 1
// 1. Declare a variable named challenge and assign it to an initial  value '30 Days Of JavaScript'
var challenge='30 Days Of JavaScript';

// -------------------------------------------------------------------------------------------------


// Task 2
// 2 .Print the string on the browser console using console.log()
console.log('String :',challenge)

// -------------------------------------------------------------------------------------------------

// Task 3
// 3.Print the length of the string on the browser console using console.log()
console.log('length of the string : '+challenge.length)

// -------------------------------------------------------------------------------------------------


// Task 4
// 4.Change all the string characters to capital letters using toUpperCase() method 
console.log('Upper Case  of the string : '+challenge.toUpperCase())

// -------------------------------------------------------------------------------------------------

// Task 5
// 5. Change all the string characters to lowercase letters using toLowerCase() method 
console.log('Upper Case  of the string : '+challenge.toLowerCase())

// -------------------------------------------------------------------------------------------------

// Task 6
// 6.Cut (slice) out the first word of the string using substr() or substring() method 
console.log('Substring : ',challenge.substring(0,7))
console.log('Substr : ',challenge.substr(0,7))

// -------------------------------------------------------------------------------------------------


// Task 7
// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript. 
console.log(challenge.slice(3))

// -------------------------------------------------------------------------------------------------


// Task 8
// 8.Check if the string contains a word Script using includes() method 
console.log(challenge.includes('Script'))

// -------------------------------------------------------------------------------------------------

// Task 9
// Split the string into an array using split() method 
console.log(challenge.split(''))

// -------------------------------------------------------------------------------------------------


// Task 10
// 10 .Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))

// -------------------------------------------------------------------------------------------------


// Task 11
// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split thestring at the comma and change it to an array.
var str='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(str.split(','))

// -------------------------------------------------------------------------------------------------


// Task 12
// 12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method. 
console.log(challenge.replace('JavaScript','Python'))

// -------------------------------------------------------------------------------------------------


// Task 13
// 13 .What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method. 
console.log(challenge.charAt(15))


// -------------------------------------------------------------------------------------------------


// Task 14
// 14.What is the character code of J in '30 Days Of JavaScript' stringusing charCodeAt()
console.log(challenge.charCodeAt('J'))

// -------------------------------------------------------------------------------------------------


// Task 15
// 15 .Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log('First Index Of a : '+challenge.indexOf('a'))

// -------------------------------------------------------------------------------------------------


// Task 16
// 16 .Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript. 
console.log('Last Index Of a : ',challenge.lastIndexOf('a'))

// -------------------------------------------------------------------------------------------------


// Task 17
// 17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var sentence='You cannot end a sentence with because because because is a conjunction';
console.log('First Index Of Because : '+sentence.indexOf('because'))

// -------------------------------------------------------------------------------------------------


// Task 18
// 18.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var sentence='You cannot end a sentence with because because because is a conjunction';
console.log('Last Index Of Because : '+sentence.lastIndexOf('because'))

// -------------------------------------------------------------------------------------------------


// Task 19
// 19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var sentence='You cannot end a sentence with because because because is a conjunction';
console.log('Search Because  From String : '+sentence.search('because'))

// -------------------------------------------------------------------------------------------------


// Task 20
// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
var sen=' 30 Days Of JavaScript  '
console.log(sen.trim(''))

// -------------------------------------------------------------------------------------------------


// Task 21
// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("String start with : "+challenge.startsWith('3'))

// -------------------------------------------------------------------------------------------------


// Task 22
// 22 . Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("String End with : "+challenge.endsWith('t'))

// -------------------------------------------------------------------------------------------------


// Task 23
// 23 . Use match() method to find all the a’s in 30 Days Of JavaScript 
 console.log(challenge.match(/a/gi))

// -------------------------------------------------------------------------------------------------


// Task 24
// 24 . Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
str1='30 Days of '
str2='JavaScript'
console.log(str1.concat(str2))

// -------------------------------------------------------------------------------------------------


// Task 25
// 25. Use repeat() method to print 30 Days Of JavaScript 2 times 
console.log(challenge.repeat(2))

// -------------------------------------------------------------------------------------------------



// EXERCISE LEVEL 2
console.log('EXERCISE LEVEL 2===')

// Task 1
/*1. Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart
than reaching down and lifting people up.' by John
Holmes teaches us to help one another.*/
console.log("The quote 'There is no exercise better for the heart \nthan reaching down and lifting people up.' by John Holmes \nteaches us to help one another.")

// -------------------------------------------------------------------------------------------------


// Task 2
/*2. Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about
pity, it is about love. Charity and love are the same
-- with charity you give love, so don't just give
money but reach out your hand instead."*/
console.log("'Love is not patronizing and charity isn't about \npity, it is about love. Charity and love are the same-- with charity you give love, so don't just givemoney but reach out your hand instead.'")

// -------------------------------------------------------------------------------------------------



// Task 3
// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal. 
var a1='10',a2=10;
console.log(+a1===a2)

// -------------------------------------------------------------------------------------------------


// Task 4
// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10. 
console.log(+ Math.round('9.8') === 10)

// -------------------------------------------------------------------------------------------------


//Task 5
// Check if 'on' is found in both python and jargon 
console.log('python'.includes('on')=='jargon'.includes('on'))

// -------------------------------------------------------------------------------------------------


// Task 6
// I hope this course is not full of jargon. Check if jargon is in the sentence.
var set=' I hope this course is not full of jargon.'
console.log(set.includes('jargon'))

// -------------------------------------------------------------------------------------------------


//Task 7
// Generate a random number between 0 and 100 inclusively. 
console.log(Math.floor(Math.random()*101 ))

// -------------------------------------------------------------------------------------------------


//Task 8
// Generate a random number between 50 and 100 inclusively. 
console.log(Math.floor(Math.random()* (100-50)+50))

// -------------------------------------------------------------------------------------------------


// Task 9
//Generate a random number between 0 and 255 inclusively. 
console.log(Math.floor(Math.random() * 256))

// -------------------------------------------------------------------------------------------------


// Task 10
// Access the 'JavaScript' string characters using a random number. 
// ???????????????????????


// -------------------------------------------------------------------------------------------------


// Task 11
// Use console.log() and escape characters to print the following pattern. 
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t 25\t125')

// -------------------------------------------------------------------------------------------------


// Task 12
/*Use substr to slice out the phrase because because because from
the following sentence:'You cannot end a sentence with because
because because is a conjunction'*/
str='You cannot end a sentence with because because because is a conjunction'
console.log(str.slice(31,54))

// -------------------------------------------------------------------------------------------------



// EXERCISE LEVEL 3
console.log('EXERCISE LEVEL 3===')

// Task 1
/*1. 'Love is the best thing in this world. Some found their love and some 
are still looking for their love.' Count the number of word love in this 
sentence.*/
var str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
str = str.toLowerCase()
console.log(str.match(/love/g))

// -------------------------------------------------------------------------------------------------


// Task 2
/*Use match() to count the number of all because in the following 
sentence:'You cannot end a sentence with because because 
because is a conjunction'*/
var str1='You cannot end a sentence with because because because is a conjunction'
str1 = str1.toLowerCase()
console.log(str1.match(/because/g))

// -------------------------------------------------------------------------------------------------


//Task 3
/*3. Clean the following text and find the most frequent word (hint, use
replace and regular expressions).
 const sentence = '%I $am@% a %tea@cher%, &and& I
lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding
as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching
m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s
mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript
&is al@so $the $resu@lt of &love& of tea&ching'*/
const senten = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
var sent=senten
 for(var i=0;i<=sent.length;i++){
 sent=sent.replace('%','')
 sent=sent.replace('@','')
 sent=sent.replace('&','')
 sent=sent.replace(';','')
 sent=sent.replace('?','')
 sent=sent.replace('$','')
 sent=sent.replace('#','')
}

console.log(sent)


// -------------------------------------------------------------------------------------------------
// Task 4
/*4. Calculate the total annual income of the person by extracting the
numbers from the following text. 'He earns 5000 euro from salary per
month, 10000 euro annual bonus, 15000 euro online courses per
month.' */

let sal_det = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let sal = sal_det.match(/\d+/g)
console.log(eval(sal.join("+")))






















