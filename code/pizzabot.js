const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:
//alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian} , ${hawaiian} and ${pepperoni}`);



//let orderCorrect = false;
//let orderName = "";

// while (!orderCorrect) {
//      orderName = prompt("Enter the name of the pizza you want to order today.");

//   orderCorrect = checkOrderName(orderName)
//   if (!orderCorrect) {
//     alert("Not available on the menu, please try again");
//   }
// // }

// const orderQuantity = prompt(`How many of ${orderName} do you want?`);

// const orderTotal = totalCost(orderQuantity);

// const cookingTimeTotal = cookingTime(orderQuantity);

// alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTimeTotal} minutes.`);

function checkOrderName() {
    const nameOfPizza = document.getElementById("inputPizza").elements.pizzaType.value;
    if (nameOfPizza == vegetarian || nameOfPizza == hawaiian || nameOfPizza == pepperoni) {
        document.getElementById("heading").innerHTML = `How many of ${nameOfPizza}s do you want?`
        return true;
    } else {
        return false; 
    }
}

function totalCost(orderQuantity) {
    return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {

    if (orderQuantity <= 2) {
        return 10;
    } else if (orderQuantity <=5 && orderQuantity >= 3) { 
        return 15;
    } else if (orderQuantity >= 6) {
        return 20;
    }
}

function showForm2() {
    if (checkOrderName()) {
        document.getElementById("form1").style.display = "none";
        document.getElementById("form2").style.display = "block";
        
    } else {
        alert("Please choose another pizza");
    }
}

function orderPizza() {
    const orderName = document.getElementById("inputPizza").elements.pizzaType.value;
    const quantity = document.getElementById("howManyPizzas").elements.quantity.value;

    confirmOrder(orderName, quantity)
}

function confirmOrder(orderName, quantity) {
    const totalPrice = totalCost(quantity)
    const totalTime = cookingTime(quantity)

    document.getElementById("form2").style.display = "none";

    const orderDetailsDiv = document.getElementById("orderDetails")
    orderDetailsDiv.innerHTML = `<p>Great, I'll get started on your ${orderName} right away, it will cost ${totalPrice} kr. The pizzas will take ${totalTime} minutes.<p>`;
}