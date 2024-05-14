export function setBoneStructure(model) {
    model.traverse((object) => {
        if (object.isBone) {
            // if (object.name == "Hips"){
            //     console.log('Renamig Hips to pelvis');
            //     object.name = "pelvis";
            // }
            switch (object.name){
                case "Hips": object.name = "pelvis"; break;
                case "Spine": object.name = "spine_01"; break;
                case "Spine1": object.name = "spine_02"; break;
                case "Spine2": object.name = "spine_03"; break;
                case "Neck": object.name = "neck_01"; break;
                case "Head": object.name = "head"; break;
                case "HeadTop_End": object.name = "end"; break;
                case "LeftShoulder": object.name = "clavicle_l"; break;
                case "RightShoulder": object.name = "clavicle_r"; break;
                case "LeftArm": object.name = "upperarm_l"; break;
                case "RightArm": object.name = "upperarm_r"; break;
                case "LeftForeArm": object.name = "lowerarm_l"; break;
                case "RightForeArm": object.name = "lowerarm_r"; break;
                case "LeftHand": object.name = "hand_l"; break;
                case "RightHand": object.name = "hand_r"; break;
                case "LeftUpLeg": object.name = "thigh_l"; break;
                case "RightUpLeg": object.name = "thigh_r"; break;
                case "LeftLeg": object.name = "calf_l"; break;
                case "RightLeg": object.name = "calf_r"; break;
                case "LeftFoot": object.name = "foot_l"; break;
                case "RightFoot": object.name = "foot_r"; break;
                case "LeftToe_End": object.name = "ball_l"; break;
                case "RightToe_End": object.name = "ball_r"; break;

                case "LeftHandThumb1": object.name = "thumb_01_l"; break;
                case "RightHandThumb1": object.name = "thumb_01_r"; break;
                case "LeftHandThumb2": object.name = "thumb_02_l"; break;
                case "RightHandThumb2": object.name = "thumb_02_r"; break;
                case "LeftHandThumb3": object.name = "thumb_03_l"; break;
                case "LeftHandThumb4": object.name = "thumb_04_l"; break;
                case "RightHandThumb3": object.name = "thumb_03_r"; break;
                case "RightHandThumb4": object.name = "thumb_04_r"; break;

                case "LeftHandIndex1": object.name = "index_metacarpal_l"; break;
                case "RightHandIndex1": object.name = "index_metacarpal_r"; break;
                case "LeftHandIndex2": object.name = "index_01_l"; break;
                case "RightHandIndex2": object.name = "index_01_r"; break;
                case "LeftHandIndex3": object.name = "index_02_l"; break;
                case "LeftHandIndex4": object.name = "index_03_l"; break;
                case "RightHandIndex3": object.name = "index_02_r"; break;
                case "RightHandIndex4": object.name = "index_03_r"; break;

                case "LeftHandMiddle1": object.name = "middle_metacarpal_l"; break;
                case "RightHandMiddle1": object.name = "middle_metacarpal_r"; break;
                case "LeftHandMiddle2": object.name = "middle_01_l"; break;
                case "RightHandMiddle2": object.name = "middle_01_r"; break;
                case "LeftHandMiddle3": object.name = "middle_02_l"; break;
                case "LeftHandMiddle4": object.name = "middle_03_l"; break;
                case "RightHandMiddle3": object.name = "middle_02_r"; break;
                case "RightHandMiddle4": object.name = "middle_03_r"; break;

                case "LeftHandRing1": object.name = "ring_metacarpal_l"; break;
                case "RightHandRing1": object.name = "ring_metacarpal_r"; break;
                case "LeftHandRing2": object.name = "ring_01_l"; break;
                case "RightHandRing2": object.name = "ring_01_r"; break;
                case "LeftHandRing3": object.name = "ring_02_l"; break;
                case "LeftHandRing4": object.name = "ring_03_l"; break;
                case "RightHandRing3": object.name = "ring_02_r"; break;
                case "RightHandRing4": object.name = "ring_03_r"; break;

                case "LeftHandPinky1": object.name = "pinky_metacarpal_l"; break;
                case "RightHandPinky1": object.name = "pinky_metacarpal_r"; break;
                case "LeftHandPinky2": object.name = "pinky_01_l"; break;
                case "RightHandPinky2": object.name = "pinky_02_r"; break;
                case "LeftHandPinky3": object.name = "pinky_02_l"; break;
                case "LeftHandPinky4": object.name = "pinky_03_l"; break;
                case "RightHandPinky3": object.name = "pinky_02_r"; break;
                case "RightHandPinky4": object.name = "pinky_03_r"; break;

                case "LeftToeBase": object.name = "ankle_fwd_l"; break;
                case "RightToeBase": object.name = "ankle_fwd_r"; break;

            }
        }
    });
}

