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
