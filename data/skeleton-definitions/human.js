'use strict'

// DIMENSIONS

// Directions reference, from character POV:
// - left +x, right -x
// - front +z, back -z

const EIGHT_HEADS = 1.80 // m
const ONE_HEAD = EIGHT_HEADS / 8

// Main blocks

const HEAD_HEIGHT = ONE_HEAD * 1.08
const HEAD_WIDTH = ONE_HEAD * 0.8
const HEAD_DEPTH = ONE_HEAD * 0.8

const NECK_HEIGHT = ONE_HEAD / 2
const NECK_WIDTH = 0.12
const NECK_DEPTH = 0.10

const CHEST_HEIGHT = ONE_HEAD / 1
const CHEST_WIDTH = ONE_HEAD * 1.6
const CHEST_DEPTH = ONE_HEAD * 0.6

const ABDOMEN_HEIGHT = ONE_HEAD / 2
const ABDOMEN_WIDTH = ONE_HEAD * 0.8
const ABDOMEN_DEPTH = CHEST_DEPTH * 0.8

const WAIST_HEIGHT = ONE_HEAD / 2
const WAIST_WIDTH = ONE_HEAD * 1.4
const WAIST_DEPTH = ONE_HEAD * 0.5

// Arms

const SHOULDER_DEPTH = CHEST_DEPTH * 0.8
const SHOULDER_HEIGHT = CHEST_HEIGHT / 2
const SHOULDER_WIDTH = SHOULDER_DEPTH
const SHOULDER_OFFSET_X = CHEST_WIDTH / 2
const SHOULDER_OFFSET_Y = CHEST_HEIGHT - (SHOULDER_HEIGHT / 2)

const ARM_UPPER_HEIGHT = ONE_HEAD * 0.8
const ARM_UPPER_WIDTH = SHOULDER_WIDTH * 0.9
const ARM_UPPER_DEPTH = SHOULDER_DEPTH * 0.9
const ARM_UPPER_OFFSET_X = SHOULDER_WIDTH / 2
const ARM_UPPER_OFFSET_Y = SHOULDER_HEIGHT / 2

const ARM_LOWER_HEIGHT = ARM_UPPER_HEIGHT + (SHOULDER_HEIGHT * 0.5)
const ARM_LOWER_WIDTH = ARM_UPPER_WIDTH
const ARM_LOWER_DEPTH = ARM_UPPER_DEPTH

// Legs

const LEG_UPPER_HEIGHT = ONE_HEAD * 2 // till bottom of knee
const LEG_UPPER_WIDTH = ONE_HEAD / 1.8
const LEG_UPPER_DEPTH = WAIST_DEPTH

const LEG_LOWER_HEIGHT = LEG_UPPER_HEIGHT
const LEG_LOWER_WIDTH = LEG_UPPER_WIDTH
const LEG_LOWER_DEPTH = LEG_UPPER_DEPTH

const LEG_OFFSET = ONE_HEAD / 2.5

const FOOT_HEIGHT = ONE_HEAD / 2
const FOOT_WIDTH = ONE_HEAD / 1.5
const FOOT_DEPTH = ONE_HEAD / 1.5

const TOES_HEIGHT = FOOT_HEIGHT / 2.5
const TOES_WIDTH = FOOT_WIDTH * 0.8
const TOES_DEPTH = FOOT_DEPTH / 1.2

// Hands

const HAND_SCALE = 1

const PALM_HEIGHT = (ONE_HEAD / 1.8) * HAND_SCALE
const PALM_WIDTH = ARM_LOWER_WIDTH * 1.2 * HAND_SCALE
const PALM_DEPTH = ARM_LOWER_DEPTH * 0.3 * HAND_SCALE

const FINGER_BASE_HEIGHT = PALM_HEIGHT * 0.35
const FINGER_MID_HEIGHT = PALM_HEIGHT * 0.35
const FINGER_TIP_HEIGHT = PALM_HEIGHT * 0.3
const FINGER_WIDTH = PALM_WIDTH / 4
const FINGER_DEPTH = PALM_DEPTH

const THUMB_HEIGHT_SCALE = 1.2
const THUMB_DEPTH = FINGER_DEPTH
const THUMB_WIDTH = FINGER_WIDTH * 1.2
const THUMB_OFFSET_X = PALM_WIDTH / 2
const THUMB_BASE_HEIGHT = FINGER_BASE_HEIGHT * THUMB_HEIGHT_SCALE
const THUMB_MID_HEIGHT = FINGER_MID_HEIGHT * THUMB_HEIGHT_SCALE
const THUMB_TIP_HEIGHT = FINGER_TIP_HEIGHT * THUMB_HEIGHT_SCALE

const INDEX_HEIGHT_SCALE = 0.93
const INDEX_WIDTH = FINGER_WIDTH
const INDEX_DEPTH = FINGER_DEPTH
const INDEX_OFFSET_X = (PALM_WIDTH / 2) - (INDEX_WIDTH / 2)
const INDEX_BASE_HEIGHT = FINGER_BASE_HEIGHT * INDEX_HEIGHT_SCALE
const INDEX_MID_HEIGHT = FINGER_MID_HEIGHT * INDEX_HEIGHT_SCALE
const INDEX_TIP_HEIGHT = FINGER_TIP_HEIGHT * INDEX_HEIGHT_SCALE

const MIDDLE_HEIGHT_SCALE = 1
const MIDDLE_WIDTH = FINGER_WIDTH
const MIDDLE_DEPTH = FINGER_DEPTH
const MIDDLE_OFFSET_X = (PALM_WIDTH / 2) - INDEX_WIDTH - (MIDDLE_WIDTH / 2)
const MIDDLE_BASE_HEIGHT = FINGER_BASE_HEIGHT * MIDDLE_HEIGHT_SCALE
const MIDDLE_MID_HEIGHT = FINGER_MID_HEIGHT * MIDDLE_HEIGHT_SCALE
const MIDDLE_TIP_HEIGHT = FINGER_TIP_HEIGHT * MIDDLE_HEIGHT_SCALE

const RING_HEIGHT_SCALE = 0.90
const RING_WIDTH = FINGER_WIDTH
const RING_DEPTH = FINGER_DEPTH
const RING_OFFSET_X = -RING_WIDTH / 2
const RING_BASE_HEIGHT = FINGER_BASE_HEIGHT * RING_HEIGHT_SCALE
const RING_MID_HEIGHT = FINGER_MID_HEIGHT * RING_HEIGHT_SCALE
const RING_TIP_HEIGHT = FINGER_TIP_HEIGHT * RING_HEIGHT_SCALE

const PINKY_HEIGHT_SCALE = 0.7
const PINKY_WIDTH = FINGER_WIDTH
const PINKY_DEPTH = FINGER_DEPTH
const PINKY_OFFSET_X = -RING_WIDTH - (PINKY_WIDTH / 2)
const PINKY_BASE_HEIGHT = FINGER_BASE_HEIGHT * PINKY_HEIGHT_SCALE
const PINKY_MID_HEIGHT = FINGER_MID_HEIGHT * PINKY_HEIGHT_SCALE
const PINKY_TIP_HEIGHT = FINGER_TIP_HEIGHT * PINKY_HEIGHT_SCALE

// JOINT VOLUMES

const rootVolume = { width: 0.01, height: 0.01, depth: 0.5, translationY: 0.0049, color: 'red' }
const headVolume = { width: HEAD_WIDTH, height: HEAD_HEIGHT, depth: HEAD_DEPTH, translationY: HEAD_HEIGHT / 2, color: 'magenta' }
const neckVolume = { width: NECK_WIDTH, height: NECK_HEIGHT, depth: NECK_DEPTH, translationY: NECK_HEIGHT / 2, color: 'cyan' }
const chestVolume = { width: CHEST_WIDTH, height: CHEST_HEIGHT, depth: CHEST_DEPTH, translationY: CHEST_HEIGHT / 2, color: 'magenta' }
const absVolume = { width: ABDOMEN_WIDTH, height: ABDOMEN_HEIGHT, depth: ABDOMEN_DEPTH, translationY: ABDOMEN_HEIGHT / 2, color: 'cyan' }
const waistVolume = { width: WAIST_WIDTH, height: WAIST_HEIGHT, depth: WAIST_DEPTH, translationY: -WAIST_HEIGHT / 2, color: 'lime' }
const upperLegVolume = { width: LEG_UPPER_WIDTH, height: LEG_UPPER_HEIGHT, depth: LEG_UPPER_DEPTH, translationY: -LEG_UPPER_HEIGHT / 2, color: 'red' }
const lowerLegVolume = { width: LEG_LOWER_WIDTH, height: LEG_LOWER_HEIGHT, depth: LEG_LOWER_DEPTH, translationY: -LEG_LOWER_HEIGHT / 2, color: 'cyan' }
const footVolume = { width: FOOT_WIDTH, height: FOOT_HEIGHT, depth: FOOT_DEPTH, translationY: -FOOT_HEIGHT / 2, color: 'yellow' }
const toesVolume = { width: TOES_WIDTH, height: TOES_HEIGHT, depth: TOES_DEPTH, translationY: TOES_HEIGHT / 2, translationZ: TOES_DEPTH / 2, color: 'yellow' }
const upperArmVolume = { width: ARM_UPPER_WIDTH, height: ARM_UPPER_HEIGHT, depth: ARM_UPPER_DEPTH, translationY: -ARM_UPPER_HEIGHT / 2, color: 'red' }
const lowerArmVolume = { width: ARM_LOWER_WIDTH, height: ARM_LOWER_HEIGHT, depth: ARM_LOWER_DEPTH, translationY: -ARM_LOWER_HEIGHT / 2, color: 'cyan' }
const palmVolume = { width: PALM_WIDTH, height: PALM_HEIGHT, depth: PALM_DEPTH, translationY: -PALM_HEIGHT / 2, color: 'yellow' }
const thumbBaseVolume = { width: THUMB_WIDTH, height: THUMB_BASE_HEIGHT, depth: THUMB_DEPTH, translationY: -THUMB_BASE_HEIGHT / 2, color: 'yellow' }
const thumbMidVolume = { width: THUMB_WIDTH, height: THUMB_MID_HEIGHT, depth: THUMB_DEPTH, translationY: -THUMB_MID_HEIGHT / 2, color: 'yellow' }
const thumbTipVolume = { width: THUMB_WIDTH, height: THUMB_TIP_HEIGHT, depth: THUMB_DEPTH, translationY: -THUMB_TIP_HEIGHT / 2, color: 'yellow' }
const indexBaseVolume = { width: INDEX_WIDTH, height: INDEX_BASE_HEIGHT, depth: INDEX_DEPTH, translationY: -INDEX_BASE_HEIGHT / 2, color: 'yellow' }
const indexMidVolume = { width: INDEX_WIDTH, height: INDEX_MID_HEIGHT, depth: INDEX_DEPTH, translationY: -INDEX_MID_HEIGHT / 2, color: 'yellow' }
const indexTipVolume = { width: INDEX_WIDTH, height: INDEX_TIP_HEIGHT, depth: INDEX_DEPTH, translationY: -INDEX_TIP_HEIGHT / 2, color: 'yellow' }
const middleBaseVolume = { width: MIDDLE_WIDTH, height: MIDDLE_BASE_HEIGHT, depth: MIDDLE_DEPTH, translationY: -MIDDLE_BASE_HEIGHT / 2, color: 'yellow' }
const middleMidVolume = { width: MIDDLE_WIDTH, height: MIDDLE_MID_HEIGHT, depth: MIDDLE_DEPTH, translationY: -MIDDLE_MID_HEIGHT / 2, color: 'yellow' }
const middleTipVolume = { width: MIDDLE_WIDTH, height: MIDDLE_TIP_HEIGHT, depth: MIDDLE_DEPTH, translationY: -MIDDLE_TIP_HEIGHT / 2, color: 'yellow' }
const ringBaseVolume = { width: RING_WIDTH, height: RING_BASE_HEIGHT, depth: RING_DEPTH, translationY: -RING_BASE_HEIGHT / 2, color: 'yellow' }
const ringMidVolume = { width: RING_WIDTH, height: RING_MID_HEIGHT, depth: RING_DEPTH, translationY: -RING_MID_HEIGHT / 2, color: 'yellow' }
const ringTipVolume = { width: RING_WIDTH, height: RING_TIP_HEIGHT, depth: RING_DEPTH, translationY: -RING_TIP_HEIGHT / 2, color: 'yellow' }
const pinkyBaseVolume = { width: PINKY_WIDTH, height: PINKY_BASE_HEIGHT, depth: PINKY_DEPTH, translationY: -PINKY_BASE_HEIGHT / 2, color: 'yellow' }
const pinkyMidVolume = { width: PINKY_WIDTH, height: PINKY_MID_HEIGHT, depth: PINKY_DEPTH, translationY: -PINKY_MID_HEIGHT / 2, color: 'yellow' }
const pinkyTipVolume = { width: PINKY_WIDTH, height: PINKY_TIP_HEIGHT, depth: PINKY_DEPTH, translationY: -PINKY_TIP_HEIGHT / 2, color: 'yellow' }

/** @type {Array<JointDefinitionOptions>} */
export const HUMAN_SKELETON_JOINTS = [
  // The root joint is only used for positioning and rotation outside poses.
  { id: '_', parent: null, volume: rootVolume },

  // The center joint is used to rotate the entire body in a pose.
  { id: 'Cn', parent: '_', position: { y: WAIST_HEIGHT + LEG_UPPER_HEIGHT + LEG_LOWER_HEIGHT + FOOT_HEIGHT } },

  // Upper and Lower bodies can be rotated independently.
  { id: 'U', parent: 'Cn', volume: absVolume },
  { id: 'L', parent: 'Cn', volume: waistVolume },

  // Hips
  { id: 'lH', parent: 'L', position: { x: LEG_OFFSET, y: -WAIST_HEIGHT }, volume: upperLegVolume },
  { id: 'rH', parent: 'L', position: { x: -LEG_OFFSET, y: -WAIST_HEIGHT }, volume: upperLegVolume },

  // Knees
  { id: 'lKn', parent: 'lH', position: { y: -LEG_UPPER_HEIGHT }, volume: lowerLegVolume },
  { id: 'rKn', parent: 'rH', position: { y: -LEG_UPPER_HEIGHT }, volume: lowerLegVolume },

  // Ankles
  { id: 'lAn', parent: 'lKn', position: { y: -LEG_LOWER_HEIGHT }, volume: footVolume },
  { id: 'rAn', parent: 'rKn', position: { y: -LEG_LOWER_HEIGHT }, volume: footVolume },

  // Toes
  { id: 'lT', parent: 'lAn', position: { y: -FOOT_HEIGHT, z: FOOT_DEPTH }, volume: toesVolume },
  { id: 'rT', parent: 'rAn', position: { y: -FOOT_HEIGHT, z: FOOT_DEPTH }, volume: toesVolume },

  // Spine (Stomach)
  { id: 'S', parent: 'U', position: { y: ABDOMEN_HEIGHT }, volume: chestVolume },

  // Neck (Base)
  { id: 'N', parent: 'S', position: { y: CHEST_HEIGHT }, volume: neckVolume },

  // Head (Upper Neck)
  { id: 'H', parent: 'N', position: { y: NECK_HEIGHT }, volume: headVolume },

  // Clavicles
  { id: 'lC', parent: 'S', position: { x: SHOULDER_OFFSET_X, y: SHOULDER_OFFSET_Y }, axisNameX: 'Twist', axisNameY: 'Front/Back', axisNameZ: 'Up/Down' },
  { id: 'rC', parent: 'S', position: { x: -SHOULDER_OFFSET_X, y: SHOULDER_OFFSET_Y }, axisNameX: 'Twist', axisNameY: 'Front/Back', axisNameZ: 'Up/Down' },

  // Shouders
  { id: 'lS', parent: 'lC', position: { x: ARM_UPPER_OFFSET_X, y: -ARM_UPPER_OFFSET_Y }, volume: upperArmVolume },
  { id: 'rS', parent: 'rC', position: { x: -ARM_UPPER_OFFSET_X, y: -ARM_UPPER_OFFSET_Y }, volume: upperArmVolume },

  // Elbows
  { id: 'lE', parent: 'lS', position: { y: -ARM_UPPER_HEIGHT }, volume: lowerArmVolume },
  { id: 'rE', parent: 'rS', position: { y: -ARM_UPPER_HEIGHT }, volume: lowerArmVolume },

  // Wrists
  { id: 'lW', parent: 'lE', position: { y: -ARM_LOWER_HEIGHT }, volume: palmVolume },
  { id: 'rW', parent: 'rE', position: { y: -ARM_LOWER_HEIGHT }, volume: palmVolume },

  // Finger Joint Positions:
  // [B]ase, [M]iddle, [T]ip

  /* Thumbs */
  { id: 'lTB', parent: 'lW', position: { x: THUMB_OFFSET_X }, volume: thumbBaseVolume },
  { id: 'lTM', parent: 'lTB', position: { x: THUMB_WIDTH / 2, y: -THUMB_BASE_HEIGHT }, volume: thumbMidVolume },
  { id: 'lTT', parent: 'lTM', position: { y: -THUMB_MID_HEIGHT }, volume: thumbTipVolume },
  { id: 'rTB', parent: 'rW', position: { x: -THUMB_OFFSET_X }, volume: thumbBaseVolume },
  { id: 'rTM', parent: 'rTB', position: { x: -THUMB_WIDTH / 2, y: -THUMB_BASE_HEIGHT }, volume: thumbMidVolume },
  { id: 'rTT', parent: 'rTM', position: { y: -THUMB_MID_HEIGHT }, volume: thumbTipVolume },

  /* Index */
  { id: 'lIB', parent: 'lW', position: { x: INDEX_OFFSET_X, y: -PALM_HEIGHT }, volume: indexBaseVolume },
  { id: 'lIM', parent: 'lIB', position: { y: -INDEX_BASE_HEIGHT }, volume: indexMidVolume },
  { id: 'lIT', parent: 'lIM', position: { y: -INDEX_MID_HEIGHT }, volume: indexTipVolume },
  { id: 'rIB', parent: 'rW', position: { x: -INDEX_OFFSET_X, y: -PALM_HEIGHT }, volume: indexBaseVolume },
  { id: 'rIM', parent: 'rIB', position: { y: -INDEX_BASE_HEIGHT }, volume: indexMidVolume },
  { id: 'rIT', parent: 'rIM', position: { y: -INDEX_MID_HEIGHT }, volume: indexTipVolume },

  /* Middle */
  { id: 'lMB', parent: 'lW', position: { x: MIDDLE_OFFSET_X, y: -PALM_HEIGHT }, volume: middleBaseVolume },
  { id: 'lMM', parent: 'lMB', position: { y: -MIDDLE_BASE_HEIGHT }, volume: middleMidVolume },
  { id: 'lMT', parent: 'lMM', position: { y: -MIDDLE_MID_HEIGHT }, volume: middleTipVolume },
  { id: 'rMB', parent: 'rW', position: { x: -MIDDLE_OFFSET_X, y: -PALM_HEIGHT }, volume: middleBaseVolume },
  { id: 'rMM', parent: 'rMB', position: { y: -MIDDLE_BASE_HEIGHT }, volume: middleMidVolume },
  { id: 'rMT', parent: 'rMM', position: { y: -MIDDLE_MID_HEIGHT }, volume: middleTipVolume },

  /* Ring */
  { id: 'lRB', parent: 'lW', position: { x: RING_OFFSET_X, y: -PALM_HEIGHT }, volume: ringBaseVolume },
  { id: 'lRM', parent: 'lRB', position: { y: -RING_BASE_HEIGHT }, volume: ringMidVolume },
  { id: 'lRT', parent: 'lRM', position: { y: -RING_MID_HEIGHT }, volume: ringTipVolume },
  { id: 'rRB', parent: 'rW', position: { x: -RING_OFFSET_X, y: -PALM_HEIGHT }, volume: ringBaseVolume },
  { id: 'rRM', parent: 'rRB', position: { y: -RING_BASE_HEIGHT }, volume: ringMidVolume },
  { id: 'rRT', parent: 'rRM', position: { y: -RING_MID_HEIGHT }, volume: ringTipVolume },

  /* Pinky */
  { id: 'lPB', parent: 'lW', position: { x: PINKY_OFFSET_X, y: -PALM_HEIGHT }, volume: pinkyBaseVolume },
  { id: 'lPM', parent: 'lPB', position: { y: -PINKY_BASE_HEIGHT }, volume: pinkyMidVolume },
  { id: 'lPT', parent: 'lPM', position: { y: -PINKY_MID_HEIGHT }, volume: pinkyTipVolume },
  { id: 'rPB', parent: 'rW', position: { x: -PINKY_OFFSET_X, y: -PALM_HEIGHT }, volume: pinkyBaseVolume },
  { id: 'rPM', parent: 'rPB', position: { y: -PINKY_BASE_HEIGHT }, volume: pinkyMidVolume },
  { id: 'rPT', parent: 'rPM', position: { y: -PINKY_MID_HEIGHT }, volume: pinkyTipVolume }
]
