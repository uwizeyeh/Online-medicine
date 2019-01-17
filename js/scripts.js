// Front- End Logic
function check() {
    var antibiot = document.pharmacy.antibiot.value;
    console.log("antibiot");
    var painKiller = document.pharmacy.painKiller.value;
    console.log("painKiller")
    var AntimalarialDrugs = document.pharmacy.AntimalarialDrugs.value;
    console.log("AntimalarialDrugs")
    var price = 0;


    if (antibiot == 0) {
        price = price + 1000;
    };
    
    
    if (painKiller == 0) {
        price = price + 400;
    };
    
    if (AntimalarialDrugs == 0) {
        price = price + 2500;
    }

    console.log("price")
    document.getElementById("price").style.visibility = "visible";
    document.getElementById("correctNumber").innerHTML = "HERE IS YOUR TOTAL PRICE: " + price ;
    console.log("price")

};

// Business-Logic


