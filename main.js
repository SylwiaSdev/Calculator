var pierwszy_czynnik_dzialania = undefined;
var operacja = undefined;

$(".btn").on("click", function() {
    var wartosc_przycisku = $(this).text();
    var obecna_wartosc = parseInt($(".result").text());

    if (obecna_wartosc == 0) {
        if (czyPrzyciskJestLiczba(wartosc_przycisku)) {
            aktualizujWynik(wartosc_przycisku);
        } else {
            wybranoDzialanie(wartosc_przycisku);
        }
    } else {
        if (czyPrzyciskJestLiczba(wartosc_przycisku)) {
            aktualizujWynik(String(obecna_wartosc) + String(wartosc_przycisku));
        } else {
            wybranoDzialanie(wartosc_przycisku);
        }
    }
});

function aktualizujWynik(wynik) {
    $(".result").text(wynik);
};

function czyPrzyciskJestLiczba(wartosc_przycisku) {
    if (!isNaN(parseInt(wartosc_przycisku))) {
        return true;
    } else {
        return false;
    }
};

function wybranoDzialanie(dzialanie) {
    if (pierwszy_czynnik_dzialania == undefined) {
        pierwszy_czynnik_dzialania = parseInt($(".result").text());
        aktualizujWynik(0);
    }

    if (dzialanie == "=") {
        oblicz();
    } else if (dzialanie == "+") {
        operacja = "dodawanie";
    } else if (dzialanie == "-") {
        operacja = "odejmowanie";
    } else if (dzialanie.toLowerCase() == "x") {
        operacja = "mnozenie";
    } else if ( dzialanie == "/") {
        operacja = "dzielenie";
    } else if ( dzialanie.toLowerCase() == "c") {
        resetKalkulatora();
    }
}

function oblicz() {
    var obecna_wartosc = parseInt($(".result").text());
    var wynik = 0;

    switch (operacja) {
        case "dodawanie": 
            wynik = dodawanie(pierwszy_czynnik_dzialania, obecna_wartosc);
            break;
        case "odejmowanie": 
            wynik = odejmowanie(pierwszy_czynnik_dzialania, obecna_wartosc);
            break;
        case "mnozenie": 
            wynik = mnozenie(pierwszy_czynnik_dzialania, obecna_wartosc);
            break;
        case "dzielenie": 
            wynik = dzielenie(pierwszy_czynnik_dzialania, obecna_wartosc);
            break;
        default: 
            console.log("nieznana operacja");
            break;
    } 

    aktualizujWynik(wynik);
}

function dodawanie(x,y) {
    return x+y;
}

function odejmowanie(x,y) {
    return x-y;
}

function mnozenie(x,y) {
    return x*y;
}

function dzielenie(x,y) {
    return x/y;
}

function resetKalkulatora() {
    pierwszy_czynnik_dzialania = undefined;
    operacja = undefined;
    aktualizujWynik(0)
}