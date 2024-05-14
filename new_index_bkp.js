import * as THREE from './three.js-master/build/three.module.js'
import {GLTFLoader} from './three.js-master/examples/jsm/loaders/GLTFLoader.js'
import { GLTFExporter } from './three.js-master/examples/jsm/exporters/GLTFExporter.js';
import {setBoneStructure} from './Components/bone_structure.js'

const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()


const loader = new GLTFLoader()
loader.load('/assets/char.glb', function(glb){
    console.log(glb)
    const root = glb.scene;
    setBoneStructure(root);
    addBones(root);
    printBoneStructure(root);
    
    scene.add(root);
}, function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% loaded")
}, function(error){
    console.log('An error ocurred')
})


//button
const btn = document.getElementById('download-glb')
btn.addEventListener('click', download)

function download(){
    const exporter = new GLTFExporter()
    exporter.parse(
        scene,
        function(result){
            saveArrayBuffer(result, 'THreejsScene.glb')
        },
        {
            binary:true
        }
    )
}

function saveArrayBuffer(buffer, fileName){
    save(new Blob([buffer], {type:'application/octet-stream'}), fileName)
}

const link = document.createElement('a')
document.body.appendChild(link)

function save(blob, fileName){
    link.href = URL.createObjectURL(blob)
    link.download = fileName
    link.click()
}

//Bone structure logs
function printBoneStructure(model) {
    model.traverse((object) => {
        if (object.isBone) {
            console.log(object.name); // Log the name of the bone
            // You can also log other properties of the bone here
        }
    });
}

function addBones(model){
    const spine_04 = new THREE.Bone();
    spine_04.name = 'spine_04';
    // Set any other properties or transformations for spine_04

    const spine_05 = new THREE.Bone();
    spine_05.name = 'spine_05';
    // Set any other properties or transformations for spine_05
    // Add new bones
    let spine_03;
    model.traverse((object) => {
        if (object.isBone && object.name === 'spine_03') {
            spine_03 = object;
        }
    });

    if (spine_03) {
        spine_03.add(spine_04);
        spine_04.add(spine_05);
    } else {
        console.log('spine_03 not found');
    }

    spine_04.updateMatrix();
    spine_05.updateMatrix();
    model.updateMatrixWorld(true);
}

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2,2,5)
scene.add(light)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.set(0,1,2)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.gammaOutput = true
//renderer.render(scene, camera)

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()