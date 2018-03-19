let words = [];
let initials = ["Pol", "Valverde"];
let random;

function setup() {
    random = new RandomWords(initials);
}

function draw() {
    if (!final()) {
        random.update();
        random.print('#hola', "/*", "*/");
        if (middle()) $('body').css("background-color", "rgb(255, 255, 255)");
    } else {
        $('#hola').append(" <b><i>Pol Valverde i Valverde / Interaction Designer</i></b>");
        noLoop();
    }
}

function middle() {
    return ($('#hola').height() > ($('.hola').height()) / 2);
}

function final() {
    return ($('#hola').height() >= ($('.hola').height()) - 40);
}