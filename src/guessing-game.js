
class GuessingGame {
    constructor() {}
    setRange(min, max) {

    }

    guess() {
        var mid = (this.max - this.min);
        console.log(this.mid);
        return this.mid;
    }

    lower() {
        this.min = this.mid;
    }

    greater() {
        this.max = this.mid;
    }
}

module.exports = GuessingGame;
