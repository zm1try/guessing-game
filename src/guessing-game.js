
class GuessingGame {
    constructor() {}
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
    guess() {
        var mid = Math.ceil((this.max + this.min)/2);
        this.mid = mid;
        return(this.mid);
    }

    lower() {
            this.max = this.mid;
    }

    greater() {
            this.min = this.mid;
    }
}

module.exports = GuessingGame;
