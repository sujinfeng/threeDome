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
    ,lambertCreate:function(){
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
            camera.position.x = 600;
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
        // A start
            light = new THREE.AmbientLight(0xFFFFFF);
            light.position.set(100, 100, 200);
            scene.add(light);
        // A end

        }

        var cube;
        function initObject() {
            var geometry = new THREE.CubeGeometry( 200, 100, 50,4,4);
            // B start
            var material = new THREE.MeshLambertMaterial( { color:0x88FFF0} );
            // B end
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
            renderer.clear();
            renderer.render(scene, camera);
        }
        threeStart();
    }
    ,directionalCreate:function(){
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
            camera.position.x = 600;
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
            // A start
            // 第二个参数是光源强度，你可以改变它试一下
            light = new THREE.DirectionalLight(0xFF0000,0.6);
            // 位置不同，方向光作用于物体的面也不同，看到的物体各个面的颜色也不一样
            light.position.set(1,0,2);
            scene.add(light);
            // A end
        }

        var cube;
        function initObject() {
            var geometry = new THREE.CubeGeometry( 200, 100, 50,4,4);
            var material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
            var mesh = new THREE.Mesh( geometry,material);
            mesh.position.set(0,0,0);
            scene.add(mesh);
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
        threeStart();
    }
    ,mulCubeCreate:function(){
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
            camera.position.x = 600;
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
//                light = new THREE.AmbientLight(0xFF0000);
//                light.position.set(100, 100, 200);
//                scene.add(light);
            // 聚光灯
            light = new THREE.DirectionalLight(0xFF0000);
            light.position.set(1, -0.5,2);
            scene.add(light);
        }

        // A start 
        var cube;
        function initObject() {
            var geometry = new THREE.CubeGeometry( 200, 100, 50,4,4);
            var material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
            var mesh = new THREE.Mesh( geometry,material);
            mesh.position.set(0,0,0);
            scene.add(mesh);

            var geometry2 = new THREE.CubeGeometry( 200, 100, 50,4,4);
            var material2 = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
            var mesh2 = new THREE.Mesh( geometry2,material2);
            mesh2.position.set(-300,0,0);
            scene.add(mesh2);

            var geometry3 = new THREE.CubeGeometry( 200, 100, 50,4,4);
            var material3 = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
            var mesh3 = new THREE.Mesh( geometry3,material3);
            mesh3.position.set(0,-150,0);
            scene.add(mesh3);

            var mesh4 = new THREE.Mesh( geometry3,material3);
            mesh4.position.set(0,150,0);
            scene.add(mesh4);

            var mesh5 = new THREE.Mesh( geometry3,material3);
            mesh5.position.set(300,0,0);
            scene.add(mesh5);

            var mesh6 = new THREE.Mesh( geometry3,material3);
            mesh6.position.set(0,0,-100);
            scene.add(mesh6);

        }
        // A end

        function threeStart() {
            initThree();
            initCamera();
            initScene();
            initLight();
            initObject();
            renderer.clear();
            renderer.render(scene, camera);
        }
        threeStart();
    }
    ,textureCreate:function(){
        var camera, scene, renderer;
        var mesh;

        init();
        animate();

        function init() {

            renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );
            //
            camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
            camera.position.z = 400;
            scene = new THREE.Scene();


            var geometry = new THREE.PlaneGeometry( 500, 300, 1, 1 );
            geometry.vertices[0].uv = new THREE.Vector2(0,0);
            geometry.vertices[1].uv = new THREE.Vector2(2,0);
            geometry.vertices[2].uv = new THREE.Vector2(2,2);
            geometry.vertices[3].uv = new THREE.Vector2(0,2);
            // 纹理坐标怎么弄
     
            var loader = new THREE.TextureLoader();

            loader.load("img/a.jpg",function(texture){
                var material = new THREE.MeshBasicMaterial({color:0x739783,map:texture});
                mesh = new THREE.Mesh(geometry,material);
                scene.add(mesh);
            })
            //
            window.addEventListener( 'resize', onWindowResize, false );
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }

        function animate() {
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
        }
    }
    ,clockCreate:function(){
        var camera, scene, renderer;
        var mesh;
        var texture;
        
        function start()
        {
            clock();
            init();
            animate();
        }

        function init() {

            renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );
            //
            camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
            camera.position.z = 400;
            scene = new THREE.Scene();
            
            var geometry = new THREE.CubeGeometry(150, 150, 150);
            texture = new THREE.Texture( canvas);
            var material = new THREE.MeshBasicMaterial({map:texture});
            texture.needsUpdate = true;
            mesh = new THREE.Mesh( geometry,material );
            scene.add( mesh );

            //
            window.addEventListener( 'resize', onWindowResize, false );
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }

        function animate() {
            texture.needsUpdate = true;
            mesh.rotation.y -= 0.01;
            mesh.rotation.x -= 0.01;
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
        }
        start();
    }
    ,vtkCreate:function(){
        // if ( WEBGL.isWebGLAvailable() === false ) {
            // document.body.appendChild( WEBGL.getWebGLErrorMessage() );
        // }
        if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
        var container, stats;
        var camera, controls, scene, renderer;
        var cross;
        init();
        animate();

        function init() {
            camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 1e10 );
            camera.position.z = 0.2;
            controls = new THREE.TrackballControls( camera );

            controls.rotateSpeed = 5.0;
            controls.zoomSpeed = 5;
            controls.panSpeed = 2;

            controls.noZoom = false;
            controls.noPan = false;

            controls.staticMoving = true;
            controls.dynamicDampingFactor = 0.3;

            scene = new THREE.Scene();
            scene.add( camera );

            // light
            var dirLight = new THREE.DirectionalLight( 0xffffff );
            dirLight.position.set( 200, 200, 1000 ).normalize();

            camera.add( dirLight );
            camera.add( dirLight.target );
    // A begin
            var material = new THREE.MeshLambertMaterial( { color:0xffffff, side: THREE.DoubleSide } );
            var loader = new THREE.VTKLoader();
            loader.addEventListener( 'load', function ( event ) {
                var geometry = event.content;
                var mesh = new THREE.Mesh( geometry, material );
                mesh.position.setY( - 0.09 );
                scene.add( mesh );
            });
            loader.load( "models/bunny.vtk" );
    // A end
            // renderer
            renderer = new THREE.WebGLRenderer( { antialias: false } );
            // renderer.setClearColorHex( 0x000000, 1 );过期了
            renderer.setClearColor(new THREE.Color(0xEEEEEE));
            renderer.setSize( window.innerWidth, window.innerHeight );
            container = document.createElement( 'div' );
            document.body.appendChild( container );
            container.appendChild( renderer.domElement );

            stats = new Stats();
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.top = '0px';
            container.appendChild( stats.domElement );
            //
            window.addEventListener( 'resize', onWindowResize, false );
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
            controls.handleResize();
        }

        function animate() {
            requestAnimationFrame( animate );
            controls.update();
            renderer.render( scene, camera );
            stats.update();
        }
    }
    ,faceCreate:function(){
         /*
        * 围绕某个 x,y,z轴测试
        */
        
        
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
            camera.position.x = 100;
            camera.position.y = 300;
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
            light = new THREE.AmbientLight(0xff0000);
            light.position.set(100, 100, 200);
            scene.add(light);

        }

        var cube;
        var mesh;
        function initObject() {
           
            var geometry = new THREE.BoxGeometry( 100, 100, 100 );
            
            for ( var i = 0; i < geometry.faces.length; i += 2 ) {
//geometry.faces.length 输出是12
                var hex = Math.random() * 0xffffff;
                geometry.faces[ i ].color.setHex( hex );
                geometry.faces[ i + 1 ].color.setHex( hex );
//正方形只有6个面，但是一个面是由2个三角形组成。为什么用三角形，不用四边形作为一个基本图元。
//因为三个点才能保证一定在一个面上。这么宝贵的知识都告诉你了哦，好好学习吧，哈哈
            }
            
            var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors} );
            mesh = new THREE.Mesh( geometry,material);
            mesh.position = new THREE.Vector3(0,0,0);
            scene.add(mesh);
            
            
        }
        
        function initGrid(){
            var helper = new THREE.GridHelper( 1000, 50 ,0x0000ff, 0x808080);
            scene.add( helper );
        }
        
        function threeStart() {
            initThree();
            initCamera();
            initScene();
            initLight();


            initObject();
            initGrid();
            
            animation();

        }

        // 帧循环、游戏循环
        function animation()
        {
            //mesh.rotation.y +=0.01;
            mesh.rotateY(0.01);
            mesh.rotateX(0.01);
            renderer.render(scene, camera);
            requestAnimationFrame(animation);

        }
        threeStart()
    }
    ,init:function(){
        this.faceCreate();
    }
}
$(function(){
    vm.init();
})