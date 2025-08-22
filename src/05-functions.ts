// - Типізація функцій 
// - типізація аргументів
// - тип значення, яке повертає функція
// - опціональні параметри 
// - типізація мпетодів

// 1 - 

// interface User {
//     username: string;
//     age: number;
// }


// const allUsers: User[] = [
//     { username: "poly", age: 20 },
//     { username: "max", age: 31 },
//     { username: "alina", age: 30 },
// ];


// function getUserNames(users: User[]): string[] {
//     return users.map((user) => user.username);
// }

// const names = getUserNames(allUsers);

// console.log(names);


// 2- 

// function greet(username: string, age?: number): void {
//     if (age !== undefined) {
//     console.log(`${username}, ${age}`);

//     return;
//     }
//         console.log(`${username}`);
    
// }

// greet("poly", 15);
// greet("jacob");

// 3 - methods

// interface User {
//     username: string;
//     greet: (message: string) => string;
// }

// const jacob: User = {
// username: "Jacob",
// greet: (message) => {
//     return message;
// },
// };

// jacob.greet("Welcome!");

// 4 - 


// interface Player {
//     username: string;
//     isOnline: boolean;
// }

// const allPlayers: Player[] = [
// { username: "poly", isOnline: false},
// { username: "jacob", isOnline: true},
// { username: "alla", isOnline: false},

// ];

// interface GamePlatform {
//     getOnlinePlayers: (players: Player[]) => Player[];
//     getPlayerNames: (players: Player[]) => string[];
// }

// const platform: GamePlatform = {
//     getOnlinePlayers: (players) => {
//         return players.filter((player) => player.isOnline);
//     },

//     getPlayerNames: (players) => {
//         return players.map((player) => player.username);
//     },
// };

// platform.getOnlinePlayers(allPlayers);
// platform.getPlayerNames(allPlayers);

// Стрілочні функції 
// type ArrowFunc = (name: string) => void;

// const arrowFunc: ArrowFunc = (name): void => {
//     console.log(name);
// }
// arrowFunc("Alila");

// or 

// const arrowFunc = (name: string): void => {
//   console.log(name);
// };

// ********** 
// type Person = { name: string; age?: number };


// const arrowFunc = ({name, age}: Person): void => {
//       console.log(name, age);
//     };

//     arrowFunc({ name: "Max", age: 25});

