const person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
    // Inherited property from a prototype
    greet: function () {
        console.log("Hello!");
    }
};

for (const property in person) {
    console.log(property, person[property]); // Access property by name
}

// Modifying Object Properties:
const product = {
    name: "T-Shirt",
    price: 15.99,
    isOnSale: false
};

for (const property in product) {
    if (property === "price" || property === "isOnSale") {
        product[property] = true; // Update price and sale status
    }
}

console.log(product); // { name: "T-Shirt", price: true, isOnSale: true }


// Checking for Property Existence:
const user = {
    username: "pemba",
    email: "pemba@example.com"
};

const hasNameProperty = "name" in user; // false (name doesn't exist)

console.log(hasNameProperty);

