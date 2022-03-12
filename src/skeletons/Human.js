// @ts-check

'use strict'

import {
  HEAD_WIDTH, HEAD_HEIGHT, HEAD_DEPTH,
  NECK_HEIGHT, NECK_WIDTH, NECK_DEPTH,
  CHEST_HEIGHT, CHEST_WIDTH, CHEST_DEPTH,
  ABDOMEN_HEIGHT, ABDOMEN_WIDTH, ABDOMEN_DEPTH,
  WAIST_HEIGHT, WAIST_WIDTH, WAIST_DEPTH,
  SHOULDER_OFFSET_X, SHOULDER_OFFSET_Y,
  ARM_UPPER_OFFSET_X, ARM_UPPER_OFFSET_Y, ARM_UPPER_WIDTH, ARM_UPPER_DEPTH,
  ARM_UPPER_HEIGHT, ARM_LOWER_HEIGHT, ARM_LOWER_WIDTH, ARM_LOWER_DEPTH,
  PALM_HEIGHT, PALM_WIDTH, PALM_DEPTH,
  LEG_UPPER_WIDTH, LEG_UPPER_DEPTH, LEG_UPPER_HEIGHT,
  LEG_LOWER_WIDTH, LEG_LOWER_DEPTH, LEG_LOWER_HEIGHT,
  LEG_OFFSET,
  FOOT_HEIGHT, FOOT_DEPTH, FOOT_WIDTH,
  TOES_WIDTH, TOES_HEIGHT, TOES_DEPTH,
  THUMB_BASE_HEIGHT, THUMB_MID_HEIGHT, THUMB_WIDTH, THUMB_OFFSET_X, THUMB_DEPTH, THUMB_TIP_HEIGHT,
  INDEX_OFFSET_X, INDEX_BASE_HEIGHT, INDEX_MID_HEIGHT, INDEX_WIDTH, INDEX_DEPTH, INDEX_TIP_HEIGHT,
  MIDDLE_OFFSET_X, MIDDLE_BASE_HEIGHT, MIDDLE_MID_HEIGHT, MIDDLE_WIDTH, MIDDLE_TIP_HEIGHT, MIDDLE_DEPTH,
  RING_OFFSET_X, RING_BASE_HEIGHT, RING_MID_HEIGHT, RING_WIDTH, RING_TIP_HEIGHT, RING_DEPTH,
  PINKY_OFFSET_X, PINKY_BASE_HEIGHT, PINKY_MID_HEIGHT, PINKY_WIDTH, PINKY_TIP_HEIGHT, PINKY_DEPTH
} from '../constants/human-skeleton.js'

import { JointDefinition } from '../JointDefinition.js'
import { Skeleton } from '../Skeleton.js'
import { SkeletonDefinition } from '../SkeletonDefinition.js'
import { JointVolume } from '../JointVolume.js'

const rootVolume = new JointVolume({ width: 0.01, height: 0.01, depth: 0.5, translationY: 0.0049, color: 'red' })
const headVolume = new JointVolume({ width: HEAD_WIDTH, height: HEAD_HEIGHT, depth: HEAD_DEPTH, translationY: HEAD_HEIGHT / 2, color: 'magenta' })
const neckVolume = new JointVolume({ width: NECK_WIDTH, height: NECK_HEIGHT, depth: NECK_DEPTH, translationY: NECK_HEIGHT / 2, color: 'cyan' })
const chestVolume = new JointVolume({ width: CHEST_WIDTH, height: CHEST_HEIGHT, depth: CHEST_DEPTH, translationY: CHEST_HEIGHT / 2, color: 'magenta' })
const absVolume = new JointVolume({ width: ABDOMEN_WIDTH, height: ABDOMEN_HEIGHT, depth: ABDOMEN_DEPTH, translationY: ABDOMEN_HEIGHT / 2, color: 'cyan' })
const waistVolume = new JointVolume({ width: WAIST_WIDTH, height: WAIST_HEIGHT, depth: WAIST_DEPTH, translationY: -WAIST_HEIGHT / 2, color: 'lime' })
const upperLegVolume = new JointVolume({ width: LEG_UPPER_WIDTH, height: LEG_UPPER_HEIGHT, depth: LEG_UPPER_DEPTH, translationY: -LEG_UPPER_HEIGHT / 2, color: 'red' })
const lowerLegVolume = new JointVolume({ width: LEG_LOWER_WIDTH, height: LEG_LOWER_HEIGHT, depth: LEG_LOWER_DEPTH, translationY: -LEG_LOWER_HEIGHT / 2, color: 'cyan' })
const footVolume = new JointVolume({ width: FOOT_WIDTH, height: FOOT_HEIGHT, depth: FOOT_DEPTH, translationY: -FOOT_HEIGHT / 2, color: 'yellow' })
const toesVolume = new JointVolume({ width: TOES_WIDTH, height: TOES_HEIGHT, depth: TOES_DEPTH, translationY: TOES_HEIGHT / 2, translationZ: TOES_DEPTH / 2, color: 'yellow' })
const upperArmVolume = new JointVolume({ width: ARM_UPPER_WIDTH, height: ARM_UPPER_HEIGHT, depth: ARM_UPPER_DEPTH, translationY: -ARM_UPPER_HEIGHT / 2, color: 'red' })
const lowerArmVolume = new JointVolume({ width: ARM_LOWER_WIDTH, height: ARM_LOWER_HEIGHT, depth: ARM_LOWER_DEPTH, translationY: -ARM_LOWER_HEIGHT / 2, color: 'cyan' })
const palmVolume = new JointVolume({ width: PALM_WIDTH, height: PALM_HEIGHT, depth: PALM_DEPTH, translationY: -PALM_HEIGHT / 2, color: 'yellow' })
const thumbBaseVolume = new JointVolume({ width: THUMB_WIDTH, height: THUMB_BASE_HEIGHT, depth: THUMB_DEPTH, translationY: -THUMB_BASE_HEIGHT / 2, color: 'yellow' })
const thumbMidVolume = new JointVolume({ width: THUMB_WIDTH, height: THUMB_MID_HEIGHT, depth: THUMB_DEPTH, translationY: -THUMB_MID_HEIGHT / 2, color: 'yellow' })
const thumbTipVolume = new JointVolume({ width: THUMB_WIDTH, height: THUMB_TIP_HEIGHT, depth: THUMB_DEPTH, translationY: -THUMB_TIP_HEIGHT / 2, color: 'yellow' })
const indexBaseVolume = new JointVolume({ width: INDEX_WIDTH, height: INDEX_BASE_HEIGHT, depth: INDEX_DEPTH, translationY: -INDEX_BASE_HEIGHT / 2, color: 'yellow' })
const indexMidVolume = new JointVolume({ width: INDEX_WIDTH, height: INDEX_MID_HEIGHT, depth: INDEX_DEPTH, translationY: -INDEX_MID_HEIGHT / 2, color: 'yellow' })
const indexTipVolume = new JointVolume({ width: INDEX_WIDTH, height: INDEX_TIP_HEIGHT, depth: INDEX_DEPTH, translationY: -INDEX_TIP_HEIGHT / 2, color: 'yellow' })
const middleBaseVolume = new JointVolume({ width: MIDDLE_WIDTH, height: MIDDLE_BASE_HEIGHT, depth: MIDDLE_DEPTH, translationY: -MIDDLE_BASE_HEIGHT / 2, color: 'yellow' })
const middleMidVolume = new JointVolume({ width: MIDDLE_WIDTH, height: MIDDLE_MID_HEIGHT, depth: MIDDLE_DEPTH, translationY: -MIDDLE_MID_HEIGHT / 2, color: 'yellow' })
const middleTipVolume = new JointVolume({ width: MIDDLE_WIDTH, height: MIDDLE_TIP_HEIGHT, depth: MIDDLE_DEPTH, translationY: -MIDDLE_TIP_HEIGHT / 2, color: 'yellow' })
const ringBaseVolume = new JointVolume({ width: RING_WIDTH, height: RING_BASE_HEIGHT, depth: RING_DEPTH, translationY: -RING_BASE_HEIGHT / 2, color: 'yellow' })
const ringMidVolume = new JointVolume({ width: RING_WIDTH, height: RING_MID_HEIGHT, depth: RING_DEPTH, translationY: -RING_MID_HEIGHT / 2, color: 'yellow' })
const ringTipVolume = new JointVolume({ width: RING_WIDTH, height: RING_TIP_HEIGHT, depth: RING_DEPTH, translationY: -RING_TIP_HEIGHT / 2, color: 'yellow' })
const pinkyBaseVolume = new JointVolume({ width: PINKY_WIDTH, height: PINKY_BASE_HEIGHT, depth: PINKY_DEPTH, translationY: -PINKY_BASE_HEIGHT / 2, color: 'yellow' })
const pinkyMidVolume = new JointVolume({ width: PINKY_WIDTH, height: PINKY_MID_HEIGHT, depth: PINKY_DEPTH, translationY: -PINKY_MID_HEIGHT / 2, color: 'yellow' })
const pinkyTipVolume = new JointVolume({ width: PINKY_WIDTH, height: PINKY_TIP_HEIGHT, depth: PINKY_DEPTH, translationY: -PINKY_TIP_HEIGHT / 2, color: 'yellow' })

/** @type {Array<JointDefinition>} */
export const HUMAN_SKELETON_DEFINITIONS = [
  // The root joint is only used for positioning and rotation outside poses.
  new JointDefinition({ name: '_', parent: null, volume: rootVolume }),

  // The center joint is used to rotate the entire body in a pose.
  new JointDefinition({ name: 'Cn', parent: '_', position: { y: WAIST_HEIGHT + LEG_UPPER_HEIGHT + LEG_LOWER_HEIGHT + FOOT_HEIGHT } }),

  // Upper and Lower bodies can be rotated independently.
  new JointDefinition({ name: 'U', parent: 'Cn', volume: absVolume }),
  new JointDefinition({ name: 'L', parent: 'Cn', volume: waistVolume }),

  // Hips
  new JointDefinition({ name: 'lH', parent: 'L', position: { x: LEG_OFFSET, y: -WAIST_HEIGHT }, volume: upperLegVolume }),
  new JointDefinition({ name: 'rH', parent: 'L', position: { x: -LEG_OFFSET, y: -WAIST_HEIGHT }, volume: upperLegVolume }),

  // Knees
  new JointDefinition({ name: 'lKn', parent: 'lH', position: { y: -LEG_UPPER_HEIGHT }, volume: lowerLegVolume }),
  new JointDefinition({ name: 'rKn', parent: 'rH', position: { y: -LEG_UPPER_HEIGHT }, volume: lowerLegVolume }),

  // Ankles
  new JointDefinition({ name: 'lAn', parent: 'lKn', position: { y: -LEG_LOWER_HEIGHT }, volume: footVolume }),
  new JointDefinition({ name: 'rAn', parent: 'rKn', position: { y: -LEG_LOWER_HEIGHT }, volume: footVolume }),

  // Toes
  new JointDefinition({ name: 'lT', parent: 'lAn', position: { y: -FOOT_HEIGHT, z: FOOT_DEPTH }, volume: toesVolume }),
  new JointDefinition({ name: 'rT', parent: 'rAn', position: { y: -FOOT_HEIGHT, z: FOOT_DEPTH }, volume: toesVolume }),

  // Spine (Stomach)
  new JointDefinition({ name: 'S', parent: 'U', position: { y: ABDOMEN_HEIGHT }, volume: chestVolume }),

  // Neck (Base)
  new JointDefinition({ name: 'N', parent: 'S', position: { y: CHEST_HEIGHT }, volume: neckVolume }),

  // Head (Upper Neck)
  new JointDefinition({ name: 'H', parent: 'N', position: { y: NECK_HEIGHT }, volume: headVolume }),

  // Clavicles
  new JointDefinition({ name: 'lC', parent: 'S', position: { x: SHOULDER_OFFSET_X, y: SHOULDER_OFFSET_Y }, axisNameX: 'Twist', axisNameY: 'Front/Back', axisNameZ: 'Up/Down' }),
  new JointDefinition({ name: 'rC', parent: 'S', position: { x: -SHOULDER_OFFSET_X, y: SHOULDER_OFFSET_Y }, axisNameX: 'Twist', axisNameY: 'Front/Back', axisNameZ: 'Up/Down' }),

  // Shouders
  new JointDefinition({ name: 'lS', parent: 'lC', position: { x: ARM_UPPER_OFFSET_X, y: -ARM_UPPER_OFFSET_Y }, volume: upperArmVolume }),
  new JointDefinition({ name: 'rS', parent: 'rC', position: { x: -ARM_UPPER_OFFSET_X, y: -ARM_UPPER_OFFSET_Y }, volume: upperArmVolume }),

  // Elbows
  new JointDefinition({ name: 'lE', parent: 'lS', position: { y: -ARM_UPPER_HEIGHT }, volume: lowerArmVolume }),
  new JointDefinition({ name: 'rE', parent: 'rS', position: { y: -ARM_UPPER_HEIGHT }, volume: lowerArmVolume }),

  // Wrists
  new JointDefinition({ name: 'lW', parent: 'lE', position: { y: -ARM_LOWER_HEIGHT }, volume: palmVolume }),
  new JointDefinition({ name: 'rW', parent: 'rE', position: { y: -ARM_LOWER_HEIGHT }, volume: palmVolume }),

  // Finger Joint Positions:
  // [B]ase, [M]iddle, [T]ip

  /* Thumbs */
  new JointDefinition({ name: 'lTB', parent: 'lW', position: { x: THUMB_OFFSET_X }, volume: thumbBaseVolume }),
  new JointDefinition({ name: 'lTM', parent: 'lTB', position: { x: THUMB_WIDTH / 2, y: -THUMB_BASE_HEIGHT }, volume: thumbMidVolume }),
  new JointDefinition({ name: 'lTT', parent: 'lTM', position: { y: -THUMB_MID_HEIGHT }, volume: thumbTipVolume }),
  new JointDefinition({ name: 'rTB', parent: 'rW', position: { x: -THUMB_OFFSET_X }, volume: thumbBaseVolume }),
  new JointDefinition({ name: 'rTM', parent: 'rTB', position: { x: -THUMB_WIDTH / 2, y: -THUMB_BASE_HEIGHT }, volume: thumbMidVolume }),
  new JointDefinition({ name: 'rTT', parent: 'rTM', position: { y: -THUMB_MID_HEIGHT }, volume: thumbTipVolume }),

  /* Index */
  new JointDefinition({ name: 'lIB', parent: 'lW', position: { x: INDEX_OFFSET_X, y: -PALM_HEIGHT }, volume: indexBaseVolume }),
  new JointDefinition({ name: 'lIM', parent: 'lIB', position: { y: -INDEX_BASE_HEIGHT }, volume: indexMidVolume }),
  new JointDefinition({ name: 'lIT', parent: 'lIM', position: { y: -INDEX_MID_HEIGHT }, volume: indexTipVolume }),
  new JointDefinition({ name: 'rIB', parent: 'rW', position: { x: -INDEX_OFFSET_X, y: -PALM_HEIGHT }, volume: indexBaseVolume }),
  new JointDefinition({ name: 'rIM', parent: 'rIB', position: { y: -INDEX_BASE_HEIGHT }, volume: indexMidVolume }),
  new JointDefinition({ name: 'rIT', parent: 'rIM', position: { y: -INDEX_MID_HEIGHT }, volume: indexTipVolume }),

  /* Middle */
  new JointDefinition({ name: 'lMB', parent: 'lW', position: { x: MIDDLE_OFFSET_X, y: -PALM_HEIGHT }, volume: middleBaseVolume }),
  new JointDefinition({ name: 'lMM', parent: 'lMB', position: { y: -MIDDLE_BASE_HEIGHT }, volume: middleMidVolume }),
  new JointDefinition({ name: 'lMT', parent: 'lMM', position: { y: -MIDDLE_MID_HEIGHT }, volume: middleTipVolume }),
  new JointDefinition({ name: 'rMB', parent: 'rW', position: { x: -MIDDLE_OFFSET_X, y: -PALM_HEIGHT }, volume: middleBaseVolume }),
  new JointDefinition({ name: 'rMM', parent: 'rMB', position: { y: -MIDDLE_BASE_HEIGHT }, volume: middleMidVolume }),
  new JointDefinition({ name: 'rMT', parent: 'rMM', position: { y: -MIDDLE_MID_HEIGHT }, volume: middleTipVolume }),

  /* Ring */
  new JointDefinition({ name: 'lRB', parent: 'lW', position: { x: RING_OFFSET_X, y: -PALM_HEIGHT }, volume: ringBaseVolume }),
  new JointDefinition({ name: 'lRM', parent: 'lRB', position: { y: -RING_BASE_HEIGHT }, volume: ringMidVolume }),
  new JointDefinition({ name: 'lRT', parent: 'lRM', position: { y: -RING_MID_HEIGHT }, volume: ringTipVolume }),
  new JointDefinition({ name: 'rRB', parent: 'rW', position: { x: -RING_OFFSET_X, y: -PALM_HEIGHT }, volume: ringBaseVolume }),
  new JointDefinition({ name: 'rRM', parent: 'rRB', position: { y: -RING_BASE_HEIGHT }, volume: ringMidVolume }),
  new JointDefinition({ name: 'rRT', parent: 'rRM', position: { y: -RING_MID_HEIGHT }, volume: ringTipVolume }),

  /* Pinky */
  new JointDefinition({ name: 'lPB', parent: 'lW', position: { x: PINKY_OFFSET_X, y: -PALM_HEIGHT }, volume: pinkyBaseVolume }),
  new JointDefinition({ name: 'lPM', parent: 'lPB', position: { y: -PINKY_BASE_HEIGHT }, volume: pinkyMidVolume }),
  new JointDefinition({ name: 'lPT', parent: 'lPM', position: { y: -PINKY_MID_HEIGHT }, volume: pinkyTipVolume }),
  new JointDefinition({ name: 'rPB', parent: 'rW', position: { x: -PINKY_OFFSET_X, y: -PALM_HEIGHT }, volume: pinkyBaseVolume }),
  new JointDefinition({ name: 'rPM', parent: 'rPB', position: { y: -PINKY_BASE_HEIGHT }, volume: pinkyMidVolume }),
  new JointDefinition({ name: 'rPT', parent: 'rPM', position: { y: -PINKY_MID_HEIGHT }, volume: pinkyTipVolume })
]

const humanSkeletonDefinition = new SkeletonDefinition({
  name: 'human',
  joints: HUMAN_SKELETON_DEFINITIONS
})

export class HumanSkeleton extends Skeleton {
  constructor () {
    super(humanSkeletonDefinition)
  }
}
