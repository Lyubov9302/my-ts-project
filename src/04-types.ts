
//1 - Union 
// - Літеральні типи ( )

// "pending", "shipped", "delivered", "canceled"


// type Status = "pending" | "shipped" | "delivered" | "canceled";

// let status: Status = "pending";

// status = "delivered";

// console.log(status);

// ************************ 2  
// delivery: "drone", "courier", ... 
// deliveryTime: "morning", "afternoon",... 

type Delivery = "drone" | "courier" | "pickup";
type deliveryTime =  "morning" | "afternoon" | "evening";



interface Order {
    username: string;
    email: string;
    total: number;
    delivery: Delivery;
    deliveryTime: deliveryTime;
}

const order: Order = {
    username: "Jacob",
    email: "haha@gmail.com",
    total: 366,
    delivery: "courier",
    deliveryTime: "morning",
}

console.log(order.deliveryTime === "morning");