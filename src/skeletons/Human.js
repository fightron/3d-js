// @ts-check

'use strict'

import {
  NECK_HEIGHT,
  CHEST_HEIGHT,
  ABDOMEN_HEIGHT,
  HIP_HEIGHT,

  SHOULDER_OFFSET_X,
  SHOULDER_OFFSET_Y,
  ARM_UPPER_OFFSET_X,
  ARM_UPPER_OFFSET_Y,
  ARM_UPPER_HEIGHT,
  ARM_LOWER_HEIGHT,
  PALM_HEIGHT,

  LEG_UPPER_HEIGHT,
  LEG_LOWER_HEIGHT,
  LEG_OFFSET,
  FOOT_HEIGHT,
  FOOT_DEPTH,

  THUMB_BASE_HEIGHT,
  THUMB_MID_HEIGHT,
  THUMB_WIDTH,
  THUMB_OFFSET_X,

  INDEX_OFFSET_X,
  INDEX_BASE_HEIGHT,
  INDEX_MID_HEIGHT,

  MIDDLE_OFFSET_X,
  MIDDLE_BASE_HEIGHT,
  MIDDLE_MID_HEIGHT,

  RING_OFFSET_X,
  RING_BASE_HEIGHT,
  RING_MID_HEIGHT,

  PINKY_OFFSET_X,
  PINKY_BASE_HEIGHT,
  PINKY_MID_HEIGHT
} from '../constants/human-skeleton.js'

import { JointDefinition } from '../JointDefinition.js'
import { Skeleton } from '../Skeleton.js'

/** @type {Array<JointDefinition>} */
export const HUMAN_SKELETON_DEFINITIONS = [
  // The root joint is only used for positioning.
  new JointDefinition('_', null),

  // The center joint is used to rotate the entire body.
  new JointDefinition('Cn', '_', { y: HIP_HEIGHT + LEG_UPPER_HEIGHT + LEG_LOWER_HEIGHT + FOOT_HEIGHT }),

  // Upper and Lower bodies can be rotated independently.
  new JointDefinition('U', 'Cn'),
  new JointDefinition('L', 'Cn'),

  // Hips
  new JointDefinition('lH', 'L', { x: LEG_OFFSET, y: -HIP_HEIGHT }),
  new JointDefinition('rH', 'L', { x: -LEG_OFFSET, y: -HIP_HEIGHT }),

  // Knees
  new JointDefinition('lKn', 'lH', { y: -LEG_UPPER_HEIGHT }),
  new JointDefinition('rKn', 'rH', { y: -LEG_UPPER_HEIGHT }),

  // Ankles
  new JointDefinition('lAn', 'lKn', { y: -LEG_LOWER_HEIGHT }),
  new JointDefinition('rAn', 'rKn', { y: -LEG_LOWER_HEIGHT }),

  // Toes
  new JointDefinition('lT', 'lAn', { y: -FOOT_HEIGHT, z: FOOT_DEPTH }),
  new JointDefinition('rT', 'rAn', { y: -FOOT_HEIGHT, z: FOOT_DEPTH }),

  // Spine (Stomach)
  new JointDefinition('S', 'U', { y: ABDOMEN_HEIGHT }),

  // Neck (Base)
  new JointDefinition('N', 'S', { y: CHEST_HEIGHT }),

  // Head (Upper Neck)
  new JointDefinition('H', 'N', { y: NECK_HEIGHT }),

  // Collar joints
  new JointDefinition('lC', 'S', { x: SHOULDER_OFFSET_X, y: SHOULDER_OFFSET_Y }),
  new JointDefinition('rC', 'S', { x: -SHOULDER_OFFSET_X, y: SHOULDER_OFFSET_Y }),

  // Shouders
  new JointDefinition('lS', 'lC', { x: ARM_UPPER_OFFSET_X, y: -ARM_UPPER_OFFSET_Y }),
  new JointDefinition('rS', 'rC', { x: -ARM_UPPER_OFFSET_X, y: -ARM_UPPER_OFFSET_Y }),

  // Elbows
  new JointDefinition('lE', 'lS', { y: -ARM_UPPER_HEIGHT }),
  new JointDefinition('rE', 'rS', { y: -ARM_UPPER_HEIGHT }),

  // Wrists
  new JointDefinition('lW', 'lE', { y: -ARM_LOWER_HEIGHT }),
  new JointDefinition('rW', 'rE', { y: -ARM_LOWER_HEIGHT }),

  // Finger Joint Positions:
  // [B]ase, [M]iddle, [T]ip

  /* Thumbs */
  new JointDefinition('lTB', 'lW', { x: THUMB_OFFSET_X }),
  new JointDefinition('lTM', 'lTB', { x: THUMB_WIDTH / 2, y: -THUMB_BASE_HEIGHT }),
  new JointDefinition('lTT', 'lTM', { y: -THUMB_MID_HEIGHT }),
  new JointDefinition('rTB', 'rW', { x: -THUMB_OFFSET_X }),
  new JointDefinition('rTM', 'rTB', { x: -THUMB_WIDTH / 2, y: -THUMB_BASE_HEIGHT }),
  new JointDefinition('rTT', 'rTM', { y: -THUMB_MID_HEIGHT }),

  /* Index */
  new JointDefinition('lIB', 'lW', { x: INDEX_OFFSET_X, y: -PALM_HEIGHT }),
  new JointDefinition('lIM', 'lIB', { y: -INDEX_BASE_HEIGHT }),
  new JointDefinition('lIT', 'lIM', { y: -INDEX_MID_HEIGHT }),
  new JointDefinition('rIB', 'rW', { x: -INDEX_OFFSET_X, y: -PALM_HEIGHT }),
  new JointDefinition('rIM', 'rIB', { y: -INDEX_BASE_HEIGHT }),
  new JointDefinition('rIT', 'rIM', { y: -INDEX_MID_HEIGHT }),

  /* Middle */
  new JointDefinition('lMB', 'lW', { x: MIDDLE_OFFSET_X, y: -PALM_HEIGHT }),
  new JointDefinition('lMM', 'lMB', { y: -MIDDLE_BASE_HEIGHT }), // middle middle >.>
  new JointDefinition('lMT', 'lMM', { y: -MIDDLE_MID_HEIGHT }),
  new JointDefinition('rMB', 'rW', { x: -MIDDLE_OFFSET_X, y: -PALM_HEIGHT }),
  new JointDefinition('rMM', 'rMB', { y: -MIDDLE_BASE_HEIGHT }),
  new JointDefinition('rMT', 'rMM', { y: -MIDDLE_MID_HEIGHT }),

  /* Ring */
  new JointDefinition('lRB', 'lW', { x: RING_OFFSET_X, y: -PALM_HEIGHT }),
  new JointDefinition('lRM', 'lRB', { y: -RING_BASE_HEIGHT }),
  new JointDefinition('lRT', 'lRM', { y: -RING_MID_HEIGHT }),
  new JointDefinition('rRB', 'rW', { x: -RING_OFFSET_X, y: -PALM_HEIGHT }),
  new JointDefinition('rRM', 'rRB', { y: -RING_BASE_HEIGHT }),
  new JointDefinition('rRT', 'rRM', { y: -RING_MID_HEIGHT }),

  /* Pinky */
  new JointDefinition('lPB', 'lW', { x: PINKY_OFFSET_X, y: -PALM_HEIGHT }),
  new JointDefinition('lPM', 'lPB', { y: -PINKY_BASE_HEIGHT }),
  new JointDefinition('lPT', 'lPM', { y: -PINKY_MID_HEIGHT }),
  new JointDefinition('rPB', 'rW', { x: -PINKY_OFFSET_X, y: -PALM_HEIGHT }),
  new JointDefinition('rPM', 'rPB', { y: -PINKY_BASE_HEIGHT }),
  new JointDefinition('rPT', 'rPM', { y: -PINKY_MID_HEIGHT })
]

export class HumanSkeleton extends Skeleton {
  build () {
    return super.build(HUMAN_SKELETON_DEFINITIONS)
  }
}
