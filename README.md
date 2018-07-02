## Intro

This project should look for the following objectives:

- To know what is WebGL
- To know which libraries can help when working with WebGL
- To know if there're WebGL based libraries building charts

## What is WebGL

The most comprehensive definition of that WebGL is can be found at:
https://www.khronos.org/webgl/ .

> WebGL is a cross-platform, royalty-free web standard for a low-level
> 3D graphics API based on OpenGL ES, exposed to ECMAScript via the
> HTML5 Canvas element. Developers familiar with OpenGL ES 2.0 will
> recognize WebGL as a Shader-based API using GLSL, with constructs that
> are semantically similar to those of the underlying OpenGL ES API. It
> stays very close to the OpenGL ES specification, with some concessions
> made for what developers expect out of memory-managed languages such
> as JavaScript. WebGL 1.0 exposes the OpenGL ES 2.0 feature set; WebGL
> 2.0 exposes the OpenGL ES 3.0 API.
> WebGL brings plugin-free 3D to the web, implemented right into the
> browser. Major browser vendors Apple (Safari), Google (Chrome),
> Microsoft (Edge), and Mozilla (Firefox) are members of the WebGL
> Working Group.

In that same site you can find the most important links to WebGL
reference.

### WebGL 2.0 reference card

https://www.khronos.org/files/webgl20-reference-guide.pdf

### Structure of a WebGL application

All WebGL applications normally follow the same three steps:

- Creating the HTML5 canvas
- Get WebGL context from the canvas
- Interact with WebGL context

### Simple example

This example is taken from
https://developer.mozilla.org/es/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL

#### Adding Canvas

```html
<html>
    <body>
        <canvas id="glcanvas" width="640" height="480">

        </canvas>
    </body>
</html>
```

#### Get the WebGL context from the canvas

```html
<html>
    <head>
        <script type="text/javascript">
            var gl;

            function start() {
                var canvas = document.getElementById("glcanvas");
                gl = initWebGL(canvas);

                if (gl) {
                    // Add something to WebGL
                }
            }
        </script>
    </head>
    <body onload="start()">
        <canvas id="glcanvas" width="640" height="480">

        </canvas>
    </body>
</html>
```

Where the `initWebGL()` function looks like:

```javascript
function initWebGL(canvas) {
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
}
```

#### Interact with WebGL context

```html
<html>
    <head>
        <script type="text/javascript">
            var gl;

            function start() {
                var canvas = document.getElementById("glcanvas");
                gl = initWebGL(canvas);

                if (gl) {
                     gl.clearColor(0.0, 0.0, 0.0, 1.0);                      // black color based. Completely opaque
                     gl.enable(gl.DEPTH_TEST);                               // Testing depth
                     gl.depthFunc(gl.LEQUAL);                                // Closer objects shadow further objects
                     gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);      // Clean up color and depth buffers
                }
            }
        </script>
    </head>
    <body onload="start()">
        <canvas id="glcanvas" width="640" height="480">

        </canvas>
    </body>
</html>
```

### More tutorials

#### General

- http://www.jlabstudio.com/webgl/category/programacion/webgl/
- https://webglfundamentals.org/

#### Shaders

- https://developer.mozilla.org/en-US/docs/Learn/WebGL/By_example/Hello_GLSL
- https://github.com/stackgl/shader-school

## WebGL libraries

https://en.wikipedia.org/wiki/List_of_WebGL_frameworks

#### General
#### Three.js

> Three.js: https://threejs.org/

#### PixiJS

> PixiJS: http://www.pixijs.com/

#### TWGL: A Tiny WebGL helper Library

> TWGL: https://twgljs.org/

### GLSL

### GLSLIFY

- https://www.npmjs.com/package/glslify


### PhiloGL

http://www.senchalabs.org/philogl/

### Stardust

https://stardustjs.github.io/
