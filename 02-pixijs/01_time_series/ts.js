const toPoints = (history) => {
    return {
        x: history.x,
        y: history.y
    }
}

const process = (response) => {
    const points = response
        .data
        .signalHistory
        .history
        .map(toPoints)

    const data = convertTimeSeries(points, 'YYYY-MM-DDTHH:mm:ss.SSSSZ')
    console.log('data ==>', data)

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
