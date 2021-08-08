// @ts-check

'use strict'

export class JointDefinition {
  /**
   * @param {string} name
   * @param {string} parentName
   * @param {Vector} position
   * @param {RotationLimits} rotationLimits
   * @param {string} rotationOrder
   */
  constructor (name, parentName, position = {}, rotationLimits = {}, rotationOrder = null) {
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

    /** @type {string} */
    this.rotationOrder = rotationOrder || 'YXZ'
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
 * @typedef {{x?: number, y?: number, z?: number}} Vector
 * @typedef {{xMin?: number, xMax?: number, yMin?: number, yMax?: number, zMin?: number, zMax?: number}} RotationLimits
 */
