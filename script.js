function calcularTaxa() {
    var valorSemTaxa = parseFloat(document.getElementById('valorSemTaxa').value);
    var parcelas = parseInt(document.getElementById('parcelas').value);

    var taxasPorBandeira = {
        'visa/master': {
            1: 0.0315,
            2: 0.0539,
            3: 0.0612,
            4: 0.0685,
            5: 0.0757,
            6: 0.0828,
            7: 0.0899,
            8: 0.0969,
            9: 0.1038,
            10: 0.1106,
            11: 0.1106,
            12: 0.1106,
            'default': 0.0138
        },
        'hiper/elo': {
            1: 0.0419,
            2: 0.0647,
            3: 0.0720,
            4: 0.0792,
            5: 0.0863,
            6: 0.0933,
            7: 0.1003,
            8: 0.1072,
            9: 0.1141,
            10: 0.1208,
            11: 0.1275,
            12: 0.1341,
            'default': 0.0258
        },
        // Adicione outras bandeiras aqui
    };

    var resultadoHTML = "";

    for (var bandeira in taxasPorBandeira) {
        var taxa = taxasPorBandeira[bandeira][parcelas] || taxasPorBandeira[bandeira]['default'];
        var taxaDebito = taxasPorBandeira[bandeira]['default']; // Taxa para débito
        var taxaTotalDebito = valorSemTaxa - (valorSemTaxa * taxaDebito);
        var taxaTotal = valorSemTaxa * taxa;
        var totalComTaxa = valorSemTaxa + taxaTotal;
        var assumirpeju = valorSemTaxa - taxaTotal;

        resultadoHTML += "<br><li class='resultado-item'>";
        resultadoHTML += "<span class='item-label'>" + bandeira.toUpperCase() + "</span>";
        resultadoHTML += "<span class='item-value'> Taxa: " + (taxa * 100).toFixed(2) + "%</span><br>";
        resultadoHTML += "<span class='item-value'>No Débito (Você recebe): R$ " + taxaTotalDebito.toFixed(2) + "</span><br>";
        resultadoHTML += "<span class='item-value'>Cliente pagando as taxas: R$ " + "<strong>" + totalComTaxa.toFixed(2) + "</strong>" + "</span><br>";
        resultadoHTML += "<span class='item-value'>Assumindo as taxas (Você recebe): R$ " + assumirpeju.toFixed(2) + "</span><br>";
        resultadoHTML += "</li>";
    }

    document.getElementById('resultado').innerHTML = resultadoHTML;
}

function repassarTaxa() {
    var valorComTaxa = parseFloat(document.getElementById('valorComTaxa').value);
    alert("Você deve cobrar R$ " + valorComTaxa.toFixed(2) + " do cliente, incluindo as taxas.");
}