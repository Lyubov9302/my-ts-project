
// - Типізація обєктів
// - Використання interface
// - опціональні (?) та readonly


// один спосіб типізації 
// type Person = {
//     username: string;
//     email: string;
//     isOnline: boolean;
//     age: number;
// };


// інший спосіб (бажано використовувати цей) 
 interface Person {
        username: string;
        email: string;
        isOnline: boolean;
        readonly age: number;
        location?: {
            country: string;
            city?: string;
        };
    };


const jacob: Person = {
    username: "Jacob",
    email: "balabla@gmail.com",
    isOnline: false,
    age: 30,
    location: {
        country: "Poland",
        
    }
}

const poly: Person = {
    username: "Poly",
    email: "lalala@gmail.com",
    isOnline: true,
    age: 36
}

console.log(jacob);
console.log(poly);