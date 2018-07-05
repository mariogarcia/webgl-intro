class KalGraph {

    constructor(properties) {
        this.width = properties.width;
        this.height = properties.height;
        this.app = new PIXI.Application({
            width: properties.width,
            height: properties.height,
            antialiasing: true,
            transparent: false,
            resolution: 1
        });

        this.appendViewTo = properties.appendViewTo;

        if (!this.appendViewTo) {
            throw new Error("Graph appendViewTo property should be provided!");
        }

        this.appendViewTo.appendChild(this.app.view);
    }

    createShiftedPoints (points) {
        return points.unshift({x: 0, y: 0});
    }

    normalizePoints (points) {
        return this.createShiftedPoints(points).zip(points);
    }

    createLine (next, props) {
        const origin = next[0];
        const destination = next[1];
        const line = new PIXI.Graphics();
        const norm = (n, ref) => ref - n;

        line.lineStyle(props.width, props.color, 1);
        line.moveTo(origin.x, norm(origin.y, props.refY));
        line.lineTo(destination.x, norm(destination.y, props.refY));
        line.x = props.refX;
        line.y = props.refY;

        return line;
    }

    drawLine (points, props) {
        const stage = this.app.stage

        this.normalizePoints(points)
            .map((next) => this.createLine(next, props))
            .forEach((line) => stage.addChild(line));
    }
}
