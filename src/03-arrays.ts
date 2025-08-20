// типізація масивів 


// цей тип частіше використовують 

// const planets: string[] = [
// "Mercury",
// "Venus",
// "Saturn"
// ];

// console.log(planets[0].length);

// or 

// const planets: Array<string> = [
// "Mercury",
// "Venus",
// "Saturn"
// ];

// console.log(planets[0].length);



// *******************

// interface Order  {
//     email: string;
//     total: number;
// }


// or 

type Order = {
    email: string;
    total: number;
}

// const orders: Array<Order> = [ 
const orders: Order[] = [
{ email: "hehe@gmail.com", total: 120 },
{ email: "hfdfdg@gmail.com", total: 320 },
{ email: "hehdldle@gmail.com", total: 20 },
];

console.log(orders);
