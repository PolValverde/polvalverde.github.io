class RandomWords {

    constructor(seed) {
        this.seed = seed;
        this.words = Array();
        this.words.push(initials[Math.floor(Math.random() * this.seed.length)]);
    }

    update() {
        this.similars = RiTa.similarByLetter(this.words[this.words.length - 1]);
        this.randomIndex = Math.floor(Math.random() * this.similars.length);
        if (this.words.length == 1) this.words[0] = "<b><i>" + this.words[0] + "</i></b>";
        this.words.push(this.similars[this.randomIndex]);
    }

    print(container, prefix, sufix) {
        this.prefix = prefix;
        this.sufix = sufix;
        this.text = this.words.reduce((text, word) => text + " " + word);
        $(container).html(prefix + " " + this.text + " " + sufix);
    }
}