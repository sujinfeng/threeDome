var vm = {
    temp:{
        
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
    ,myGridCreate:function(){
        var width = $("#canvas-frame")[0].clientWidth;
        var height = $("#canvas-frame")[0].clientHeight;
        var scene;
        function setScene(){
            scene = new THREE.Scene();
        }
        var camera;
        function setCamera(){
            camera = new THREE.PerspectiveCamera(45,width/height,1,10000);
            camera.position.x = 0;
            camera.position.y = 1000;
            camera.position.z = 0;
            camera.up.x = 0;
            camera.up.y = 0;
            camera.up.z = 1;
            camera.lookAt(0,0,0);
        }
        var renderer;
        function initRenderer(){
            renderer = new THREE.WebGLRenderer({
                antialias:true
            })
            renderer.setSize(width,height);
            $("#canvas-frame").append(renderer.domElement);
            renderer.setClearColor(0xFFFFFF,1.0);
        }
        
        var light;
        function setLight(){
            light = new THREE.DirectionalLight(0xff0000,1.0,0);
            light.position.set(100,100,200);
            scene.add(light);
        }
        
        var geometry
        function setGeometry(){
            geometry = new THREE.Geometry();
            geometry.vertices.push(new THREE.Vector3(-50,0,0));
            geometry.vertices.push(new THREE.Vector3(50,0,0));
             for ( var i = 0; i <=10 ; i ++ ) {

                var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) );
                line.position.x = ( i * 5 ) - 50;
                line.position.z = ( i * 5 );
                scene.add( line );

                var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ) );
                line.position.x = ( i * 5 ) - 50;
                line.rotation.y = 90 * Math.PI / 180;
                scene.add( line );

            }
             
        }
        
        setScene();
        setCamera();
        initRenderer()
        setLight()
        setGeometry();
        renderer.clear();
        renderer.render(scene, camera);
        
    }
    ,cameraMove:function(){
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
            camera.position.y = 0;
            camera.position.z = 600;
            camera.up.x = 0;
            camera.up.y = 1;
            camera.up.z = 0;
            camera.lookAt(0,0,0);
        }

        var scene;
        function initScene() {
            scene = new THREE.Scene();
        }

        var light;
        function initLight() {
            light = new THREE.AmbientLight(0xFFFFFF);
            light.position.set(100, 100, 200);
            scene.add(light);
            light = new THREE.PointLight(0x00FF00);
            light.position.set(0, 0,300);
            scene.add(light);
        }

        var cube;
        function initObject() {
            var geometry = new THREE.CylinderGeometry( 100,150,400);
            var material = new THREE.MeshLambertMaterial( { color:0xaFaFf0} );
            var mesh = new THREE.Mesh( geometry,material);
            mesh.position = new THREE.Vector3(0,0,0);
            scene.add(mesh);
        }

        function threeStart() {
            initThree();
            initCamera();
            initScene();
            initLight();
            initObject();
            animation();

        }
        function animation()
        {
            //renderer.clear();
            camera.position.z =camera.position.z +1;
            renderer.render(scene, camera);
            requestAnimationFrame(animation);
        }
        threeStart();
    },
    meshMove:function(){
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
            camera.position.y = 0;
            camera.position.z = 600;
            camera.up.x = 0;
            camera.up.y = 1;
            camera.up.z = 0;
            camera.lookAt(0,0,0);
        }

        var scene;
        function initScene() {
            scene = new THREE.Scene();
        }

        var light;
        function initLight() {
            light = new THREE.AmbientLight(0xFF0000);
            light.position.set(100, 100, 200);
            scene.add(light);
            light = new THREE.PointLight(0x00FF00);
            light.position.set(0, 0,300);
            scene.add(light);
        }

        var cube;
        var mesh;
        function initObject() {
            var geometry = new THREE.CylinderGeometry( 100,150,400);
            var material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
            mesh = new THREE.Mesh( geometry,material);
            mesh.position = new THREE.Vector3(0,0,0);
            scene.add(mesh);
        }

        function threeStart() {
            initThree();
            initCamera();
            initScene();
            initLight();
            initObject();
            animation();

        }
        function animation()
        {
            mesh.position.z-=1;
            renderer.render(scene, camera);
            requestAnimationFrame(animation);
        }
        threeStart();
    }
    ,statsCreate:function(){
        var stats = new Stats();
        stats.setMode(0); // 0: fps, 1: ms
        // 将stats的界面对应左上角
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        $('#canvas-frame').append( stats.domElement );
        setInterval( function () {
            stats.begin();
            // 你的每一帧的代码
            stats.end();
        }, 1000 / 60 );
    }
    ,statsTest:function(){
        var renderer;
        var stats;
        function initThree() {
            width = document.getElementById('canvas-frame').clientWidth;
            height = document.getElementById('canvas-frame').clientHeight;
            renderer = new THREE.WebGLRenderer({
                antialias : true
            });
            renderer.setSize(width, height);
            document.getElementById('canvas-frame').appendChild(renderer.domElement);
            renderer.setClearColor(0xFFFFFF, 1.0);

            stats = new Stats();
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';
            document.getElementById('canvas-frame').appendChild(stats.domElement);
        }

        var camera;
        function initCamera() {
            camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
            camera.position.x = 0;
            camera.position.y = 0;
            camera.position.z = 600;
            camera.up.x = 0;
            camera.up.y = 1;
            camera.up.z = 0;
            camera.lookAt(0,0,0);
        }

        var scene;
        function initScene() {
            scene = new THREE.Scene();
        }

        var light;
        function initLight() {
            light = new THREE.AmbientLight(0xFF0000);
            light.position.set(100, 100, 200);
            scene.add(light);
            light = new THREE.PointLight(0x00FF00);
            light.position.set(0, 0,300);
            scene.add(light);
        }

        var cube;
        var mesh;
        function initObject() {
            var geometry = new THREE.CylinderGeometry( 100,150,100);
            var material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
            mesh = new THREE.Mesh( geometry,material);
            mesh.position = new THREE.Vector3(0,0,0);
            scene.add(mesh);
        }

        function threeStart() {
            initThree();
            initCamera();
            initScene();
            initLight();
            initObject();
            animation();

        }
        var flag = true;
        function animation()
        {
            //renderer.clear();
            //camera.position.x =camera.position.x +1;
            
            if(flag){
                mesh.position.x-=1;
            }else{
                mesh.position.x+=1;
            }
            if(mesh.position.x==-100){
                flag = false;
            }
            if(mesh.position.x==100){
                flag = true;
            }
            
            renderer.render(scene, camera);
            requestAnimationFrame(animation);

            stats.update();
        }
        threeStart();
    },
    tweenCreate:function(){
        var renderer;
        var stats;
        function initThree() {
            width = document.getElementById('canvas-frame').clientWidth;
            height = document.getElementById('canvas-frame').clientHeight;
            renderer = new THREE.WebGLRenderer({
                antialias : true
            });
            renderer.setSize(width, height);
            document.getElementById('canvas-frame').appendChild(renderer.domElement);
            renderer.setClearColor(0xFFFFFF, 1.0);

            stats = new Stats();
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';
            document.getElementById('canvas-frame').appendChild(stats.domElement);
        }

        var camera;
        function initCamera() {
            camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
            camera.position.x = 0;
            camera.position.y = 0;
            camera.position.z = 600;
            camera.up.x = 0;
            camera.up.y = 1;
            camera.up.z = 0;
            camera.lookAt(0,0,0);
        }

        var scene;
        function initScene() {
            scene = new THREE.Scene();
        }

        var light;
        function initLight() {
            light = new THREE.AmbientLight(0xFF0000);
            light.position.set(100, 100, 200);
            scene.add(light);
            light = new THREE.PointLight(0x00FF00);
            light.position.set(0, 0,300);
            scene.add(light);
        }

        var cube;
        var mesh;
        function initObject() {
            var geometry = new THREE.CylinderGeometry( 100,150,100);
            var material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
            mesh = new THREE.Mesh( geometry,material);
            mesh.position = new THREE.Vector3(0,0,0);
            scene.add(mesh);
        }
        function initTween()
        {
            new TWEEN.Tween( mesh.position)
                    .to( { x: -200 }, 6000 ).repeat( Infinity ).start();
        }

        function threeStart() {
            initThree();
            initCamera();
            initScene();
            initLight();
            initObject();
            initTween();
            animation();

        }
        
        function animation()
        {
            
            
            renderer.render(scene, camera);
            requestAnimationFrame(animation);
            stats.update();
            TWEEN.update()
        }
        threeStart();
    }
    ,perspectiveCamera:function(){
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
            //camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 10, 1000 );
            camera.position.x = 0;
            camera.position.y = 0;
            camera.position.z = 600;
            camera.up.x = 0;
            camera.up.y = 1;
            camera.up.z = 0;
            camera.lookAt(0,0,0);
        }

        var scene;
        function initScene() {
            scene = new THREE.Scene();
        }

        var light;
        function initLight() {
            light = new THREE.AmbientLight(0xFF0000);
            light.position.set(100, 100, 200);
            scene.add(light);
            
            light = new THREE.PointLight(0x00FF00);
            light.position.set(0, 0,300);
            scene.add(light);
        }

        var cube;
        function initObject() {
            var geometry = new THREE.CylinderGeometry( 70,100,200);
            var material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
            var mesh = new THREE.Mesh( geometry,material);
            mesh.position = new THREE.Vector3(0,0,0);
            scene.add(mesh);
        }

        function threeStart() {
            initThree();
            initCamera();
            initScene();
            initLight();
            initObject();
            animation();

        }
        function animation()
        {
            changeFov();
            renderer.render(scene, camera);
            requestAnimationFrame(animation);
        }
        
        function setCameraFov(fov)
        {
            camera.fov = fov;
            camera.updateProjectionMatrix();
        }
        
        function changeFov()
        {
            var txtFov = document.getElementById("txtFov").value;
            var val = parseFloat(txtFov);
            setCameraFov(val);
        }
        threeStart();
    }
    ,init:function(){
        this.perspectiveCamera();
    }
}
$(function(){
    vm.init();
})