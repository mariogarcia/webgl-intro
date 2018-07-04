//Aliases
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite;

const drawLine = (point) => {
    let line = new Graphics();
    line.lineStyle(4, 0xFFFFFF, 1);
    line.moveTo(0, 0);
    line.lineTo(80, 50);
    line.x = 90;
    line.y = 90;

    return [
        line
    ];
}

const createApp = (w, h) => {
    //Create a Pixi Application
    let app = new Application({
        width: 256,
        height: 256,
        antialiasing: true,
        transparent: false,
        resolution: 1
    });

    return app;
}

const start = () => {

    const app = createApp(256, 256);
    const view = app.view;

    document.body.appendChild(view);

    const points = [
        {x: 0, y: 0},
        {x: 1, y: 1}
    ];

    points
        .map(drawLine)
        .forEach((line) => {
            console.log(line)
            app.stage.addChild(line);
        })
}
