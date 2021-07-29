import * as THREE from 'three'
import kannaFile from '../assets/kanna.jpg';
import { cameraScript } from './modules/cameraScript';
import { motorGame } from './modules/motorGame';
import { spriteScript } from './modules/spriteScript';

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

const objectSprite = new THREE.Mesh( 
    new THREE.PlaneGeometry(), 
    new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load( kannaFile )
    })
)
const sprites = [
    new spriteScript(
        objectSprite,
        () => {}, 
        () => {
            objectSprite.rotation.x += 0.01;
            objectSprite.rotation.y += 0.01;
        })
]

const objectCamera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 0.1, 1000 )
const camera = new cameraScript(
    objectCamera,
    () => { 
        objectCamera.position.z = 5 
    },
    () => {})

const motor = new motorGame(sprites, scene, camera, renderer)

document.body.appendChild( motor.domElement );

motor.load()
motor.animate()
