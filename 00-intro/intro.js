const initWebGL = (canvas) => {
    gl = null;

    try {
        // Extracts the webgl context
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }
    catch(e) {}

    // if there is none then show an alert message
    if (!gl) {
        alert("Cant initializate WebGL. Your browser dont support this feature.");
        gl = null;
    }

    return gl;
};

const start = () => {
    const canvas = document.getElementById("glcanvas");
    const gl = initWebGL(canvas);

    if (gl) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    }
};
