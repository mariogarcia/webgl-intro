const start = () => {
    // create something
    const line = createLine3({
        color: 0xffffff,
        points: [
            0, 10, 0,
            5, 20, 0,
            10,20, 0,
            20,20, 0,
            30,40, 0,
            50,80, 0,
            60,40, 0,
            70,42, 0,
            80,35, 0,
            90,20, 0,
            100,40,0
        ]
    });

    // add it to a scene
    const scene = createScene();
    scene.background = new THREE.Color(0x00ccef);
    scene.add( line );

    // add a new camera perspective
    var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 500 );
    camera.position.set( 0, 0, 100 );
    camera.lookAt( new THREE.Vector3( 100, 0, 0 ) );

    // render
    var canvas = document.getElementById('canvasdiv');
    var renderer = new THREE.WebGLRenderer();

    canvas.appendChild( renderer.domElement )
    renderer.setSize( window.innerWidth / 2, window.innerHeight / 2 );
    renderer.render( scene, camera );
};
