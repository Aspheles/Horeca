var chart = [];
var reducer = (accumulator, currentValue) => accumulator + currentValue["price"];
var itemCount = { Fris: 0, Bier: 0, Wijn: 0, Bitterballen: 0, BitterballenXL: 0 }
var products = {
    Fris: { productName: "Fris", price: 2 },
    Bier: { productName: "Bier", price: 5 },
    Wijn: { productName: "Wijn", price: 8 },
    Bitterballen: { productName: "Bitterballen", price: 12 },
    BitterballenXL: { productName: "BitterballenXL", price: 22 }
}
function takeOrder() {
    while (order !== "stop") {
        var order = prompt("What product do you want to add to your chart (Fris, Bier or Wijn, snack) type stop to finish your order");
        if (order === "snack") {

            order = prompt("What product do you want to add to your chart Bitterballen (8 pieces) or BitterballenXL (16 pieces)");
        }
        else if (order === "stop") {
            break;
        }
        var amount = prompt("How many " + products[order].productName + " do you want to add to your chart");
        if (Object(products).hasOwnProperty(order)) {
            for (i = 0; i < amount; i++) {
                chart.push(products[order]);
            }
        }
    }
    console.log(chart);
    console.log(countItems());
    document.write("Fris : " + itemCount.Fris + "<br>");
    document.write("Bier : " + itemCount.Bier + "<br>");
    document.write("Wijn : " + itemCount.Wijn + "<br>");
    document.write("Bitterballen : " + itemCount.Bitterballen + "<br>");
    document.write("Bitterballen XL : " + itemCount.BitterballenXL + "<br>");
    document.write("Total $ " + chart.reduce(reducer, 0));
}
function countItems() {
    for (var j = 0; j < chart.length; j++) {
        if (chart[j].productName === "Fris") {
            itemCount.Fris++;
        } else if (chart[j].productName === "Bier") {
            itemCount.Bier++;

        } else if (chart[j].productName === "Wijn") {
            itemCount.Wijn++;

        } else if (chart[j].productName === "Bitterballen") {
            itemCount.Bitterballen++;

        } else if (chart[j].productName === "BitterballenXL") {
            itemCount.BitterballenXL++;
        }
    }
    return itemCount;
}
takeOrder(); 
