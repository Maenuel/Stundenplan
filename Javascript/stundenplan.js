//DOM ready?
$(function () {

    var urlBerufe = "http://sandbox.gibm.ch/berufe.php";
    var urlKlasse = "http://sandbox.gibm.ch/klassen.php";
    var tabelle = "http://sandbox.gibm.ch/tafel.php";


    $.getJSON(urlBerufe)
        .done(function (data) {
            console.log(data);
            $('#berufWahl').empty().append('<option value="">Ihre Auswahl ...</option>');
            $.each(data, function (i, beruf) {
                $('<option value="' + beruf.beruf_id + '">' + beruf.beruf_name + '</option>').appendTo($('#berufWahl'));
            })
        })
        .fail(function () {
            // $('#message').html('Keine Verbindung zum Server');
        });

    $("#berufWahl").on("change", function () {
        /*$("#stundenplan").text(null);
        $("#woche").val(weekNumber);*/
        $("#klassenWahl").text(null);
        $.ajax({
            url: "http://sandbox.gibm.ch/klassen.php?beruf_id=" + this.value,
            async: false
        }).done(function (klassen) {
            fillSelectKlasse(klassen);

        });
    });

    $("#klassenWahl").on("change", function () {
        var woche = $("#woche").val(weekNumber);
        var id = this.value;
        fetchData(id, woche);
    });


    $('#anzeigen').on('click', function () {
        

    })





});