var chart = [];


var products = {
    Fris : { productName: "Fris", price: 2 },
    Bier : { productName: "Bier", price: 5 },
    Wijn : { productName: "Wijn", price: 8 }
}

function takeOrder() {
    while(order !== "stop"){
    var order = prompt("What product do you want to add to your chart (Fris, Bier or Wijn) type stop to finish your order");
    var amount = prompt("How many " + products[order].productName + " do you want to add to your chart");
    if (Object(products).hasOwnProperty(order)) {
        for (i = 0; i < amount; i++) {
            chart.push(products[order]);
        }

    }
}
    console.log(chart);
    console.log("$ " + amount * products[order].price);
    

}


takeOrder();

