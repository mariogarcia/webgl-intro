const start = () => {
    const URL = "http://localhost:8080/ts.json"
    const toJson  = (r) => r.json()
    const toPoint = (p) => ({ x: p.x, y: p.y })
    const kprops  = {
        width: window.innerWidth - 25,
        height: 250,
        appendViewTo: document.getElementById('container')
    }

    fetch(URL)
        .then(toJson)
        .then(resp => {
            const data = resp
                .data
                .signalHistory
                .history
                .map(toPoint)

            new KalGraph(kprops)
                .drawTimeline(data, {
                    format: 'YYYY-MM-DDTHH:mm:ss.SSSSZ'
                })
        })
}
