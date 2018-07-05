const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const createRandomPoints = (maxX, maxY, howMany) => {
    const unordered = [...Array(howMany).keys()].map((n) => {
        return {
            x: getRandomInt(maxX),
            y: getRandomInt(maxY)
        }
    });

    return Immutable
        .List(unordered)
        .sortBy((point) => point.x);
};
