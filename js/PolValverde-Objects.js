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

class dot {

    constructor(array, colors, diameter, distanceIndex, max, angle) {
        this.n = 0;
        if (!array[0]) this.id = 0;
        else this.id = array[array.length-1].id + 1;
        this.x = width / 2;
        this.y = height / 2;
        this.colors = colors;
        this.indexColor = this.id % this.colors.length;
        this.r = this.colors[this.indexColor].r;
        this.g = this.colors[this.indexColor].g;
        this.b = this.colors[this.indexColor].b;
        this.diameter = diameter;
        this.c = distanceIndex;
        this.max = max;
        if (!angle) this.angle = 137.5;
        else this.angle = angle;
    }

    update(array) {
        if (this.n === this.max) {
            array.shift();
        } else {
            // Dot angle, position multiplied by the default angle
            this.a = this.n * this.angle;
            // Radius, distance between the center of the skecth and the dot
            this.rad = this.c * sqrt(this.n);
            // x position, radius times the cosinus of the poiint angle
            this.x = this.rad * cos(this.a) + width / 2;
            // y position, radius times the sinus of the poiint angle
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