/**
 * Creates a new WebGL context if the browser supports the WebGL
 * specification
 *
 * @param canvas the canvas to take the WebGL context from
 * @return a WebGL context if the browser supported it
 */
const initWebGL = (canvas) => {
    gl = null;

    try {
        // Extracts the webgl context
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    } catch(e) {}

    // if there is none then show an alert message
    if (!gl) {
        alert("Cant initializate WebGL. Your browser dont support this feature.");
        gl = null;
    }

    return gl;
};

/**
 * Function that executes the function passed as argument
 * if the WebGL context passed as first argument exists
 *
 * @param webGL the WebGL context
 * @param function that requires a WebGL context
 */
const withWebGL = (webGL, func) => {
    if (webGL) {
        func(webGL);
    }
};

const initShaders = (webGL) => {

};

const initBuffers = (webGL) => {

};

const drawScene = (webGL, shaders, buffers) => {
    webGL.clearColor(0.0, 0.0, 0.0, 1.0);
    webGL.enable(wgl.DEPTH_TEST);

};

const start = () => {
    const canvas = document.getElementById("glcanvas");
    const wglCtx = initWebGL(canvas);

    withWebGL(wglCtx, (wgl) => {

        const shaders = initShaders(wgl);
        const buffers = initBuffers(wgl);

        drawScene(wgl, shaders, buffers);
    })
};
