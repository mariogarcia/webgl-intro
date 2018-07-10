/**
 * Minimal functionality to be able to draw line graphs
 *
 * @since 0.1.0
 */
class KalGraph {

    /**
     * Default constructor. It receives minimal config properties
     * for the graph
     *
     * @param properties general properties of the graph
     * @since 0.1.0
     */
    constructor(properties) {
        this.width = properties.width;
        this.height = properties.height;
        this.app = new PIXI.Application({
            width: properties.width,
            height: properties.height,
            antialiasing: true,
            transparent: false,
            resolution: 1,
            backgroundColor: properties.backgroundColor
        });

        this.appendViewTo = properties.appendViewTo;
        this.graphics = new PIXI.Graphics();

        if (!this.appendViewTo) {
            throw new Error("Graph appendViewTo property should be provided!");
        }

        this.appendViewTo.appendChild(this.app.view);
        this.app.stage.addChild(this.graphics)
    }

    createShiftedPoints (points) {
        return points.unshift({x: 0, y: 0});
    }

    normalizePoints (points) {
        return this.createShiftedPoints(points).zip(points).skip(1);
    }

    /**
     * Creates a simple line from two different points
     *
     * @param next pair of points. Each of them are of type {x: 0, y: 0}
     * @param props general props
     * @return an object of type PIXI.Graphics
     * @since 0.1.0
     */
    createLine (next, props) {
        const origin = next[0];
        const destination = next[1];
        const norm = (n, ref) => ref - n;
        const lineGraphics = new PIXI.Graphics();

        lineGraphics.lineStyle(props.width, props.color, 1);
        lineGraphics.moveTo(origin.x, norm(origin.y, props.refY));
        lineGraphics.lineTo(destination.x, norm(destination.y, props.refY));
        lineGraphics.x = props.refX;
        lineGraphics.y = props.refY;

        return lineGraphics
    }

    /**
     * Creates a tooltip showing the x and y of a point
     *
     * @param x
     * @param y
     * @return an object of type PIXI.Text rendering the current point coordinate
     * @since 0.1.0
     */
    createTooltipText (x, y) {
        var style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 15,
        });

        const tooltip = new PIXI.Text(`(${x}, ${y})`, style)
        tooltip.x = x + 10
        tooltip.y = y - 20

        return tooltip
    }

    createPoints (next, props) {
        const origin = next[0]

        // #TODO I don't know why points needed adjustements
        const normX = (n) => n + 40;
        const normY = (n) => 200 - n;
        const x = normX(origin.x)
        const y = normY(origin.y)

        const pointsGraphics = new PIXI.Graphics();
        const tooltip = this.createTooltipText(x, y)

        // point style and position
        pointsGraphics.lineStyle(0);
        pointsGraphics.beginFill(props.color, 0.5);
        pointsGraphics.drawCircle(x, y, 5)
        pointsGraphics.endFill();

        // Tooltip behavior
        pointsGraphics.interactive = true
        pointsGraphics.on('mouseover', () => {
            this.app.stage.addChild(tooltip);
        });

        pointsGraphics.on('mouseout', () => {
            this.app.stage.removeChild(tooltip);
        });

        return pointsGraphics
    }

    /**
     * Draws a line in the current graph with the points passed
     * as first parameter
     *
     * @param points a list of points of type {x: 0, y: 0}
     * @param props general props
     * @since 0.1.0
     */
    drawLine (points, props) {
        this.normalizePoints(points)
            .flatMap((next) => {
                const lineGraphics = this.createLine(next, props)
                const pointsGraphics = this.createPoints(next, props)

                return [lineGraphics, pointsGraphics]
            })
            .forEach((graphics) => this.app.stage.addChild(graphics))

        return this;
    }
}
