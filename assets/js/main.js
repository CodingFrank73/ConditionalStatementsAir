
let sliderValue = document.getElementById("slider");

function checkAirQuality() {

    let lhcValue;
    let lheValue;
    let bgColor;


    if (sliderValue.value > 100) {
        lhcValue = "Unhealthy for sensitve groups";
        lheValue = "Generable publics not likely affected";
        bgColor = '#ff0000'

    } else if (sliderValue.value > 50) {
        lhcValue = "Moderate";
        lheValue = "Acceptable quality";
        bgColor = '#ffff00'

    } else {
        lhcValue = "Good";
        lheValue = "Little or no risk";
        bgColor = '#00ff00'
    }

    document.getElementById("lhc").innerHTML = `<p>${lhcValue}</p>`;
    document.getElementById("lhe").innerHTML = `<p>${lheValue}</p>`;
    document.getElementById("valueInput").innerHTML = sliderValue.value;
    document.body.style.backgroundColor = bgColor;
}


function calc(zahl) {

    console.log("Tetst");
    let delta;
    let ergebnis;
    let message;

    if (zahl > 27) {
        delta = zahl - 27;
        ergebnis = mult(delta);
    }

    if (ergebnis === undefined) {
        message = "Berechnung nicht möglich"
    } else {
        message = ergebnis;
    }

    document.getElementById("erg1").innerHTML = `<p> Ergebniss: ${message}`;
}

function mult(delta) {
    return delta * 2;
}

function calc2(zahl1, zahl2) {

    let summe = parseInt(zahl1) + parseInt(zahl2);

    if (zahl1 == zahl2) {
        message = summe * 5;
    } else {
        message = "Da beide Werte nicht gleich sind, findet keine Berechnung statt"
    }

    document.getElementById("erg2").innerHTML = `<p> Ergebnis: ${message}`;
}

