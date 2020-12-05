# katas-codewars

Kata 1 

Armstrong Number

An Armstrong number is a number such that the sum of its digits raised to the third power is equal to the number itself. For example, 371 is an Armstrong number, since 3^3 + 7^3 + 1^3 = 371. It should return false if empty string or string is passed. It should return false for negative numbers as well.

When you pass 0 or 1 , it should return true.

Kata 2

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
