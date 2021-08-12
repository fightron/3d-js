// @ts-check

'use strict'

import {
  HEAD_WIDTH, HEAD_HEIGHT, HEAD_DEPTH,

  NECK_HEIGHT,

  CHEST_HEIGHT,

  ABDOMEN_HEIGHT,

  WAIST_HEIGHT,

  SHOULDER_OFFSET_X, SHOULDER_OFFSET_Y,

  ARM_UPPER_OFFSET_X, ARM_UPPER_OFFSET_Y,
  ARM_UPPER_HEIGHT, ARM_LOWER_HEIGHT,

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
  PINKY_MID_HEIGHT,
  NECK_WIDTH,
  NECK_DEPTH,
  CHEST_WIDTH,
  CHEST_DEPTH,
  ABDOMEN_WIDTH,
  ABDOMEN_DEPTH,
  WAIST_WIDTH,
  WAIST_DEPTH,
  LEG_UPPER_WIDTH,
  LEG_UPPER_DEPTH,
  LEG_LOWER_WIDTH,
  LEG_LOWER_DEPTH,
  FOOT_WIDTH,
  TOES_WIDTH,
  TOES_HEIGHT,
  TOES_DEPTH

} from '../constants/human-skeleton.js'

import { JointDefinition } from '../JointDefinition.js'
import { Skeleton } from '../Skeleton.js'
import { Volume } from '../Volume.js'

const headVolume = new Volume({ width: HEAD_WIDTH, height: HEAD_HEIGHT, depth: HEAD_DEPTH, translationY: HEAD_HEIGHT / 2, color: 'white' })
const neckVolume = new Volume({ width: NECK_WIDTH, height: NECK_HEIGHT, depth: NECK_DEPTH, translationY: NECK_HEIGHT / 2, color: 'white' })
const chestVolume = new Volume({ width: CHEST_WIDTH, height: CHEST_HEIGHT, depth: CHEST_DEPTH, translationY: CHEST_HEIGHT / 2, color: 'white' })
const absVolume = new Volume({ width: ABDOMEN_WIDTH, height: ABDOMEN_HEIGHT, depth: ABDOMEN_DEPTH, translationY: ABDOMEN_HEIGHT / 2, color: 'white' })
const waistVolume = new Volume({ width: WAIST_WIDTH, height: WAIST_HEIGHT, depth: WAIST_DEPTH, translationY: -WAIST_HEIGHT / 2, color: 'white' })
const upperLegVolume = new Volume({ width: LEG_UPPER_WIDTH, height: LEG_UPPER_HEIGHT, depth: LEG_UPPER_DEPTH, translationY: -LEG_UPPER_HEIGHT / 2, color: 'white' })
const lowerLegVolume = new Volume({ width: LEG_LOWER_WIDTH, height: LEG_LOWER_HEIGHT, depth: LEG_LOWER_DEPTH, translationY: -LEG_LOWER_HEIGHT / 2, color: 'white' })
const footVolume = new Volume({ width: FOOT_WIDTH, height: FOOT_HEIGHT, depth: FOOT_DEPTH, translationY: -FOOT_HEIGHT / 2, color: 'white' })
const toesVolume = new Volume({ width: TOES_WIDTH, height: TOES_HEIGHT, depth: TOES_DEPTH, translationY: TOES_HEIGHT / 2, translationZ: TOES_DEPTH / 2, color: 'white' })

/** @type {Array<JointDefinition>} */
export const HUMAN_SKELETON_DEFINITIONS = [
  // The root joint is only used for positioning.
  new JointDefinition({ name: '_', parent: null }),

  // The center joint is used to rotate the entire body.
  new JointDefinition({ name: 'Cn', parent: '_', position: { y: WAIST_HEIGHT + LEG_UPPER_HEIGHT + LEG_LOWER_HEIGHT + FOOT_HEIGHT } }),

  // Upper and Lower bodies can be rotated independently.
  new JointDefinition({ name: 'U', parent: 'Cn', volume: absVolume }),
  new JointDefinition({ name: 'L', parent: 'Cn', volume: waistVolume }),

  // Hips
  new JointDefinition({ name: 'lH', parent: 'L', position: { x: LEG_OFFSET, y: -WAIST_HEIGHT } }),
  new JointDefinition({ name: 'rH', parent: 'L', position: { x: -LEG_OFFSET, y: -WAIST_HEIGHT } }),

  // Knees
  new JointDefinition({ name: 'lKn', parent: 'lH', position: { y: -LEG_UPPER_HEIGHT } }),
  new JointDefinition({ name: 'rKn', parent: 'rH', position: { y: -LEG_UPPER_HEIGHT } }),

  // Ankles
  new JointDefinition({ name: 'lAn', parent: 'lKn', position: { y: -LEG_LOWER_HEIGHT } }),
  new JointDefinition({ name: 'rAn', parent: 'rKn', position: { y: -LEG_LOWER_HEIGHT } }),

  // Toes
  new JointDefinition({ name: 'lT', parent: 'lAn', position: { y: -FOOT_HEIGHT, z: FOOT_DEPTH } }),
  new JointDefinition({ name: 'rT', parent: 'rAn', position: { y: -FOOT_HEIGHT, z: FOOT_DEPTH } }),

  // Spine (Stomach)
  new JointDefinition({ name: 'S', parent: 'U', position: { y: ABDOMEN_HEIGHT } }),

  // Neck (Base)
  new JointDefinition({ name: 'N', parent: 'S', position: { y: CHEST_HEIGHT }, volume: neckVolume }),

  // Head (Upper Neck)
  new JointDefinition({ name: 'H', parent: 'N', position: { y: NECK_HEIGHT }, volume: headVolume }),

  // Collar joints
  new JointDefinition({ name: 'lC', parent: 'S', position: { x: SHOULDER_OFFSET_X, y: SHOULDER_OFFSET_Y } }),
  new JointDefinition({ name: 'rC', parent: 'S', position: { x: -SHOULDER_OFFSET_X, y: SHOULDER_OFFSET_Y } }),

  // Shouders
  new JointDefinition({ name: 'lS', parent: 'lC', position: { x: ARM_UPPER_OFFSET_X, y: -ARM_UPPER_OFFSET_Y } }),
  new JointDefinition({ name: 'rS', parent: 'rC', position: { x: -ARM_UPPER_OFFSET_X, y: -ARM_UPPER_OFFSET_Y } }),

  // Elbows
  new JointDefinition({ name: 'lE', parent: 'lS', position: { y: -ARM_UPPER_HEIGHT } }),
  new JointDefinition({ name: 'rE', parent: 'rS', position: { y: -ARM_UPPER_HEIGHT } }),

  // Wrists
  new JointDefinition({ name: 'lW', parent: 'lE', position: { y: -ARM_LOWER_HEIGHT } }),
  new JointDefinition({ name: 'rW', parent: 'rE', position: { y: -ARM_LOWER_HEIGHT } }),

  // Finger Joint Positions:
  // [B]ase, [M]iddle, [T]ip

  /* Thumbs */
  new JointDefinition({ name: 'lTB', parent: 'lW', position: { x: THUMB_OFFSET_X } }),
  new JointDefinition({ name: 'lTM', parent: 'lTB', position: { x: THUMB_WIDTH / 2, y: -THUMB_BASE_HEIGHT } }),
  new JointDefinition({ name: 'lTT', parent: 'lTM', position: { y: -THUMB_MID_HEIGHT } }),
  new JointDefinition({ name: 'rTB', parent: 'rW', position: { x: -THUMB_OFFSET_X } }),
  new JointDefinition({ name: 'rTM', parent: 'rTB', position: { x: -THUMB_WIDTH / 2, y: -THUMB_BASE_HEIGHT } }),
  new JointDefinition({ name: 'rTT', parent: 'rTM', position: { y: -THUMB_MID_HEIGHT } }),

  /* Index */
  new JointDefinition({ name: 'lIB', parent: 'lW', position: { x: INDEX_OFFSET_X, y: -PALM_HEIGHT } }),
  new JointDefinition({ name: 'lIM', parent: 'lIB', position: { y: -INDEX_BASE_HEIGHT } }),
  new JointDefinition({ name: 'lIT', parent: 'lIM', position: { y: -INDEX_MID_HEIGHT } }),
  new JointDefinition({ name: 'rIB', parent: 'rW', position: { x: -INDEX_OFFSET_X, y: -PALM_HEIGHT } }),
  new JointDefinition({ name: 'rIM', parent: 'rIB', position: { y: -INDEX_BASE_HEIGHT } }),
  new JointDefinition({ name: 'rIT', parent: 'rIM', position: { y: -INDEX_MID_HEIGHT } }),

  /* Middle */
  new JointDefinition({ name: 'lMB', parent: 'lW', position: { x: MIDDLE_OFFSET_X, y: -PALM_HEIGHT } }),
  new JointDefinition({ name: 'lMM', parent: 'lMB', position: { y: -MIDDLE_BASE_HEIGHT } }), // middle middle >.>
  new JointDefinition({ name: 'lMT', parent: 'lMM', position: { y: -MIDDLE_MID_HEIGHT } }),
  new JointDefinition({ name: 'rMB', parent: 'rW', position: { x: -MIDDLE_OFFSET_X, y: -PALM_HEIGHT } }),
  new JointDefinition({ name: 'rMM', parent: 'rMB', position: { y: -MIDDLE_BASE_HEIGHT } }),
  new JointDefinition({ name: 'rMT', parent: 'rMM', position: { y: -MIDDLE_MID_HEIGHT } }),

  /* Ring */
  new JointDefinition({ name: 'lRB', parent: 'lW', position: { x: RING_OFFSET_X, y: -PALM_HEIGHT } }),
  new JointDefinition({ name: 'lRM', parent: 'lRB', position: { y: -RING_BASE_HEIGHT } }),
  new JointDefinition({ name: 'lRT', parent: 'lRM', position: { y: -RING_MID_HEIGHT } }),
  new JointDefinition({ name: 'rRB', parent: 'rW', position: { x: -RING_OFFSET_X, y: -PALM_HEIGHT } }),
  new JointDefinition({ name: 'rRM', parent: 'rRB', position: { y: -RING_BASE_HEIGHT } }),
  new JointDefinition({ name: 'rRT', parent: 'rRM', position: { y: -RING_MID_HEIGHT } }),

  /* Pinky */
  new JointDefinition({ name: 'lPB', parent: 'lW', position: { x: PINKY_OFFSET_X, y: -PALM_HEIGHT } }),
  new JointDefinition({ name: 'lPM', parent: 'lPB', position: { y: -PINKY_BASE_HEIGHT } }),
  new JointDefinition({ name: 'lPT', parent: 'lPM', position: { y: -PINKY_MID_HEIGHT } }),
  new JointDefinition({ name: 'rPB', parent: 'rW', position: { x: -PINKY_OFFSET_X, y: -PALM_HEIGHT } }),
  new JointDefinition({ name: 'rPM', parent: 'rPB', position: { y: -PINKY_BASE_HEIGHT } }),
  new JointDefinition({ name: 'rPT', parent: 'rPM', position: { y: -PINKY_MID_HEIGHT } })
]

export class HumanSkeleton extends Skeleton {
  build () {
    return super.build(HUMAN_SKELETON_DEFINITIONS)
  }
}
