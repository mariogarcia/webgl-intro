const process = (response) => {
    const points = response
        .data
        .signalHistory
        .history
        .map((p) => ({ x: p.x, y: p.y }))

    const data = convertTimeSeries(points, 'YYYY-MM-DDTHH:mm:ss.SSSSZ')
        .map((point) => {
            const mat = [point.x, 0, 0, point.y, 0, 0]
            const out = []

            mat2d.scale(out, mat , [50, 5])

            return new Point({
                x: out[0],
                y: out[3],
                source: point
            })
        })

    const kalGraph = new KalGraph({
        width: 1200,
        height: 250,
        appendViewTo: document.getElementById('container'),
        backgroundColor: 0xffffff
    })

    kalGraph.drawLine(data,  {
        color: 0x333333,
        refX: 40,
        refY: 100,
        width: 1
    })
}

const start = () => {
    fetch("http://localhost:8080/ts.json")
        .then(response => response.json())
        .then(process)
}
