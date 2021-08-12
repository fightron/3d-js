// @ts-check

'use strict'

export class JointDefinition {
  /**
   * @param {object} opts
   * @param {string} opts.name - Name of this joint.
   * @param {?string} [opts.parent] - Name of the parent joint.
   * @param {object} [opts.position]
   * @param {number} [opts.position.x]
   * @param {number} [opts.position.y]
   * @param {number} [opts.position.z]
   * @param {object} [opts.limits]
   * @param {number} [opts.limits.xMin]
   * @param {number} [opts.limits.xMax]
   * @param {number} [opts.limits.yMin]
   * @param {number} [opts.limits.yMax]
   * @param {number} [opts.limits.zMin]
   * @param {number} [opts.limits.zMax]
   * @param {string} [opts.rotationOrder]
   * @param {string} [opts.axisNameX]
   * @param {string} [opts.axisNameY]
   * @param {string} [opts.axisNameZ]
   * @param {?Volume} [opts.volume]
   */
  constructor ({
    name,
    parent = null,
    position = { x: 0.0, y: 0.0, z: 0.0 },
    limits = { xMin: -Infinity, xMax: Infinity, yMin: -Infinity, yMax: Infinity, zMin: -Infinity, zMax: Infinity },
    rotationOrder = 'YXZ',
    axisNameX = 'front/back',
    axisNameY = 'twist',
    axisNameZ = 'side',
    volume = null
  }) {
    /** @type {string} */
    this.name = name

    /** @type {?string} */
    this.parentName = parent

    /** @type {number} */
    this.positionX = position.x || 0.0

    /** @type {number} */
    this.positionY = position.y || 0.0

    /** @type {number} */
    this.positionZ = position.z || 0.0

    /** @type {number} */
    this.minRotationX = ifNull(limits.xMin, -Infinity)

    /** @type {number} */
    this.minRotationY = ifNull(limits.yMin, -Infinity)

    /** @type {number} */
    this.minRotationZ = ifNull(limits.zMin, -Infinity)

    /** @type {number} */
    this.maxRotationX = ifNull(limits.xMax, Infinity)

    /** @type {number} */
    this.maxRotationY = ifNull(limits.yMax, Infinity)

    /** @type {number} */
    this.maxRotationZ = ifNull(limits.zMax, Infinity)

    // Axis names are shown in editors.
    this.axisNameX = axisNameX
    this.axisNameY = axisNameY
    this.axisNameZ = axisNameZ

    /**
     * Rotation order for Euler angles.
     * Default is YXZ: we want to "twist" first,
     * before moving "front/back" or "side".
     * @type {string}
     */
    this.rotationOrder = rotationOrder

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
 * @typedef {{xMin?: number, xMax?: number, yMin?: number, yMax?: number, zMin?: number, zMax?: number}} limits
 * @typedef { import("./Volume").Volume } Volume
 */
