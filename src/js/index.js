import * as THREE from 'three'
import kannaFile from '../assets/kanna.jpg';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const texture = new THREE.TextureLoader().load( kannaFile );

const geometry = new THREE.PlaneGeometry();
const material = new THREE.MeshBasicMaterial( { map: texture } );
const sprite = new THREE.Mesh( geometry, material );
scene.add( sprite );

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame( animate );

    sprite.rotation.x += 0.01;
    sprite.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();
