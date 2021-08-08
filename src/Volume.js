// @ts-check

'use strict'

/**
 * A Volume contains information to render a box from a joint.
 * They are primarily used as a helper to visualize skeleton models.
 * Volume instances are stored inside JointDefinitions.
 */
export class Volume {
  /**
   * @param {Dimensions} [dimensions]
   * @param {Vector3} [translation]
   * @param {string} [color]
   */
  constructor (dimensions = {}, translation = {}, color = 'white') {
    /**
     * @type {number}
     */
    this.width = dimensions.width || 0.0

    /**
     * @type {number}
     */
    this.height = dimensions.height || 0.0

    /**
     * @type {number}
     */
    this.depth = dimensions.depth || 0.0

    /**
     * @type {number}
     */
    this.translationX = translation.x || 0.0

    /**
     * @type {number}
     */
    this.translationY = translation.y || 0.0

    /**
     * @type {number}
     */
    this.translationZ = translation.z || 0.0

    /**
     * Color of the rendered volume.
     * @type {string}
     */
    this.color = color
  }
}

/**
 * @typedef {{width?: number, height?: number, depth?: number}} Dimensions
 * @typedef {{x?: number, y?: number, z?: number}} Vector3
 */
