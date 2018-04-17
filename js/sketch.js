let spiral = Array(1);
let ratio;
let max;
let diameter;

let div;

let song;
let time;

let background;
let execute;
let sequence = [1, 0, 0, 0];
let loop = false;

let sign;

let colors = [{
    r: 255,
    g: 0,
    b: 0
}, {
    r: 226,
    g: 87,
    b: 30
}, {
    r: 255,
    g: 127,
    b: 0
}, {
    r: 255,
    g: 255,
    b: 0
}, {
    r: 0,
    g: 255,
    b: 0
}, {
    r: 150,
    g: 191,
    b: 51
}, {
    r: 0,
    g: 0,
    b: 255
}, {
    r: 75,
    g: 0,
    b: 130
}, {
    r: 139,
    g: 0,
    b: 255
}];

function preload() {
    soundFormats('mp3');
    song = loadSound("./assets/song.mp3");
    background = new p5.Phrase('background', changeBackground, sequence);
    execute = new p5.Part();
    execute.addPhrase(background);
    execute.setBPM(140);
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    canvas.parent('hola');

    max = 2000;
    ratio = 8;
    diameter = 10;

    spiral.fill(new dot(spiral, colors, diameter, ratio, max));

    div = createDiv(`<input placeholder="Pol Valverde!">`);
    div.style("color", "white");
    div.style("font-size", "95px");
    div.style("font-family", "Source Code Pro");
    div.style("font-weight", "800");

    sign = createDiv('<b>Pol Valverde i Valverde</br>Interaction & Graphic Designer</b></br><a href="mailto:pol.valverde.valverde@gmail.com">Say hello! :)</a>');
    sign.style("color", "white");
    sign.style("font-size", "18px");
    sign.style("font-family", "Source Code Pro");
    sign.style("font-weight", "400");

    song.loop();
}

function draw() {
    time = song.currentTime();
    clear();

    if (time > 27.5) {
        sign.style("color", "white");
        if (loop == false) {
            execute.loop();
            loop = true;
        }
        spiral.map(dot => dot.randomDraw())
    } else if (time <= 27.5) {
        spiral.map(dot => dot.update(spiral));
        spiral.map(dot => dot.draw())
        spiral.push(new dot(spiral, colors, diameter, ratio, max));
        div.center();
        sign.style("color", "red");
        sign.position(30, 30);
        execute.stop();
        $('body').css("background-color", `white`);
        loop = false;
    }

}

function changeBackground() {
    let randomColor = Math.floor(Math.random() * colors.length);
    $('body').css("background-color", `rgb(${colors[randomColor].r},${colors[randomColor].g},${colors[randomColor].b}`);
    div.position(Math.random() * width, Math.random() * height);
    sign.position(Math.random() * width, Math.random() * height);
}