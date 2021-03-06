# katas-codewars

// Kata 1 

Armstrong Number

An Armstrong number is a number such that the sum of its digits raised to the third power is equal to the number itself. For example, 371 is an Armstrong number, since 3^3 + 7^3 + 1^3 = 371. It should return false if empty string or string is passed. It should return false for negative numbers as well.

When you pass 0 or 1 , it should return true.

// Kata 2

Blood moon 

Alan is going to watch the Blood Moon (lunar eclipse) tonight for the first time in his life. But his mother, who is a history teacher, thinks the Blood Moon comes with an evil intent. The ancient Inca people interpreted the deep red coloring as a jaguar attacking and eating the moon. But who believes in Inca myths these days? So, Alan decides to prove to her mom that there is no jaguar. How? Well, only little Alan knows that. For now, he needs a small help from you. Help him solve the following calculations so that he gets enough time to prove it before the eclipse starts.

Three semicircles are drawn on AB, AD, and AF. Here CD is perpendicular to AB and EF is perpendicular to AD.

Task
Given the radius of the semicircle ADBCA, find out the area of the lune AGFHA (the shaded area).

// Kata 3
Airport itinerary

When you travel around the world you pass though different airports.

TRN -> FCO -> JFK
And then return back to home

JFK - TRN
In order to propose the unique list of airports that your trip uses we have to create an itinerary feature that can compress the list of airports including only the list of unique in/out combination.

For example, a trip with:

[TRN-FCO] [FCO-JFK] [JFK-TRN]
Should be represented as:

TRN-FCO-JFK-TRN
That is the unique list of airport steps.

Now in our database we save the travel as a list of objects with in/out properties and you will receive that list always sorted in the right way.

[
  {in: "TRN", out: "FCO"},
  {in: "FCO", out: "JFK"},
  {in: "JFK", out: "FCO"}
]
Now we have to create a helper function itinerary for JS that extract the unique airport list:

travel = itinerary([
  {in: "TRN", out: "FCO"},
  {in: "FCO", out: "JFK"},
  {in: "JFK", out: "FCO"}
]); // TRN-FCO-JFK-FCO

// Kata 4 

Car Depreciation

You own a great car website that helps people make decisions about buying the best new car for them. You decide that if you had a calculator on the website which lets people know their car's value after depreciation in a couple of years, would be a great idea!

Write a function that takes the car's value when new (p) and return its value to 2 decimal places in the nth year (n).

Yearly depreciation:

Year 1 = 20%

Year 2 = 20%

Year 3+ = 10% per year (ie. after 3 years the cars value depreciates 10% every year)

Return your answer as a string with 2 decimal places.

// Kata 5

Write a function that calculate factor for a given number. Return empty array if null value given.

Example: 12 = [1,2,3,4,6,12]
Note: 0 < n <= 10000000

// kata 6 

When given the length of the arrow as a, where a is an integer and ≥ 1, calculate the area of the annulus (the grey ring).

annulus

Round the answer to two decimal places. In case you need pi, you can use the standard Math.PI/M_PI.

// kata 7

Oh no! Tinder's emoji decryption has gone down, and they need your help!

People are receiving raw code instead of the emojis the know, love and rely upon. It's total chaos!
And without your help, the millenials will no longer be able to express themselves!!

While the engineers sort out the issue, the PR people have created a set of stand-in emojis using common `UTF-8` characters, and they need you write a function that can help implement them.

OH YEAH, WE'RE TAKIN' IT BACK TO 2001 GUYS!

Below is a legend of the stand-in emojis and the codes they are associated with:

``` [[f9.smile]] => :) [[f9.grin]] => :D [[f9.smiley]] => =) [[f9.sohappy]] => XD [[f9.tongue]] => :P [[f9.wink]] => ;) [[f9.sad]] => :( [[f9.slant]] => :/ [[f9.surprised]] => :O [[f9.catface]] => :3 [[f9.cool]] => B) [[f9.unimpressed]] => :| [[f9.angry]] => >:| [[f9.kissing]] => ^.^ [[f9.dazed]] => *_* [[f9.dance1]] => <(^.^<) [[f9.dance2]] => (>^.^)> [[f9.heart]] => <3 ```
Input:
Your function will be passed a string representing a single message containing any number and variety of the above emoji codes:

```javascript let input = 'Hey [[f9.kissing]]! Sorry I think I had one too many last night... [[f9.dazed]]' ```
Output:
Your function must output a new string with the codes removed and the stand-in emojis in their place:

```javascript let output = 'Hey ^.^! Sorry I think I had one too many last night... *_*' ```
Note: The input strings must not be modified, as they are archived in raw form. Other than substituting in the new emojis, the strings' data mustn't be otherwise modified.
Have fun!

// Kata 8

The image shows how we can obtain the Harmonic Conjugated Point of three aligned points A, B, C.

We choose any point L, that is not in the line with A, B and C. We form the triangle ABL

Then we draw a line from point C that intersects the sides of this triangle at points M and N respectively.

We draw the diagonals of the quadrilateral ABNM; they are AN and BM and they intersect at point K

We unit, with a line L and K, and this line intersects the line of points A, B and C at point D

The point D is named the Conjugated Harmonic Point of the points A, B, C. You can get more knowledge related with this point at: (https://en.wikipedia.org/wiki/Projective_harmonic_conjugate)

If we apply the theorems of Ceva (https://en.wikipedia.org/wiki/Ceva%27s_theorem) and Menelaus (https://en.wikipedia.org/wiki/Menelaus%27_theorem) we will have this formula:

source: imgur.com

AC, in the above formula is the length of the segment of points A to C in this direction and its value is:

AC = xA - xC

Transform the above formula using the coordinates xA, xB, xC and xD

The task is to create a function harmon_pointTrip(), that receives three arguments, the coordinates of points xA, xB and xC, with values such that : xA < xB < xC, this function should output the coordinates of point D for each given triplet, such that

xA < xD < xB < xC, or to be clearer

let's see some cases:

harmonPointTrip(xA, xB, xC) ------> xD # the result should be expressed as a string with `.toFixed(2)`
harmonPointTrip(2, 10, 20) -----> "7.14" # (2 < 7.14 < 10 < 20, satisfies the constraint)
harmonPointTrip(3, 9, 18) -----> "6.75"

// kata 9 

Write a function that accepts an array of randomized letters "a" to "z" and returns true if the letter "a" is before the letter "m" in the array, and returns false if the letter "m" is before the letter "a".

Letters in the provided array will only be downcase and there will only be one instance of a letter in the array, resulting in an array that is 26 elements long.

Example:
randoArray = "q a z w s x e d c r f v t g b y h n u j m i k o l p".split(' ')
aBeforeM(randoArray) // => true
randoArray2 = "p o l i k u j m y h n t g b r f v e d c w s x q a z".split(' ')
aBeforeM(randoArray2) // => false

// Kata 10

Ronny the robot is watching someone perform the Cups and Balls magic trick. The magician has one ball and three cups, he shows Ronny which cup he hides the ball under (b), he then mixes all the cups around by performing multiple two-cup switches (arr). Ronny can record the switches but can't work out where the ball is. Write a programme to help him do this.

Rules:

There will only ever be three cups.
Only two cups will be swapped at a time.
The cups and their switches will be refered to by their index in a row of three, beginning at one. So [[1,2]] means the cup at position one, is swapped with the cup at position two.
Arr will be an array of integers 1 - 3 organised in pairs.
There won't be any empty sub-arrays.
If arr is just an empty array b should be returned.
Examples:

(b) = 2, (arr) = [[1,2]]

The ball is under cup number : 1

(b) = 1, (arr) = [[2,3],[1,2],[1,2]]

The ball is under cup number : 1

(b) = 2, (arr) = [[1,3],[1,2],[2,1],[2,3]]

The ball is under cup number : 3

// Kata 11

Alternating Among Three Values
Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

What is the most efficient way to cycle among three values? Write a function f so that it satisfies

  f(a) = b
  f(b) = c
  f(c) = a
EXAMPLE
  f( 3, { a:3, b:4, c:5 } ) => 4
 
 // kata 12
 
 A worm is climbing up a bamboo. How long it will be continuing, if every day it`s climbing up the bamboo "x" amount of meters every day, and each night it slides down for "y" meters?

In this kata you have height, up meters, down meters. Write the function, that calculate and return "days".

function climbingTime(height, up, down)
Check arguments to be positive numbers, return false if not.

// kata 13

Your task is to write a function 'anArgument' that doesn't have a fixed number of parameters. The function should count the arguments passed to it and return a string that specifies how many arguments were passed in, and states what they were.
If the function call is
anArgument("pigs", "giraffes", "unicorns");
The returned string should say
'You gave me 3 arguments and they are "pigs", "giraffes" and "unicorns".'
If there is only one argument passed in, the string should say
'You gave me 1 argument and it is "pigs".'
If there are two arguments, the string should say
'You gave me 2 arguments and they are "pigs" and "giraffes".'
If there are no arguments, the string should say
'You didn't give me any arguments.'
###Punctuation and grammar notes
There are commas after each argument except the last and second-last, which are separated with 'and'
Arguments are presented in quotation marks
The singular: '1 argument' as opposed to multiples: '3 arguments'
Verb agreement: 'and it is' as opposed to 'and they are'

// kata 14 

Ronny the robot is watching someone perform the Cups and Balls magic trick. The magician has one ball and three cups, he shows Ronny which cup he hides the ball under (b), he then mixes all the cups around by performing multiple two-cup switches (arr). Ronny can record the switches but can't work out where the ball is. Write a programme to help him do this.

Rules:

There will only ever be three cups.
Only two cups will be swapped at a time.
The cups and their switches will be refered to by their index in a row of three, beginning at one. So [[1,2]] means the cup at position one, is swapped with the cup at position two.
Arr will be an array of integers 1 - 3 organised in pairs.
There won't be any empty sub-arrays.
If arr is just an empty array b should be returned.
Examples:

(b) = 2, (arr) = [[1,2]]

The ball is under cup number : 1

(b) = 1, (arr) = [[2,3],[1,2],[1,2]]

The ball is under cup number : 1

(b) = 2, (arr) = [[1,3],[1,2],[2,1],[2,3]]

The ball is under cup number : 3

// kata 15 

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// kata 16

Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// kata 17
Your task is to convert a given number into a string with commas added for easier readability. The number should be rounded to 3 decimal places and the commas should be added at intervals of three digits before the decimal point. There does not need to be a comma at the end of the number.
You will receive both positive and negative numbers.
Examples
commas(1) == "1"
commas(1000) == "1,000"
commas(100.2346) == "100.235"
commas(1000000000.23) == "1,000,000,000.23"
commas(-1) == "-1"
commas(-1000000.123) == "-1,000,000.123"

// kata 18

Laura really hates people using acronyms in her office and wants to force her colleagues to remove all acronyms before emailing her. She wants you to build a system that will edit out all known acronyms or else will notify the sender if unknown acronyms are present.
Any combination of three or more letters in upper case will be considered an acronym. Acronyms will not be combined with lowercase letters, such as in the case of 'KPIs'. They will be kept isolated as a word/words within a string.
For any string:
All instances of 'KPI' must become "key performance indicators"
All instances of 'EOD' must become "the end of the day"
All instances of 'TBD' must become "to be decided"
All instances of 'WAH' must become "work at home"
All instances of 'IAM' must become "in a meeting"
All instances of 'OOO' must become "out of office"
All instances of 'NRN' must become "no reply necessary"
All instances of 'CTA' must become "call to action"
All instances of 'SWOT' must become "strengths, weaknesses, opportunities and threats"
If there are any unknown acronyms in the string, Laura wants you to return only the message:
'[acronym] is an acronym. I do not like acronyms. Please remove them from your email.'
So if the acronym in question was 'BRB', you would return the string:
'BRB is an acronym. I do not like acronyms. Please remove them from your email.'
If there is more than one unknown acronym in the string, return only the first in your answer.
If all acronyms can be replaced with full words according to the above, however, return only the altered string.
If this is the case, ensure that sentences still start with capital letters. '!' or '?' will not be used.

// kata 19 

/*
You throw a ball vertically upwards with an initial speed v (in km per hour). The height h of the ball at each time t is given by h = v*t - 0.5*g*t*t where g is Earth's gravity (g ~ 9.81 m/s**2). A device is recording at every tenth of second the height of the ball. For example with v = 15 km/h the device gets something of the following form: (0, 0.0), (1, 0.367...), (2, 0.637...), (3, 0.808...), (4, 0.881..) ... where the first number is the time in tenth of second and the second number the height in meter.
Task
Write a function max_ball with parameter v (in km per hour) that returns the time in tenth of second of the maximum height recorded by the device.
Examples:
max_ball(15) should return 4
max_ball(25) should return 7
Notes
Remember to convert the velocity from km/h to m/s or from m/s in km/h when necessary.
The maximum height recorded by the device is not necessarily the maximum height reached by the ball.
*/

// kata 20 

Description:
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :] 
Example cases:
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

