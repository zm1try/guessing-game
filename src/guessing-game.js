var mid = 0;
class GuessingGame {
    constructor() {}
    setRange(min, max) {

    }

    guess() {
        mid = (max - min)/2;
        return (mid);
    }

    lower() {
        min = mid;
    }

    greater() {
        max = mid;
    }
}

module.exports = GuessingGame;
