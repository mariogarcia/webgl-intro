const start = () => {
    const canvas = document.getElementById("glcanvas");
    const wglCtx = initWebGL(canvas);

    withWebGL(wglCtx, (wgl) => {
        const vertexShader = createShaderFromScript(wgl, "shader-vx");
        const fragmentShader = createShaderFromScript(wgl, "shader-fs");
        const program = createProgram(wgl, vertexShader, fragmentShader);
        const positionAttributeLocation = wgl.getAttribLocation(program, "a_position");
        const positions = [
            0, 0,
            0, 0.5,
            0.7, 0,
        ];

        createBuffer(wgl, positions)

        wgl.clearColor(0.0, 0.0, 0.0, 0.2);
        wgl.clear(wgl.COLOR_BUFFER_BIT | wgl.DEPTH_BUFFER_BIT);
        wgl.enableVertexAttribArray(positionAttributeLocation);  // Turn on the attribute

        // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
        var size = 2;          // 2 components per iteration
        var type = wgl.FLOAT;   // the data is 32bit floats
        var normalize = false; // don't normalize the data
        var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0;        // start at the beginning of the buffer
        wgl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

        // draw
        var primitiveType = wgl.TRIANGLES;
        var offset = 0;
        var count = 3;
        wgl.drawArrays(primitiveType, offset, count);
    })
};
