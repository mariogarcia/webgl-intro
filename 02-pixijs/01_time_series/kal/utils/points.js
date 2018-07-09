/**
 * This class has the x and the y point to be shown in the graph along
 * with the original information
 *
 * @since 0.1.0
 */
class Point {
    /**
     * Default constructor
     *
     * @param pointMap a map with the point information
     * @since 0.1.0
     */
    constructor(pointMap) {
        this.x = pointMap.x;
        this.y = pointMap.y;
        this.source = pointMap.source
    }
}

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
 * Returns the difference between the current date and the minimum
 * date available at the graph representing the x value.
 *
 * @param x string representation of a date
 * @param minX string representation of the minimum date at the graph
 * @param format format of the string date
 * @param interval difference unit (hours, days, minutes...)
 * @return the difference between the two dates
 * @since 0.1.0
 */
const diffX = (x, minX, format, interval) => {
    const minDate = moment(minX, format);
    const curDate = moment(x, format);

    curDate.diff(minDate, interval);
}

/**
 * @param y
 * @param minY
 * @return
 * @since 0.1.0
 */
const diffY = (y, minY) => {
    return y - minY
}

/**
 * Converts a given point with x as a date to its correspondent point
 *
 * @param conf information about the data set maxs and mins
 * @param point the source point
 * @return a converted point
 * @since 0.1.0
 */
const convertTo = (conf, point) => {
    const diff_x = diffX(point.x, conf.x.min, conf.format, conf.interval)
    const diff_y = diffY(point.y, conf.y.min)
    const newPnt = new Point({
        x: diff_x,
        y: diff_y,
        source: point
    })

    return newPnt
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
const convertTimeSeries = (points, timeFormat) => {
    const sourceList = Immutable.List(points)

    const minX = sourceList.min((p) => p.x).x
    const maxX = sourceList.max((p) => p.x).x
    const minY = sourceList.min((p) => p.y).y
    const maxY = sourceList.max((p) => p.y).y

    const conf = {
        format: timeFormat,
        interval: "days",
        x: {
            min: minX,
            max: maxX
        },
        y: {
            min: minY,
            max: maxY
        }
    }

    return sourceList
        .map((point) => convertTo(conf, new Point(point)))
};
