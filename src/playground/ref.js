const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
};

// const getFirstName = (fullName) => fullName.split(" ")[0];

console.log(getFirstName("Mike Smith"));


const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());