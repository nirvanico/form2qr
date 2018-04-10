var qrcode = new QRCode("qrcode");

function makeCode () {      
    var elText = document.getElementById("website");
    
    qrcode.makeCode(elText.value);
}

makeCode();

$("#website").
    on("blur", function () {
        makeCode();
    }).
    on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });