// Kata 1 

const armstrong = num => num === num.toString().split``.reduce((a, b) => a + Math.pow(b * 1, 3), 0);

// Kata 2

const bloodMoon = r => (r * r) / 4;

// Kata 3 

// solution 1 

function itinerary(travel) {
  let itinerary = [];
  for (let i = 0; i < travel.length; i++) {
    itinerary.push(travel[i].in);
    itinerary.push(travel[i].out);
  }
  return itinerary.filter((v, i) => v !== itinerary[i + 1]).join("-");
}

// solution 2 

const itinerary = travel => travel.map(x=>x.in + '-' + x.out).join('-').replace(/(...)-(?=\1)/g, ''); 

// Kata 4 

// solution 1 

function car(p,n){
if (n == 0) {
    return p.toFixed(2);
  }
  p = p - p * (n > 2 ? 0.1 : 0.2);
  n--;
  return car(p, n);
}

// solution 2 

const car = (p, n) => (p * Math.pow(0.8, Math.min(2, n)) * Math.pow(0.9, Math.max(0, n - 2))).toFixed(2);

// Kata 5 

function factor(n){
 let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i);
  }
  return arr;
}

// solution 2 

const factor = n => n !== null ? new Array(n).fill(0).map((v,i) => i + 1).filter(d => n % d === 0) : [];

// Kata 6 

const annulusArea = a => Number(((Math.PI * (a * a)) / 4.0).toFixed(2));

// kata 7 

const emoji = {
  "[[f9.smile]]": ":)",
  "[[f9.grin]]": ":D",
  "[[f9.smiley]]": "=)",
  "[[f9.sohappy]]": "XD",
  "[[f9.tongue]]": ":P",
  "[[f9.wink]]": ";)",
  "[[f9.sad]]": ":(",
  "[[f9.slant]]": ":/",
  "[[f9.surprised]]": ":O",
  "[[f9.catface]]": ":3",
  "[[f9.cool]]": "B)",
  "[[f9.unimpressed]]": ":|",
  "[[f9.angry]]": ">:|",
  "[[f9.kissing]]": "^.^",
  "[[f9.dazed]]": "*_*",
  "[[f9.dance1]]": "<(^.^<)",
  "[[f9.dance2]]": "(>^.^)>",
  "[[f9.heart]]": "<3"
};
const insert = string => {
  return string.replace(/(\[\[f9\.(\w+)\]\])/g, match => emoji[match]);
};

// Kata 8 

const harmonPointTrip = (a, b, c) => ((((a - c) / (b - c)) * b + a) / (1 + (a - c) / (b - c))).toFixed(2);

// kata 9

const isABeforeM = arr => arr.findIndex(v => v === "a") < arr.findIndex(v => v === "m");

// kata 10 

const cupAndBalls = (ball, pairs) => pairs.reduce((ball, [a, b]) => (a == ball ? b : b == ball ? a : ball), ball);

// kata 11

function f(x, cc) {
  let arr = Object.values(cc);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x && arr[i + 1] === 0) return 0;
    if (arr[i] === x) return arr[i + 1] || arr[0];
  }
}

// solution 2 
const f = (x,{a,b,c}) => ({[a]:b,[b]:c,[c]:a})[x] ;

// kata 12 

function climbingTime(height, up, down) {
  if (up <= 0 || down < 0 || height <= 0) return false;
  for (var i = up, j = 0; ; i += up - down, j++) {
    if (i >= height) return j + 1;
  }
}

// kata 13

function anArgument() {
  let arg = [...arguments];
  if (arg.length === 0) {
    return `You didn't give me any arguments.`;
  }
  if (arg.length === 1) {
    return `You gave me 1 argument and it is "${arg[0]}".`;
  }
  if (arg.length === 2) {
    return `You gave me 2 arguments and they are "${arg[0]}" and "${arg[1]}".`;
  }
  let str = "";
  for (let i = 0; i < arg.length; i++) {
    if (i < arg.length - 2) {
      str += `"${arg[i]}", `;
    }
    if (i === arg.length - 2) {
      str += `"${arg[i]}" `;
    }
    if (i === arg.length - 1) {
      str += `and "${arg[i]}".`;
    }
  }
  return `You gave me ${arg.length} arguments and they are ${str}`;
}

// kata 14 

const cupAndBalls = (ball, arr) =>
  arr.reduce((ball, [a, b]) => (a == ball ? b : b == ball ? a : ball), ball);


// kata 15

const quarterOf = month => Math.ceil(month/3);

// kata 16

const unusualFive = () => ['a','a','a','a','a'].length;

// kata 17 

const commas = num => (+num.toFixed(3)).toString().replace(/\B(?=(\d{3})+(\.|$))/g, ",");

// kata 18 

function acronymBuster(string) {
  const arr = [];
  const acr = {
    KPI: "key performance indicators",
    EOD: "the end of the day",
    TBD: "to be decided",
    WAH: "work at home",
    IAM: "in a meeting",
    OOO: "out of office",
    NRN: "no reply necessary",
    CTA: "call to action",
    SWOT: "strengths, weaknesses, opportunities and threats"
  };
  string = string.replace(/[A-Z]{3,}/g, v => {
    if (acr[v]) return acr[v];
    else {
      arr.push(v);
      return v;
    }
  });
  if (arr.length)
    return `${arr[0]} is an acronym. I do not like acronyms. Please remove them from your email.`;
  return string.replace(/(\.\s+[a-z]|^[a-z])/g, v => v.toUpperCase());
}

// kata 19 /*

function maxBall(v0) {
  const v = (v0 * 1000 * 10) / 3600;
  return Math.round(v / 9.81);
}

// Kata 20 

function countSmileys(arr) {
  return arr.filter(v => v.match(/(:|;)(-|~)?(\)|D)/)).length;
}
