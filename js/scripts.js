// Front- End Logic
function check() {
    var antibiot = document.pharmacy.antibiot.value;
    console.log("antibiot");
    var painKiller = document.pharmacy.painKiller.value;
    console.log("painKiller")
    var price = 0;


    if (antibiot == "Amoxicilliine") {
        price = price + 1000;
    };
    if (painKiller == "Ibuprofen") {
        price = price + 400;
    };
    if (painKiller == "paracetamol") {
        price = price + 100;
    }

    console.log("price")
    document.getElementById("price").style.visibility = "visible";
    document.getElementById("correctNumber").innerHTML = "HERE IS YOUR TOTAL PRICE: " + price ;
    console.log("price")

};

// Business-Logic


