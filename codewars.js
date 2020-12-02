// Kata 1 

const armstrong = num => num === num.toString().split``.reduce((a, b) => a + Math.pow(b * 1, 3), 0);
