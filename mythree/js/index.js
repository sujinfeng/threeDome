var vm = {
    temp:{
        
    },
    init:function(){
        this.gridCreate();
    },
    cubeCreate:function(){
        //立方体的制造
        var scene = new THREE.Scene();
        
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        
        var renderer = new THREE.WebGLRenderer();
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        document.body.appendChild(renderer.domElement);
        var geometry = new THREE.CubeGeometry(1,2,1);
        var material = new THREE.MeshBasicMaterial({color: 0x80cfb0});
        var cube = new THREE.Mesh(geometry, material); scene.add(cube);
        camera.position.z = 5;
        function render() {
            requestAnimationFrame(render);
            cube.rotation.x += 0.001;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        render();
    },
    lineCreate:function(){
        //线的制造
        var renderer;
        function initThree() {
            width = document.getElementById('canvas-frame').clientWidth;
            height = document.getElementById('canvas-frame').clientHeight;
            renderer = new THREE.WebGLRenderer({
                antialias : true
            });
            renderer.setSize(width, height);
            document.getElementById('canvas-frame').appendChild(renderer.domElement);
            renderer.setClearColor(0xffffff, 1.0);
        }

        var camera;
        function initCamera() {
            camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
            camera.position.x = 0;
            camera.position.y = 1000;
            camera.position.z = 0;
            camera.up.x = 0;
            camera.up.y = 0;
            camera.up.z = 1;
            camera.lookAt(
                0,
                0,
                0
            );
        }

        var scene;
        function initScene() {
            scene = new THREE.Scene();
        }

        var light;
        function initLight() {
            light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
            light.position.set(100, 100, 200);
            scene.add(light);
        }

        function initObject() {

            var geometry = new THREE.Geometry();
            var material = new THREE.LineBasicMaterial( { vertexColors: THREE.VertexColors} );
            var color1 = new THREE.Color( 0x444444 ), color2 = new THREE.Color( 0xFF0000 );

            // 线的材质可以由2点的颜色决定
            var p1 = new THREE.Vector3( -100, 0, 100 );
            var p2 = new THREE.Vector3(  100, 0, -100 );
            geometry.vertices.push(p1);
            geometry.vertices.push(p2);
            geometry.colors.push( color1, color2 );

            // var line = new THREE.Line( geometry, material, THREE.LineSegments );
            var line = new THREE.LineSegments( geometry, material )
            scene.add(line);
        }
        function render()
        {
            renderer.clear();
            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }
        function threeStart() {
            initThree();
            initCamera();
            initScene();
            initLight();
            initObject();
            render();
        }
        threeStart();
    },
    gridCreate:function(){
        var renderer;
        function initThree() {
            width = document.getElementById('canvas-frame').clientWidth;
            height = document.getElementById('canvas-frame').clientHeight;
            renderer = new THREE.WebGLRenderer({
                antialias : true
            });
            renderer.setSize(width, height);
            document.getElementById('canvas-frame').appendChild(renderer.domElement);
            renderer.setClearColor(0xFFFFFF, 1.0);
        }

        var camera;
        function initCamera() {
            camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
            camera.position.x = 0;
            camera.position.y = 1000;
            camera.position.z = 0;
            camera.up.x = 0;
            camera.up.y = 0;
            camera.up.z = 1;
            camera.lookAt(
                0,
                0,
                0
            );
        }

        var scene;
        function initScene() {
            scene = new THREE.Scene();
        }

        var light;
        function initLight() {
            light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
            light.position.set(100, 100, 200);
            scene.add(light);
        }

        var cube;
        function initObject() {
            var geometry = new THREE.Geometry();
            geometry.vertices.push( new THREE.Vector3( - 500, 0, 0 ) );
            geometry.vertices.push( new THREE.Vector3( 500, 0, 0 ) );

            for ( var i = 0; i <= 20; i ++ ) {

                var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) );
                line.position.z = ( i * 50 ) - 500;
                scene.add( line );

                var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) );
                line.position.x = ( i * 50 ) - 500;
                line.rotation.y = 90 * Math.PI / 180;
                scene.add( line );

            }
        }

        function threeStart() {
            initThree();
            initCamera();
            initScene();
            initLight();
            initObject();
            renderer.clear();
            renderer.render(scene, camera);
        }
        threeStart()
    }
}
$(function(){
    vm.init();
})