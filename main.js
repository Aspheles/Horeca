var chart = [];
var reducer = (accumulator, currentValue) => accumulator + currentValue["price"];
var products = {
    Fris: { productName: "Fris", price: 2 },
    Bier: { productName: "Bier", price: 5 },
    Wijn: { productName: "Wijn", price: 8 }
}
function takeOrder() {
    while (order !== "stop") {
        var order = prompt("What product do you want to add to your chart (Fris, Bier or Wijn) type stop to finish your order");
        if (order === "stop") {
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
    document.write("Total $ " + chart.reduce(reducer, 0));
}

function countItems(){
    var itemCount = {Fris: 0, Bier: 0, Wijn: 0}
    
    for(var j =0; j < chart.length; j++){
        console.log(chart);
        if(chart[j].productName === "Fris"){
            itemCount.Fris++;
            console.log(itemCount.Fris)
        }else if(chart[j].productName === "Bier"){
            itemCount.Bier++; 
        
        }else if(chart[j].productName === "Wijn"){
            itemCount.Wijn++;
        }
    
        

    }
    return itemCount;
}



takeOrder();





