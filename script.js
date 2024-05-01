function calcularEnvioAereo() {
    var largo = parseFloat(document.getElementById('largo').value);
    var alto = parseFloat(document.getElementById('alto').value);
    var ancho = parseFloat(document.getElementById('ancho').value);
    var peso = parseFloat(document.getElementById('peso').value);

    var volumen = largo * alto * ancho;
    var pesoVolumetrico = volumen / 166;
    var pesoTasable = Math.max(peso, pesoVolumetrico);
    var costoTotal = pesoTasable * 4.5;

    document.getElementById('resultadoAereo').innerHTML = "Costo total del envío aéreo: $" + costoTotal.toFixed(2);
}

function calcularEnvioMaritimo() {
    var ancho = parseFloat(document.getElementById('ancho').value);
    var alto = parseFloat(document.getElementById('alto').value);
    var largo = parseFloat(document.getElementById('largo').value);

    var costoTotal = calcularCostoEnvioMaritimo(ancho, alto, largo);

    document.getElementById('resultadoMaritimo').innerHTML = "Costo total del envío marítimo: $" + costoTotal;
}

function calcularCostoEnvioMaritimo(ancho, alto, largo) {
    var volumen = ancho * alto * largo;
    var volumenPiesCubicos = volumen / 1728;
    var tarifaEnvio = 32;
    var costoTotal = volumenPiesCubicos * tarifaEnvio;
    return costoTotal.toFixed(2);
}

document.getElementById('borrarDatos').addEventListener('click', function() {
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.getElementById('resultadoAereo').innerHTML = '';
    document.getElementById('resultadoMaritimo').innerHTML = '';
});


