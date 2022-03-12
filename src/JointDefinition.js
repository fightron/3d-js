'use strict'

import { JointVolume } from './JointVolume.js'

export class JointDefinition {
  /**
   * @param {JointDefinitionOptions} opts
   */
  constructor ({
    name,
    parent = null,
    position = { x: 0.0, y: 0.0, z: 0.0 },
    limits = { xMin: -Infinity, xMax: Infinity, yMin: -Infinity, yMax: Infinity, zMin: -Infinity, zMax: Infinity },
    rotationOrder = 'YXZ',
    axisNameX = 'Front/Back',
    axisNameY = 'Twist',
    axisNameZ = 'Side',
    volume = null
  }) {
    /** @type {string} */
    this.name = name

    /** @type {?string} */
    this.parent = parent

    /** @type {number} */
    this.positionX = position?.x || 0.0

    /** @type {number} */
    this.positionY = position?.y || 0.0

    /** @type {number} */
    this.positionZ = position?.z || 0.0

    /** @type {number} */
    this.minRotationX = ifNull(limits?.xMin, -Infinity)

    /** @type {number} */
    this.minRotationY = ifNull(limits?.yMin, -Infinity)

    /** @type {number} */
    this.minRotationZ = ifNull(limits?.zMin, -Infinity)

    /** @type {number} */
    this.maxRotationX = ifNull(limits?.xMax, Infinity)

    /** @type {number} */
    this.maxRotationY = ifNull(limits?.yMax, Infinity)

    /** @type {number} */
    this.maxRotationZ = ifNull(limits?.zMax, Infinity)

    // Axis names are shown in editors.
    this.axisNameX = axisNameX
    this.axisNameY = axisNameY
    this.axisNameZ = axisNameZ

    /**
     * Rotation order for Euler angles.
     * Default is YXZ: we want to "twist" first,
     * before moving "front/back" or "side".
     *
     * @type {string}
     */
    this.rotationOrder = rotationOrder || 'YXZ'

    /**
     * JointVolume instance to visualize a
     * "body part box" from this joint.
     * If `null`, nothing will be rendered.
     *
     * @type {?JointVolume}
     */
    this.volume = null

    if (volume) {
      this.volume = new JointVolume(volume)
    }
  }
}

/**
 *
 * @param {any} value
 * @param {any} def
 * @returns
 */
function ifNull (value, def) {
  return value === undefined ? def : value
}
