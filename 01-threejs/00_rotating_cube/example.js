const start = () => {
    var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    var canvas = document.getElementById('glcanvas');
	var renderer = new THREE.WebGLRenderer({ canvas: canvas});
    renderer.setSize( window.innerWidth, window.innerHeight );

	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { color: 0xcccccc } );
	var cube = new THREE.Mesh( geometry, material );

	scene.add( cube );
	camera.position.z = 3;

	var animate = function () {
		requestAnimationFrame( animate );

		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;

		renderer.render( scene, camera );
	};

	animate();
};
