class RandomWords {

    constructor(seed) {
        this.seed = seed;
        this.words = [];
        this.words.push(this.seed[Math.floor(Math.random() * this.seed.length)]);
    }

    update() {
        this.similars = RiTa.similarByLetter(this.words[this.words.length - 1]);
        this.randomIndex = Math.floor(Math.random() * this.similars.length);
        if (this.words.length === 1) this.words[0] = `<b><i>${this.words[0]}</i></b>`;
        this.words.push(this.similars[this.randomIndex]);
    }

    print(container, prefix, sufix) {
        this.prefix = prefix;
        this.sufix = sufix;
        this.text = this.words.reduce((text, word) => `${text} ${word}`);
        $(container).html(`${prefix} ${this.text} ${sufix}`);
    }
}

// THIS CLASS REQUIRES P5.JS
class dot {

    constructor(array, colors, diameter, distanceIndex, max, angle) {
        this.n = 0;
        this.id = (array[0]) ? array[array.length-1].id + 1 : 0;
        this.x = width / 2;
        this.y = height / 2;
        this.indexColor = this.id % colors.length;
        this.r = colors[this.indexColor].r;
        this.g = colors[this.indexColor].g;
        this.b = colors[this.indexColor].b;
        this.diameter = diameter;
        this.c = distanceIndex;
        this.max = max;
        this.angle = (angle) ? angle : 137.5;
    }

    update(array) {
        if (this.n === this.max) array.shift()
        else {
            // Dot angle, position multiplied by the default angle
            this.a = this.n * this.angle;
            // Radius, distance between the center of the phillotaxis and the dot
            this.rad = this.c * sqrt(this.n);
            // x position, radius times the cosinus of the point angle
            this.x = this.rad * cos(this.a) + width / 2;
            // y position, radius times the sinus of the point angle
            this.y = this.rad * sin(this.a) + height / 2;
            // Update n position
            this.n++;
        }
    }

    draw() {
        fill(this.r, this.g, this.b);
        noStroke();
        ellipse(this.x, this.y, this.diameter);
    }

    randomDraw() {
        fill(this.r, this.g, this.b);
        noStroke();
        ellipse(Math.random()*width, Math.random()*height, this.diameter);
    }
}