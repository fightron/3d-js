// @ts-check

'use strict'

/**
 * A JointVolume contains information to render a box from a joint.
 * They are primarily used as a helper to visualize skeleton models.
 * JointVolume instances are stored inside JointDefinitions.
 */
export class JointVolume {
  /**
   * @param {object} [opts]
   * @param {number} [opts.width]
   * @param {number} [opts.height]
   * @param {number} [opts.depth]
   * @param {number} [opts.translationX]
   * @param {number} [opts.translationY]
   * @param {number} [opts.translationZ]
   * @param {string} [opts.color]
   */
  constructor ({ width = 0.0, height = 0.0, depth = 0.0, translationX = 0.0, translationY = 0.0, translationZ = 0.0, color = 'white' } = {}) {
    /**
     * @type {number}
     */
    this.width = width

    /**
     * @type {number}
     */
    this.height = height

    /**
     * @type {number}
     */
    this.depth = depth

    /**
     * @type {number}
     */
    this.translationX = translationX

    /**
     * @type {number}
     */
    this.translationY = translationY

    /**
     * @type {number}
     */
    this.translationZ = translationZ

    /**
     * Color of the rendered volume.
     *
     * @type {string}
     */
    this.color = color
  }
}
