// @ts-check

'use strict'

// https://github.com/mrdoob/three.js/blob/master/src/objects/Bone.js
import { Bone } from 'three/src/objects/Bone.js'

const FULL_ROTATION_RADIANS = Math.PI * 2

/**
 * A Joint is a 3D point in space with a name that belongs to a
 * skeleton instance and have degrees of freedom.
 */
export class Joint extends Bone {
  /**
   * @param {string} name - Joint name.
   * @param {Skeleton} skeleton - Skeleton instance this joint belongs to.
   */
  constructor (name, skeleton) {
    super()
    this.name = name

    /**
     * @type {Skeleton}
     */
    this.skeleton = skeleton

    /**
     * Axis definitions, including DoF.
     */
    this.axes = {
      x: { min: -FULL_ROTATION_RADIANS, max: FULL_ROTATION_RADIANS, label: 'front/back' },
      y: { min: -FULL_ROTATION_RADIANS, max: FULL_ROTATION_RADIANS, label: 'twist' },
      z: { min: -FULL_ROTATION_RADIANS, max: FULL_ROTATION_RADIANS, label: 'side' }
    }
  }
}

/**
 * @typedef { import("./Skeleton").Skeleton } Skeleton
 */
