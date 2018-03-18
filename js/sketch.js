let words = [];
let initials = ["Pol", "Valverde"];

function setup() {
    words.push(initials[Math.floor(random(0, 2))]);
    $('#hola').html("/* <b><i>" + words[0] + "</i></b> */");
}

function draw() {
    if (!final()) {
        let similars = RiTa.similarByLetter(words[words.length - 1]);
        let randomIndex = Math.floor(random(0, similars.length));
        if (words.length == 1) words[0] = "<b><i>" + words[0] + "</i></b>";
        words.push(similars[randomIndex]);
        let text = words.reduce((text, word) => text + " " + word);
        $('#hola').html("/* " + text + " */");
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