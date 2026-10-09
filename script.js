/* =====================================
   EVENTIFY JAVASCRIPT
===================================== */


/* ==============================
   LOGO

   ABSICHTLICH:
   Das Logo reagiert,
   bringt den Nutzer aber nicht
   zurück zur Startseite.
============================== */

function logoProblem() {

    console.log(
        "Logo wurde angeklickt."
    );

}


/* ==============================
   SUCHFUNKTION

   ABSICHTLICH:
   Die Suchfunktion sieht
   funktionierend aus,
   tut aber nichts.
============================== */

function fakeSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) {
        return;
    }


    if (input.value.trim() === "") {

        alert(
            "Bitte Suchbegriff eingeben."
        );

        return;

    }


    /*
       ABSICHTLICH:
       Es wird keine Suche ausgeführt.
    */

    alert(
        "Keine Ergebnisse gefunden."
    );

}


/* ==============================
   EVENT FILTER
============================== */

function applyFilters() {


    const category =
        document.getElementById(
            "category"
        ).value;


    const price =
        document.getElementById(
            "price"
        ).value;


    const events =
        document.querySelectorAll(
            ".filter-event"
        );


    events.forEach(event => {


        const eventCategory =
            event.dataset.category;


        const eventPrice =
            parseFloat(
                event.dataset.price
            );


        const categoryMatch =
            category === "all" ||
            eventCategory === category;


        const priceMatch =
            price === "all" ||
            eventPrice <=
            parseFloat(price);


        if (
            categoryMatch &&
            priceMatch
        ) {

            event.style.display =
                "block";

        } else {

            event.style.display =
                "none";

        }

    });

}


/* ==============================
   TICKETPREIS
============================== */


const ticketOptions =
    document.querySelectorAll(
        'input[name="ticket"]'
    );


if (ticketOptions.length > 0) {


    ticketOptions.forEach(
        option => {


            option.addEventListener(
                "change",
                function() {


                    const price =
                        parseFloat(
                            this.value
                        );


                    const total =
                        document.getElementById(
                            "total"
                        );


                    if (total) {


                        total.textContent =
                            price
                                .toFixed(2)
                                .replace(
                                    ".",
                                    ","
                                )
                            + " €";


                    }

                }
            );


        }
    );

}


/* ==============================
   FORMULAR
============================== */

function completePurchase() {


    const firstname =
        document.getElementById(
            "firstname"
        ).value.trim();


    const lastname =
        document.getElementById(
            "lastname"
        ).value.trim();


    const email =
        document.getElementById(
            "email"
        ).value.trim();


    const payment =
        document.getElementById(
            "payment"
        ).value;


    /*
       ABSICHTLICHER FEHLER:

       Lieblingsfarbe wird NICHT
       überprüft, obwohl das Feld
       eigentlich unnötig ist.
    */


    if (
        firstname === "" ||
        lastname === "" ||
        email === "" ||
        payment === ""
    ) {


        /*
           ABSICHTLICH:
           Sehr allgemeine Fehlermeldung.
        */

        alert(
            "Bitte überprüfen Sie Ihre Angaben."
        );


        return;

    }


    /*
       ABSICHTLICH:
       Es wird keine vernünftige
       E-Mail-Validierung durchgeführt.
    */


    window.location.href =
        "success.html";

}