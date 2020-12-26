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
