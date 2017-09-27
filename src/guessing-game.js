
class GuessingGame {
    constructor() {}
    setRange(min, max) {

    }

    guess() {
        var mid = (max - min)/2;
        console.log(mid);
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
