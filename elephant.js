

function getMenu () {
    let elephantParts = [
        {"name": "ears", "price": 50},
        {"name": "legs", "price": 90},
        {"name": "trunk", "price": 250},
        {"name": "tail", "price": 110},
        {"name": "belly", "price": 500},
        {"name": "ribs", "price": 295}
    ]

    return elephantParts
}

function placeOrder (elephantPart, customer, quantity, cookTemperature) {
    let order = {
        "price": elephantPart.price,
        "quantity": quantity,
        "partOrdered": elephantPart.name,
        "cookTemperature": cookTemperature,
        "customer": customer 
    }

    return order
}

let menu = getMenu()

let placedOrder = placeOrder(menu[3], "Meg Ducharme", 1, "rare")

