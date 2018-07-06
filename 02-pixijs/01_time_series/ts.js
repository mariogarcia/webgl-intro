const toPoints = (map) => {
    return {
        x: map.time,
        y: map.value
    }
}

// TODO fetch requires http/s
const readJsonList = () => {
    fetch("ts.json")
        .then(response => response.json())
        .then(json => console.log(json));
}

const data = readJsonList()
    .map(toPoints)
    .map(convertTimeSeries('dd/MM/yyyy'))

const start = () => {
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
