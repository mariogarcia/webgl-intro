const firstLine = Immutable.List([
    {x: 0, y: 0},
    {x: 1, y: 1},
    {x: 100, y: 100},
    {x: 150, y: 50},
    {x: 250, y: 50},
    {x: 280, y: 25},
    {x: 300, y: 30},
    {x: 324, y: 0},
]);

const secondLine = Immutable.List([
    {x: 0, y: 0},
    {x: 1, y: 10},
    {x: 90, y: 90},
    {x: 140, y: 40},
    {x: 314, y: 0},
]);

const start = () => {
    const kalGraph = new KalGraph({
        width: 500,
        height: 250,
        appendViewTo: document.body
    })

    const commonProps = { refX: 40, refY: 100 }

    kalGraph.drawLine(firstLine, {
        color: 0xFFFFFF,
        width: 1,
        ...commonProps
    });

    kalGraph.drawLine(secondLine, {
        color: 0xFF33FF,
        width: 10,
        ...commonProps
    });
}
