/**
 * Gets a random number between 0 and the number passed as argument
 *
 * @param max maximum possible value of the random number
 * @return a random number between 0 and the value passed as argument
 * @since 0.1.0
*/
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

/**
 * Converts a list of points with the x having a date instead of an
 * integer to a list of points with the x converted to an integer.
 *
 * @param timeFormat format of the date (x axis)
 * @param points points to be converted
 * @return a list with the converted points
 * @since 0.1.0
 */
const convertTimeSeries = (timeFormat, points) => {

};
