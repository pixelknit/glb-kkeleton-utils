import * as THREE from './three.js-master/build/three.module.js'
import {GLTFLoader} from './three.js-master/examples/jsm/loaders/GLTFLoader.js'
import { GLTFExporter } from './three.js-master/examples/jsm/exporters/GLTFExporter.js';
import {setBoneStructure} from './Components/bone_structure.js'

const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

// Function to load the model
function loadModel(url, onSuccess) {
    const loader = new GLTFLoader();
    loader.load(url, onSuccess);
}

// Function to add bones
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
            console.log("spine_03 found!");
            spine_03 = object;
        }
    });

    if (spine_03) {
        console.log("Attaching to spine_03");
        spine_03.add(spine_04);
        spine_04.parent = spine_03;
        spine_04.add(spine_05);
        spine_05.parent = spine_04;
    } else {
        console.log('spine_03 not found');
    }

    spine_04.updateMatrix();
    spine_05.updateMatrix();
    model.updateMatrixWorld(true);
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


//Download asset

function download() {
    const exporter = new GLTFExporter();
    exporter.parse(
      scene,
      function (result) {
        saveArrayBuffer(result, "scene.glb");
      },
	  // called when there is an error in the generation
	  function ( error ) {

		  console.log( 'An error happened' );

	  }, 
      { binary: true }
    );
  }

  function saveArrayBuffer(buffer, filename) {
    save(new Blob([buffer], { type: "application/octet-stream" }), filename);
  }

  const link = document.createElement("a");
  link.style.display = "none";
  document.body.appendChild(link); // Firefox workaround, see #6594

  function save(blob, filename) {
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

//Export handler

function handleExport(){
loadModel('/assets/char.glb', function(glb){
    console.log(glb)
    const root = glb.scene;
    setBoneStructure(root);
    //addBones(root);
    printBoneStructure(root);
    //exportGLB(root);
    
    scene.add(root);
    scene.remove([root.light, root.light2, root.light_env, root.camera]);
    download();
    // }, function(xhr){
//     console.log((xhr.loaded/xhr.total * 100) + "% loaded")
    // }, function(error){
//     console.log('An error ocurred')
    });
}

//button
document.getElementById('download-glb').addEventListener('click', handleExport);

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2,2,5)
scene.add(light)

const light2 = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(-2,2,5)
scene.add(light2)

const light_env = new THREE.AmbientLight(0xffffff, 2)
scene.add(light_env)

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