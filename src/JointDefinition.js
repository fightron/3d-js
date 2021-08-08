// @ts-check

'use strict'

export class JointDefinition {
  /**
   * @param {string} name
   * @param {string} parentName
   * @param {Vector3} [position]
   * @param {RotationLimits} [rotationLimits]
   * @param {string} [rotationOrder]
   * @param {Volume} [volume]
   */
  constructor (name, parentName, position = {}, rotationLimits = {}, rotationOrder = null, volume = null) {
    /** @type {string} */
    this.name = name

    /** @type {?string} */
    this.parentName = parentName

    /** @type {number} */
    this.positionX = position.x || 0.0

    /** @type {number} */
    this.positionY = position.y || 0.0

    /** @type {number} */
    this.positionZ = position.z || 0.0

    /** @type {number} */
    this.minRotationX = ifNull(rotationLimits.xMin, -Infinity)

    /** @type {number} */
    this.minRotationY = ifNull(rotationLimits.yMin, -Infinity)

    /** @type {number} */
    this.minRotationZ = ifNull(rotationLimits.zMin, -Infinity)

    /** @type {number} */
    this.maxRotationX = ifNull(rotationLimits.xMax, Infinity)

    /** @type {number} */
    this.maxRotationY = ifNull(rotationLimits.yMax, Infinity)

    /** @type {number} */
    this.maxRotationZ = ifNull(rotationLimits.zMax, Infinity)

    // Axis names are shown in editors.
    this.axisNameX = 'front/back'
    this.axisNameY = 'twist'
    this.axisNameZ = 'side'

    /**
     * Rotation order for Euler angles.
     * Default is YXZ: we want to "twist" first,
     * before moving "front/back" or "side".
     * @type {string}
     */
    this.rotationOrder = rotationOrder || 'YXZ'

    /**
     * Volume instance to visualize a
     * "body part box" from this joint.
     * If `null`, nothing will be rendered.
     * @type {?Volume}
     */
    this.volume = volume
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

/**
 * @typedef {{x?: number, y?: number, z?: number}} Vector3
 * @typedef {{xMin?: number, xMax?: number, yMin?: number, yMax?: number, zMin?: number, zMax?: number}} RotationLimits
 * @typedef { import("./Volume").Volume } Volume
 */
