 let getMenu = () => [
    {"name": "ears", "price": 50},
    {"name": "legs", "price": 90},
    {"name": "trunk", "price": 250},
    {"name": "tail", "price": 110},
    {"name": "belly", "price": 500},
    {"name": "ribs", "price": 295}
]

let placeOrder = (elephantPart, customer, quantity, cookTemperature) => ({
    "price": elephantPart.price,
    "quantity": quantity,
    "partOrdered": elephantPart.name,
    "cookTemperature": cookTemperature,
    "customer": customer 
})

let cookFood = order => ({
    "part": order.partOrdered,
    "wasCookedToOrder": false,
    "quantity": order.quantity,
    "cookTime": 2
})

cookFood(placeOrder(getMenu()[3], "Meg Ducharme", 1, "rare"))
