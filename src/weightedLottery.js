export const weightedLottery = weights => {
    let containerArray = [];
    Object.keys(weights).forEach(key => {
        for (let i = 0; i < weights[key]; i++) {
            containerArray.push(key);
        }
    })

    return containerArray[Math.floor((Math.random() * containerArray.length))];
}


// This will take in an object like this
// const weights = {
//     winning: 1,
//     losing: 10000
// }

// Or put the object in the weights argument section like this.
// console.log(weightedLottery({winning: 1, losing: 10000}))