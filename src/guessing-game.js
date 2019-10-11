class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min; //set the min value
        this.max = max; //set the max value
    }

    guess() {
        this.number = Math.ceil((this.max + this.min) / 2); //an attempt
        return this.number;
    }

    lower() {
        this.max = this.number; //change the max value to current number
    }

    greater() {
        this.min = this.number; //change the min value to current number
    }
}

module.exports = GuessingGame;
