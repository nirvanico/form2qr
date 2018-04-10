var qrcode = new QRCode('qrcode');

function makeCode() {
    var elText = document.getElementById('website');

    qrcode.makeCode(elText.value);
}

makeCode();

$('#generateqr').click(function () {
    makeCode();
});

$('#printqr').click(function() {
    
    $('#qrcode').printThis();
    
});