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

/**
 * Creates and compiles a shader.
 *
 * @param {!WebGLRenderingContext} gl The WebGL Context.
 * @param {string} shaderSource The GLSL source code for the shader.
 * @param {number} shaderType The type of shader, VERTEX_SHADER or
 *     FRAGMENT_SHADER.
 * @return {!WebGLShader} The shader.
 */
const compileShader = (gl, shaderSource, shaderType) => {
    // Create the shader object
    var shader = gl.createShader(shaderType);

    // Set the shader source code.
    gl.shaderSource(shader, shaderSource);

    // Compile the shader
    gl.compileShader(shader);

    // Check if it compiled
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!success) {
        // Something went wrong during compilation; get the error
        throw "could not compile shader:" + gl.getShaderInfoLog(shader);
    }

    return shader;
};

/**
 * Creates a shader from the content of a script tag.
 *
 * @param {!WebGLRenderingContext} gl The WebGL Context.
 * @param {string} scriptId The id of the script tag.
 * @param {string} opt_shaderType. The type of shader to create.
 *     If not passed in will use the type attribute from the
 *     script tag.
 * @return {!WebGLShader} A shader.
 */
const createShaderFromScript = (gl, scriptId, opt_shaderType) => {
    // look up the script tag by id.
    var shaderScript = document.getElementById(scriptId);
    if (!shaderScript) {
        throw("*** Error: unknown script element" + scriptId);
    }

    // extract the contents of the script tag.
    var shaderSource = shaderScript.text;

    // If we didn't pass in a type, use the 'type' from
    // the script tag.
    if (!opt_shaderType) {
        if (shaderScript.type == "x-shader/x-vertex") {
            opt_shaderType = gl.VERTEX_SHADER;
        } else if (shaderScript.type == "x-shader/x-fragment") {
            opt_shaderType = gl.FRAGMENT_SHADER;
        } else if (!opt_shaderType) {
            throw("*** Error: shader type not set");
        }
    }

    return compileShader(gl, shaderSource, opt_shaderType);
};

const createBuffer = (webGL, vertices) => {
    const buffer = webGL.createBuffer();
    webGL.bindBuffer(webGL.ARRAY_BUFFER, buffer);
    webGL.bufferData(webGL.ARRAY_BUFFER, new Float32Array(vertices), webGL.STATIC_DRAW);

    return buffer;
};

/**
 * Creates a program from 2 shaders.
 *
 * @param {!WebGLRenderingContext) gl The WebGL context.
 * @param {!WebGLShader} vertexShader A vertex shader.
 * @param {!WebGLShader} fragmentShader A fragment shader.
 * @return {!WebGLProgram} A program.
 */
const createProgram = (gl, vertexShader, fragmentShader) => {
    // create a program.
    var program = gl.createProgram();

    // attach the shaders.
    if (vertexShader) {
        gl.attachShader(program, vertexShader);
    }

    if (fragmentShader) {
        gl.attachShader(program, fragmentShader);
    }

    // link the program.
    gl.linkProgram(program);

    // Check if it linked.
    var success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!success) {
        // something went wrong with the link
        throw ("program filed to link:" + gl.getProgramInfoLog (program));
    }

    gl.useProgram(program);

    return program;
};
