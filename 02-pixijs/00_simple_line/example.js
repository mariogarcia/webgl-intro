const lines = {
    first: createRandomPoints(1000, 200, 20),
    second: createRandomPoints(1000, 200, 20),
    third: createRandomPoints(1000, 200, 20)
}

const start = () => {
    console.log(lines.first)

    const kalGraph = new KalGraph({
        width: 1200,
        height: 250,
        appendViewTo: document.getElementById('container'),
        backgroundColor: 0xffffff
    })

    const common = { refX: 40, refY: 100, width: 1}

    kalGraph
        .drawLine(lines.first,  { color: 0x333333, ...common })
        .drawLine(lines.second, { color: 0x4a9649, ...common })
        .drawLine(lines.third,  { color: 0x964994, ...common });
}
