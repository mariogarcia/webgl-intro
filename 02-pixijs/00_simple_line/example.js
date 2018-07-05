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

const thirdLine = Immutable.List([
    {x: 0, y: 50},
    {x: 100, y: 50},
    {x: 140, y: 110},
    {x: 150, y: 115},
    {x: 160, y: 120},
    {x: 180, y: 120},
    {x: 314, y: 120},
]);

const start = () => {
    const kalGraph = new KalGraph({
        width: 500,
        height: 250,
        appendViewTo: document.getElementById('container'),
        backgroundColor: 0xffffff
    })

    const commonProps = { refX: 40, refY: 100 }

    kalGraph.drawLine(firstLine, {
        color: 0x333333,
        width: 1,
        ...commonProps
    });

    kalGraph.drawLine(secondLine, {
        color: 0x4a9649,
        width: 2,
        ...commonProps
    });

    kalGraph.drawLine(thirdLine, {
        color: 0x964994,
        width: 2,
        ...commonProps
    });
}
