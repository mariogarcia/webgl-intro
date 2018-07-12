const start = () => {
    const URL = "http://localhost:8080/ts.json"
    const toJson  = (r) => r.json()
    const toPoint = (p) => ({ x: p.x, y: p.y })
    const seriesProps = {
        color: 0x333333,
        width: 1,
        format: 'YYYY-MM-DDTHH:mm:ss.SSSSZ'
    }
    const kprops  = {
        width: window.innerWidth - 100,
        height: 250,
        appendViewTo: document.getElementById('container'),
        backgroundColor: 0xffffff
    }

    fetch(URL)
        .then(toJson)
        .then(resp => {
            const data = resp
                .data
                .signalHistory
                .history
                .map(toPoint)

            new KalGraph(kprops).drawTimeline(data, seriesProps)
        })
}
