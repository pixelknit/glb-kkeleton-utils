"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("./three.js-master/build/three.module.js");
var GLTFLoader_js_1 = require("./three.js-master/examples/jsm/loaders/GLTFLoader.js");
// Function to load the GLB model
function loadModel(modelPath) {
    return __awaiter(this, void 0, void 0, function () {
        var loader;
        return __generator(this, function (_a) {
            loader = new GLTFLoader_js_1.GLTFLoader();
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    loader.load(modelPath, function (gltf) {
                        resolve(gltf.scene);
                    }, undefined, function (error) {
                        reject(error);
                    });
                })];
        });
    });
}
// Function to rename bones
function renameBones(model, newNames) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            model.traverse(function (object) {
                if (object instanceof THREE.Bone) {
                    var newName = newNames.get(object.name);
                    if (newName) {
                        object.name = newName;
                    }
                }
            });
            return [2 /*return*/];
        });
    });
}
// Function to print all bone names
function printBoneNames(model) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            model.traverse(function (object) {
                if (object instanceof THREE.Bone) {
                    console.log("Bone name: ".concat(object.name));
                }
            });
            return [2 /*return*/];
        });
    });
}
// Main function to set up the scene, load the model, and rename bones
function main() {
    return __awaiter(this, void 0, void 0, function () {
        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        var renderer, camera, scene, model, boneNamesMap;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    renderer = new THREE.WebGLRenderer();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    document.body.appendChild(renderer.domElement);
                    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                    camera.position.set(0, 1, 2);
                    scene = new THREE.Scene();
                    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
                    return [4 /*yield*/, loadModel('assets/char.glb')];
                case 1:
                    model = _a.sent();
                    boneNamesMap = new Map([
                        //['oldBoneName1', 'newBoneName1'],
                        //['oldBoneName2', 'newBoneName2'],
                        // Add more bone names here
                        ["Hips", "pelvis"],
                        ["Spine", "spine_01"],
                        ["Spine1", "spine_02"],
                        ["Spine2", "spine_03"],
                        ["Neck", "neck_01"],
                        ["Head", "head"],
                        ["HeadTop_End", "end"],
                        ["LeftShoulder", "clavicle_l"],
                        ["RightShoulder", "clavicle_r"],
                        ["LeftArm", "upperarm_l"],
                        ["RightArm", "upperarm_r"],
                        ["LeftForeArm", "lowerarm_l"],
                        ["RightForeArm", "lowerarm_r"],
                        ["LeftHand", "hand_l"],
                        ["RightHand", "hand_r"],
                        ["LeftUpLeg", "thigh_l"],
                        ["RightUpLeg", "thigh_r"],
                        ["LeftLeg", "calf_l"],
                        ["RightLeg", "calf_r"],
                        ["LeftFoot", "foot_l"],
                        ["RightFoot", "foot_r"],
                        ["LeftToe_End", "ball_l"],
                        ["RightToe_End", "ball_r"],
                        ["LeftHandThumb1", "thumb_01_l"],
                        ["RightHandThumb1", "thumb_01_r"],
                        ["LeftHandThumb2", "thumb_02_l"],
                        ["RightHandThumb2", "thumb_02_r"],
                        ["LeftHandThumb3", "thumb_03_l"],
                        ["LeftHandThumb4", "thumb_04_l"],
                        ["RightHandThumb3", "thumb_03_r"],
                        ["RightHandThumb4", "thumb_04_r"],
                        ["LeftHandIndex1", "index_metacarpal_l"],
                        ["RightHandIndex1", "index_metacarpal_r"],
                        ["LeftHandIndex2", "index_01_l"],
                        ["RightHandIndex2", "index_01_r"],
                        ["LeftHandIndex3", "index_02_l"],
                        ["LeftHandIndex4", "index_03_l"],
                        ["RightHandIndex3", "index_02_r"],
                        ["RightHandIndex4", "index_03_r"],
                        ["LeftHandMiddle1", "middle_metacarpal_l"],
                        ["RightHandMiddle1", "middle_metacarpal_r"],
                        ["LeftHandMiddle2", "middle_01_l"],
                        ["RightHandMiddle2", "middle_01_r"],
                        ["LeftHandMiddle3", "middle_02_l"],
                        ["LeftHandMiddle4", "middle_03_l"],
                        ["RightHandMiddle3", "middle_02_r"],
                        ["RightHandMiddle4", "middle_03_r"],
                        ["LeftHandRing1", "ring_metacarpal_l"],
                        ["RightHandRing1", "ring_metacarpal_r"],
                        ["LeftHandRing2", "ring_01_l"],
                        ["RightHandRing2", "ring_01_r"],
                        ["LeftHandRing3", "ring_02_l"],
                        ["LeftHandRing4", "ring_03_l"],
                        ["RightHandRing3", "ring_02_r"],
                        ["RightHandRing4", "ring_03_r"],
                        ["LeftHandPinky1", "pinky_metacarpal_l"],
                        ["RightHandPinky1", "pinky_metacarpal_r"],
                        ["LeftHandPinky2", "pinky_01_l"],
                        ["RightHandPinky2", "pinky_02_r"],
                        ["LeftHandPinky3", "pinky_02_l"],
                        ["LeftHandPinky4", "pinky_03_l"],
                        ["RightHandPinky3", "pinky_02_r"],
                        ["RightHandPinky4", "pinky_03_r"],
                        ["LeftToeBase", "ankle_fwd_l"],
                        ["RightToeBase", "ankle_fwd_r"],
                    ]);
                    return [4 /*yield*/, renameBones(model, boneNamesMap)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, printBoneNames(model)];
                case 3:
                    _a.sent();
                    scene.add(model);
                    animate();
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(console.error);
