// Kata 1 

const armstrong = num => num === num.toString().split``.reduce((a, b) => a + Math.pow(b * 1, 3), 0);

// Kata 2

const bloodMoon = r => (r * r) / 4;
