const createScene = () => {
    return new THREE.Scene();
}

const createLine3 = (data) => {
    var material = new THREE.LineBasicMaterial( { color: data.color } );
    var geometry = new THREE.Geometry();

    for (i = 0; i < data.points.length; i+=3) {
        const p = data.points.slice(i, i + 3);
        const x = p[0];
        const y = p[1];
        const z = p[2];

        geometry.vertices.push(new THREE.Vector3(x, y, z));
    }

    return new THREE.Line( geometry, material );
}
